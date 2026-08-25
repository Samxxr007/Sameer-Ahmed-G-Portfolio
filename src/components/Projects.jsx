import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Activity, ShieldCheck, Cpu, Terminal, Layers, X, CheckCircle2, ChevronRight, Zap } from "lucide-react";

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
        gradient: "from-emerald-900/60 via-slate-900 to-slate-950",
        badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        description: "SIH 2026 unified farm-level chemical intelligence and cross-domain traceability platform connecting crop pesticides, livestock antimicrobials, and regulatory compliance with 7 trained Scikit-Learn/XGBoost models.",
        architecture: "React & TypeScript Frontend → FastAPI Gateway → Scikit-Learn/XGBoost Inference Engine → Prisma ORM & PostgreSQL DB",
        highlights: [
            "7 Trained ML Classification Models for PHI Compliance",
            "Cross-domain chemical traceability (Crops & Livestock)",
            "Automated regulatory threshold violation alerts"
        ],
        tags: ["React", "TypeScript", "FastAPI", "Python ML", "Prisma", "PostgreSQL"],
        github: "https://github.com/Samxxr007/IndiaX-Unified-Farm-Intelligence",
        deploy: "https://indiax-unified-farm.vercel.app"
    },
    {
        id: "roadguard",
        title: "RoadGuard AI",
        category: "AI & Machine Learning",
        status: "Real-Time AI",
        metric: "YOLOv11 • <45ms CCTV GIS Tracking",
        featured: true,
        icon: Activity,
        gradient: "from-cyan-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-blue-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-purple-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-rose-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-amber-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-amber-800/40 via-slate-900 to-slate-950",
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
        gradient: "from-indigo-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-orange-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-emerald-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-blue-900/60 via-slate-900 to-slate-950",
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
        gradient: "from-teal-900/60 via-slate-900 to-slate-950",
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
 * 3D Interactive Project Card with Cursor Spotlight Glow
 */
function ProjectCard({ project, onSelect, index }) {
    const CardIcon = project.icon;
    const cardRef = useRef(null);

    // Motion values for 3D Tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring-damped rotation for butter-smooth movement
    const rotateX = useSpring(useTransform(mouseY, [-120, 120], [8, -8]), { damping: 20, stiffness: 200 });
    const rotateY = useSpring(useTransform(mouseX, [-120, 120], [-8, 8]), { damping: 20, stiffness: 200 });

    // Cursor spotlight coordinates
    const spotlightX = useMotionValue(0);
    const spotlightY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX.set(x - rect.width / 2);
        mouseY.set(y - rect.height / 2);
        spotlightX.set(x);
        spotlightY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            layout
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col rounded-3xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl overflow-hidden h-full shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => onSelect(project)}
        >
            {/* Dynamic Cursor Spotlight Radial Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                style={{
                    background: useTransform(
                        [spotlightX, spotlightY],
                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)`
                    )
                }}
            />

            {/* Glowing Border Spotlight on Hover */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                style={{
                    border: "1px solid var(--color-accent)",
                    boxShadow: "0 0 30px color-mix(in srgb, var(--color-accent) 15%, transparent)"
                }}
            />

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

                {/* Central Graphic Symbol with 3D Depth */}
                <div className="relative z-10 flex items-center justify-center my-auto transform-gpu group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl group-hover:border-[color:var(--color-accent)]/50 transition-colors">
                        <CardIcon size={38} style={{ color: "var(--color-accent)" }} />
                    </div>
                </div>

                {/* Category & Action Hint */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2">
                    <span>{project.category}</span>
                    <span className="text-[10px] font-bold flex items-center gap-1 group-hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
                        Deep Dive <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col relative z-20">
                <h3
                    className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[color:var(--color-accent)] transition-colors leading-snug"
                >
                    {project.title}
                </h3>

                {/* Quantified Metric Badge */}
                <div className="mb-3.5">
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

                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm mb-5 flex-1 font-light line-clamp-3">
                    {project.description}
                </p>

                {/* Tags Preview */}
                <div className="flex flex-wrap gap-1.5 mb-5">
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
                <div
                    className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider group/btn"
                    >
                        <Github size={15} className="group-hover/btn:rotate-12 transition-transform" /> Source
                    </a>
                    {project.deploy ? (
                        <a
                            href={project.deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "var(--color-accent)" }}
                            className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] hover:brightness-125 transition-all group/live"
                        >
                            Live Demo <ExternalLink size={13} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                        </a>
                    ) : (
                        <button
                            onClick={() => onSelect(project)}
                            className="text-slate-500 hover:text-slate-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors"
                        >
                            Architecture <Zap size={11} style={{ color: "var(--color-accent)" }} />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

/**
 * Slide-Over Technical Deep-Dive Modal
 */
function ProjectDeepDiveModal({ project, onClose }) {
    if (!project) return null;
    const Icon = project.icon;

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

export default function Projects() {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="projects" className="w-full py-24 px-6 md:px-12 relative">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 border shadow-lg"
                        style={{
                            borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                            color: "var(--color-accent)",
                            backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)"
                        }}
                    >
                        <Sparkles size={13} />
                        Interactive Showcase
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
                        Featured <span style={{ color: "var(--color-accent)" }}>Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8 font-light">
                        Explore 12 production-ready systems, computer vision models, and full-stack architectures. Hover for 3D tilt and click any card for architecture deep dives.
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

                {/* 3D Projects Grid with Staggered Animations */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={i}
                                onSelect={(p) => setSelectedProject(p)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Interactive Technical Deep-Dive Modal */}
            {selectedProject && (
                <ProjectDeepDiveModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
