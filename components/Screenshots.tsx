"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Users, UserPlus, Settings, ArrowRight } from "lucide-react";
import { useRef } from "react";

const screens = [
  { name: "Chat Interface", icon: MessageSquare, color: "from-blue-500 to-primary", desc: "Clean, intuitive, and blisteringly fast.", image: "/Screenshot_20261006_001349.jpg" },
  { name: "AI Assistant", icon: Sparkles, color: "from-primary to-accent", desc: "Your personal intelligence layer.", image: "/Screenshot_20261006_002007.jpg" },
  { name: "Contacts", icon: Users, color: "from-emerald-400 to-teal-500", desc: "Organize groups seamlessly.", image: "/Screenshot_20261006_001338.jpg" },
  { name: "Add Contacts", icon: UserPlus, color: "from-orange-400 to-pink-500", desc: "Grow your network effortlessly.", image: "/Screenshot_20261006_001357.jpg" },
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
                  <div className="absolute inset-0 bg-background flex flex-col">
                    <img
                      src={screen.image}
                      alt={screen.name}
                      className="w-full h-full object-cover rounded-[2.5rem]"
                    />
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
