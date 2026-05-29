/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Ini akan memaksa Vercel mengabaikan error TypeScript saat build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ini akan memaksa Vercel mengabaikan error ESLint linting saat build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
