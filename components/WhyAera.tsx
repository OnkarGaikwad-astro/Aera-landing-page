"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Shield, Sparkles } from "lucide-react";

const stats = [
  { label: "Uptime", value: "99.9%", icon: Activity, color: "text-green-400" },
  { label: "Messaging", value: "Real-Time", icon: Zap, color: "text-amber-400" },
  { label: "Privacy", value: "Secure", icon: Shield, color: "text-blue-400" },
  { label: "Experience", value: "AI-Powered", icon: Sparkles, color: "text-primary" },
];

export default function WhyAera() {
  return (
    <section className="py-32 bg-surfaceElevated relative overflow-hidden">
      <div className="absolute -left-[20%] top-0 w-[50%] h-full bg-primary/5 blur-[120px] pointer-events-none skew-x-12" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className={`w-8 h-8 ${stat.color} mb-4`} />
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-sm font-medium text-textSecondary uppercase tracking-wider">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Designed for the <br/>
              <span className="text-gradient">Future of Communication</span>
            </h2>
            
            <div className="space-y-6 text-lg text-textSecondary leading-relaxed">
              <p>
                Aera isn't just another messaging app. It's a complete reimagining of how we connect, collaborate, and share ideas. Built from the ground up to be blisteringly fast and beautifully fluid.
              </p>
              <p>
                We stripped away the clutter, optimized every single interaction, and crafted an interface that gets out of your way. Whether you're coordinating with a small team or managing a community of thousands, Aera scales effortlessly while keeping your data private and secure.
              </p>
              <p className="text-white font-medium border-l-2 border-primary pl-4 py-1">
                "Across Space & Time — Connect with anyone, anywhere."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
