"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ];

    const companyLinks = [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
    ];

    const serviceLinks = [
        { label: "UI/UX Design", href: "#" },
        { label: "Web Development", href: "#" },
        { label: "SEO Optimization", href: "#" },
        { label: "Digital Marketing", href: "#" },
    ];

    return (
        <footer className="relative bg-[#030303] pt-12 md:pt-24 pb-8 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-r from-[var(--magenta-500)]/5 via-[var(--coral-500)]/5 to-[var(--orange-500)]/5 blur-[150px] rounded-full" />
            </div>

            {/* Animated Marquee Banner */}
            <div className="relative mb-20 overflow-hidden py-6">
                {/* Gradient borders */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--coral-500)]/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--coral-500)]/50 to-transparent" />

                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center mx-8">
                            <span className="text-4xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">
                                Let's Connect
                            </span>
                            <span className="mx-6 text-[var(--coral-500)]">✦</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Main footer grid */}
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Info - Larger column */}
                    <div className="md:col-span-4">
                        <Link href="/" className="mb-8 inline-block bg-white rounded-xl px-4 py-2">
                            <Image
                                src="/logo/algoreach-digital.png"
                                alt="AlgoReach Digital"
                                width={180}
                                height={50}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            Bold creativity.<br />
                            Data-driven strategies.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] to-[var(--coral-500)] font-semibold">
                                Impactful results.
                            </span>
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[var(--orange-500)] hover:to-[var(--coral-500)] hover:border-transparent transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[var(--orange-500)] to-[var(--coral-500)] transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[var(--coral-500)] to-[var(--magenta-500)] transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="md:col-span-4">
                        <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
                        <p className="text-gray-400 mb-6">
                            Subscribe to get the latest agency updates, insights, and creative inspiration.
                        </p>

                        <form className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] focus:ring-1 focus:ring-[var(--coral-500)] transition-all"
                                />
                            </div>
                            <Button variant="primary" size="md" className="w-full" icon={<MoveRight size={18} />}>
                                Subscribe
                            </Button>
                        </form>

                        {/* Contact info */}
                        <div className="mt-8 space-y-3">
                            <a href="mailto:hello@algoreachdigital.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail size={16} className="text-[var(--coral-500)]" />
                                <span className="text-sm">hello@algoreachdigital.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} AlgoReach Digital. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>

            {/* Marquee animation keyframes */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </footer>
    );
}
