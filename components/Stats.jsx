"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "3.5k", label: "Projects Completed", suffix: "+" },
    { value: "25", label: "Industry Awards", suffix: "+" },
    { value: "1.5k", label: "Happy Clients", suffix: "+" },
    { value: "5", label: "Years Experience", suffix: "+" },
];

export default function Stats() {
    return (
        <section className="relative py-24 bg-[#030303] overflow-hidden">
            {/* Subtle gradient glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--magenta-500)]/10 via-[var(--coral-500)]/10 to-[var(--orange-500)]/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Premium glass card container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative p-8 md:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                >
                    {/* Gradient border glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--orange-500)]/10 via-[var(--coral-500)]/10 to-[var(--magenta-500)]/10 blur-xl -z-10" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="text-center relative group"
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--orange-500)]/0 via-[var(--coral-500)]/0 to-[var(--magenta-500)]/0 group-hover:from-[var(--orange-500)]/5 group-hover:via-[var(--coral-500)]/5 group-hover:to-[var(--magenta-500)]/5 rounded-2xl transition-all duration-500 blur-xl -z-10" />

                                <div className="relative">
                                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-3">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">
                                            {stat.value}
                                        </span>
                                        <span className="text-white/60 text-3xl md:text-4xl">{stat.suffix}</span>
                                    </h3>
                                    <p className="text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Divider line (only show between items on desktop) */}
                                {index < stats.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
