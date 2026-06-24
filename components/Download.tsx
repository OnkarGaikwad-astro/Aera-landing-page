"use client";

import { motion } from "framer-motion";
import { Download as DownloadIcon, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Download() {
  return (
    <section className="relative py-32 bg-background overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-aurora opacity-20" />
      
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="relative glass-panel rounded-[3rem] p-12 md:p-20 text-center overflow-hidden border border-primary/30 shadow-[0_0_100px_-20px_rgba(98,96,255,0.4)]"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[600px] bg-gradient-to-b from-primary/30 via-accent/10 to-transparent blur-3xl -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Smartphone className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Available for Android</span>
            <div className="w-1 h-1 rounded-full bg-white/50 mx-1" />
            <span className="text-sm text-textSecondary">v1.0.0</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Download Aera Today
          </h2>
          
          <p className="text-xl text-textSecondary max-w-2xl mx-auto mb-12">
            Experience next-generation messaging powered by AI. Join the community and redefine how you communicate.
          </p>

          <Link
            href="https://github.com/OnkarGaikwad-astro/Aera/releases/latest/download/app-release.apk"
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-background px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <DownloadIcon className="w-6 h-6" />
            <span>Download Latest APK</span>
          </Link>
          
          <p className="mt-6 text-sm text-textSecondary">
            Always downloads the latest release automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
