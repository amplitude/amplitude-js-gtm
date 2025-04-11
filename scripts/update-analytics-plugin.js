const fs = require('node:fs');
const path = require('node:path');
const readline = require('readline');
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

const filePath = path.resolve(__dirname, '../src/amplitude-wrapper.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the version of Analytics (e.g., 2.11.11): ', (version) => {
  rl.close();

  // The rest of the script remains unchanged
  (async () => {
    try {
      // check out amplitude-typescript at the specified version. Install dependencies
      // and build it
      const packageVersion = `@amplitude/analytics-browser@${version}`;
      await exec(`sh ./scripts/amplitude-typescript-fetch.sh`, { env: { TAG: packageVersion } });

      // get the contents of 'amplitude-gtm-snippet.js' from the cloned repo
      console.log('Analytics code downloaded and decompressed successfully.');
      const gtmSnippetPath = path.resolve(
        __dirname, '..', 'cloned_repos', 'amplitude_typescript',
        'packages', 'analytics-browser', 'generated',
        'amplitude-gtm-snippet.js',
      );
      const newAnalyticsContents = fs.readFileSync(gtmSnippetPath, 'utf8');

      // find content between the comments
      // /* Amplitude Browser 2.0 SDK begin */ and /* Amplitude Browser 2.0 SDK end */
      // and replace them with the newAnalyticsContents
      let amplitudeWrapperContent = fs.readFileSync(filePath, 'utf8');
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
