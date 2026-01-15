"use client";
import React, { useRef, useEffect } from "react";

export const GravityGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        let points = [];
        const spacing = 35; // Tighter grid for more detail
        const mouse = { x: -1000, y: -1000, radius: 200 };

        // Brand Colors
        const colors = {
            base: "rgba(255, 255, 255, 0.1)",
            magenta: "#d946ef", // magenta-500
            coral: "#fb7185",   // coral-500
            orange: "#f97316"   // orange-500
        };

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            points = [];
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    points.push({ x, y, originalX: x, originalY: y });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            points.forEach((p) => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    p.x -= dx * force * 0.15;
                    p.y -= dy * force * 0.15;

                    // Color shift based on distance (closer = more orange/magenta)
                    const colorStep = dist / mouse.radius;
                    ctx.fillStyle = dist < mouse.radius / 2 ? colors.orange : colors.magenta;
                    ctx.globalAlpha = 0.8;
                } else {
                    p.x += (p.originalX - p.x) * 0.05;
                    p.y += (p.originalY - p.y) * 0.05;
                    ctx.fillStyle = colors.base;
                    ctx.globalAlpha = 0.3;
                }

                ctx.beginPath();
                // Slightly larger dots for the "active" brand color ones
                const size = dist < mouse.radius ? 1.5 : 0.8;
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", init);
        window.addEventListener("mousemove", handleMouseMove);
        init();
        draw();

        return () => {
            window.removeEventListener("resize", init);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};