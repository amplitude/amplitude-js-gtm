const https = require('node:https');
const zlib = require('node:zlib');

function downloadAndDecompress(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to download file: ${response.statusCode}`));
        }

        const gunzip = zlib.createGunzip();
        const chunks = [];

        response.pipe(gunzip);

        gunzip.on('data', (chunk) => {
          chunks.push(chunk);
        });

        gunzip.on('end', () => resolve(Buffer.concat(chunks).toString()));
        gunzip.on('error', (err) => reject(err));
      })
      .on('error', (err) => reject(err));
  });
}

module.exports = {
  downloadAndDecompress,
};