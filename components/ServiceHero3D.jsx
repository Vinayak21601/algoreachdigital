"use client";
import React, { useRef, useMemo, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Trail, Sparkles, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

// Glowing orb with trail effect
const GlowingOrb = memo(function GlowingOrb({ position, color, size = 0.3, speed = 1 }) {
    const meshRef = useRef();
    const initialPosition = useMemo(() => new THREE.Vector3(...position), [position]);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime * speed;
            meshRef.current.position.x = initialPosition.x + Math.sin(t) * 1.5;
            meshRef.current.position.y = initialPosition.y + Math.cos(t * 1.3) * 1;
            meshRef.current.position.z = initialPosition.z + Math.sin(t * 0.7) * 0.5;
        }
    });

    return (
        <Trail
            width={2}
            length={8}
            color={color}
            attenuation={(t) => t * t}
        >
            <mesh ref={meshRef} position={position}>
                <sphereGeometry args={[size, 16, 16]} />
                <meshBasicMaterial color={color} toneMapped={false} />
            </mesh>
        </Trail>
    );
});

// Pulsing core sphere
const PulsingCore = memo(function PulsingCore({ color, secondaryColor }) {
    const meshRef = useRef();
    const glowRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
            meshRef.current.scale.setScalar(pulse);
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
        }
        if (glowRef.current) {
            const glowPulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.2 + 1.3;
            glowRef.current.scale.setScalar(glowPulse);
        }
    });

    return (
        <group>
            {/* Inner glow */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[1.8, 32, 32]} />
                <meshBasicMaterial color={color} transparent opacity={0.1} />
            </mesh>

            {/* Main distorted sphere */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sphere ref={meshRef} args={[1.2, 64, 64]}>
                    <MeshDistortMaterial
                        color={color}
                        attach="material"
                        distort={0.5}
                        speed={3}
                        roughness={0.2}
                        metalness={0.9}
                        emissive={color}
                        emissiveIntensity={0.3}
                    />
                </Sphere>
            </Float>

            {/* Orbiting ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.02, 16, 100]} />
                <meshBasicMaterial color={secondaryColor} transparent opacity={0.6} />
            </mesh>
        </group>
    );
});

// Swirling particles in a vortex pattern
const VortexParticles = memo(function VortexParticles({ count = 300, color }) {
    const pointsRef = useRef();

    const { positions, speeds } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 8;
            const radius = 2 + (i / count) * 4;
            const height = (Math.random() - 0.5) * 6;

            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = height;
            pos[i * 3 + 2] = Math.sin(angle) * radius;
            spd[i] = 0.5 + Math.random() * 0.5;
        }
        return { positions: pos, speeds: spd };
    }, [count]);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2;

            const posArray = pointsRef.current.geometry.attributes.position.array;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                const x = posArray[i3];
                const z = posArray[i3 + 2];
                const angle = Math.atan2(z, x) + 0.01 * speeds[i];
                const radius = Math.sqrt(x * x + z * z);
                posArray[i3] = Math.cos(angle) * radius;
                posArray[i3 + 2] = Math.sin(angle) * radius;
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color={color}
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
});

// Floating geometric shapes
const FloatingShapes = memo(function FloatingShapes({ color }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.1;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    const shapes = useMemo(() => [
        { position: [3, 2, -2], rotation: [0, 0, 0], scale: 0.3 },
        { position: [-3.5, -1.5, -1], rotation: [1, 0, 0], scale: 0.25 },
        { position: [2.5, -2, 1], rotation: [0, 1, 0], scale: 0.2 },
        { position: [-2, 2.5, 0], rotation: [0, 0, 1], scale: 0.35 },
    ], []);

    return (
        <group ref={group}>
            {shapes.map((shape, i) => (
                <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={shape.position} rotation={shape.rotation} scale={shape.scale}>
                        <octahedronGeometry args={[1, 0]} />
                        <MeshWobbleMaterial
                            color={color}
                            factor={0.4}
                            speed={2}
                            metalness={0.8}
                            roughness={0.2}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
});

// Energy beams connecting to center
const EnergyBeams = memo(function EnergyBeams({ color }) {
    const beamsRef = useRef();

    useFrame((state) => {
        if (beamsRef.current) {
            beamsRef.current.rotation.z = state.clock.elapsedTime * 0.5;
        }
    });

    return (
        <group ref={beamsRef}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <mesh key={i} rotation={[0, 0, (i / 6) * Math.PI * 2]}>
                    <planeGeometry args={[0.02, 6]} />
                    <meshBasicMaterial
                        color={color}
                        transparent
                        opacity={0.3}
                        blending={THREE.AdditiveBlending}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    );
});

// Main Scene
const Scene = memo(function Scene({ primaryColor, secondaryColor }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[0, 0, 0]} color={primaryColor} intensity={2} distance={10} />
            <pointLight position={[5, 5, 5]} color={secondaryColor} intensity={1} />
            <pointLight position={[-5, -5, -5]} color={primaryColor} intensity={0.5} />

            {/* Central pulsing core */}
            <PulsingCore color={primaryColor} secondaryColor={secondaryColor} />

            {/* Orbiting glowing orbs with trails */}
            <GlowingOrb position={[3, 0, 0]} color={secondaryColor} size={0.2} speed={0.8} />
            <GlowingOrb position={[-2, 2, 1]} color={primaryColor} size={0.15} speed={1.2} />
            <GlowingOrb position={[1, -2, -2]} color={secondaryColor} size={0.18} speed={1} />

            {/* Swirling vortex particles */}
            <VortexParticles count={250} color={primaryColor} />

            {/* Floating octahedrons */}
            <FloatingShapes color={secondaryColor} />

            {/* Energy beams */}
            <EnergyBeams color={primaryColor} />

            {/* Sparkle effects */}
            <Sparkles
                count={100}
                scale={8}
                size={3}
                speed={0.4}
                opacity={0.6}
                color={primaryColor}
            />
            <Sparkles
                count={50}
                scale={6}
                size={2}
                speed={0.6}
                opacity={0.4}
                color={secondaryColor}
            />
        </>
    );
});

export default function ServiceHero3D({ primaryColor = "#f97316", secondaryColor = "#ec4899" }) {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 50 }}
                style={{ background: "transparent" }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene primaryColor={primaryColor} secondaryColor={secondaryColor} />
            </Canvas>
            {/* Gradient overlays for depth and text readability */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030303_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/20 via-transparent to-[#030303]/95 pointer-events-none" />
        </div>
    );
}
