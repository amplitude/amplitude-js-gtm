const fs = require('node:fs');
const path = require('node:path');
const readline = require('readline');
const { downloadAndDecompress } = require('./helpers');

const filePath = path.resolve(__dirname, '../src/amplitude-wrapper.js');
const pluginName = 'sessionReplayPlugin';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pluginUrl = '';

rl.question('Enter the version of the session replay plugin (e.g., 1.4.0): ', (version) => {
  pluginUrl = `https://cdn.amplitude.com/libs/plugin-session-replay-browser-${version}-min.js.gz`;
  rl.close();

  // The rest of the script remains unchanged
  (async () => {
    try {
      let newPluginCode = await downloadAndDecompress(pluginUrl);
      console.log('Plugin code downloaded and decompressed successfully.');
      let fileContent = fs.readFileSync(filePath, 'utf8');
      newPluginCode = newPluginCode.replace(/^var\s+sessionReplay\s*=/, `var ${pluginName}=`);

      const lines = fileContent.split('\n');
      const versionComment = `// plugin-session-replay-browser version: ${version}`;
      let insidePluginBlock = false;
      const updatedLines = [];
      let commentReplaced = false;

      for (const line of lines) {
        if (line.startsWith('// plugin-session-replay-browser version:')) {
          if (!commentReplaced) {
            updatedLines.push(versionComment);
            commentReplaced = true;
          }
        } else if (line.startsWith(`var ${pluginName}=`)) {
          insidePluginBlock = true;
          if (!commentReplaced) {
            updatedLines.push(versionComment);
            commentReplaced = true;
          }
          updatedLines.push(newPluginCode.trim());
          updatedLines.push('/* Session Replay Plugin end */\n\n');

        } else if (insidePluginBlock && line.trim() === '') {
          insidePluginBlock = false;
        } else if (!insidePluginBlock) {
          updatedLines.push(line);
        }
      }

      fs.writeFileSync(filePath, updatedLines.join('\n'), 'utf8');
      console.log(`${pluginName} updated successfully in ${filePath}`);
    } catch (error) {
      console.error('Error downloading or decompressing plugin code:', error);
    }
  })();
});
