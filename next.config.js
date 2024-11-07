/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:3000",
    DB_LOCAL_URI: process.env.DB_LOCAL_URI || "mongodb://localhost:27017/wolder",
    DB_URI: process.env.DB_URI || "mongodb://localhost:27017/wolder",

    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:3000",

    CLOUD_NAME: process.env.CLOUD_NAME || "drukcn21i",
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "699441114721467",
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "ftqJUcQN9K59O6Oma-mkhQYLdlc",

    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || "pk_test_51QGMTjI0G9084N86hQhGsiF7Cyfrgv7nqgbIY1DUeb6LmlB28uwLkeGoRs0ZvLH0J7ySFX2qniA3aeq8jlFSv43C00TPrmiYRs",
    STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY || "sk_test_51QGMTjI0G9084N86mh8h70oDukLIdeth1iHRfmaOPgnXcC7YP7DFWY2pxawidZwcYaybZCu6fDbZBMv3clSi1DVj00JaywjvWd",
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "whsec_4abe5cb2d2b72a2038c4a797ed05d28235175a0c513047079ab084fee0c0dcab",

    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "wolder2010",
  },
  images: {
    domains: ["res.cloudinary.com"], 
  },
};

module.exports = nextConfig;

