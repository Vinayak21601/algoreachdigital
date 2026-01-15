"use client";

import { useEffect, useState } from "react";
import { GravityGrid } from "./GravityGrid";
import { AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
    const [index, setIndex] = useState(0);
    const services = ["UX ARCHITECTS", "DATA STRATEGISTS", "GROWTH HACKERS", "WEB PIONEERS"];

    useEffect(() => {
        const timer = setInterval(() => setIndex((i) => (i + 1) % services.length), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden">

            {/* Brand-Synced Gravity Grid */}
            <GravityGrid />

            {/* Focal Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030303_90%)] z-[1]" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Top Badge: Uses Coral/Orange Gradient */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl flex items-center gap-3"
                >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                        Algoreach Digital Core
                    </span>
                </motion.div>

                {/* Heading: Pure white base with Brand Gradient for the service */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                        WE ARE <br />
                        <div className="relative inline-block mt-4">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={services[index]}
                                    initial={{ opacity: 0, y: 20, rotateX: 90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    exit={{ opacity: 0, y: -20, rotateX: -90 }}
                                    transition={{ duration: 0.6, ease: "circOut" }}
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-magenta-600"
                                >
                                    {services[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-xl text-center text-gray-500 text-lg mb-12 font-medium"
                >
                    We architect digital ecosystems that drive growth through technical
                    precision and creative rebellion.
                </motion.p>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                    <Button
                        className="rounded-full bg-white text-black px-10 py-7 font-bold text-sm hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                        START PROJECT
                    </Button>

                    <button className="group flex items-center gap-4 text-xs font-bold tracking-widest text-white/40 hover:text-white transition-all">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-orange-500/50 transition-colors">
                            <Play size={14} fill="white" />
                        </div>
                        WATCH REEL
                    </button>
                </div>
            </div>
        </section>
    );
}