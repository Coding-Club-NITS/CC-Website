/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "asset.cloudinary.com",
      "picsum.photos",
      "media.dev.to",
      "images.crunchbase.com",
      "pathrise-website-guide-wp.s3.us-west-1.amazonaws.com",
      "images.unsplash.com",
      "assets.aceternity.com",
      "i.ytimg.com",
      "shopallpremium.com",
      "cdn.iconscout.com",
      "user-images.githubusercontent.com",
      "media.licdn.com",
      "i.sstatic.net",
      "cdn.jsdelivr.net",
      "encrypted-tbn0.gstatic.com",
      "drive.google.com",
      "lh3.googleusercontent.com",
      "googleusercontent.com",
    ],
    // unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.googleusercontent.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "drive.google.com",
    //   },
    // ],
  },
};

export default nextConfig;
