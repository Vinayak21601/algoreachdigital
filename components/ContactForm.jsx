"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

export default function ContactForm({ serviceName = "our services", gradient = "from-[var(--orange-500)] to-[var(--coral-500)]" }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center"
            >
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}>
                    <CheckCircle2 size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-400 text-lg">
                    Your enquiry has been submitted successfully. Our team will get back to you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
        >
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    Let's Discuss <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{serviceName}</span>
                </h3>
                <p className="text-gray-400">
                    Fill out the form below and our experts will reach out to you promptly.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] transition-colors"
                    />
                </div>

                {/* Email */}
                <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] transition-colors"
                    />
                </div>

                {/* Phone */}
                <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] transition-colors"
                    />
                </div>

                {/* Company */}
                <div className="relative">
                    <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name (Optional)"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] transition-colors"
                    />
                </div>
            </div>

            {/* Message */}
            <div className="relative mb-8">
                <MessageSquare size={18} className="absolute left-4 top-5 text-gray-500" />
                <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--coral-500)] transition-colors resize-none"
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isSubmitting}
                icon={<Send size={18} />}
            >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
        </motion.form>
    );
}
