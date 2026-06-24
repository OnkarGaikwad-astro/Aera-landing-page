"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Users, Mic, MessageCircle, Shield, Smartphone } from "lucide-react";

const features = [
  {
    title: "Instant Connections",
    description: "Chat in real-time with zero lag. Messages are delivered instantly, keeping your conversations flowing naturally.",
    icon: MessageCircle,
    color: "from-primary to-accent",
  },
  {
    title: "Aurex AI Assistant",
    description: "Meet Aurex, your intelligent companion. Get instant answers, translation, and writing help right inside your chats.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Vibrant Communities",
    description: "Create and manage large group chats effortlessly. Perfect for families, friends, and organized communities.",
    icon: Users,
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Rich Media & Voice",
    description: "Share life's moments. Send crystal-clear voice notes, high-quality photos, and files without compromise.",
    icon: Mic,
    color: "from-success to-emerald-400",
  },
  {
    title: "Always Available",
    description: "Lose connection? No problem. Read and queue messages offline, seamlessly syncing the moment you're back online.",
    icon: Shield,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Across All Devices",
    description: "Whether you're on iOS, Android, Windows, or Mac, Aera provides a flawless, beautiful experience everywhere.",
    icon: Smartphone,
    color: "from-purple-500 to-fuchsia-400",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Features</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More than just a messenger
            </h3>
            <p className="text-xl text-textSecondary">
              Everything you need to communicate effectively, designed to be beautiful, fast, and secure.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(98,96,255,0.3)] hover:-translate-y-2 border border-white/5 hover:border-primary/30 overflow-hidden"
              >
                {/* Hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-[1px] mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white opacity-90 drop-shadow-sm" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-textSecondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
