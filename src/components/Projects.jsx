import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Activity, ShieldCheck, Cpu, Terminal, Layers } from "lucide-react";

const categories = ["All", "AI & Machine Learning", "Full Stack & Web", "Systems & DevOps"];

const projects = [
    {
        title: "IndiaX — Farm Chemical Intelligence",
        category: "AI & Machine Learning",
        status: "SIH 2026 Prototype",
        metric: "7 ML Models • 100% PHI Precision",
        featured: true,
        icon: Cpu,
        gradient: "from-emerald-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        description: "SIH 2026 unified farm-level chemical intelligence and cross-domain traceability platform connecting crop pesticides, livestock antimicrobials, and regulatory compliance with 7 trained Scikit-Learn/XGBoost models.",
        tags: ["React", "TypeScript", "FastAPI", "Python ML", "Prisma", "PostgreSQL"],
        github: "https://github.com/Samxxr007/IndiaX-Unified-Farm-Intelligence",
        deploy: "https://indiax-unified-farm.vercel.app"
    },
    {
        title: "RoadGuard AI",
        category: "AI & Machine Learning",
        status: "Real-Time AI",
        metric: "YOLOv11 • <45ms CCTV GIS Tracking",
        featured: true,
        icon: Activity,
        gradient: "from-cyan-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        description: "Intelligent Smart City road surface damage detection and predictive maintenance planning system utilizing municipal CCTV video streams, YOLOv11 Computer Vision, and interactive Leaflet GIS mapping.",
        tags: ["React 19", "FastAPI", "YOLOv11", "OpenCV", "PostgreSQL", "Leaflet"],
        github: "https://github.com/Samxxr007/RoadGuard-AI"
    },
    {
        title: "FishConnect AI",
        category: "AI & Machine Learning",
        status: "Live Production",
        metric: "AI Demand Forecast • Direct Marketplace",
        featured: true,
        icon: Sparkles,
        gradient: "from-blue-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        description: "Mobile-first Next.js 14 application for coastal Indian fishermen in Tamil Nadu & Kerala featuring AI-powered marine demand forecasting, real-time ocean data, and direct bulk buyer matchmaking.",
        tags: ["Next.js 14", "AI", "TypeScript", "Recharts", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Fish-Connect",
        deploy: "https://fish-connect.vercel.app/"
    },
    {
        title: "AutoShip Pipeline",
        category: "Systems & DevOps",
        status: "CI/CD Ecosystem",
        metric: "100% Automated Build & Deploy",
        featured: true,
        icon: Terminal,
        gradient: "from-purple-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
        description: "Production-grade CI/CD ecosystem designed for automated containerization, unit testing, and continuous deployment of Next.js microservices using Docker and GitHub Actions workflows.",
        tags: ["DevOps", "Docker", "CI/CD", "Next.js", "GitHub Actions"],
        github: "https://github.com/Samxxr007/Autoship-Pipeline-Automation"
    },
    {
        title: "ShopSphere Forensic Mirror",
        category: "AI & Machine Learning",
        status: "HackHustle AI",
        metric: "Visual DNA • Zero E-Commerce Return Fraud",
        icon: ShieldCheck,
        gradient: "from-rose-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
        description: "Edge AI and Cloud Forensic DNA verification pipeline engineered to eliminate $100B return fraud through automated image tampering checks and serialized visual authentication.",
        tags: ["Edge AI", "TypeScript", "React", "Python", "Computer Vision"],
        github: "https://github.com/Samxxr007/Fraud-Mirror-App-HackHustle"
    },
    {
        title: "Smart Crowd Risk Analysis",
        category: "AI & Machine Learning",
        status: "Surveillance AI",
        metric: "OpenCV • Real-Time Stampede Prediction",
        icon: Activity,
        gradient: "from-amber-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
        description: "AI surveillance platform for high-density public venues providing real-time crowd density analysis, motion intelligence, and stampede risk prediction using OpenCV and FastAPI.",
        tags: ["Computer Vision", "FastAPI", "OpenCV", "Next.js 14", "Python"],
        github: "https://github.com/Samxxr007/Stampede-Alert-System-Using-CV"
    },
    {
        title: "Luminary Studio",
        category: "Full Stack & Web",
        status: "Luxury Showcase",
        metric: "60 FPS Framer Motion • Editorial UI",
        icon: Sparkles,
        gradient: "from-amber-800/40 via-slate-900 to-slate-950",
        badgeColor: "text-amber-300 border-amber-500/30 bg-amber-500/10",
        description: "Premium luxury-minimalist digital agency homepage demonstrating editorial UI design, smooth micro-interactions, responsive ergonomics, and high-performance React features.",
        tags: ["Next.js 14", "Framer Motion", "UI/UX", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Design-Agency-Home-Page",
        deploy: "https://design-agency-home-page.vercel.app"
    },
    {
        title: "DroneSwarm Pathfinder",
        category: "Systems & DevOps",
        status: "DAA Capstone",
        metric: "Convex Hull & Closest Pair O(n log n)",
        icon: Layers,
        gradient: "from-indigo-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
        description: "Algorithmic capstone web application applying Convex Hull and Closest-Pair algorithms for collision-free drone swarm geometric formation and dynamic delivery route planning.",
        tags: ["Algorithms", "TypeScript", "React", "Tailwind CSS", "DAA"],
        github: "https://github.com/Samxxr007/Drone-Swarm-Path-Finder-Project"
    },
    {
        title: "Skybrisk ERP App",
        category: "Full Stack & Web",
        status: "MERN Stack",
        metric: "Multi-Role RBAC • Inventory Workflow",
        icon: Code2,
        gradient: "from-orange-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
        description: "Comprehensive enterprise business ERP management system built with role-based access control, secure authentication, and inventory order workflow tracking.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
        github: "https://github.com/Samxxr007/Skybrisk-ERP-App",
        deploy: "https://skybrisk-erp-app.vercel.app"
    },
    {
        title: "Prashikshan Learning Hub",
        category: "Full Stack & Web",
        status: "LMS Platform",
        metric: "Modular Learning • Real-Time Progress",
        icon: Layers,
        gradient: "from-emerald-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        description: "Modern training and learning management platform engineered to streamline course delivery, interactive curriculum paths, and student progress tracking.",
        tags: ["React", "LMS", "Education", "Vite", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Prashikshan",
        deploy: "https://prashikshan-ten.vercel.app"
    },
    {
        title: "RM-Kart Shopping App",
        category: "Full Stack & Web",
        status: "E-Commerce BFF",
        metric: "BFF Architecture • Custom JWT RBAC",
        icon: Code2,
        gradient: "from-blue-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        description: "Interactive e-commerce marketplace platform built with Backend-for-Frontend (BFF) architecture, custom JWT validation, and multi-tier user authorization.",
        tags: ["React", "Node.js", "BFF Pattern", "JWT", "E-Commerce"],
        github: "https://github.com/Samxxr007/RM-Kart-Shopping-App",
        deploy: "https://rm-kart-shopping-app.vercel.app"
    },
    {
        title: "CityClean360",
        category: "Systems & DevOps",
        status: "IoT Hardware",
        metric: "ESP32 Sensors • Real-Time Dispatch",
        icon: Terminal,
        gradient: "from-teal-900/50 via-slate-900 to-slate-950",
        badgeColor: "text-teal-400 border-teal-500/30 bg-teal-500/10",
        description: "Smart city IoT waste management dashboard integrated with ESP32 microcontrollers for real-time bin level telemetry, fire sensor alerts, and automated truck route dispatch.",
        tags: ["React", "IoT", "ESP32", "Firebase", "Dashboard"],
        github: "https://github.com/Samxxr007/Cityclean360"
    }
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="w-full py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 border"
                        style={{
                            borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                            color: "var(--color-accent)",
                            backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)"
                        }}
                    >
                        <Sparkles size={13} />
                        Engineering Showcase
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic font-serif">
                        Featured <span style={{ color: "var(--color-accent)" }}>Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8 font-light">
                        A curated selection of my active repositories and production applications, showcasing machine learning systems, cross-platform mobile apps, and DevOps automation.
                    </p>

                    {/* Tactile Category Filter Tabs with LayoutId Animation */}
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl max-w-2xl mx-auto shadow-2xl">
                        {categories.map((cat) => {
                            const isActive = activeTab === cat;
                            const count = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-200 flex items-center gap-2 z-10 ${
                                        isActive ? "text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterTab"
                                            className="absolute inset-0 rounded-xl shadow-lg"
                                            style={{
                                                backgroundColor: "var(--color-accent)",
                                                boxShadow: `0 0 20px color-mix(in srgb, var(--color-accent) 40%, transparent)`
                                            }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                    <span
                                        className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                                            isActive
                                                ? "bg-black/20 text-slate-950"
                                                : "bg-slate-800 text-slate-400"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => {
                            const CardIcon = project.icon;
                            return (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.4, delay: i * 0.04 }}
                                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                    className="glass-card group flex flex-col rounded-3xl border border-slate-800/70 bg-slate-900/40 relative overflow-hidden h-full shadow-2xl hover:border-[color:var(--color-accent)]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300"
                                >
                                    {/* Visual Header Mockup Area */}
                                    <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden p-5 flex flex-col justify-between border-b border-slate-800/60`}>
                                        {/* Subtle Grid Lines */}
                                        <div
                                            className="absolute inset-0 opacity-15"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                                backgroundSize: '24px 24px'
                                            }}
                                        />

                                        {/* Top Meta Bar */}
                                        <div className="flex items-center justify-between relative z-10">
                                            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                                                {project.status}
                                            </span>

                                            {project.featured && (
                                                <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-md">
                                                    <Sparkles size={11} style={{ color: "var(--color-accent)" }} />
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        {/* Central Graphic Symbol */}
                                        <div className="relative z-10 flex items-center justify-center my-auto">
                                            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl group-hover:scale-110 group-hover:border-[color:var(--color-accent)]/40 transition-all duration-500">
                                                <CardIcon size={36} style={{ color: "var(--color-accent)" }} />
                                            </div>
                                        </div>

                                        {/* Category Watermark */}
                                        <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2">
                                            <span>{project.category}</span>
                                            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-7 flex-1 flex flex-col">
                                        <h3
                                            className="text-xl font-bold text-white mb-2 group-hover:text-[color:var(--color-accent)] transition-colors leading-snug"
                                        >
                                            {project.title}
                                        </h3>

                                        {/* Quantified Metric Badge */}
                                        <div className="mb-4">
                                            <span
                                                className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg border"
                                                style={{
                                                    borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                                                    color: "var(--color-accent)",
                                                    backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)"
                                                }}
                                            >
                                                <Activity size={12} />
                                                {project.metric}
                                            </span>
                                        </div>

                                        <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-1 font-light">
                                            {project.description}
                                        </p>

                                        {/* Tags Preview */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.tags.slice(0, 4).map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] px-2.5 py-0.5 rounded-md font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 4 && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded-md text-slate-500 bg-slate-800/40">
                                                    +{project.tags.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex items-center justify-between pt-5 border-t border-slate-800/50 mt-auto">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                                            >
                                                <Github size={15} /> Source
                                            </a>
                                            {project.deploy ? (
                                                <a
                                                    href={project.deploy}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ color: "var(--color-accent)" }}
                                                    className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] hover:brightness-125 transition-all"
                                                >
                                                    Live Demo <ExternalLink size={13} />
                                                </a>
                                            ) : (
                                                <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest italic">
                                                    Architecture
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
