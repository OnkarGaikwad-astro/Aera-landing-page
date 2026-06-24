"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Users, User, Settings, ArrowRight } from "lucide-react";
import { useRef } from "react";

const screens = [
  { name: "Chat Interface", icon: MessageSquare, color: "from-blue-500 to-primary", desc: "Clean, intuitive, and blisteringly fast." },
  { name: "AI Assistant", icon: Sparkles, color: "from-primary to-accent", desc: "Your personal intelligence layer." },
  { name: "Communities", icon: Users, color: "from-emerald-400 to-teal-500", desc: "Organize groups seamlessly." },
  { name: "User Profile", icon: User, color: "from-orange-400 to-pink-500", desc: "Your identity, elevated." },
  { name: "Settings", icon: Settings, color: "from-slate-400 to-slate-600", desc: "Total control over your experience." },
];

export default function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section id="screenshots" className="relative py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Glimpse into the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-textSecondary">
            Every screen is meticulously crafted for clarity, speed, and visual delight. Experience an interface that feels alive.
          </p>
        </motion.div>
        
        <button 
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full glass hover:bg-white/10 transition-colors border border-white/10"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="relative w-full">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto px-6 md:px-32 pb-16 pt-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screens.map((screen, index) => {
            const Icon = screen.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[280px] md:w-[320px] group"
              >
                {/* Device Frame */}
                <div className="relative h-[580px] rounded-[2.5rem] border-[6px] border-surfaceElevated bg-surface shadow-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_-15px_rgba(98,96,255,0.4)]">
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-surfaceElevated rounded-b-2xl z-20" />
                  
                  {/* Screen Content Visualization (Mockup) */}
                  <div className="absolute inset-0 bg-background flex flex-col p-4 pt-10">
                    <div className="w-full flex justify-between items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-surfaceElevated flex items-center justify-center">
                        <Icon className="w-4 h-4 text-textSecondary" />
                      </div>
                      <div className="h-2 w-16 bg-surfaceElevated rounded-full" />
                    </div>
                    
                    <div className={`w-full h-32 rounded-2xl bg-gradient-to-br ${screen.color} opacity-20 mb-6`} />
                    
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${screen.color} opacity-30`} />
                          <div className="flex-1 space-y-2">
                            <div className="h-2 w-full bg-surfaceElevated rounded-full" />
                            <div className="h-2 w-2/3 bg-surfaceElevated rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Overlay Title */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col items-center justify-center p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${screen.color} p-[1px] mb-4`}>
                      <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{screen.name}</h3>
                    <p className="text-sm text-textSecondary">{screen.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
