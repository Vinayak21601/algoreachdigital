"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Target, TrendingUp, Users, Globe, BarChart3, Zap, Mail, PieChart, Share2 } from "lucide-react";
import { Button } from "./ui/Button";

const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "GrowthBase", logo: "GB" },
    { name: "ScaleUp", logo: "SU" },
    { name: "DataFlow", logo: "DF" },
    { name: "BrandX", logo: "BX" },
];

const services = [
    { icon: Target, label: "Targeted Ads", color: "from-[var(--orange-500)] to-[var(--coral-500)]" },
    { icon: TrendingUp, label: "SEO Growth", color: "from-green-400 to-emerald-500" },
    { icon: Share2, label: "Social Media", color: "from-[var(--magenta-500)] to-purple-500" },
    { icon: Mail, label: "Email Campaigns", color: "from-blue-400 to-cyan-500" },
    { icon: BarChart3, label: "Analytics", color: "from-yellow-400 to-orange-500" },
    { icon: PieChart, label: "Reporting", color: "from-pink-400 to-rose-500" },
];

export default function TrustBanner() {
    return (
        <section className="py-16 bg-[#030303] relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[var(--orange-500)]/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-[var(--magenta-500)]/5 blur-[80px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Clients strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-6">
                        Trusted by Forward-Thinking Brands
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 font-bold text-lg hover:bg-white/10 hover:text-white transition-all cursor-default"
                            >
                                {client.logo}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Service pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -3 }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 cursor-default group transition-all`}
                        >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                <service.icon size={16} className="text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                {service.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
