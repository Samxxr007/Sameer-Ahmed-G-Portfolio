import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Briefcase, Code2, Award, Mail, Phone, MapPin } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
    const [viewMode, setViewMode] = useState("preview"); // 'preview' or 'digital'
    const resumeUrl = "/Sameer_Ahmed_G_Resume.pdf";
    const embedUrl = "/Sameer_Ahmed_G_Resume.pdf#toolbar=0&navpanes=0";

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                        transition={{ type: "spring", damping: 25, stiffness: 260 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-slate-950 border border-slate-800/80 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden z-10"
                    >
                        {/* Header Bar */}
                        <div className="px-6 py-3.5 border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <FileText size={18} />
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                                        Sameer Ahmed G — Resume
                                    </h3>
                                    <p className="text-[11px] text-slate-400">B.Tech IT · CGPA 9.37 (Top 5% of Cohort)</p>
                                </div>
                            </div>

                            {/* Center View Switcher */}
                            <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold">
                                <button
                                    onClick={() => setViewMode("preview")}
                                    className={`px-3 py-1 rounded-lg transition-all ${
                                        viewMode === "preview"
                                            ? "bg-slate-800 text-white shadow-sm"
                                            : "text-slate-400 hover:text-slate-200"
                                    }`}
                                >
                                    PDF Embed
                                </button>
                                <button
                                    onClick={() => setViewMode("digital")}
                                    className={`px-3 py-1 rounded-lg transition-all ${
                                        viewMode === "digital"
                                            ? "bg-slate-800 text-white shadow-sm"
                                            : "text-slate-400 hover:text-slate-200"
                                    }`}
                                >
                                    Digital View
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                                    title="Open in new tab"
                                >
                                    <ExternalLink size={14} /> Open
                                </a>

                                <a
                                    href={resumeUrl}
                                    download="Sameer_Ahmed_G_Resume.pdf"
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950 transition-all hover:brightness-110 shadow-md"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                    title="Download PDF"
                                >
                                    <Download size={14} /> Download
                                </a>

                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-1"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        {viewMode === "preview" ? (
                            <div className="flex-1 w-full bg-slate-900/30 relative">
                                <iframe
                                    src={embedUrl}
                                    title="Sameer Ahmed G Resume"
                                    className="w-full h-full border-0"
                                    allow="autoplay"
                                />
                            </div>
                        ) : (
                            <div className="flex-1 w-full overflow-y-auto p-6 sm:p-10 bg-slate-950/60 space-y-8 text-left">
                                {/* Digital Header */}
                                <div className="border-b border-slate-800 pb-6">
                                    <h1 className="text-3xl font-black text-white mb-2">Sameer Ahmed G</h1>
                                    <p className="text-sm text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <span className="flex items-center gap-1"><MapPin size={13} style={{ color: "var(--color-accent)" }} /> Chennai, India</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Phone size={13} style={{ color: "var(--color-accent)" }} /> +91 7339102291</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Mail size={13} style={{ color: "var(--color-accent)" }} /> sameerahmedg666@gmail.com</span>
                                    </p>
                                </div>

                                {/* Professional Summary */}
                                <div>
                                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2.5 flex items-center gap-2" style={{ color: "var(--color-accent)" }}>
                                        Professional Summary
                                    </h2>
                                    <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-2xl border border-slate-800/80 font-light">
                                        B.Tech Information Technology student (<strong className="text-white font-medium">CGPA: 9.37, Top 5% of cohort</strong>) with experience across three full-stack internships building scalable web applications using React, Next.js, and Node.js. Skilled in RESTful API integration, CI/CD pipelines, and modular application development, with strong knowledge of SDLC and Agile practices.
                                    </p>
                                </div>

                                {/* Technical Skills */}
                                <div>
                                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color: "var(--color-accent)" }}>
                                        Technical Skills
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                                            <p className="font-bold text-white mb-1.5">Languages & Frameworks</p>
                                            <p className="text-slate-400 leading-relaxed">JavaScript, TypeScript, Python, Node.js, React, Next.js, React Native, Vite, Tailwind CSS</p>
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                                            <p className="font-bold text-white mb-1.5">DevOps & Infrastructure</p>
                                            <p className="text-slate-400 leading-relaxed">Docker, Docker Compose, Jenkins, GitHub Actions, Nginx, Firebase, RESTful APIs, CI/CD Pipelines</p>
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
                                            <p className="font-bold text-white mb-1.5">Tools & Practices</p>
                                            <p className="text-slate-400 leading-relaxed">Git, GitHub, Gemini API, SDLC, Agile Methodologies, Modular Architecture, Workflow Automation, Performance Optimization</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Work Experience */}
                                <div>
                                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: "var(--color-accent)" }}>
                                        Work Experience
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                                            <div className="flex flex-wrap justify-between items-center mb-1">
                                                <h3 className="text-sm font-bold text-white">Full Stack Development Intern · Sky Brisk</h3>
                                                <span className="text-xs font-mono text-slate-400">Feb 2026 – Apr 2026 | Remote</span>
                                            </div>
                                            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside mt-2 font-light">
                                                <li>Engineered a modular ERP application supporting complex end-to-end enterprise workflows.</li>
                                                <li>Designed reusable application modules and optimized state management to improve maintainability and performance.</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                                            <div className="flex flex-wrap justify-between items-center mb-1">
                                                <h3 className="text-sm font-bold text-white">Web Development Intern · RM Kart</h3>
                                                <span className="text-xs font-mono text-slate-400">Feb 2026 – Mar 2026 | Remote</span>
                                            </div>
                                            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside mt-2 font-light">
                                                <li>Developed the ShopSphere e-commerce platform with advanced product filtering and dynamic user interactions.</li>
                                                <li>Improved frontend load times by 30% through Vite build optimization and component tuning.</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                                            <div className="flex flex-wrap justify-between items-center mb-1">
                                                <h3 className="text-sm font-bold text-white">Web Development Intern · Corizo Edutech</h3>
                                                <span className="text-xs font-mono text-slate-400">Jun 2025 – Aug 2025 | Remote</span>
                                            </div>
                                            <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside mt-2 font-light">
                                                <li>Implemented a CRUD-based web application with end-to-end REST API integration.</li>
                                                <li>Utilized Firebase Authentication and Real-Time Database for secure, low-latency data management.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Education & Certifications */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "var(--color-accent)" }}>
                                            Education
                                        </h2>
                                        <h3 className="text-sm font-bold text-white">B.Tech in Information Technology</h3>
                                        <p className="text-xs text-slate-400 mt-0.5">Saveetha School of Engineering (SIMATS) · 2024 – Present</p>
                                        <p className="text-xs font-bold mt-2" style={{ color: "var(--color-accent)" }}>
                                            CGPA: 9.37 / 10.0 (Top 5% of Cohort)
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
                                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "var(--color-accent)" }}>
                                            Certifications
                                        </h2>
                                        <h3 className="text-sm font-bold text-white">NPTEL Elite Certification</h3>
                                        <p className="text-xs text-slate-400 mt-0.5">Introduction to Internet of Things (IoT)</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
