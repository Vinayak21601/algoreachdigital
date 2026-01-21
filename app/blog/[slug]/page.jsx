"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Facebook, Copy, Tag, ChevronUp, Heart, MessageCircle, Bookmark, Check, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { Button } from "@/components/ui/Button";

// Reading Progress Bar
const ReadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setProgress(scrollPercent);
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)] z-[100] origin-left"
            style={{ scaleX: progress / 100 }}
        />
    );
};

// Floating Action Bar
const FloatingActionBar = ({ liked, bookmarked, onLike, onBookmark, onShare }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                >
                    <button
                        onClick={onLike}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${liked ? 'bg-red-500 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                    >
                        <Heart size={18} fill={liked ? "currentColor" : "none"} />
                    </button>
                    <button
                        onClick={onBookmark}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${bookmarked ? 'bg-[var(--coral-500)] text-white' : 'bg-white/10 hover:bg-white/20'}`}
                    >
                        <Bookmark size={18} fill={bookmarked ? "currentColor" : "none"} />
                    </button>
                    <div className="w-px h-6 bg-white/20 mx-2" />
                    <button
                        onClick={onShare}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    >
                        <Share2 size={18} />
                    </button>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    >
                        <ChevronUp size={18} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Animated Background Particles
const BackgroundParticles = ({ color }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${color} opacity-20`}
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                    }}
                    animate={{
                        y: [null, "-20%", "120%"],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
};

export default function BlogDetailPage() {
    const params = useParams();
    const blog = getBlogBySlug(params.slug);
    const allBlogs = getAllBlogs();
    const relatedBlogs = allBlogs.filter(b => b.slug !== params.slug).slice(0, 3);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy');
        }
    };

    if (!blog) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-6xl font-bold mb-4">404</h1>
                        <p className="text-xl text-gray-400 mb-8">Article Not Found</p>
                        <Link href="/blog">
                            <Button variant="primary">Back to Blog</Button>
                        </Link>
                    </motion.div>
                </div>
                <Footer />
            </>
        );
    }

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
            <ReadingProgress />
            <FloatingActionBar
                liked={liked}
                bookmarked={bookmarked}
                onLike={() => setLiked(!liked)}
                onBookmark={() => setBookmarked(!bookmarked)}
                onShare={handleShare}
            />
            <Navbar />

            <main className="bg-[#030303] min-h-screen text-white">
                {/* Hero Section with Parallax */}
                <motion.section
                    ref={heroRef}
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                    className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
                >
                    {/* Animated Background */}
                    <BackgroundParticles color={categoryColors[blog.category]} />

                    {/* Gradient orbs */}
                    <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br ${categoryColors[blog.category]} opacity-20 blur-[150px] rounded-full pointer-events-none`} />
                    <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr ${categoryColors[blog.category]} opacity-15 blur-[120px] rounded-full pointer-events-none`} />

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

                    <div className="container mx-auto px-6 relative z-10 pt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            {/* Back link */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-sm font-medium">Back to Blog</span>
                                </Link>
                            </motion.div>

                            {/* Category Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mb-8"
                            >
                                <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${categoryColors[blog.category]} text-white shadow-lg`}>
                                    <Sparkles size={14} />
                                    {blog.category}
                                </span>
                            </motion.div>

                            {/* Title with gradient animation */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]"
                            >
                                {blog.title.split(' ').map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.05 }}
                                        className="inline-block mr-3"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Excerpt */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                            >
                                {blog.excerpt}
                            </motion.p>

                            {/* Author & Meta */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${categoryColors[blog.category]} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                                        {blog.author.name.charAt(0)}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-semibold text-lg">{blog.author.name}</p>
                                        <p className="text-sm text-gray-500">{blog.author.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={16} className="text-[var(--coral-500)]" />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={16} className="text-[var(--coral-500)]" />
                                        {blog.readTime}
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-3 bg-white/40 rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Article Content */}
                <section className="relative py-20">
                    {/* Side decorations */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" style={{ left: 'calc(50% - 400px - 60px)' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" style={{ right: 'calc(50% - 400px - 60px)' }} />

                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto">
                            {/* Share buttons */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10"
                            >
                                <span className="text-sm text-gray-500 flex items-center gap-2">
                                    <Share2 size={14} />
                                    Share this article
                                </span>
                                <div className="flex gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1DA1F2] flex items-center justify-center transition-colors"
                                    >
                                        <Twitter size={16} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#0077B5] flex items-center justify-center transition-colors"
                                    >
                                        <Linkedin size={16} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                                    >
                                        <Facebook size={16} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleShare}
                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors relative"
                                    >
                                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Article Body with staggered paragraphs */}
                            <motion.article
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="prose prose-invert prose-lg max-w-none
                                    prose-headings:font-bold prose-headings:text-white
                                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:relative prose-h2:pl-6 prose-h2:border-l-4 prose-h2:border-[var(--coral-500)]
                                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                                    prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3
                                    prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                                    prose-strong:text-white prose-strong:font-semibold
                                    prose-ul:text-gray-300 prose-li:mb-2
                                    prose-a:text-[var(--coral-500)] prose-a:no-underline hover:prose-a:underline
                                    prose-code:text-[var(--coral-500)] prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                                    prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                                    prose-blockquote:border-l-[var(--coral-500)] prose-blockquote:bg-white/5 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                                    prose-table:border-collapse
                                    prose-th:bg-white/10 prose-th:p-4 prose-th:text-left prose-th:font-bold
                                    prose-td:p-4 prose-td:border-t prose-td:border-white/10
                                "
                                dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
                            />

                            {/* Tags */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 pt-8 border-t border-white/10"
                            >
                                <div className="flex items-center gap-3 flex-wrap">
                                    <Tag size={16} className="text-[var(--coral-500)]" />
                                    {blog.tags.map((tag, i) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 rounded-full text-sm bg-white/5 text-gray-400 border border-white/10 hover:border-[var(--coral-500)]/50 hover:text-white cursor-pointer transition-all"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Author Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryColors[blog.category]} flex items-center justify-center text-white text-3xl font-bold shadow-xl`}>
                                        {blog.author.name.charAt(0)}
                                    </div>
                                    <div className="text-center md:text-left flex-1">
                                        <p className="text-xl font-bold text-white mb-1">{blog.author.name}</p>
                                        <p className="text-gray-500 mb-3">{blog.author.role}</p>
                                        <p className="text-gray-400 text-sm">
                                            Passionate about creating exceptional digital experiences that drive results.
                                        </p>
                                    </div>
                                    <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-medium">
                                        Follow
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="container mx-auto px-6 pb-24">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[blog.category]} flex items-center justify-center`}>
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold">More to Explore</h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedBlogs.map((relatedBlog, index) => (
                                <motion.div
                                    key={relatedBlog.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group"
                                >
                                    <Link href={`/blog/${relatedBlog.slug}`} className="block h-full">
                                        <div className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all relative overflow-hidden">
                                            {/* Hover gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[relatedBlog.category]} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[relatedBlog.category]}`} />
                                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                        {relatedBlog.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--orange-500)] group-hover:to-[var(--coral-500)] transition-all line-clamp-2">
                                                    {relatedBlog.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                                    {relatedBlog.excerpt}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                                    <Clock size={12} />
                                                    {relatedBlog.readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

// Helper function to convert markdown-like content to HTML
function formatContent(content) {
    return content
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[huploi])/gim, '<p>')
        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>');
}
