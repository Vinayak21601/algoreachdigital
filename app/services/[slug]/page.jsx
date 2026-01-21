"use client";
import React, { useState, Suspense, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/ContactModal";
import ContactForm from "@/components/ContactForm";
import { servicesData } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Dynamically import 3D component to avoid SSR issues
const ServiceHero3D = dynamic(() => import("@/components/ServiceHero3D"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
    ),
});

// Color mapping for 3D scene based on service gradient
const colorMap = {
    "digital-marketing": { primary: "#f97316", secondary: "#f43f5e" },
    "performance-marketing": { primary: "#f43f5e", secondary: "#d946ef" },
    "social-media-management": { primary: "#d946ef", secondary: "#f97316" },
    "app-development": { primary: "#f97316", secondary: "#d946ef" },
    "website-webapp-development": { primary: "#f43f5e", secondary: "#f97316" },
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick, gradient }) => (
    <motion.div
        initial={false}
        className="border-b border-white/10"
    >
        <button
            onClick={onClick}
            className="w-full py-6 flex justify-between items-center text-left group"
        >
            <span className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors pr-4">{question}</span>
            <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? `bg-gradient-to-r ${gradient}` : 'bg-white/10'}`}
            >
                <ChevronDown size={18} className="text-white" />
            </motion.div>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);


export default function ServiceDetail() {
    const params = useParams();
    const service = servicesData[params.slug];
    const [openFAQ, setOpenFAQ] = useState(null);
    const { openModal } = useContactModal();
    const colors = colorMap[params.slug] || { primary: "#f97316", secondary: "#ec4899" };

    if (!service) {
        return (
            <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <Link href="/#services">
                    <Button variant="outline">Back to Services</Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="bg-[#030303] min-h-screen text-white overflow-x-hidden">
                {/* 1. HERO SECTION WITH 3D BACKGROUND */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* 3D Background */}
                    <Suspense fallback={<div className="absolute inset-0 bg-[#030303]" />}>
                        <ServiceHero3D primaryColor={colors.primary} secondaryColor={colors.secondary} />
                    </Suspense>

                    {/* Additional gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent z-[1]" />

                    <div className="container mx-auto px-6 relative z-10 pt-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                            >
                                <Link href="/#services" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                                    <ArrowLeft size={14} className="text-gray-400" />
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">All Services</span>
                                </Link>
                            </motion.div>

                            {/* Floating Icon Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotateY: 0,
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.1 },
                                    scale: { duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 },
                                    rotateY: { duration: 0.8, delay: 0.1 },
                                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                                }}
                                className={`w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-white/20`}
                            >
                                <service.icon size={52} className="text-white drop-shadow-lg" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className={`text-sm font-bold uppercase tracking-widest mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}
                            >
                                {service.subtitle}
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.55 }}
                                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
                            >
                                {service.longDescription}
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    icon={<ArrowUpRight size={20} />}
                                    onClick={openModal}
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. STATS RIBBON */}
                <section className="py-12 border-y border-white/10 bg-white/[0.02]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
                            {service.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <p className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-2">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. FEATURES GRID */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
                                <Sparkles size={14} className="text-[var(--orange-500)]" />
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">What We Deliver</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold">Core Capabilities</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <feature.icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. BENEFITS SECTION */}
                <section className="py-24 bg-white/[0.02] border-y border-white/[0.05]">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
                                    <CheckCircle2 size={14} className="text-green-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">The Value</span>
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us for {service.title}?</h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We go beyond just delivering a service. We become a strategic partner invested in your success, providing expertise, transparency, and a relentless focus on achieving your business goals.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10"
                                    >
                                        <benefit.icon size={24} className={`mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`} style={{ stroke: 'url(#icon-gradient)' }} />
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 opacity-80`}>
                                            <benefit.icon size={20} className="text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-gray-500">{benefit.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. PROCESS SECTION */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Methodology</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold">How We Work</h2>
                        </div>

                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                                {service.process.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
                                    >
                                        <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-100 transition-opacity mb-4`}>
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-500">{step.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ SECTION */}
                <section className="py-24 bg-white/[0.02] border-y border-white/[0.05]">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="lg:sticky lg:top-32 self-start">
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Got Questions?</span>
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                                <p className="text-gray-400 text-lg">
                                    Can't find what you're looking for? Feel free to reach out to our team directly using the contact form.
                                </p>
                            </div>
                            <div>
                                {service.faqs.map((faq, index) => (
                                    <FAQItem
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openFAQ === index}
                                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                        gradient={service.gradient}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. CONTACT FORM SECTION */}
                <section className="py-24 relative overflow-hidden">
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b ${service.gradient} opacity-[0.07] blur-[150px] rounded-full pointer-events-none`} />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-3xl mx-auto">
                            <ContactForm serviceName={service.title} gradient={service.gradient} />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
