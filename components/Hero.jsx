"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GravityGrid } from "./GravityGrid";
import { AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { useContactModal } from "./ContactModal";

export default function Hero() {
    const [index, setIndex] = useState(0);
    const { openModal } = useContactModal();
    const services = ["PERFORMANCE MARKETERS",
        "PAID ADS SPECIALISTS",
        "CONVERSION RATE OPTIMIZERS",
        "WEB PIONEERS",
        "UX ARCHITECTS",
        "DATA STRATEGISTS",
        "GROWTH HACKERS",
        "SOCIAL MEDIA STRATEGISTS",
        "CONTENT & CREATIVE EXPERTS",
        "BRAND STORYTELLERS",
        "FUNNEL BUILDERS",
        "ANALYTICS & ROI TRACKERS"
    ];

    useEffect(() => {
        const timer = setInterval(() => setIndex((i) => (i + 1) % services.length), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/grid.webp"
                    alt="Grid Background"
                    fill
                    className="object-cover opacity-30 select-none pointer-events-none"
                    priority
                />
            </div>

            {/* Brand-Synced Gravity Grid */}
            <GravityGrid />

            {/* Focal Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030303_90%)] z-[1]" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Top Badge */}
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

                {/* Heading */}
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
                    className="max-w-xl text-center text-gray-400 text-lg mb-12 font-medium"
                >
                    We architect digital ecosystems that drive growth through technical
                    precision and creative rebellion.
                </motion.p>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 items-center"
                >
                    <Button
                        variant="white"
                        size="lg"
                        icon={<ArrowUpRight size={18} />}
                        onClick={openModal}
                        className="shadow-[0_0_50px_rgba(255,255,255,0.15)]"
                    >
                        START PROJECT
                    </Button>

                    <button className="group flex items-center gap-4 text-xs font-bold tracking-widest text-white/40 hover:text-white transition-all">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-orange-500/50 group-hover:bg-white/10 transition-all">
                            <Play size={14} fill="white" />
                        </div>
                        WATCH REEL
                    </button>
                </motion.div>
            </div>
        </section>
    );
}