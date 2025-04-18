import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'asset.kompas.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'awsimages.detik.net.id', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'smpn38sby.sch.id', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mts.al-jihad.sch.id', // Tambahkan domain di sini
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
