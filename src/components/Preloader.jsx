import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, Sparkles, Coffee } from "lucide-react";

const CODE_SNIPPETS = [
    "<App />",
    "go run .",
    "yolo.detect()",
    "expo start",
    "git push origin main",
    "prisma.client()",
    "FastAPI.launch()",
    "01101001",
    "SELECT * FROM dreams;"
];

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [floatingCodes, setFloatingCodes] = useState([]);

    const statusMessages = [
        "INITIALIZING WORKSPACE ENVIRONMENT...",
        "CONNECTING TO DEV REPOSITORIES...",
        "COMPILING REACT NATIVE & GO MODULES...",
        "SYNCING YOLOV11 & AI VISION PIPELINES...",
        "OPTIMIZING PRODUCTION GRAPHICS...",
        "BUILD READY: WELCOME TO SAMEER'S PORTFOLIO"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete();
                    }, 400);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 6) + 3;
                const nextVal = Math.min(prev + increment, 100);

                // Update status message based on progress bracket
                const nextStatusIndex = Math.min(
                    Math.floor((nextVal / 100) * statusMessages.length),
                    statusMessages.length - 1
                );
                setStatusIndex(nextStatusIndex);

                return nextVal;
            });
        }, 60);

        // Spawn floating code snippets
        const codeSpawner = setInterval(() => {
            const id = Math.random();
            const text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
            const startX = (Math.random() - 0.5) * 120; // range around laptop

            setFloatingCodes((prev) => [...prev.slice(-5), { id, text, startX }]);
        }, 300);

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onComplete();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            clearInterval(interval);
            clearInterval(codeSpawner);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 select-none overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.03,
                filter: "blur(15px)",
                transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] }
            }}
            onClick={onComplete}
        >
            {/* Background Ambient Glow */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ backgroundColor: "var(--color-accent)" }}
            />

            {/* Technical Grid Accent Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px"
                }}
            />

            <div className="relative flex flex-col items-center justify-center w-full max-w-md px-6 text-center z-10">
                
                {/* Stick Figure Developer Animation Scene */}
                <div className="relative w-64 h-52 flex items-center justify-center">
                    
                    {/* Floating Code Snippets Rising from Laptop */}
                    <AnimatePresence>
                        {floatingCodes.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 15, x: item.startX, scale: 0.6 }}
                                animate={{
                                    opacity: [0, 0.9, 0],
                                    y: -80,
                                    x: item.startX + (Math.random() - 0.5) * 40,
                                    scale: [0.6, 1, 0.8]
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.4, ease: "easeOut" }}
                                className="absolute top-16 pointer-events-none px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-tight bg-slate-900/90 border shadow-lg whitespace-nowrap"
                                style={{
                                    borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                    color: "var(--color-accent)",
                                    boxShadow: `0 0 15px color-mix(in srgb, var(--color-accent) 25%, transparent)`
                                }}
                            >
                                {item.text}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Vector Stick Figure SVG Canvas */}
                    <svg viewBox="0 0 200 160" className="w-full h-full">
                        {/* Laptop Screen Glow Light Cone */}
                        <defs>
                            <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.0" />
                            </linearGradient>
                        </defs>

                        {/* Ambient Light Cone radiating from screen */}
                        <polygon
                            points="95,90 120,40 145,90"
                            fill="url(#screenGlow)"
                            className="pointer-events-none"
                        />

                        {/* Desk Surface */}
                        <line x1="30" y1="110" x2="170" y2="110" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                        <line x1="50" y1="110" x2="50" y2="150" stroke="#1e293b" strokeWidth="2.5" />
                        <line x1="150" y1="110" x2="150" y2="150" stroke="#1e293b" strokeWidth="2.5" />

                        {/* Developer Chair */}
                        <path d="M 65 140 L 75 140 M 70 140 L 70 115 L 60 115 L 60 80" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

                        {/* Stick Figure Head */}
                        <motion.circle
                            cx="76"
                            cy="62"
                            r="11"
                            fill="#090d16"
                            stroke="#e2e8f0"
                            strokeWidth="2.5"
                            animate={{
                                y: [0, 1.5, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Programmer Glasses/Eyes */}
                        <motion.circle
                            cx="81"
                            cy="62"
                            r="2"
                            fill="var(--color-accent)"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        />

                        {/* Stick Figure Spine / Torso */}
                        <motion.path
                            d="M 74 74 L 70 102"
                            stroke="#e2e8f0"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            animate={{ y: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Stick Figure Legs */}
                        <path d="M 70 102 L 85 105 L 88 135" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

                        {/* Left Arm & Forearm Typing */}
                        <motion.path
                            d="M 73 80 L 88 88 L 102 96"
                            fill="none"
                            stroke="#cbd5e1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            animate={{
                                d: [
                                    "M 73 80 L 88 88 L 102 96",
                                    "M 73 80 L 87 84 L 100 94",
                                    "M 73 80 L 88 88 L 102 96"
                                ]
                            }}
                            transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Right Arm & Forearm Typing */}
                        <motion.path
                            d="M 73 80 L 89 84 L 105 95"
                            fill="none"
                            stroke="#f1f5f9"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            animate={{
                                d: [
                                    "M 73 80 L 89 84 L 105 95",
                                    "M 73 80 L 90 90 L 107 97",
                                    "M 73 80 L 89 84 L 105 95"
                                ]
                            }}
                            transition={{ duration: 0.18, repeat: Infinity, ease: "easeInOut", delay: 0.08 }}
                        />

                        {/* Laptop Base & Keyboard */}
                        <line x1="95" y1="108" x2="135" y2="108" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />

                        {/* Laptop Screen */}
                        <path d="M 125 108 L 136 84" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="123" y1="107" x2="133" y2="85" stroke="var(--color-accent)" strokeWidth="1.5" />

                        {/* Coffee Mug on Desk */}
                        <rect x="148" y="98" width="10" height="12" rx="2" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                        <path d="M 158 101 C 161 101, 161 107, 158 107" fill="none" stroke="#475569" strokeWidth="1.5" />

                        {/* Coffee Steam Lines */}
                        <motion.path
                            d="M 151 95 Q 153 91, 151 87"
                            fill="none"
                            stroke="var(--color-accent)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            opacity="0.6"
                            animate={{
                                y: [0, -6, -10],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.path
                            d="M 155 95 Q 157 90, 155 85"
                            fill="none"
                            stroke="var(--color-accent)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            opacity="0.6"
                            animate={{
                                y: [0, -6, -10],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                        />
                    </svg>
                </div>

                {/* Progress Metric & Status */}
                <div className="w-full mt-2 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="flex items-center gap-1.5 text-slate-400">
                            <Terminal size={14} style={{ color: "var(--color-accent)" }} />
                            <span>COMPILING</span>
                        </span>
                        <span style={{ color: "var(--color-accent)" }} className="text-sm font-extrabold">
                            {progress}%
                        </span>
                    </div>

                    {/* Glowing Progress Track */}
                    <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 p-0.5 overflow-hidden shadow-inner">
                        <motion.div
                            className="h-full rounded-full transition-all duration-100 relative"
                            style={{
                                width: `${progress}%`,
                                backgroundColor: "var(--color-accent)",
                                boxShadow: `0 0 15px color-mix(in srgb, var(--color-accent) 70%, transparent)`
                            }}
                        />
                    </div>

                    {/* Dynamic Status Text */}
                    <div className="h-6 flex items-center justify-center">
                        <p className="text-[11px] font-mono font-medium text-slate-400 tracking-wider uppercase truncate">
                            {statusMessages[statusIndex]}
                        </p>
                    </div>
                </div>

                {/* Skip Hint */}
                <p className="text-[10px] text-slate-600 font-mono mt-4 cursor-pointer hover:text-slate-400 transition-colors">
                    Click anywhere or press ESC to skip
                </p>

            </div>
        </motion.div>
    );
}
