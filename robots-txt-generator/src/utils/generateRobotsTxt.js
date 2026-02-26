/**
 * Generates a robots.txt file content from the given configuration.
 * @param {Array} groups - Array of user-agent groups
 * @param {Array} sitemaps - Array of sitemap URLs
 * @param {string} host - Optional host directive
 * @returns {string} robots.txt content
 */
export function generateRobotsTxt(groups, sitemaps, host) {
  const lines = [];

  groups.forEach((group, index) => {
    if (index > 0) lines.push('');
    lines.push(`User-agent: ${group.agent || '*'}`);

    group.rules.forEach((rule) => {
      const path = rule.path || '/';
      lines.push(`${rule.type}: ${path}`);
    });

    if (group.crawlDelay && group.crawlDelay.trim()) {
      lines.push(`Crawl-delay: ${group.crawlDelay.trim()}`);
    }
  });

  const validSitemaps = sitemaps.filter((s) => s.trim());
  if (validSitemaps.length > 0) {
    lines.push('');
    validSitemaps.forEach((sitemap) => {
      lines.push(`Sitemap: ${sitemap.trim()}`);
    });
  }

  if (host && host.trim()) {
    lines.push('');
    lines.push(`Host: ${host.trim()}`);
  }

  return lines.join('\n');
}
