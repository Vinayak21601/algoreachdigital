"use client";
import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * Premium Button Component
 * 
 * Variants: primary, secondary, outline, ghost, dark, gradient, glass
 * Sizes: xs, sm, md, lg, xl
 */
export const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    icon,
    iconPosition = "right",
    onClick,
    ...props
}) => {
    // Base styles with premium micro-interactions
    const baseStyles = `
        relative inline-flex items-center justify-center gap-2 
        font-semibold tracking-wide
        transition-all duration-300 ease-out
        cursor-pointer select-none
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
        overflow-hidden
    `;

    // Size variants
    const sizes = {
        xs: "px-3 py-1.5 text-xs rounded-lg gap-1",
        sm: "px-4 py-2 text-sm rounded-xl gap-1.5",
        md: "px-6 py-3 text-base rounded-xl gap-2",
        lg: "px-8 py-4 text-lg rounded-2xl gap-2.5",
        xl: "px-10 py-5 text-xl rounded-2xl gap-3",
    };

    // Premium variant styles
    const variants = {
        primary: `
            bg-gradient-to-r from-[var(--orange-500)] via-[var(--coral-500)] to-[var(--magenta-500)]
            text-white font-bold
            shadow-[0_4px_20px_rgba(240,65,102,0.4)]
            hover:shadow-[0_6px_30px_rgba(240,65,102,0.6)]
            hover:scale-[1.02]
            focus:ring-[var(--coral-500)]
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity
        `,
        secondary: `
            bg-white/10 backdrop-blur-md
            text-white
            border border-white/20
            hover:bg-white/20 hover:border-white/40
            hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]
            focus:ring-white/50
        `,
        outline: `
            bg-transparent
            border-2 border-[var(--coral-500)]
            text-[var(--coral-500)]
            hover:bg-[var(--coral-500)] hover:text-white
            hover:shadow-[0_4px_20px_rgba(240,65,102,0.4)]
            focus:ring-[var(--coral-500)]
        `,
        ghost: `
            bg-transparent
            text-white/80
            hover:text-white hover:bg-white/10
            focus:ring-white/30
        `,
        dark: `
            bg-black
            text-white
            border border-white/10
            hover:bg-white hover:text-black
            hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]
            focus:ring-white
        `,
        gradient: `
            bg-gradient-to-r from-[var(--magenta-500)] via-[var(--coral-500)] to-[var(--orange-500)]
            text-white font-bold
            shadow-[0_4px_25px_rgba(200,34,255,0.4)]
            hover:shadow-[0_8px_40px_rgba(200,34,255,0.6)]
            hover:scale-[1.03]
            focus:ring-[var(--magenta-500)]
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700
        `,
        glass: `
            bg-white/5 backdrop-blur-xl
            text-white
            border border-white/10
            shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
            hover:bg-white/10 hover:border-white/20
            hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
            focus:ring-white/30
        `,
        white: `
            bg-white
            text-black font-bold
            hover:bg-gray-100
            hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]
            hover:scale-[1.02]
            focus:ring-white
        `,
        lime: `
            bg-[#CBFC01]
            text-black font-bold
            shadow-[0_4px_20px_rgba(203,252,1,0.3)]
            hover:shadow-[0_8px_30px_rgba(203,252,1,0.5)]
            hover:scale-[1.02]
            focus:ring-[#CBFC01]
        `,
    };

    // Loading spinner
    const LoadingSpinner = () => (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1 }}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            className={cn(baseStyles, sizes[size], variants[variant], className)}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <LoadingSpinner />}
            {icon && iconPosition === "left" && !loading && icon}
            <span className="relative z-10">{children}</span>
            {icon && iconPosition === "right" && !loading && icon}
        </motion.button>
    );
};

/**
 * Icon Button - Circular button for icons only
 */
export const IconButton = ({
    children,
    className,
    variant = "ghost",
    size = "md",
    onClick,
    ...props
}) => {
    const sizes = {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-14 h-14 text-xl",
    };

    const variants = {
        ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/10",
        glass: "bg-white/5 backdrop-blur-xl text-white border border-white/10 hover:bg-white/10",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black",
        primary: "bg-gradient-to-r from-[var(--orange-500)] to-[var(--coral-500)] text-white shadow-lg hover:shadow-xl",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "rounded-full flex items-center justify-center transition-all duration-300",
                sizes[size],
                variants[variant],
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

/**
 * Button Group - For grouping multiple buttons together
 */
export const ButtonGroup = ({ children, className }) => {
    return (
        <div className={cn("inline-flex rounded-xl overflow-hidden", className)}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    className: cn(
                        child.props.className,
                        "rounded-none first:rounded-l-xl last:rounded-r-xl",
                        index > 0 && "border-l-0"
                    ),
                })
            )}
        </div>
    );
};
