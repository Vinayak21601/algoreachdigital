"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Palette, Megaphone, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";

const services = [
    {
        id: "01",
        title: "Design",
        description: "Brand identity, UI/UX design, and visual storytelling that captivates your audience and drives engagement.",
        icon: Palette,
        gradient: "from-[var(--orange-500)] to-[var(--coral-500)]",
    },
    {
        id: "02",
        title: "Development",
        description: "Robust web and mobile applications built with scalable, modern technologies for peak performance.",
        icon: Monitor,
        gradient: "from-[var(--coral-500)] to-[var(--magenta-500)]",
    },
    {
        id: "03",
        title: "Marketing",
        description: "Data-driven SEO, PPC, and social media campaigns crafted to maximize your ROI and market reach.",
        icon: Megaphone,
        gradient: "from-[var(--magenta-500)] to-[var(--magenta-400)]",
    },
    {
        id: "04",
        title: "Strategy",
        description: "Comprehensive digital transformation strategies to guide your business growth into the future.",
        icon: TrendingUp,
        gradient: "from-[var(--orange-400)] to-[var(--orange-500)]",
    },
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="relative py-32 bg-[#030303] text-white overflow-hidden" id="services">
            {/* Premium background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--magenta-500)]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--orange-500)]/5 blur-[120px] rounded-full" />
                {/* Grid pattern - CSS based */}
                <div
                    className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <Sparkles size={14} className="text-[var(--coral-500)]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                What We Offer
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Solutions to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">
                                grow your business
                            </span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="glass" size="md">
                            View All Services
                        </Button>
                    </div>
                </motion.div>

                {/* Services list */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-t border-white/[0.06] py-10 md:py-14 cursor-pointer"
                        >
                            {/* Hover background glow */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-[0.03] rounded-2xl -mx-4 px-4`}
                            />

                            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 md:items-center px-4">
                                {/* ID with gradient */}
                                <div className={`text-xl font-mono font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent w-16`}>
                                    {service.id}/
                                </div>

                                {/* Icon Container */}
                                <motion.div
                                    animate={{
                                        scale: hoveredIndex === index ? 1.1 : 1,
                                        rotate: hoveredIndex === index ? 5 : 0
                                    }}
                                    className={`hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                                >
                                    <service.icon size={28} className="text-white" />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-400 transition-colors duration-300 group-hover:text-white">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-500 max-w-xl text-lg group-hover:text-white transition-colors duration-300">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Arrow Action Button */}
                                <motion.div
                                    animate={{
                                        rotate: hoveredIndex === index ? -45 : 0,
                                        scale: hoveredIndex === index ? 1.1 : 1,
                                    }}
                                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border ${hoveredIndex === index
                                        ? `bg-gradient-to-r ${service.gradient} border-transparent shadow-lg`
                                        : 'border-white/10 bg-white/5'
                                        }`}
                                >
                                    <ArrowUpRight size={22} className={hoveredIndex === index ? 'text-white' : 'text-gray-400'} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Bottom Border */}
                    <div className="border-t border-white/[0.06]" />
                </div>

                {/* Mobile CTA */}
                <div className="mt-12 md:hidden">
                    <Button variant="glass" size="lg" className="w-full">
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
}
