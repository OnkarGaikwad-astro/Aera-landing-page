"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, AlignLeft, Edit3, Briefcase } from "lucide-react";

const capabilities = [
  { name: "Smart Replies", icon: Zap },
  { name: "Summarization", icon: AlignLeft },
  { name: "Translation", icon: Globe },
  { name: "Content Generation", icon: Edit3 },
  { name: "Question Answering", icon: Sparkles },
  { name: "Productivity", icon: Briefcase },
];

export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="relative py-32 bg-surfaceElevated overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Aurex AI Chatbot</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Powered by <br className="hidden md:block"/>
              <span className="text-gradient-primary">Gemini API</span>
            </h2>
            
            <p className="text-xl text-textSecondary mb-10 leading-relaxed">
              Meet Aurex, your integrated AI companion. Experience advanced responses, intelligent assistance, and seamless productivity directly within your messaging app.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-colors group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-white group-hover:text-primary transition-colors">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual (Interactive AI Orb) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Base Orb */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Outer glowing rings */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/30 border-t-primary border-b-accent opacity-50"
              />
              <motion.div 
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-accent/20 border-r-primary border-l-primary/50 opacity-60"
              />
              <motion.div 
                animate={{ rotate: 180, scale: [1, 0.95, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-white/10 border-t-white/30"
              />
              
              {/* Core Glow */}
              <div className="absolute w-40 h-40 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse" />
              
              {/* Solid Core */}
              <div className="relative w-32 h-32 bg-gradient-to-tr from-primary via-accent to-white rounded-full shadow-[0_0_80px_rgba(98,96,255,0.6)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent)] mix-blend-overlay" />
                <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
              </div>

              {/* Floating Context Chips */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                className="absolute -top-4 -right-12 glass px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-white shadow-xl"
              >
                "Summarize this thread"
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 -left-16 glass px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-white shadow-xl"
              >
                Translating to Spanish...
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-10 right-0 glass px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-white shadow-xl"
              >
                <div className="flex gap-1.5 items-center">
                   <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                   Smart Reply ready
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
