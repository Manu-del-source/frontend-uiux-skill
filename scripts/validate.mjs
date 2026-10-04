#!/usr/bin/env node
/**
 * validate.mjs — structural validator for the frontend-uiux skill.
 * Zero dependencies. Run: npm run validate  (or: node scripts/validate.mjs)
 *
 * Checks:
 *  1. SKILL.md exists
 *  2. frontmatter is valid (name + description, name matches folder expectation)
 *  3. every referenced file path exists
 *  4. internal markdown links resolve
 *  5. no orphaned files (every file under a loadable dir is referenced)
 *  6. no duplicate filenames across loadable dirs
 *  7. no empty / stub documents
 *  8. required sections exist in SKILL.md
 *  9. every workflow is routed from SKILL.md
 * 10. directory structure is valid (required dirs/files present)
 *
 * Exit 0 = pass, 1 = failures.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = process.argv[2]
  ? resolve(process.cwd(), process.argv[2])
  : resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOADABLE_DIRS = ['references', 'workflows', 'rules', 'patterns', 'checklists'];
const REQUIRED_DIRS = [...LOADABLE_DIRS, 'scripts', 'tests'];
const REQUIRED_FILES = ['SKILL.md', 'README.md', 'LICENSE', 'ATTRIBUTION.md', 'package.json'];
const REQUIRED_SECTIONS = [
  '## 1. When to activate',
  '## 2. Inspect the project first',
  '## 3. Determine the task type',
  '## 4. Run Design Intelligence before implementation',
  '## 5. Read only the relevant references',
  '## 6. Choose the appropriate workflow',
  '## 7. Design before coding',
  '## 8. Reuse before creating',
  '## 9. Implement using project conventions',
  '## 10. Design ALL meaningful states',
  '## 11. Visual verification is mandatory when possible',
  '## 12. Responsive verification',
  '## 13. Accessibility',
  '## 14. Quality gates',
  '## 15. Final response',
  '## Important engineering rules',
  '## Final quality gate',
];
const MIN_LINES = 10;
const EXPECTED_SKILL_NAME = 'frontend-uiux';

const errors = [];
const err = (m) => errors.push(m);

/** All .md files in the repo (excluding .git), relative paths. */
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(relative(ROOT, p));
  }
  return out;
}
const allFiles = walk(ROOT);
const mdFiles = allFiles.filter((f) => f.endsWith('.md'));

// 1. SKILL.md exists
const skillPath = join(ROOT, 'SKILL.md');
if (!existsSync(skillPath)) {
  err('1. SKILL.md is missing');
}

// 2. frontmatter valid
let skill = '';
if (existsSync(skillPath)) {
  skill = readFileSync(skillPath, 'utf8');
  const m = skill.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) {
    err('2. SKILL.md frontmatter missing or not at top of file');
  } else {
    const fm = m[1];
    const name = fm.match(/^name:\s*(\S+)\s*$/m);
    const desc = fm.match(/^description:\s*>-?\s*$/m);
    if (!name) err('2. frontmatter: no name field');
    else if (name[1] !== EXPECTED_SKILL_NAME)
      err(`2. frontmatter: name "${name[1]}" != expected "${EXPECTED_SKILL_NAME}"`);
    if (!desc) err('2. frontmatter: no folded description field');
    else {
      // description body must be indented lines until end of fm
      const descIdx = fm.indexOf(desc[0]);
      const body = fm.slice(descIdx + desc[0].length);
      const lines = body.split('\n').filter((l) => l.trim() !== '');
      if (!lines.length || !lines.every((l) => /^\s+/.test(l)))
        err('2. frontmatter: description body malformed');
    }
  }
}

/** Extract backticked repo-path references from markdown text. */
function extractRefs(text) {
  const refs = new Set();
  const re = /`((?:references|workflows|rules|patterns|checklists|scripts|tests)\/[A-Za-z0-9._-]+\.md|SKILL\.md|README\.md|ATTRIBUTION\.md)`/g;
  let mm;
  while ((mm = re.exec(text))) refs.add(mm[1]);
  return refs;
}

/** Extract markdown links: [text](target) */
function extractLinks(text) {
  const out = [];
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g;
  let mm;
  while ((mm = re.exec(text))) out.push(mm[1]);
  return out;
}

// 3 + 4. referenced files exist / internal links resolve
const referencedTargets = new Set();
for (const f of mdFiles) {
  const text = readFileSync(join(ROOT, f), 'utf8');
  const baseDir = dirname(f);
  for (const ref of extractRefs(text)) {
    referencedTargets.add(ref);
    if (!existsSync(join(ROOT, ref))) err(`3. ${f}: broken reference -> ${ref}`);
  }
  for (const link of extractLinks(text)) {
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    const target = link.split('#')[0];
    if (!target) continue;
    const resolved = target.startsWith('/')
      ? join(ROOT, target)
      : existsSync(join(ROOT, target)) ? join(ROOT, target) : join(ROOT, baseDir, target);
    if (!existsSync(resolved)) err(`4. ${f}: broken internal link -> ${link}`);
    else referencedTargets.add(relative(ROOT, resolved).replaceAll('\\', '/'));
  }
}

// 5. no orphaned loadable files
for (const dir of LOADABLE_DIRS) {
  const dirPath = join(ROOT, dir);
  if (!existsSync(dirPath)) continue;
  for (const name of readdirSync(dirPath)) {
    if (!name.endsWith('.md')) continue;
    const rel = `${dir}/${name}`;
    if (!referencedTargets.has(rel))
      err(`5. orphaned file (never referenced): ${rel}`);
  }
}

// 6. no duplicate filenames across loadable dirs
const seen = new Map();
for (const dir of LOADABLE_DIRS) {
  const dirPath = join(ROOT, dir);
  if (!existsSync(dirPath)) continue;
  for (const name of readdirSync(dirPath)) {
    if (!name.endsWith('.md')) continue;
    if (seen.has(name)) err(`6. duplicate filename: ${name} in ${dir} and ${seen.get(name)}`);
    else seen.set(name, dir);
  }
}

// 7. no empty/stub documents
for (const f of mdFiles) {
  const p = join(ROOT, f);
  const text = readFileSync(p, 'utf8');
  const lines = text.split('\n').filter((l) => l.trim() !== '').length;
  if (text.trim() === '') err(`7. empty document: ${f}`);
  else if (f !== 'SKILL.md' && lines < MIN_LINES)
    err(`7. stub document (${lines} non-empty lines < ${MIN_LINES}): ${f}`);
}

// 8. required sections in SKILL.md
for (const s of REQUIRED_SECTIONS) {
  if (skill && !skill.includes(s)) err(`8. SKILL.md missing required section: "${s}"`);
}

// 9. every workflow routed from SKILL.md
const wfDir = join(ROOT, 'workflows');
if (existsSync(wfDir) && skill) {
  for (const name of readdirSync(wfDir)) {
    if (!name.endsWith('.md')) continue;
    if (!skill.includes(`workflows/${name}`))
      err(`9. workflow not routed from SKILL.md: workflows/${name}`);
  }
}

// 10. directory structure
for (const d of REQUIRED_DIRS) {
  if (!existsSync(join(ROOT, d))) err(`10. missing required directory: ${d}/`);
}
for (const f of REQUIRED_FILES) {
  if (!existsSync(join(ROOT, f))) err(`10. missing required file: ${f}`);
}
// unexpected top-level .md outside the plan (guards structure drift)
for (const name of readdirSync(ROOT)) {
  if (name === '.git' || name === '.gitignore') continue;
  const p = join(ROOT, name);
  if (statSync(p).isDirectory()) {
    if (!REQUIRED_DIRS.includes(name) && !['.freebuff', '.claude'].includes(name))
      err(`10. unexpected directory: ${name}/`);
  } else if (name.endsWith('.md') && !['SKILL.md', 'README.md', 'ATTRIBUTION.md'].includes(name)) {
    err(`10. unexpected top-level markdown: ${name}`);
  }
}

// Report
const fileCount = allFiles.filter((f) => f.endsWith('.md')).length;
if (errors.length) {
  console.error(`FAIL — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error('');
  process.exit(1);
} else {
  console.log(
    `PASS — SKILL.md frontmatter valid; ${fileCount} markdown files; ` +
      `all references/links resolve; no orphans; no duplicate filenames; ` +
      `no stubs; all required sections present; all workflows routed; structure valid.`
  );
  process.exit(0);
}
