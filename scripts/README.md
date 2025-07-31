# Updating Session Replay Plugin

Use `update-sr-plugin.js` to update the Session Replay plugin automatically.

## Prerequisites

Ensure you have the following installed on your system:
- Node.js (v14 or higher recommended)

## Usage

1. Open a terminal and navigate to the directory containing the `update-sr-plugin.js` script.
2. Run the script using Node.js:
   ```bash
   node scripts/update-sr-plugin.js
   ```
3. When prompted, enter the version of the sessionReplayPlugin you want to update to (e.g., 1.4.0).
4. The script will:
Download the plugin from the URL: https://cdn.amplitude.com/libs/plugin-session-replay-browser-<version>-min.js.gz
Replace the existing plugin code in src/amplitude-wrapper.js.
Update the version comment in the file.

# Updating Analytics Plugin

Use `update-analytics-plugin.js` to update the Analytics Browser SDK plugin automatically.

## Usage

1. Open a terminal and navigate to the project root directory.
2. Run the script using Node.js:
   ```bash
   node scripts/update-analytics-plugin.js
   ```
3. When prompted, enter the version of the Analytics Browser SDK you want to update to (e.g., 2.11.11).
4. The script will:
   - Download and build the specified version from the Amplitude-TypeScript repository
   - Extract the GTM snippet from the built package
   - Replace the existing Analytics SDK code in `src/amplitude-wrapper.js`
   - Update the version references in the file

---
