const fs = require('node:fs');
const path = require('node:path');
const readline = require('readline');
const { downloadAndDecompress } = require('./helpers');

const filePath = path.resolve(__dirname, '../src/amplitude-wrapper.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pluginUrl = '';

rl.question('Enter the version of Analyics (e.g., 2.11.11): ', (version) => {
  pluginUrl = `https://cdn.amplitude.com/libs/analytics-browser-gtm-${version}-min.js.gz`;
  
  rl.close();

  // The rest of the script remains unchanged
  (async () => {
    try {
      let newAnalyticsContents = await downloadAndDecompress(pluginUrl);
      console.log('Analytics code downloaded and decompressed successfully.');
      let amplitudeWrapperContent = fs.readFileSync(filePath, 'utf8');

      // find content between the comments
      // /* Amplitude Browser 2.0 SDK begin */ and /* Amplitude Browser 2.0 SDK end */
      // and replace them with the newAnalyticsContents
      const startComment = '/* Amplitude Browser 2.0 SDK begin */';
      const endComment = '/* Amplitude Browser 2.0 SDK end */';
      const startIndex = amplitudeWrapperContent.indexOf(startComment);
      const endIndex = amplitudeWrapperContent.indexOf(endComment, startIndex);
      if (startIndex === -1) {
        throw new Error(`Could not find the start comment marker: "${startComment}".`);
      }
      if (endIndex === -1) {
        throw new Error(`Could not find the end comment marker: "${endComment}".`);
      }
      const beforeContent = amplitudeWrapperContent.slice(0, startIndex + startComment.length);
      const afterContent = amplitudeWrapperContent.slice(endIndex);
      const updatedContent = `${beforeContent}\n${newAnalyticsContents}\n${afterContent}`;
      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`Analytics updated successfully in ${filePath}`);
    } catch (error) {
      console.error('Error downloading or decompressing analytics code:', error);
    }
  })();
});
