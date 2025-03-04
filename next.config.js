/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    KINDE_SITE_URL: process.env.KINDE_SITE_URL || 'http://localhost:3000',
    KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL || '/dashboard',
    KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL || '/'
  },
  async redirects() {
    return [
      {
        source: '/api/auth/kinde_callback',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;