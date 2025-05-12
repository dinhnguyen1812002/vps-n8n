/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/thue-hosting",
    // assetPrefix:"/thue-hosting",
    assetPrefix: process.env.NODE_ENV === "production" ? "/vps-n8n" : "",
};

module.exports = nextConfig;
