#!/usr/bin/env node

/**
 * URL Migration Script
 *
 * Updates all tool and navigation URLs across static HTML files
 * using shared/tool-urls.json as the single source of truth.
 *
 * How it works:
 *   - Finds <a data-tool="slug"> tags and updates their href to match the config
 *   - Finds <a data-base="key"> tags and updates their href to match the config
 *   - Reports every change so you can verify before committing
 *
 * Usage:
 *   node scripts/update-urls.js           # preview changes (dry run)
 *   node scripts/update-urls.js --write   # apply changes to files
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(ROOT, 'shared', 'tool-urls.json');
const WRITE_MODE = process.argv.includes('--write');

// Load config
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
const { base, tools } = config;

// Collect all HTML files (root + one level deep)
function getHtmlFiles(dir) {
  const files = [];

  // Root-level HTML
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path.join(dir, entry.name));
    }
  }

  // Category directories (one level deep)
  const categoryDirs = [
    'seo', 'social-media', 'copywriting', 'email-marketing',
    'analytics', 'design', 'local-business', 'legal-compliance', 'advertising'
  ];

  for (const subdir of categoryDirs) {
    const subdirPath = path.join(dir, subdir);
    if (fs.existsSync(subdirPath) && fs.statSync(subdirPath).isDirectory()) {
      for (const entry of fs.readdirSync(subdirPath, { withFileTypes: true })) {
        if (entry.isFile() && entry.name.endsWith('.html')) {
          files.push(path.join(subdirPath, entry.name));
        }
      }
    }
  }

  return files;
}

// Update a single HTML file
function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;
  const changes = [];
  const relPath = path.relative(ROOT, filePath);

  // Pattern: <a ... data-tool="slug" ... href="..." ...>
  // Handles href before or after data-tool, across the full <a> tag
  content = content.replace(
    /<a\b([^>]*?)data-tool="([^"]+)"([^>]*?)>/g,
    (match, before, slug, after) => {
      const url = tools[slug];
      if (!url) {
        changes.push(`  WARNING: unknown tool slug "${slug}"`);
        return match;
      }

      const fullAttrs = before + after;
      const hrefMatch = fullAttrs.match(/href="([^"]*)"/);

      if (hrefMatch && hrefMatch[1] !== url) {
        changes.push(`  ${slug}: ${hrefMatch[1]} → ${url}`);
        // Replace href in whichever side it appeared
        const newBefore = before.replace(/href="[^"]*"/, `href="${url}"`);
        if (newBefore !== before) {
          return `<a${newBefore}data-tool="${slug}"${after}>`;
        }
        const newAfter = after.replace(/href="[^"]*"/, `href="${url}"`);
        return `<a${before}data-tool="${slug}"${newAfter}>`;
      }

      return match;
    }
  );

  // Pattern: <a ... data-base="key" ... href="..." ...>
  content = content.replace(
    /<a\b([^>]*?)data-base="([^"]+)"([^>]*?)>/g,
    (match, before, key, after) => {
      const url = base[key];
      if (!url) {
        changes.push(`  WARNING: unknown base key "${key}"`);
        return match;
      }

      const fullAttrs = before + after;
      const hrefMatch = fullAttrs.match(/href="([^"]*)"/);

      if (hrefMatch && hrefMatch[1] !== url) {
        changes.push(`  [base] ${key}: ${hrefMatch[1]} → ${url}`);
        const newBefore = before.replace(/href="[^"]*"/, `href="${url}"`);
        if (newBefore !== before) {
          return `<a${newBefore}data-base="${key}"${newAfter}>`;
        }
        const newAfter = after.replace(/href="[^"]*"/, `href="${url}"`);
        return `<a${before}data-base="${key}"${newAfter}>`;
      }

      return match;
    }
  );

  if (changes.length > 0) {
    console.log(`\n${relPath}:`);
    changes.forEach(c => console.log(c));

    if (WRITE_MODE) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  ✓ Updated`);
    }
  }

  return changes.length;
}

// Audit: find links that point to vercel.app but have no data-tool attribute
function auditUntagged(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(ROOT, filePath);
  const warnings = [];

  // Find all <a> tags with vercel.app hrefs
  const tagRegex = /<a\b[^>]*href="(https?:\/\/[^"]*\.vercel\.app[^"]*)"[^>]*>/g;
  let match;

  while ((match = tagRegex.exec(content)) !== null) {
    const tag = match[0];
    const url = match[1];

    // Skip if already tagged
    if (tag.includes('data-tool=') || tag.includes('data-base=')) continue;

    // Try to identify the slug
    const knownUrl = Object.entries(tools).find(([, u]) => url.startsWith(u.replace(/\/$/, '')));
    const knownBase = Object.entries(base).find(([, u]) => url === u || url === u.replace(/\/$/, ''));

    if (knownUrl) {
      warnings.push(`  UNTAGGED: ${url} → add data-tool="${knownUrl[0]}"`);
    } else if (knownBase) {
      warnings.push(`  UNTAGGED: ${url} → add data-base="${knownBase[0]}"`);
    } else {
      warnings.push(`  UNKNOWN: ${url} (not in config)`);
    }
  }

  if (warnings.length > 0) {
    console.log(`\n${relPath}:`);
    warnings.forEach(w => console.log(w));
  }

  return warnings.length;
}

// Main
console.log(WRITE_MODE
  ? '=== URL Migration (WRITE MODE) ==='
  : '=== URL Migration (DRY RUN — use --write to apply) ==='
);

const files = getHtmlFiles(ROOT);
console.log(`\nScanning ${files.length} HTML files...\n`);

// Phase 1: Update tagged links
console.log('--- Tagged link updates ---');
let totalChanges = 0;
for (const file of files) {
  totalChanges += processFile(file);
}
if (totalChanges === 0) {
  console.log('\nAll tagged links are up to date.');
}

// Phase 2: Audit for untagged links
console.log('\n--- Untagged Vercel link audit ---');
let totalWarnings = 0;
for (const file of files) {
  totalWarnings += auditUntagged(file);
}
if (totalWarnings === 0) {
  console.log('\nNo untagged Vercel links found. All links are managed.');
} else {
  console.log(`\n⚠  ${totalWarnings} untagged link(s) found. Add data-tool/data-base attributes to manage them.`);
}

console.log(`\nDone. ${totalChanges} change(s)${WRITE_MODE ? ' applied' : ' pending (run with --write to apply)'}.`);
