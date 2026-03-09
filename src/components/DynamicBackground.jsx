import { memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Cpu, Database, Globe, Layout, Terminal, Blocks, Binary } from "lucide-react";

/**
 * Wave Component for flowing digital motion
 * Memoized and optimized for GPU rendering
 */
const DigitalWave = memo(({ top, opacity, duration, delay, flip }) => (
    <motion.div
        className="absolute w-[200%] h-[300px] left-[-50%] pointer-events-none"
        style={{ top, willChange: "transform" }}
        animate={{
            x: ["-20%", "20%"],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear" // Linear for smoother continuous flow
        }}
    >
        <svg
            viewBox="0 0 1440 320"
            className={`w-full h-full ${flip ? 'rotate-180' : ''}`}
            preserveAspectRatio="none"
        >
            <path
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1"
                strokeOpacity={opacity}
                d="M0,160 C320,300 420,10 640,160 C860,310 960,20 1280,160 L1440,160"
            />
        </svg>
    </motion.div>
));

DigitalWave.displayName = "DigitalWave";

/**
 * Floating Icon Component
 * Fixed "glitch" by separating scroll-parallax from floating animation
 */
const FloatingIcon = memo(({ icon: Icon, top, left, delay, duration, scrollYProgress, scrollRange }) => {
    // Parallax movement based on centralized scroll
    // useSpring adds a "damping" effect to prevent jittery/jumpy scroll transitions
    const yParallaxRaw = useTransform(scrollYProgress, [0, 1], [0, scrollRange]);
    const yParallax = useSpring(yParallaxRaw, { damping: 20, stiffness: 100 });

    return (
        <motion.div
            className="absolute p-4 rounded-xl pointer-events-none flex items-center justify-center transform-gpu"
            style={{
                top,
                left,
                color: "var(--color-accent)",
                y: yParallax, // Scroll parallax on the Y-axis
                willChange: "transform"
            }}
        >
            {/* 
                Animate the CHILD element for the floating effect.
                This prevents conflicts with the parent's scroll-based 'y' transform.
            */}
            <motion.div
                animate={{
                    y: [0, -25, 0],
                    rotate: [0, 12, -12, 0],
                    opacity: [0.15, 0.35, 0.15],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex items-center justify-center relative"
            >
                <div className="absolute inset-0 blur-2xl opacity-20 bg-[color:var(--color-accent)] rounded-full" />
                <Icon size={56} strokeWidth={1.5} className="relative z-10" />
            </motion.div>
        </motion.div>
    );
});

FloatingIcon.displayName = "FloatingIcon";

export default function DynamicBackground() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
            {/* Ambient Background Glow */}
            <motion.div
                animate={{ opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-[180px] pointer-events-none"
                style={{ backgroundColor: "var(--color-accent)" }}
            />

            {/* Top Waves */}
            <DigitalWave top="-5%" opacity={0.25} duration={15} delay={0} />
            <DigitalWave top="5%" opacity={0.15} duration={20} delay={2} flip />

            {/* Bottom Waves */}
            <DigitalWave top="70%" opacity={0.2} duration={18} delay={1} />
            <DigitalWave top="85%" opacity={0.12} duration={25} delay={3} flip />

            {/* Floating Revolving Toolkit Icons */}
            <FloatingIcon icon={Code2} top="15%" left="8%" delay={0} duration={12} scrollYProgress={scrollYProgress} scrollRange={150} />
            <FloatingIcon icon={Terminal} top="40%" left="82%" delay={2} duration={15} scrollYProgress={scrollYProgress} scrollRange={-100} />
            <FloatingIcon icon={Cpu} top="75%" left="12%" delay={1} duration={14} scrollYProgress={scrollYProgress} scrollRange={250} />
            <FloatingIcon icon={Database} top="25%" left="78%" delay={3} duration={16} scrollYProgress={scrollYProgress} scrollRange={-180} />
            <FloatingIcon icon={Globe} top="65%" left="84%" delay={4} duration={13} scrollYProgress={scrollYProgress} scrollRange={140} />
            <FloatingIcon icon={Layout} top="90%" left="35%" delay={2} duration={17} scrollYProgress={scrollYProgress} scrollRange={-120} />
            <FloatingIcon icon={Blocks} top="55%" left="6%" delay={5} duration={19} scrollYProgress={scrollYProgress} scrollRange={200} />
            <FloatingIcon icon={Binary} top="8%" left="55%" delay={1} duration={20} scrollYProgress={scrollYProgress} scrollRange={300} />

            {/* Technical Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--color-accent) 1px, transparent 1px), 
                        linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
                    `,
                    backgroundSize: '120px 120px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
                }}
            />

            {/* Premium Grain Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
