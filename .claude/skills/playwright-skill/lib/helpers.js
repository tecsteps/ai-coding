/**
 * Playwright Skill Helpers
 * Utility functions for common browser automation tasks
 */

const { execSync } = require('child_process');

/**
 * Detect running dev servers on common ports
 * @returns {Promise<Array<{port: number, url: string}>>}
 */
async function detectDevServers() {
  const commonPorts = [3000, 3001, 5173, 5174, 8000, 8080, 8888, 4200, 4000];
  const servers = [];

  for (const port of commonPorts) {
    try {
      // Check if port is in use
      const result = execSync(`lsof -i :${port} -sTCP:LISTEN -t 2>/dev/null || true`, {
        encoding: 'utf8',
        timeout: 1000
      }).trim();

      if (result) {
        servers.push({
          port,
          url: `http://localhost:${port}`
        });
      }
    } catch (e) {
      // Port not in use or error checking
    }
  }

  // Also check for Herd .test domains
  try {
    const herdSites = execSync('ls ~/Herd 2>/dev/null || true', {
      encoding: 'utf8',
      timeout: 1000
    }).trim().split('\n').filter(Boolean);

    for (const site of herdSites) {
      if (site && !site.startsWith('.')) {
        servers.push({
          port: 80,
          url: `http://${site}.test`,
          type: 'herd'
        });
      }
    }
  } catch (e) {
    // Herd not available
  }

  return servers;
}

/**
 * Safe click with retry logic
 * @param {Page} page - Playwright page
 * @param {string} selector - Element selector
 * @param {Object} options - Options including retries
 */
async function safeClick(page, selector, options = {}) {
  const { retries = 3, timeout = 5000 } = options;

  for (let i = 0; i < retries; i++) {
    try {
      await page.click(selector, { timeout });
      return;
    } catch (e) {
      if (i === retries - 1) throw e;
      await page.waitForTimeout(500);
    }
  }
}

/**
 * Safe type with optional clear first
 * @param {Page} page - Playwright page
 * @param {string} selector - Element selector
 * @param {string} text - Text to type
 * @param {Object} options - Options
 */
async function safeType(page, selector, text, options = {}) {
  const { clear = true, timeout = 5000 } = options;

  await page.waitForSelector(selector, { timeout });

  if (clear) {
    await page.fill(selector, '');
  }

  await page.fill(selector, text);
}

/**
 * Take timestamped screenshot
 * @param {Page} page - Playwright page
 * @param {string} name - Screenshot name prefix
 * @param {Object} options - Screenshot options
 * @returns {string} - Screenshot path
 */
async function takeScreenshot(page, name, options = {}) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `${name}-${timestamp}.png`;
  const filepath = `/tmp/${filename}`;

  await page.screenshot({
    path: filepath,
    fullPage: options.fullPage !== false,
    ...options
  });

  console.log(`Screenshot saved: ${filepath}`);
  return filepath;
}

/**
 * Handle common cookie banners
 * @param {Page} page - Playwright page
 */
async function handleCookieBanner(page) {
  const cookieSelectors = [
    '[data-testid="cookie-accept"]',
    '#cookie-accept',
    '.cookie-accept',
    'button:has-text("Accept")',
    'button:has-text("Accept all")',
    'button:has-text("Accept cookies")',
    '[aria-label*="accept cookie"]'
  ];

  for (const selector of cookieSelectors) {
    try {
      const button = page.locator(selector).first();
      if (await button.isVisible({ timeout: 1000 })) {
        await button.click();
        console.log('Cookie banner dismissed');
        return;
      }
    } catch (e) {
      // Selector not found, try next
    }
  }
}

/**
 * Extract data from a table
 * @param {Page} page - Playwright page
 * @param {string} tableSelector - Table selector
 * @returns {Array<Object>} - Array of row objects
 */
async function extractTableData(page, tableSelector) {
  return await page.evaluate((selector) => {
    const table = document.querySelector(selector);
    if (!table) return [];

    const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      const obj = {};
      cells.forEach((cell, i) => {
        obj[headers[i] || `col${i}`] = cell.textContent.trim();
      });
      return obj;
    });
  }, tableSelector);
}

/**
 * Wait for network to be idle
 * @param {Page} page - Playwright page
 * @param {number} timeout - Timeout in ms
 */
async function waitForNetworkIdle(page, timeout = 5000) {
  await page.waitForLoadState('networkidle', { timeout });
}

module.exports = {
  detectDevServers,
  safeClick,
  safeType,
  takeScreenshot,
  handleCookieBanner,
  extractTableData,
  waitForNetworkIdle
};
