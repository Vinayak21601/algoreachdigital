"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Rocket } from "lucide-react";

// Mock Data
const projects = [
    { title: "FinX Institute", desc: "Revolutionizing Ed-Tech with a course platform.", href: "/work/finx", image: "/projects/finx-thumb.jpg", tag: "EdTech" },
    { title: "Lykis Limited", desc: "E-commerce experience & redesign.", href: "/work/lykis", image: "/projects/lykis-thumb.jpg", tag: "E-Commerce" },
    { title: "PropVista Realty", desc: "Modern real estate platform with virtual tours.", href: "/work/propvista", image: "/projects/propvista-thumb.jpg", tag: "Real Estate" },
    { title: "HomeScape Pro", desc: "Property management web application.", href: "/work/homescape", image: "/projects/homescape-thumb.jpg", tag: "Real Estate" },
    { title: "TaskFlow App", desc: "Enterprise project management SaaS.", href: "/work/taskflow", image: "/projects/taskflow-thumb.jpg", tag: "Web App" },
    { title: "CloudSync Dashboard", desc: "Real-time analytics & monitoring platform.", href: "/work/cloudsync", image: "/projects/cloudsync-thumb.jpg", tag: "Web App" },
];

const blogs = [
    {
        title: "10 UX Design Trends That Will Dominate 2026",
        excerpt: "Discover the cutting-edge design patterns that are reshaping digital experiences.",
        category: "Design",
        date: "Jan 15, 2026",
        href: "/blog/ux-trends-2026",
    },
    {
        title: "How AI is Revolutionizing Digital Marketing",
        excerpt: "From predictive analytics to automated content, AI is changing the game.",
        category: "Marketing",
        date: "Jan 12, 2026",
        href: "/blog/ai-digital-marketing",
    },
    {
        title: "Building Scalable Web Apps with Next.js 16",
        excerpt: "A deep dive into the latest features and best practices for enterprise apps.",
        category: "Development",
        date: "Jan 10, 2026",
        href: "/blog/nextjs-16-guide",
    },
    {
        title: "The Psychology of Color in Branding",
        excerpt: "How strategic color choices can increase conversions by up to 80%.",
        category: "Branding",
        date: "Jan 8, 2026",
        href: "/blog/color-psychology",
    },
    {
        title: "SEO Strategies That Actually Work in 2026",
        excerpt: "Forget outdated tactics. Here's what's driving organic growth now.",
        category: "SEO",
        date: "Jan 5, 2026",
        href: "/blog/seo-strategies-2026",
    },
    {
        title: "Case Study: How We Grew FinX by 400%",
        excerpt: "A behind-the-scenes look at our most successful EdTech campaign.",
        category: "Case Study",
        date: "Jan 2, 2026",
        href: "/blog/finx-case-study",
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();
    const timeoutRef = useRef(null);

    useMotionValueEvent(scrollY, "change", (v) => {
        setIsScrolled(v > 50);
    });

    // Smooth Hover Handlers
    const handleMouseEnter = (menu) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMegaMenu(menu);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMegaMenu(null);
        }, 150);
    };

    return (
        <header className="fixed top-0 inset-x-0 z-[60] flex justify-center p-4 pointer-events-none">
            <div className="w-[95%] max-w-4xl flex flex-col items-center pointer-events-auto">

                {/* Main Nav Pill */}
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onMouseLeave={handleMouseLeave}
                    className={`
                        relative flex items-center justify-between w-full px-8 py-3 rounded-full 
                        bg-white shadow-2xl border border-gray-100 transition-all duration-300
                        ${isScrolled ? "scale-[0.98] py-2.5" : "scale-100"}
                    `}
                >
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 mr-10 bg-white rounded-lg px-2 py-1">
                        <Image
                            src="/logo/algoreach-digital.png"
                            alt="AlgoReach Digital"
                            width={140}
                            height={45}
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                        <Link href="#about" className="hover:text-[var(--coral-500)] transition-colors">
                            Who We Are
                        </Link>

                        <button
                            onMouseEnter={() => handleMouseEnter("work")}
                            className={`flex items-center gap-1 transition-colors ${activeMegaMenu === "work" ? "text-[var(--coral-500)]" : "hover:text-[var(--coral-500)]"}`}
                        >
                            Our Work
                            <ChevronDown size={14} className={`transition-transform ${activeMegaMenu === "work" ? "rotate-180" : ""}`} />
                        </button>

                        <button
                            onMouseEnter={() => handleMouseEnter("blogs")}
                            className={`flex items-center gap-1 transition-colors ${activeMegaMenu === "blogs" ? "text-[var(--coral-500)]" : "hover:text-[var(--coral-500)]"}`}
                        >
                            Blogs
                            <ChevronDown size={14} className={`transition-transform ${activeMegaMenu === "blogs" ? "rotate-180" : ""}`} />
                        </button>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex ml-10">
                        <button className="bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all">
                            Let's Talk
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden ml-4 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </motion.nav>

                {/* Mega Menu Dropdowns */}
                <AnimatePresence>
                    {activeMegaMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
                            onMouseLeave={handleMouseLeave}
                            className="mt-2 w-full bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden p-8"
                        >
                            {activeMegaMenu === "work" ? (
                                <div className="grid grid-cols-12 gap-8">
                                    {/* Featured Project */}
                                    <div className="col-span-5 border-r border-gray-100 pr-8">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral-500)] mb-4">
                                            Featured Case Study
                                        </p>
                                        <div className="group cursor-pointer">
                                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                            </div>
                                            <h4 className="font-bold text-lg text-gray-900">{projects[0].title}</h4>
                                            <p className="text-sm text-gray-500 mb-4">{projects[0].desc}</p>
                                            <Link href={projects[0].href} className="text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-[var(--coral-500)]">
                                                Explore Project <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Other Projects */}
                                    <div className="col-span-7 grid grid-cols-2 gap-6">
                                        {projects.slice(1).map((p) => (
                                            <Link key={p.title} href={p.href} className="group flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all">
                                                <div className="w-12 h-12 rounded-lg bg-[var(--coral-50)] flex items-center justify-center text-[var(--coral-500)] group-hover:bg-[var(--coral-500)] group-hover:text-white transition-colors">
                                                    <Rocket size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm text-gray-900">{p.title}</p>
                                                    <p className="text-xs text-gray-400 mt-1 uppercase">{p.tag}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : activeMegaMenu === "blogs" ? (
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral-500)]">Latest from our Blog</p>
                                        <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-[var(--coral-500)] transition-colors">
                                            View All Articles →
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        {blogs.map((blog) => (
                                            <Link key={blog.title} href={blog.href} className="group p-4 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--coral-500)]">{blog.category}</span>
                                                    <span className="text-gray-300">•</span>
                                                    <span className="text-xs text-gray-400">{blog.date}</span>
                                                </div>
                                                <p className="font-bold text-sm leading-tight text-gray-900 mb-2 group-hover:text-[var(--coral-500)] transition-colors">{blog.title}</p>
                                                <p className="text-xs text-gray-500 line-clamp-2">{blog.excerpt}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-2 w-full bg-[#0a0a0a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden md:hidden"
                        >
                            <div className="flex flex-col p-6">
                                <Link
                                    href="/"
                                    onClick={() => setMobileOpen(false)}
                                    className="py-4 text-lg font-semibold text-white hover:text-[var(--coral-500)] border-b border-white/10 transition-colors"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/#services"
                                    onClick={() => setMobileOpen(false)}
                                    className="py-4 text-lg font-semibold text-white hover:text-[var(--coral-500)] border-b border-white/10 transition-colors"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/#work"
                                    onClick={() => setMobileOpen(false)}
                                    className="py-4 text-lg font-semibold text-white hover:text-[var(--coral-500)] border-b border-white/10 transition-colors"
                                >
                                    Our Work
                                </Link>
                                <Link
                                    href="/blog"
                                    onClick={() => setMobileOpen(false)}
                                    className="py-4 text-lg font-semibold text-white hover:text-[var(--coral-500)] border-b border-white/10 transition-colors"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/#about"
                                    onClick={() => setMobileOpen(false)}
                                    className="py-4 text-lg font-semibold text-white hover:text-[var(--coral-500)] border-b border-white/10 transition-colors"
                                >
                                    About Us
                                </Link>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="mt-6 w-full bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)] text-white py-4 rounded-full font-semibold text-lg shadow-lg"
                                >
                                    Let's Talk
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}