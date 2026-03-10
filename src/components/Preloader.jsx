import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_NAME = "SAMEER AHMED G";
const TARGET_SUB = "ASPIRING SOFTWARE ENGINEER";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!%&*?<>[]{}";

export default function Preloader({ onComplete }) {
    const [nameText, setNameText] = useState("");
    const [subText, setSubText] = useState("");
    const [isDecoded, setIsDecoded] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    // Decoding animation logic
    useEffect(() => {
        let iterations = 0;
        const totalDuration = 2000;
        const intervalTime = 50;
        const totalSteps = totalDuration / intervalTime;

        const interval = setInterval(() => {
            // Decode Name
            setNameText(() => {
                return TARGET_NAME.split("").map((char, index) => {
                    if (char === " ") return "\u00A0";
                    const threshold = (index / TARGET_NAME.length) * (totalSteps * 0.7);
                    if (iterations > threshold) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join("");
            });

            // Decode Subtext
            setSubText(() => {
                return TARGET_SUB.split("").map((char, index) => {
                    if (char === " ") return "\u00A0";
                    const threshold = (index / TARGET_SUB.length) * totalSteps;
                    if (iterations > threshold) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join("");
            });

            if (iterations >= totalSteps) {
                clearInterval(interval);
                setIsDecoded(true);
                setTimeout(() => {
                    setIsFinished(true);
                    onComplete();
                }, 1800); // Optimized hold time for brand impact without excessive delay
            }

            iterations += 1;
        }, intervalTime);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.02,
                filter: "blur(20px)",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            <div className="relative flex flex-col items-center justify-center w-full px-4 text-center">
                <AnimatePresence mode="wait">
                    {!isFinished ? (
                        <motion.div
                            key="decoding-area"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center"
                        >
                            {/* Top Accent Line */}
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: isDecoded ? "100%" : "60%", opacity: isDecoded ? 0.8 : 0.2 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-[1px] bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent mb-12"
                            />

                            {/* Main Name - Optimized for fluid responsiveness */}
                            <motion.h1
                                className={`text-4xl sm:text-6xl md:text-[9rem] font-black tracking-tighter text-center leading-none transition-all duration-700 font-mono ${isDecoded ? 'text-white' : 'text-slate-600'}`}
                            >
                                {nameText.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        style={{
                                            color: isDecoded ? 'var(--color-accent)' : undefined
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Designation Subtext - High contrast & responsive tracking */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={`mt-6 text-[10px] sm:text-sm md:text-2xl font-bold tracking-[0.3em] sm:tracking-[0.5em] transition-all duration-700 text-center ${isDecoded ? 'text-white' : 'text-slate-700'}`}
                            >
                                {subText.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Bottom Accent Line */}
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: isDecoded ? "100%" : "60%", opacity: isDecoded ? 0.8 : 0.2 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                                className="h-[1px] bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent mt-12"
                            />
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
