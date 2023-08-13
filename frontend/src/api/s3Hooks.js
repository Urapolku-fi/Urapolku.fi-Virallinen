import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";

export const useS3 = () => {
  const uploadObject = async (bucket, key, body, acl) => {
    try {
      const data = await s3Client.send(
        new PutObjectCommand({ Bucket: bucket, Key: key, Body: body , ACL: acl})
      );
      console.log("Successfully uploaded object");
      return data;
    } catch (err) {
      console.log("Error", err);
    }
  };

  return { uploadObject };
};
