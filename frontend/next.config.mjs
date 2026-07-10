import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Self-host (Docker) için minimal Node.js sunucusu üretir: .next/standalone
  // içinde server.js + gerekli node_modules bundle'lanır. Vercel bunu yok sayar.
  output: 'standalone',
};

export default withMDX(config);
