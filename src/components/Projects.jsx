import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Activity, ShieldCheck, Cpu, Terminal, Layers, X, CheckCircle2, ChevronRight, Zap, ChevronDown, ChevronUp } from "lucide-react";
import ClickSpark from "./ClickSpark";

const categories = ["All", "AI & Machine Learning", "Full Stack & Web", "Systems & DevOps"];

const projects = [
    {
        id: "indiax",
        title: "IndiaX — Farm Chemical Intelligence",
        category: "AI & Machine Learning",
        status: "SIH 2026 Prototype",
        metric: "7 ML Models • 100% PHI Precision",
        featured: true,
        icon: Cpu,
        gradient: "from-emerald-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        description: "SIH 2026 unified farm-level chemical intelligence and cross-domain traceability platform connecting crop pesticides, livestock antimicrobials, and regulatory compliance with 7 trained Scikit-Learn/XGBoost models.",
        architecture: "React & TypeScript Frontend → FastAPI Gateway → Scikit-Learn/XGBoost Inference Engine → Prisma ORM & PostgreSQL DB",
        highlights: [
            "7 Trained ML Classification Models for PHI Compliance",
            "Cross-domain chemical traceability (Crops & Livestock)",
            "Automated regulatory threshold violation alerts"
        ],
        tags: ["React", "TypeScript", "FastAPI", "Python ML", "Prisma", "PostgreSQL"],
        github: "https://github.com/Samxxr007/IndiaX-Unified-Farm-Chemical-Intelligence-Traceability-Platform",
        deploy: "https://frontend-ten-mauve-81.vercel.app/"
    },
    {
        id: "roadguard",
        title: "RoadGuard AI",
        category: "AI & Machine Learning",
        status: "Real-Time AI",
        metric: "YOLOv11 • <45ms CCTV GIS Tracking",
        featured: true,
        icon: Activity,
        gradient: "from-cyan-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        description: "Intelligent Smart City road surface damage detection and predictive maintenance planning system utilizing municipal CCTV video streams, YOLOv11 Computer Vision, and interactive Leaflet GIS mapping.",
        architecture: "Municipal CCTV Feed → OpenCV Frame Extraction → YOLOv11 Damage Detector (<45ms) → FastAPI GIS Spatial Service → Leaflet UI",
        highlights: [
            "Sub-45ms real-time inference on 1080p CCTV feeds",
            "Automatic pothole severity classification & GIS geotagging",
            "Predictive repair route scheduling for municipal squads"
        ],
        tags: ["React 19", "FastAPI", "YOLOv11", "OpenCV", "PostgreSQL", "Leaflet"],
        github: "https://github.com/Samxxr007/RoadGuard-AI"
    },
    {
        id: "fishconnect",
        title: "FishConnect AI",
        category: "AI & Machine Learning",
        status: "Live Production",
        metric: "AI Demand Forecast • Direct Marketplace",
        featured: true,
        icon: Sparkles,
        gradient: "from-blue-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        description: "Mobile-first Next.js 14 application for coastal Indian fishermen in Tamil Nadu & Kerala featuring AI-powered marine demand forecasting, real-time ocean data, and direct bulk buyer matchmaking.",
        architecture: "Next.js 14 App Router → AI Time-Series Forecaster → Real-Time Oceanography API → Direct Bulk Buyer Match Engine",
        highlights: [
            "AI Marine catch demand forecasting charts via Recharts",
            "Direct B2B fisherman-to-buyer bulk auction engine",
            "Zero middleman fair-price realization for coastal communities"
        ],
        tags: ["Next.js 14", "AI", "TypeScript", "Recharts", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Fish-Connect",
        deploy: "https://fish-connect.vercel.app/"
    },
    {
        id: "autoship",
        title: "AutoShip Pipeline",
        category: "Systems & DevOps",
        status: "CI/CD Ecosystem",
        metric: "100% Automated Build & Deploy",
        featured: true,
        icon: Terminal,
        gradient: "from-purple-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
        description: "Production-grade CI/CD ecosystem designed for automated containerization, unit testing, and continuous deployment of Next.js microservices using Docker and GitHub Actions workflows.",
        architecture: "Git Push → GitHub Actions Matrix Test → Docker Multi-Stage Image Build → Container Registry → Automated Production Deploy",
        highlights: [
            "Multi-stage Docker builds reducing image footprint by 65%",
            "Automated test runner with zero-downtime container rollout",
            "GitHub Actions workflow pipeline with instant rollback triggers"
        ],
        tags: ["DevOps", "Docker", "CI/CD", "Next.js", "GitHub Actions"],
        github: "https://github.com/Samxxr007/Autoship-Pipeline-Automation"
    },
    {
        id: "shopsphere",
        title: "ShopSphere Forensic Mirror",
        category: "AI & Machine Learning",
        status: "HackHustle AI",
        metric: "Visual DNA • Zero Return Fraud",
        icon: ShieldCheck,
        gradient: "from-rose-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
        description: "Edge AI and Cloud Forensic DNA verification pipeline engineered to eliminate return fraud through automated image tampering checks and serialized visual authentication.",
        architecture: "Product Packing Camera → Edge Feature Hash Extractor → Cloud Visual DNA Matcher → Serialized Return Verification",
        highlights: [
            "Visual fingerprinting matching items at packing vs. return",
            "Image manipulation & tampering detection at pixel level",
            "Engineered for high-volume retail supply chains"
        ],
        tags: ["Edge AI", "TypeScript", "React", "Python", "Computer Vision"],
        github: "https://github.com/Samxxr007/Fraud-Mirror-App-HackHustle"
    },
    {
        id: "crowdrisk",
        title: "Smart Crowd Risk Analysis",
        category: "AI & Machine Learning",
        status: "Surveillance AI",
        metric: "OpenCV • Real-Time Stampede Prediction",
        icon: Activity,
        gradient: "from-amber-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
        description: "AI surveillance platform for high-density public venues providing real-time crowd density analysis, motion intelligence, and stampede risk prediction using OpenCV and FastAPI.",
        architecture: "RTSP Video Stream → Optical Flow & Density Estimator → Risk Threshold Matrix → FastAPI Alert Dispatcher",
        highlights: [
            "Optical flow tracking identifying sudden panic surges",
            "Real-time density heatmaps of high-risk bottleneck zones",
            "Sub-second alert dispatch to venue operations"
        ],
        tags: ["Computer Vision", "FastAPI", "OpenCV", "Next.js 14", "Python"],
        github: "https://github.com/Samxxr007/Stampede-Alert-System-Using-CV"
    },
    {
        id: "luminary",
        title: "Luminary Studio",
        category: "Full Stack & Web",
        status: "Luxury Showcase",
        metric: "60 FPS Framer Motion • Editorial UI",
        icon: Sparkles,
        gradient: "from-amber-800/60 via-slate-900 to-slate-950",
        badgeColor: "text-amber-300 border-amber-500/30 bg-amber-500/10",
        description: "Premium luxury-minimalist digital agency homepage demonstrating editorial UI design, smooth micro-interactions, responsive ergonomics, and high-performance React features.",
        architecture: "Next.js 14 → Tailwind CSS Layout Engine → Framer Motion Spring Animations → Vercel Edge CDN",
        highlights: [
            "Silky smooth 60 FPS viewport transitions",
            "Editorial typographic hierarchy & dynamic cursors",
            "Full mobile and tablet gesture optimization"
        ],
        tags: ["Next.js 14", "Framer Motion", "UI/UX", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Design-Agency-Home-Page",
        deploy: "https://design-agency-home-page.vercel.app"
    },
    {
        id: "droneswarm",
        title: "DroneSwarm Pathfinder",
        category: "Systems & DevOps",
        status: "DAA Capstone",
        metric: "Convex Hull & Closest Pair O(n log n)",
        icon: Layers,
        gradient: "from-indigo-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
        description: "Algorithmic capstone web application applying Convex Hull and Closest-Pair algorithms for collision-free drone swarm geometric formation and dynamic delivery route planning.",
        architecture: "Geometric Coordinate Plane → Graham Scan Convex Hull Engine → Divide & Conquer Closest Pair → Interactive Canvas UI",
        highlights: [
            "O(n log n) Graham Scan bounding hull computation",
            "Dynamic obstacle evasion with proximity threshold alerts",
            "Real-time interactive canvas vector rendering"
        ],
        tags: ["Algorithms", "TypeScript", "React", "Tailwind CSS", "DAA"],
        github: "https://github.com/Samxxr007/Drone-Swarm-Path-Finder-Project"
    },
    {
        id: "skybrisk",
        title: "Skybrisk ERP App",
        category: "Full Stack & Web",
        status: "MERN Stack",
        metric: "Multi-Role RBAC • Inventory Workflow",
        icon: Code2,
        gradient: "from-orange-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
        description: "Comprehensive enterprise business ERP management system built with role-based access control, secure authentication, and inventory order workflow tracking.",
        architecture: "React Frontend → Express REST API → MongoDB Cluster → JWT Auth & RBAC Middleware",
        highlights: [
            "Granular permission matrix (Admin, Manager, Staff)",
            "Automated stock level calculations and low-inventory alerts",
            "Secure session handling with refresh tokens"
        ],
        tags: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
        github: "https://github.com/Samxxr007/Skybrisk-ERP-App",
        deploy: "https://skybrisk-erp-app.vercel.app"
    },
    {
        id: "prashikshan",
        title: "Prashikshan Learning Hub",
        category: "Full Stack & Web",
        status: "LMS Platform",
        metric: "Modular Learning • Real-Time Progress",
        icon: Layers,
        gradient: "from-emerald-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        description: "Modern training and learning management platform engineered to streamline course delivery, interactive curriculum paths, and student progress tracking.",
        architecture: "Vite + React UI → Modular Chapter State Machine → Local & Cloud Progress Storage",
        highlights: [
            "Interactive chapter progress persistence",
            "Modular curriculum architecture supporting quizzes and rich media",
            "Fluid lightweight loading built on Vite"
        ],
        tags: ["React", "LMS", "Education", "Vite", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Prashikshan",
        deploy: "https://prashikshan-ten.vercel.app"
    },
    {
        id: "rmkart",
        title: "RM-Kart Shopping App",
        category: "Full Stack & Web",
        status: "E-Commerce BFF",
        metric: "BFF Architecture • Custom JWT RBAC",
        icon: Code2,
        gradient: "from-blue-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
        description: "Interactive e-commerce marketplace platform built with Backend-for-Frontend (BFF) architecture, custom JWT validation, and multi-tier user authorization.",
        architecture: "React SPA → Dedicated BFF Layer → Product Catalog Microservice → Cart & Checkout Orchestration",
        highlights: [
            "BFF design pattern reducing redundant client API calls by 40%",
            "Stateful shopping cart with local-sync resilience",
            "Secure multi-role buyer/seller dashboards"
        ],
        tags: ["React", "Node.js", "BFF Pattern", "JWT", "E-Commerce"],
        github: "https://github.com/Samxxr007/RM-Kart-Shopping-App",
        deploy: "https://rm-kart-shopping-app.vercel.app"
    },
    {
        id: "cityclean",
        title: "CityClean360",
        category: "Systems & DevOps",
        status: "IoT Hardware",
        metric: "ESP32 Sensors • Real-Time Dispatch",
        icon: Terminal,
        gradient: "from-teal-900/70 via-slate-900 to-slate-950",
        badgeColor: "text-teal-400 border-teal-500/30 bg-teal-500/10",
        description: "Smart city IoT waste management dashboard integrated with ESP32 microcontrollers for real-time bin level telemetry, fire sensor alerts, and automated truck route dispatch.",
        architecture: "ESP32 Ultrasonic & Gas Sensors → Firebase Realtime DB → React Telemetry Dashboard → Automated Driver Route Trigger",
        highlights: [
            "Live ultrasonic fill-level monitoring with alert thresholds",
            "Integrated flame & smoke sensor triggers for hazard safety",
            "Real-time visual map telemetry for city sanitation fleets"
        ],
        tags: ["React", "IoT", "ESP32", "Firebase", "Dashboard"],
        github: "https://github.com/Samxxr007/Cityclean360"
    }
];

/**
 * Slide-Over Technical Deep-Dive Modal
 */
function ProjectDeepDiveModal({ project, onClose }) {
    if (!project) return null;
    const Icon = project.icon || Layers;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 280 }}
                    className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[88vh] flex flex-col overflow-hidden z-10"
                >
                    {/* Header Banner */}
                    <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-slate-800 relative`}>
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 p-2 rounded-xl bg-black/50 hover:bg-black/80 text-slate-400 hover:text-white transition-colors border border-white/10"
                        >
                            <X size={18} />
                        </button>

                        <div className="flex items-center gap-2 mb-3">
                            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                                {project.status}
                            </span>
                            <span className="text-xs text-slate-400 font-mono">{project.category}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shrink-0">
                                <Icon size={32} style={{ color: "var(--color-accent)" }} />
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-black text-white">{project.title}</h2>
                                <p className="text-xs font-bold mt-1" style={{ color: "var(--color-accent)" }}>
                                    {project.metric}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
                        {/* Summary */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                                System Overview
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed font-light">
                                {project.description}
                            </p>
                        </div>

                        {/* System Architecture Flow */}
                        {project.architecture && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2.5 flex items-center gap-1.5" style={{ color: "var(--color-accent)" }}>
                                    <Layers size={14} /> Architecture & Data Flow
                                </h3>
                                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed shadow-inner">
                                    {project.architecture}
                                </div>
                            </div>
                        )}

                        {/* Key Engineering Highlights */}
                        {project.highlights && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                                    Engineering Highlights & Capabilities
                                </h3>
                                <ul className="space-y-2 text-xs text-slate-300 font-light">
                                    {project.highlights.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60">
                                            <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack Badges */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2.5">
                                Technologies & Tools Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer CTAs */}
                    <div className="p-5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-end gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all border border-slate-700"
                        >
                            <Github size={15} /> GitHub Repository
                        </a>
                        {project.deploy && (
                            <a
                                href={project.deploy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 rounded-xl text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:brightness-110 shadow-lg"
                                style={{ backgroundColor: "var(--color-accent)" }}
                            >
                                Launch Live App <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

/**
 * 2x2 Bento Grid Flagship Project Card
 */
function FlagshipBentoCard({ project, onSelect }) {
    const Icon = project.icon || Layers;

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 md:p-8 backdrop-blur-xl shadow-2xl hover:border-[color:var(--color-accent)]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={() => onSelect(project)}
        >
            {/* Subtle Gradient Glow in Corner */}
            <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                style={{ backgroundColor: "var(--color-accent)" }}
            />

            {/* Card Header Top */}
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                        <div
                            className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:border-[color:var(--color-accent)]/40 transition-colors shadow-inner"
                            style={{ color: "var(--color-accent)" }}
                        >
                            <Icon size={24} />
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                            {project.status}
                        </span>
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                        <Sparkles size={11} style={{ color: "var(--color-accent)" }} />
                        Flagship
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-2 leading-tight group-hover:text-[color:var(--color-accent)] transition-colors">
                    {project.title}
                </h3>

                {/* Metric Badge */}
                <div className="mb-4">
                    <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg border"
                        style={{
                            borderColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                            color: "var(--color-accent)",
                            backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)"
                        }}
                    >
                        <Activity size={13} />
                        {project.metric}
                    </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                </p>
            </div>

            {/* Card Bottom / Footer */}
            <div className="relative z-10 pt-4 border-t border-slate-900 flex flex-col gap-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action CTAs */}
                <div className="flex items-center justify-between pt-2" onClick={(e) => e.stopPropagation()}>
                    <button
                        onClick={() => onSelect(project)}
                        className="text-xs font-bold flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                    >
                        System Specs <ChevronRight size={14} style={{ color: "var(--color-accent)" }} />
                    </button>

                    <div className="flex items-center gap-2">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                            title="GitHub Source"
                        >
                            <Github size={15} />
                        </a>
                        {project.deploy && (
                            <a
                                href={project.deploy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-xl text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all hover:brightness-110 shadow-md"
                                style={{ backgroundColor: "var(--color-accent)" }}
                            >
                                Live App <ExternalLink size={12} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const flagshipProjects = projects.filter(p => p.featured);
    
    // For Drawer / All Projects section
    const otherProjects = projects.filter(p => !p.featured);
    const filteredOtherProjects = activeTab === "All"
        ? otherProjects
        : otherProjects.filter(p => p.category === activeTab);

    return (
        <ClickSpark
            sparkColor="var(--color-accent, #ff7b00)"
            sparkSize={12}
            sparkRadius={18}
            sparkCount={9}
            duration={450}
            easing="ease-out"
        >
            <section id="projects" className="w-full py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center mb-12 w-full"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 border shadow-lg"
                            style={{
                                borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                                color: "var(--color-accent)",
                                backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)"
                            }}
                        >
                            <Sparkles size={13} />
                            Interactive Portfolio Bento
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            Featured <span style={{ color: "var(--color-accent)" }}>Projects</span>
                        </h2>
                        
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
                            Top 4 flagship AI, Computer Vision, and Cloud Systems featured below. Click anywhere for interactive particle sparks and select any card for architecture deep dives.
                        </p>
                    </motion.div>

                    {/* 2x2 Bento Grid Layout for Flagship Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-12">
                        {flagshipProjects.map((project) => (
                            <FlagshipBentoCard
                                key={project.id}
                                project={project}
                                onSelect={(p) => setSelectedProject(p)}
                            />
                        ))}
                    </div>

                    {/* Tabbed Drawer Button / Toggle */}
                    <div className="w-full max-w-4xl flex flex-col items-center">
                        <button
                            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            className="group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-[color:var(--color-accent)]/50 text-white font-bold text-sm shadow-2xl transition-all"
                        >
                            <span>{isDrawerOpen ? "Collapse Other Projects" : `Explore All 12 Projects (${otherProjects.length} More Systems)`}</span>
                            <div
                                className="p-1 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors"
                                style={{ color: "var(--color-accent)" }}
                            >
                                {isDrawerOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                        </button>

                        {/* Expandable Tabbed Drawer */}
                        <AnimatePresence>
                            {isDrawerOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="w-full overflow-hidden pt-8"
                                >
                                    {/* Category Filter Tabs inside Drawer */}
                                    <div className="flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 max-w-2xl mx-auto">
                                        {categories.map((cat) => {
                                            const isActive = activeTab === cat;
                                            const count = cat === "All" ? otherProjects.length : otherProjects.filter(p => p.category === cat).length;
                                            return (
                                                <button
                                                    key={cat}
                                                    onClick={() => setActiveTab(cat)}
                                                    className={`relative px-3 sm:px-4 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 z-10 ${
                                                        isActive ? "text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                                                    }`}
                                                >
                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="drawerFilterTab"
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

                                    {/* Drawer Projects Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                        {filteredOtherProjects.map((project) => {
                                            const CardIcon = project.icon || Layers;
                                            return (
                                                <div
                                                    key={project.id || project.title}
                                                    className="group flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-xl hover:border-[color:var(--color-accent)]/50 transition-all duration-300 cursor-pointer"
                                                    onClick={() => setSelectedProject(project)}
                                                >
                                                    <div>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <div
                                                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800"
                                                                style={{ color: "var(--color-accent)" }}
                                                            >
                                                                <CardIcon size={20} />
                                                            </div>
                                                            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${project.badgeColor}`}>
                                                                {project.status}
                                                            </span>
                                                        </div>

                                                        <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-[color:var(--color-accent)] transition-colors line-clamp-1">
                                                            {project.title}
                                                        </h4>

                                                        <div className="mb-3">
                                                            <span
                                                                className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md border"
                                                                style={{
                                                                    borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                                                                    color: "var(--color-accent)",
                                                                    backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)"
                                                                }}
                                                            >
                                                                <Activity size={11} />
                                                                {project.metric}
                                                            </span>
                                                        </div>

                                                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 font-light mb-4">
                                                            {project.description}
                                                        </p>
                                                    </div>

                                                    <div className="pt-3 border-t border-slate-900 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                                                        >
                                                            <Github size={13} /> Source
                                                        </a>

                                                        {project.deploy ? (
                                                            <a
                                                                href={project.deploy}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ color: "var(--color-accent)" }}
                                                                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:brightness-125 transition-all"
                                                            >
                                                                Live <ExternalLink size={12} />
                                                            </a>
                                                        ) : (
                                                            <button
                                                                onClick={() => setSelectedProject(project)}
                                                                className="text-slate-500 hover:text-slate-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                                                            >
                                                                Specs <Zap size={11} style={{ color: "var(--color-accent)" }} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Interactive Technical Deep-Dive Modal */}
                {selectedProject && (
                    <ProjectDeepDiveModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </section>
        </ClickSpark>
    );
}
