---
name: run-wgi-ai-office
description: Run the WGI AI Laboratory 3D application and capture a screenshot
---

# run-wgi-ai-office

Run the WGI AI Laboratory 3D application and capture a screenshot.

## What this does
Launches `laboratory.html` (Three.js 3D laboratory) via `server.mjs`, drives it with Playwright headless browser, and saves a screenshot to `laboratory-screenshot.png`.

## Prerequisites
- Node.js 24.x
- Playwright installed: `npm install -g playwright` or `npx playwright install chromium`

## Setup
1. Navigate to the WGI AI Office project directory:
   ```bash
   cd C:/Users/Windows10/wgi-ai-office-dashboard
   ```
2. Install Playwright chromium browser (one-time):
   ```bash
   npx playwright install chromium
   ```

## Run (agent path)
From the unit directory `C:/Users/Windows10/wgi-ai-office-dashboard`:

1. Start the server in the background:
   ```bash
   node server.mjs > /tmp/server.log 2>&1 &
   ```

2. Run the Playwright driver script (committed at `.claude/skills/run-wgi-ai-office/driver.mjs`):
   ```bash
   node .claude/skills/run-wgi-ai-office/driver.mjs
   ```

3. The screenshot is saved to:
   ```bash
   C:/Users/Windows10/wgi-ai-office-dashboard/laboratory-screenshot.png
   ```

## Run (human path)
1. Open the laboratory HTML file directly in your browser:
   ```bash
   start C:/Users/Windows10/wgi-ai-office-dashboard/laboratory.html
   ```

## Gotchas
- The 3D content loads asynchronously — wait ~15 seconds after opening the page
- The Playwright script needs to wait for the Three.js font to load and workstations to render
- The canvas size may be "unknown" if captured too early

## Troubleshooting
- If the server fails to start, check for port conflicts or missing dependencies
- If the screenshot is blank, wait longer for Three.js to load
- Playwright may need to be installed globally: `npm install -g playwright`

## Driver source
The committed driver is `.claude/skills/run-wgi-ai-office/driver.mjs`. All commands above were run against this driver in this session.