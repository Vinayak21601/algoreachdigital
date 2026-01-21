"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, BarChart3, Zap, MousePointerClick, Mail, Users, Globe, Rocket, Sparkles, LineChart, Share2 } from "lucide-react";

const icons = [
    { Icon: TrendingUp, color: "from-green-400 to-emerald-500", delay: 0 },
    { Icon: Target, color: "from-[var(--orange-500)] to-[var(--coral-500)]", delay: 0.2 },
    { Icon: BarChart3, color: "from-blue-400 to-cyan-500", delay: 0.4 },
    { Icon: Zap, color: "from-yellow-400 to-orange-500", delay: 0.6 },
    { Icon: MousePointerClick, color: "from-[var(--coral-500)] to-[var(--magenta-500)]", delay: 0.8 },
    { Icon: Mail, color: "from-purple-400 to-pink-500", delay: 1 },
    { Icon: Users, color: "from-[var(--magenta-500)] to-purple-600", delay: 1.2 },
    { Icon: Globe, color: "from-cyan-400 to-blue-500", delay: 1.4 },
    { Icon: Rocket, color: "from-[var(--orange-400)] to-red-500", delay: 0.3 },
    { Icon: LineChart, color: "from-emerald-400 to-teal-500", delay: 0.7 },
    { Icon: Share2, color: "from-pink-400 to-rose-500", delay: 1.1 },
    { Icon: Sparkles, color: "from-amber-400 to-yellow-500", delay: 0.5 },
];

// Predefined positions to avoid overlap - scattered across the container
const positions = [
    { top: "5%", left: "8%" },
    { top: "12%", right: "12%" },
    { top: "25%", left: "5%" },
    { top: "35%", right: "8%" },
    { top: "50%", left: "3%" },
    { top: "55%", right: "5%" },
    { top: "70%", left: "10%" },
    { top: "75%", right: "15%" },
    { top: "85%", left: "6%" },
    { top: "90%", right: "10%" },
    { top: "40%", left: "12%" },
    { top: "65%", right: "3%" },
];

export default function FloatingIcons({ className = "" }) {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {icons.map(({ Icon, color, delay }, index) => {
                const pos = positions[index % positions.length];
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [0.8, 1, 0.8],
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 6 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: delay,
                        }}
                        style={{ ...pos }}
                        className="absolute hidden lg:block"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg opacity-60`}>
                            <Icon size={22} className="text-white" />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
