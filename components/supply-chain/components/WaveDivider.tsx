'use client'

import { motion } from 'framer-motion';

export default function WaveDivider() {
  return (
    <svg
      className="w-full h-24"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fill="url(#gradient)"
        d="M0,160 C360,260 720,0 1080,160 C1440,320 1440,320 1440,320 L0,320 Z"
        initial={{ d: "M0,160 C360,260 720,0 1080,160 C1440,320 1440,320 1440,320 L0,320 Z" }}
        animate={{
          d: [
            "M0,160 C360,260 720,0 1080,160 C1440,320 1440,320 1440,320 L0,320 Z",
            "M0,200 C360,100 720,300 1080,200 C1440,100 1440,100 1440,0 L0,0 Z",
            "M0,160 C360,260 720,0 1080,160 C1440,320 1440,320 1440,320 L0,320 Z"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
