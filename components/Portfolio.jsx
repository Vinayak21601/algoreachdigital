"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";

const projects = [
    {
        id: "01",
        category: "Real Estate",
        title: "PropVista Realty Platform",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        size: "large",
        gradient: "from-[var(--orange-500)] to-[var(--coral-500)]",
    },
    {
        id: "02",
        category: "Web App",
        title: "TaskFlow Project Management",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
        size: "small",
        gradient: "from-[var(--coral-500)] to-[var(--magenta-500)]",
    },
    {
        id: "03",
        category: "Real Estate",
        title: "HomeScape Property Manager",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
        size: "small",
        gradient: "from-[var(--magenta-500)] to-[var(--orange-500)]",
    },
    {
        id: "04",
        category: "Web App",
        title: "CloudSync Analytics Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        size: "wide",
        gradient: "from-[var(--orange-400)] to-[var(--magenta-400)]",
    },
    {
        id: "05",
        category: "E-Commerce",
        title: "Lykis Luxury Marketplace",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        size: "small",
        gradient: "from-[var(--coral-400)] to-[var(--orange-500)]",
    },
    {
        id: "06",
        category: "EdTech",
        title: "FinX Learning Institute",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        size: "small",
        gradient: "from-[var(--magenta-400)] to-[var(--coral-500)]",
    },
];

export default function Portfolio() {
    return (
        <section className="relative py-16 md:py-32 bg-[#050505] text-white overflow-hidden" id="work">
            {/* Premium background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[var(--coral-500)]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--magenta-500)]/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <Sparkles size={14} className="text-[var(--orange-500)]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                Selected Work
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Showcasing our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">
                                creative journey
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            From <span className="text-white font-medium">Real Estate platforms</span> to <span className="text-white font-medium">Web Applications</span> and <span className="text-white font-medium">E-Commerce</span> solutions — we deliver results.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <Button variant="glass" size="md" className="px-5 py-2.5" icon={<ArrowUpRight size={18} />}>
                            View All Projects
                        </Button>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-3xl cursor-pointer ${project.size === 'wide' ? 'md:col-span-2' : ''}`}
                        >
                            {/* Glass border effect */}
                            <div className="absolute inset-0 rounded-3xl border border-white/[0.08] z-10 pointer-events-none" />

                            {/* Image container */}
                            <div className={`relative w-full ${project.size === 'wide' ? 'h-[400px] md:h-[500px]' : 'h-[350px] md:h-[450px]'}`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Content overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    {/* Top - Category tag */}
                                    <div className="flex justify-between items-start">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                                            {project.category}
                                        </span>
                                        <span className="text-white/40 font-mono text-sm">
                                            {project.id}
                                        </span>
                                    </div>

                                    {/* Bottom - Title and arrow */}
                                    <div className="flex justify-between items-end">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                                {project.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                Click to view case study
                                            </p>
                                        </div>

                                        {/* Arrow button */}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className={`w-14 h-14 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-45`}
                                        >
                                            <ArrowUpRight size={24} className="text-white" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-12 md:hidden">
                    <Button variant="gradient" size="lg" className="w-full px-7 py-3.5" icon={<ArrowUpRight size={18} />}>
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
