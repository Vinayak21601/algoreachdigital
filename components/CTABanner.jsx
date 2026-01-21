"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { useContactModal } from "./ContactModal";

export default function CTABanner({
    title = "Ready to Grow Your Business?",
    subtitle = "Let's build something amazing together.",
    buttonText = "Start Your Project",
    variant = "gradient" // "gradient" | "glass" | "minimal"
}) {
    const { openModal } = useContactModal();

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--magenta-500)]/10 via-[var(--coral-500)]/15 to-[var(--orange-500)]/10 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative p-10 md:p-16 rounded-[2rem] overflow-hidden ${variant === "gradient"
                        ? "bg-gradient-to-br from-[var(--orange-500)]/20 via-[var(--coral-500)]/15 to-[var(--magenta-500)]/20 border border-white/10"
                        : variant === "glass"
                            ? "bg-white/[0.03] backdrop-blur-xl border border-white/10"
                            : "bg-transparent"
                        }`}
                >
                    {/* Decorative floating elements */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 md:right-20 hidden md:block"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--orange-500)] to-[var(--coral-500)] flex items-center justify-center shadow-2xl opacity-80">
                            <Rocket size={28} className="text-white" />
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute bottom-10 left-10 md:left-20 hidden md:block"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--magenta-500)] to-[var(--coral-500)] flex items-center justify-center shadow-xl opacity-60">
                            <Sparkles size={20} className="text-white" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center max-w-3xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                            {title.split(" ").map((word, i) => (
                                <span key={i}>
                                    {i === title.split(" ").length - 1 ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">
                                            {word}
                                        </span>
                                    ) : (
                                        word + " "
                                    )}
                                </span>
                            ))}
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto">
                            {subtitle}
                        </p>
                        <Button
                            variant="white"
                            size="lg"
                            icon={<ArrowUpRight size={20} />}
                            onClick={openModal}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
