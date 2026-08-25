import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Download, Eye, Sparkles, Code2, Cpu, Smartphone, Award, Terminal } from "lucide-react";
import profileImg from "../assets/Sameer Ahmed G.jpg";
import ResumeModal from "./ResumeModal";

const dynamicRoles = [
    "React Native & Mobile Developer",
    "Full Stack Software Engineer",
    "AI & Computer Vision Builder",
    "Go & MERN Backend Engineer"
];

const highlights = [
    { label: "Flagship Projects", value: "12+", icon: Code2 },
    { label: "Trained ML Models", value: "7+", icon: Cpu },
    { label: "Industry Internships", value: "4", icon: Smartphone },
    { label: "Academic CGPA", value: "9.35", icon: Award }
];

export default function Hero() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="home" className="w-full min-h-screen flex items-center justify-center pt-28 pb-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-12 lg:gap-16">

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{ borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)" }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border text-xs sm:text-sm font-medium mb-6 shadow-lg"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                ></span>
                                <span
                                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                ></span>
                            </span>
                            <span style={{ color: "var(--color-accent)" }} className="font-semibold">
                                Available for new engineering opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Sameer <span style={{ color: "var(--color-accent)" }}>Ahmed G</span>
                        </motion.h1>

                        {/* Dynamic Animated Role Headline */}
                        <div className="h-12 md:h-14 flex items-center mb-5 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={currentRoleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent flex items-center gap-2"
                                >
                                    <Sparkles size={20} className="shrink-0" style={{ color: "var(--color-accent)" }} />
                                    <span>{dynamicRoles[currentRoleIndex]}</span>
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <motion.p
                            className="text-base sm:text-lg text-slate-400 max-w-xl mb-9 leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Engineering high-performance mobile apps with <strong className="text-slate-200 font-semibold">React Native & Expo</strong>, intelligent AI architectures, and resilient full-stack systems with <strong className="text-slate-200 font-semibold">Go & modern Web tech</strong>.
                        </motion.p>

                        {/* Action CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full sm:w-auto mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <a
                                href="#projects"
                                style={{
                                    backgroundColor: "var(--color-accent)",
                                    color: "var(--color-slate-950)",
                                }}
                                className="px-7 py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] flex items-center justify-center w-full sm:w-auto text-sm"
                            >
                                View Projects
                            </a>
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="px-6 py-3 rounded-xl bg-slate-900/90 border transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-slate-800 text-sm font-semibold shadow-lg group"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                    color: "var(--color-accent)"
                                }}
                            >
                                <Eye size={17} className="group-hover:scale-110 transition-transform" />
                                View Resume
                            </button>
                            <a
                                href="#contact"
                                className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700/60 hover:border-slate-600 transition-all flex items-center justify-center w-full sm:w-auto text-sm"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Quick Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-800/60"
                        >
                            {highlights.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50 flex flex-col items-center md:items-start"
                                    >
                                        <div className="flex items-center gap-1.5 text-xs font-semibold mb-1" style={{ color: "var(--color-accent)" }}>
                                            <Icon size={14} />
                                            <span className="text-base font-extrabold text-white">{item.value}</span>
                                        </div>
                                        <span className="text-[11px] text-slate-400 font-medium">{item.label}</span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Profile Image with Enhanced Outer Ambient Glow and Floating Orbitals */}
                    <motion.div
                        className="flex-shrink-0 order-1 md:order-2 relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.35 }}
                    >
                        <div className="relative group">
                            {/* Outer Ambient Breathing Pulse */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.12, 1],
                                    opacity: [0.35, 0.65, 0.35]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-4 rounded-full blur-3xl pointer-events-none"
                                style={{
                                    backgroundColor: "var(--color-accent)",
                                }}
                            />

                            {/* Floating Orbital Badge 1: React Native */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 3, 0]
                                }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md text-xs font-bold text-slate-200"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                    boxShadow: `0 8px 25px color-mix(in srgb, var(--color-accent) 20%, transparent)`
                                }}
                            >
                                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                                <span>React Native & Expo</span>
                            </motion.div>

                            {/* Floating Orbital Badge 2: YOLOv11 & AI */}
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, -3, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="hidden sm:flex absolute -top-2 -right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md text-xs font-bold text-slate-200"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                    boxShadow: `0 8px 25px color-mix(in srgb, var(--color-accent) 20%, transparent)`
                                }}
                            >
                                <Sparkles size={13} style={{ color: "var(--color-accent)" }} />
                                <span>YOLOv11 & AI Vision</span>
                            </motion.div>

                            {/* Floating Orbital Badge 3: Go & Backend */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, -2, 0]
                                }}
                                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="hidden sm:flex absolute -bottom-3 -left-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md text-xs font-bold text-slate-200"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                    boxShadow: `0 8px 25px color-mix(in srgb, var(--color-accent) 20%, transparent)`
                                }}
                            >
                                <Code2 size={13} style={{ color: "var(--color-accent)" }} />
                                <span>Go & Full Stack</span>
                            </motion.div>

                            {/* Floating Orbital Badge 4: Docker & DevOps */}
                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="hidden sm:flex absolute -bottom-2 -right-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md text-xs font-bold text-slate-200"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                    boxShadow: `0 8px 25px color-mix(in srgb, var(--color-accent) 20%, transparent)`
                                }}
                            >
                                <Terminal size={13} style={{ color: "var(--color-accent)" }} />
                                <span>Docker CI/CD</span>
                            </motion.div>

                            <div
                                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2.5 shadow-2xl transition-all duration-500"
                                style={{
                                    background: `linear-gradient(135deg, var(--color-slate-950), var(--color-accent))`,
                                    boxShadow: `0 0 45px color-mix(in srgb, var(--color-accent) 35%, transparent)`
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center overflow-hidden relative shadow-inner">
                                    <img
                                        src={profileImg}
                                        alt="Sameer Ahmed G"
                                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Interactive Resume Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
}
