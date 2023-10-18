import { S3 } from '@aws-sdk/client-s3';
import config from '../environment/Config';
const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: config.s3_endpoint,
  region: 'fra1',
  credentials: {
    accessKeyId: config.s3_key,
    secretAccessKey: config.s3_secret,
  },
});

export { s3Client };
