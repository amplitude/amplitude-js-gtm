const fs = require('fs');
const path = require('path');
const pkg = require(path.join(process.cwd(), 'package.json'));
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');
const bucket = process.env.S3_BUCKET_NAME;
const gtmWrapper = `./dist/index.js`;

const getVersion = () => pkg.version;
let deployedCount = 0;
const body = fs.readFileSync(path.join(process.cwd(), gtmWrapper));
const key = `libs/analytics-browser-gtm-wrapper-${getVersion()}.js`;
const client = new S3Client();
const headObject = new HeadObjectCommand({
  Bucket: bucket,
  Key: key,
});  

console.log('[Publish to AWS S3] START');
const promise = client
    .send(headObject)
    .then(() => {
      console.log(`[Publish to AWS S3] ${key} exists in target bucket. Skipping upload job.`);
    })
    .catch(() => {
      console.log(`[Publish to AWS S3] ${key} does not exist in target bucket. Uploading to S3...`);
      const putObject = new PutObjectCommand({
        ACL: 'public-read',
        Body: body,
        Bucket: bucket,
        CacheControl: 'max-age=31536000',
        ContentType: 'application/javascript',
        ContentEncoding: 'gzip',
        Key: key,
      });
      return client
        .send(putObject)
        .then(() => {
          console.log(`[Publish to AWS S3] Upload success for ${key}.`);
          deployedCount += 1;
        })
        .catch(console.error);
    });

  promise
  .then(() => {
    if (deployedCount === 0) {
      console.log(`[Publish to AWS S3] Complete! Nothing to deploy.`);
    } else {
      console.log(`[Publish to AWS S3] Success! Deployed ${deployedCount}/${files.length} files.`);
    }
    console.log('[Publish to AWS S3] END');
  })
  .catch(console.log);