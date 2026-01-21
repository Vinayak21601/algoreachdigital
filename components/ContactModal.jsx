"use client";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

// Create context for modal state
const ContactModalContext = createContext();

export const useContactModal = () => {
    const context = useContext(ContactModalContext);
    if (!context) {
        throw new Error("useContactModal must be used within a ContactModalProvider");
    }
    return context;
};

export function ContactModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                                >
                                    <X size={20} />
                                </button>

                                {/* Form */}
                                <div className="p-2">
                                    <ContactForm
                                        serviceName="Your Project"
                                        gradient="from-[var(--orange-500)] to-[var(--coral-500)]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </ContactModalContext.Provider>
    );
}
