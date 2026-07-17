/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "reqres.in",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
