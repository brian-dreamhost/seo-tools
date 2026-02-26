/**
 * Validate a redirect map for common issues.
 */

export function validateRedirects(rows) {
  const issues = [];
  const validRows = rows.filter((r) => r.from.trim() && r.to.trim());

  // Build a lookup: from-path → row
  const fromMap = new Map();
  validRows.forEach((row) => {
    const from = normalizePath(row.from);
    if (fromMap.has(from)) {
      issues.push({
        type: 'duplicate',
        severity: 'warning',
        message: `Duplicate source: "${row.from}" appears more than once — the last rule wins.`,
        rowIds: [fromMap.get(from).id, row.id],
      });
    } else {
      fromMap.set(from, row);
    }
  });

  // Build destination set
  const toSet = new Set(validRows.map((r) => normalizePath(r.to)));

  // Check for chains: row A's "to" is another row's "from"
  validRows.forEach((row) => {
    const to = normalizePath(row.to);
    if (fromMap.has(to)) {
      issues.push({
        type: 'chain',
        severity: 'warning',
        message: `Redirect chain detected: "${row.from}" → "${row.to}" → another redirect. Combine into a single rule.`,
        rowIds: [row.id, fromMap.get(to).id],
      });
    }
  });

  // Check for loops: A → B → A
  validRows.forEach((row) => {
    const from = normalizePath(row.from);
    if (toSet.has(from) && fromMap.has(normalizePath(row.to))) {
      const target = fromMap.get(normalizePath(row.to));
      if (target && normalizePath(target.to) === from) {
        issues.push({
          type: 'loop',
          severity: 'error',
          message: `Redirect loop: "${row.from}" and "${row.to}" redirect to each other.`,
          rowIds: [row.id, target.id],
        });
      }
    }
  });

  return issues;
}

function normalizePath(url) {
  if (!url) return '';
  try {
    // If it's a full URL, extract just the path+search
    const parsed = new URL(url);
    return parsed.pathname + parsed.search;
  } catch {
    return url.trim();
  }
}
