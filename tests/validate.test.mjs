import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, cpSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VALIDATE = join(ROOT, 'scripts', 'validate.mjs');

function runValidate(cwd) {
  const r = spawnSync(process.execPath, [VALIDATE, cwd], { cwd, encoding: 'utf8' });
  return { status: r.status, out: `${r.stdout}${r.stderr}` };
}

/** Copy the repo into a temp dir so mutations don't touch the real tree. */
function cloneRepo() {
  const dir = mkdtempSync(join(tmpdir(), 'skill-validate-'));
  cpSync(ROOT, dir, {
    recursive: true,
    filter: (src) => !src.includes('/.git/') && !src.includes('/node_modules/'),
  });
  return dir;
}

test('real repository passes validation', () => {
  const { status, out } = runValidate(ROOT);
  assert.equal(status, 0, `expected PASS, got:\n${out}`);
  assert.match(out, /PASS/);
});

test('missing SKILL.md fails', () => {
  const dir = cloneRepo();
  try {
    rmSync(join(dir, 'SKILL.md'));
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /SKILL\.md is missing/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('broken internal reference fails', () => {
  const dir = cloneRepo();
  try {
    const f = join(dir, 'references', 'typography.md');
    writeFileSync(f, readFileSync(f, 'utf8') + '\n\nSee `references/does-not-exist.md` for more.\n');
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /broken reference -> references\/does-not-exist\.md/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('orphaned reference file fails', () => {
  const dir = cloneRepo();
  try {
    writeFileSync(
      join(dir, 'references', 'orphan.md'),
      '# Orphan\n\n' + 'Filler line to pass the stub check.\n'.repeat(6)
    );
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /orphaned file \(never referenced\): references\/orphan\.md/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('invalid frontmatter fails', () => {
  const dir = cloneRepo();
  try {
    writeFileSync(join(dir, 'SKILL.md'), '# no frontmatter\n\nbody\n');
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /frontmatter missing|no name field/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('duplicate filename across loadable dirs fails', () => {
  const dir = cloneRepo();
  try {
    cpSync(
      join(dir, 'references', 'typography.md'),
      join(dir, 'rules', 'typography.md')
    );
    // rules/typography.md is also an orphan now; either error proves detection
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /duplicate filename: typography\.md/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('unrouted workflow fails', () => {
  const dir = cloneRepo();
  try {
    writeFileSync(
      join(dir, 'workflows', 'zz-extra.md'),
      '# Workflow: Extra\n\n' + 'Step with a reference to `references/typography.md`.\n'.repeat(5)
    );
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /workflow not routed from SKILL\.md: workflows\/zz-extra\.md/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('missing required directory fails', () => {
  const dir = cloneRepo();
  try {
    rmSync(join(dir, 'patterns'), { recursive: true, force: true });
    const { status, out } = runValidate(dir);
    assert.notEqual(status, 0);
    assert.match(out, /missing required directory: patterns/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
