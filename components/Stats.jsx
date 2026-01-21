"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Trophy, Users, Briefcase, Zap, Sparkles } from "lucide-react";

// Animated Counter Component
const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });

    // Parse the numeric part and keep decimal if present
    const numericValue = parseFloat(value.replace(/,/g, ""));
    const isDecimal = value.includes(".");

    useEffect(() => {
        if (inView) {
            motionValue.set(numericValue);
        }
    }, [inView, numericValue, motionValue]);

    // Format the display value
    const [displayValue, setDisplayValue] = React.useState("0");

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (isDecimal) {
                setDisplayValue(latest.toFixed(1));
            } else {
                setDisplayValue(Math.round(latest).toLocaleString());
            }
        });
    }, [springValue, isDecimal]);

    return <span ref={ref}>{displayValue}</span>;
};

const stats = [
    {
        id: 1,
        value: "3.5",
        label: "Projects Completed",
        suffix: "k",
        icon: Briefcase,
        color: "from-blue-400 to-cyan-400"
    },
    {
        id: 2,
        value: "25",
        label: "Industry Awards",
        suffix: "+",
        icon: Trophy,
        color: "from-[var(--orange-500)] to-[var(--coral-500)]"
    },
    {
        id: 3,
        value: "1.5",
        label: "Happy Clients",
        suffix: "k",
        icon: Users,
        color: "from-[var(--magenta-500)] to-purple-500"
    },
    {
        id: 4,
        value: "5",
        label: "Years Experience",
        suffix: "+",
        icon: Zap,
        color: "from-yellow-400 to-orange-500"
    },
];

export default function Stats() {
    return (
        <section className="relative py-12 md:py-24 bg-[#030303] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--magenta-500)]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--orange-500)]/5 blur-[120px] rounded-full" />
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <Sparkles size={14} className="text-[var(--orange-500)]" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                            Proven Results
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        Real impact by the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]">
                            numbers
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        We measure our success by the growth we drive for our partners.
                        Our results speak for themselves.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:bg-white/[0.06] group-hover:scale-[1.02] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                                {/* Hover Gradient Glow */}
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700`} />

                                <div className="flex flex-col items-center text-center relative z-10">
                                    {/* Icon */}
                                    <div className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                        <stat.icon className={`w-8 h-8 text-white opacity-80`} />
                                    </div>

                                    {/* Number */}
                                    <h3 className="text-5xl lg:text-6xl font-black mb-2 flex items-baseline tracking-tighter">
                                        <span className={`bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60`}>
                                            <Counter value={stat.value} />
                                        </span>
                                        <span className={`text-2xl lg:text-3xl ml-1 bg-clip-text text-transparent bg-gradient-to-r ${stat.color} font-bold opacity-80`}>
                                            {stat.suffix}
                                        </span>
                                    </h3>

                                    {/* Label */}
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-300 transition-colors">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
