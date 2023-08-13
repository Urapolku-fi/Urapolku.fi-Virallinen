import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: import.meta.env.VITE_S3_ENDPOINT,
  region: "fra1",
  credentials: {
    accessKeyId: import.meta.env.VITE_S3_KEY,
    secretAccessKey: import.meta.env.VITE_S3_SECRET,
  },
});

export { s3Client };
