import { motion } from "framer-motion";
import { User, Download } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section id="home" className="w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-12">

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ borderColor: "color-mix(in srgb, var(--color-accent) 20%, transparent)" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ backgroundColor: "var(--color-accent)" }}
                            ></span>
                            <span
                                className="relative inline-flex rounded-full h-2 w-2"
                                style={{ backgroundColor: "var(--color-accent)" }}
                            ></span>
                        </span>
                        <span style={{ color: "var(--color-accent)" }}>Available for new opportunities</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Sameer <span style={{ color: "var(--color-accent)" }}>Ahmed G.</span>
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-300 mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Aspiring Software Engineer / Web Developer
                    </motion.h2>

                    <motion.p
                        className="text-base md:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        I am passionate about building modern web applications and IoT systems. I enjoy solving real-world problems using technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto"
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
                            className="px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all shadow-[0_0_20px_color-mix(in_srgb,var(--color-accent)_30%,transparent)] flex items-center justify-center w-full sm:w-auto"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center w-full sm:w-auto"
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://drive.google.com/file/d/147mk-_sOIru_nRpqIdwC6ROaSQCIuphL/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg bg-slate-900 border transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-slate-800"
                            style={{
                                borderColor: "var(--color-accent)",
                                color: "var(--color-accent)"
                            }}
                        >
                            <Download size={18} />
                            View Resume
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    className="flex-shrink-0 order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                    <div
                        className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full p-2"
                        style={{
                            background: `linear-gradient(to top right, var(--color-slate-950), var(--color-accent))`,
                            boxShadow: `0 0 40px color-mix(in srgb, var(--color-accent) 30%, transparent)`
                        }}
                    >
                        {/* 
                            Replace the generic icon and bg-slate-900 below with an actual <img> tag 
                            when you have your profile picture.
                            Example:
                            <img src="/profile.jpg" alt="Sameer Profile" className="w-full h-full rounded-full object-cover border-4 border-slate-900" />
                        */}
                        <div className="w-full h-full rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center overflow-hidden relative group">
                            <img
                                src={profileImg}
                                alt="Sameer Ahmed G"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Glow overlay hint */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
