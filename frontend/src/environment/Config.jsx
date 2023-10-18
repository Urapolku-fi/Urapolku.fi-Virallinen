const config = {
    auth0_callback_url: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    auth0_domain: import.meta.env.VITE_AUTH0_DOMAIN,
    auth0_clientID: import.meta.env.VITE_AUTH0_CLIENTID,
    auth0_audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    backend_url: import.meta.env.VITE_BACKEND_URL,
    s3_endpoint: import.meta.env.VITE_S3_ENDPOINT,
    s3_full_endpoint: import.meta.env.VITE_S3_FULL_ENDPOINT,
    s3_key: import.meta.env.VITE_S3_KEY,
    s3_bucket: import.meta.env.VITE_S3_BUCKET,
    s3_secret: import.meta.env.VITE_S3_SECRET
};

export default config;