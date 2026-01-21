"use client";
import React from "react";




export default function MarqueeStrip() {
    const items = [
        "SEO Optimization",
        "PPC Campaigns",
        "Social Media Ads",
        "Content Marketing",
        "Email Automation",
        "Conversion Optimization",
        "Brand Strategy",
        "Web Development",
        "App Development",
        "Analytics & Reporting",
    ];

    return (
        <section className="py-8 bg-[#030303] border-y border-white/[0.05] overflow-hidden relative">

            <div className="flex whitespace-nowrap animate-marquee-fast">
                {[...Array(3)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex items-center">
                        {items.map((item, i) => (
                            <div key={`${repeatIndex}-${i}`} className="flex items-center mx-6">
                                <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-gray-500 hover:text-white transition-colors cursor-default">
                                    {item}
                                </span>
                                <span className="mx-6 text-[var(--coral-500)] text-lg">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee-fast {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee-fast {
                    animation: marquee-fast 25s linear infinite;
                }
            `}</style>
        </section>
    );
}
