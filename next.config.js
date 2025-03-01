/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_SITE_URL: process.env.KINDE_SITE_URL ?? 'http://localhost:3000',
    KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL ?? 'http://localhost:3000',
    KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL ?? 'http://localhost:3000/dashboard'
  }
};

module.exports = nextConfig;