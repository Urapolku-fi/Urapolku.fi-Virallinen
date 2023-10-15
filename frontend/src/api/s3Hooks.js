import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from './s3Client.js';

export const useS3 = () => {
  const uploadObject = async (bucket, key, body, acl) => {
    try {
      const data = await s3Client.send(
        new PutObjectCommand({ Bucket: bucket, Key: key, Body: body, ACL: acl }),
      );
      return data.$metadata.httpStatusCode;
    } catch (err) {
      return 500;
    }
  };

  return { uploadObject };
};
