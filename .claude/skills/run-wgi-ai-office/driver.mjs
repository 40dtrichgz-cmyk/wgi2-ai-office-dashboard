#!/usr/bin/env node
/*
 * run-wgi-ai-office driver
 *
 * Launches the WGI AI Laboratory 3D application and captures a screenshot.
 * This is the harness that lets a future agent drive the app programmatically.
 *
 * Usage:
 *   node driver.mjs
 *   (run from C:/Users/Windows10/wgi-ai-office-dashboard)
 *
 * Outputs:
 *   <unit>/laboratory-screenshot.png
 */

import { chromium } from 'playwright';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const UNIT_DIR = path.resolve(process.cwd());
const SCREENSHOT_PATH = path.join(UNIT_DIR, 'laboratory-screenshot.png');

function startServer() {
  const child = spawnSync('node', ['server.mjs'], {
    cwd: UNIT_DIR,
    detached: true,
    stdio: 'ignore'
  });
  return child.pid;
}

async function main() {
  // Start server
  const pid = startServer();
  console.log(`Server started (pid: ${pid})`);

  // Wait for server to be ready (poll /tmp/server.log)
  let serverReady = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = fs.readFileSync('/tmp/server.log', 'utf8');
      if (res.includes('running at')) { serverReady = true; break; }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }
  if (!serverReady) console.log('Warning: server log not yet ready');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://127.0.0.1:3000/laboratory.html', { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(15000);

  await page.screenshot({ path: SCREENSHOT_PATH });
  console.log(`Screenshot saved to: ${SCREENSHOT_PATH}`);

  const info = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    return { canvasFound: !!canvas, canvasSize: canvas ? `${canvas.clientWidth}x${canvas.clientHeight}` : null };
  });
  console.log('Canvas size:', info.canvasSize);

  await context.close();
  await browser.close();
}

main().catch(err => {
  console.error('Driver failed:', err.message);
  process.exit(1);
});