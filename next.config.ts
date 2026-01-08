import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  //trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If your repo is NOT SanuthKalhan.github.io, you MUST uncomment the line below
  // basePath: '/portfolio', 
};

export default nextConfig;