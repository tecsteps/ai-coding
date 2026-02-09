#!/usr/bin/env node
/**
 * Playwright Script Executor
 * Runs Playwright scripts with proper module resolution
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function run() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node run.js <script.js> or node run.js "<inline code>"');
    process.exit(1);
  }

  const input = args.join(' ');
  let scriptPath;

  // Check if it's a file path or inline code
  if (fs.existsSync(input)) {
    scriptPath = path.resolve(input);
    console.log(`Running script: ${scriptPath}\n`);
  } else if (input.includes('await') || input.includes('chromium') || input.includes('page.')) {
    // Inline code - wrap in async function and save to temp file
    const code = `
const { chromium, firefox, webkit } = require('playwright');
(async () => {
  ${input}
})().catch(e => { console.error(e); process.exit(1); });
`;
    scriptPath = path.join('/tmp/claude', `playwright-inline-${Date.now()}.js`);
    fs.writeFileSync(scriptPath, code);
    console.log('Running inline script...\n');
  } else {
    console.error(`File not found: ${input}`);
    process.exit(1);
  }

  // Get the skill directory for node_modules resolution
  const skillDir = __dirname;

  // Execute the script with NODE_PATH set to include skill's node_modules
  const nodePath = path.join(skillDir, 'node_modules');

  const child = spawn('node', [scriptPath], {
    cwd: skillDir,
    env: {
      ...process.env,
      NODE_PATH: nodePath
    },
    stdio: 'inherit'
  });

  child.on('close', (code) => {
    process.exit(code || 0);
  });

  child.on('error', (err) => {
    console.error('Execution error:', err.message);
    process.exit(1);
  });
}

run();
