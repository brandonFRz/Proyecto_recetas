/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'hydpemtdboemycciieju.supabase.co',
            pathname: '/storage/v1/object/**',
          },
        ],
      },
      // output: "export"
};

module.exports = nextConfig
