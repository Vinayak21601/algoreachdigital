"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllBlogs } from "@/lib/blogs";

export default function BlogPage() {
    const blogs = getAllBlogs();
    const featuredBlog = blogs[0];
    const otherBlogs = blogs.slice(1);

    const categoryColors = {
        "Design": "from-purple-500 to-pink-500",
        "Marketing": "from-orange-500 to-red-500",
        "Development": "from-blue-500 to-cyan-500",
        "Branding": "from-yellow-500 to-orange-500",
        "SEO": "from-green-500 to-emerald-500",
        "Case Study": "from-[var(--coral-500)] to-[var(--magenta-500)]",
    };

    return (
        <>
            <Navbar />
            <main className="bg-[#030303] min-h-screen text-white pt-32 pb-24">
                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <Sparkles size={14} className="text-[var(--coral-500)]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                                Insights & Resources
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Expert insights on digital marketing, design, development, and growth strategies to help your business thrive.
                        </p>
                    </motion.div>
                </section>

                {/* Featured Blog */}
                <section className="container mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href={`/blog/${featuredBlog.slug}`} className="group block">
                            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-8 md:p-12 hover:border-white/20 transition-all">
                                {/* Background gradient */}
                                <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${categoryColors[featuredBlog.category]} opacity-10 blur-[100px] rounded-full`} />

                                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${categoryColors[featuredBlog.category]} text-white`}>
                                                Featured
                                            </span>
                                            <span className="text-sm text-gray-400">{featuredBlog.category}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--orange-500)] group-hover:to-[var(--coral-500)] transition-all">
                                            {featuredBlog.title}
                                        </h2>
                                        <p className="text-gray-400 text-lg mb-6 line-clamp-2">
                                            {featuredBlog.excerpt}
                                        </p>
                                        <div className="flex items-center gap-6 text-sm text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                {featuredBlog.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock size={14} />
                                                {featuredBlog.readTime}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[var(--orange-500)] group-hover:to-[var(--coral-500)] transition-all">
                                            <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </section>

                {/* Blog Grid */}
                <section className="container mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link href={`/blog/${blog.slug}`} className="group block h-full">
                                    <div className="h-full flex flex-col p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all">
                                        {/* Category badge */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[blog.category]}`} />
                                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                {blog.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--coral-500)] transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">
                                            {blog.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-xs text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {blog.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                {blog.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="container mx-auto px-6 mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--orange-500)]/20 via-[var(--coral-500)]/15 to-[var(--magenta-500)]/20 border border-white/10 p-12 text-center"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Get the latest insights on digital marketing, design, and development delivered straight to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] transition-colors"
                                />
                                <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
