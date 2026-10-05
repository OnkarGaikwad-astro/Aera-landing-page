"use client";

import { motion } from "framer-motion";
import { Download, ChevronRight, Sparkles, MessageCircle, Mic, Users } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-background z-0">
        <div className="absolute inset-0 bg-aurora opacity-30 animate-[aurora_60s_linear_infinite]" />
        
        {/* Glow behind main text */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Particle-like elements (simulated with radial gradients) */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-primary/80 blur-[2px] animate-pulse" />
        <div className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-accent/60 blur-[3px] animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-white/80 blur-[1px] animate-[pulse_3s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 text-center lg:text-left mt-12 lg:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 w-fit mx-auto lg:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-medium text-textSecondary uppercase tracking-wider">Across Space & Time ✨</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Messaging Built <br className="hidden lg:block" />
            for the <span className="text-gradient-primary">AI Era</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-textSecondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            A cross-platform messaging app for seamless communication across space and time. Built with Flutter, Supabase, and powered by Gemini AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
            <Link
              href="https://github.com/OnkarGaikwad-astro/Aera/releases/latest/download/app-release.apk"
              className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(98,96,255,0.8)] hover:shadow-[0_0_60px_-10px_rgba(98,96,255,1)] w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <Download className="w-5 h-5" />
              <span>Download APK</span>
            </Link>
            
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium text-lg transition-all border border-white/10 w-full sm:w-auto"
            >
              <span>Explore Features</span>
              <ChevronRight className="w-5 h-5 text-textSecondary group-hover:text-white transition-colors" />
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mt-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surfaceElevated flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent/20" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-textSecondary font-medium">Loved by early adopters</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Phone Mockup Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
          className="relative lg:h-[700px] flex items-center justify-center perspective-[1000px] w-full"
        >
          {/* Phone Frame */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[320px] h-[650px] rounded-[3rem] border-[8px] border-surfaceElevated bg-surface shadow-[0_0_60px_-15px_rgba(98,96,255,0.4)] overflow-hidden rotate-[-5deg] z-20 group"
          >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-surfaceElevated rounded-b-3xl z-30" />
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-background">
              <img 
                src="/Screenshot_20261006_002007.jpg" 
                alt="Aurex Chat Interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Decorative floating elements around the phone */}
          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 lg:-right-4 glass p-4 rounded-2xl shadow-xl border border-white/10 z-30 flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">AI Summarized</p>
              <p className="text-xs text-textSecondary">32 unread messages</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 -left-4 lg:-left-12 glass p-4 rounded-2xl shadow-xl border border-white/10 z-30 flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Translation Active</p>
              <p className="text-xs text-textSecondary">English → Japanese</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
