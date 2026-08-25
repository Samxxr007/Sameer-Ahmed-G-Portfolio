import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, Layers } from "lucide-react";

const categories = ["All", "AI & Machine Learning", "Full Stack & Web", "Systems & DevOps"];

const projects = [
    {
        title: "IndiaX — Farm Chemical Intelligence",
        category: "AI & Machine Learning",
        featured: true,
        description: "SIH 2026 unified farm-level chemical intelligence and cross-domain traceability platform connecting crop pesticides, livestock antimicrobials, and regulatory compliance with 7 trained ML models.",
        tags: ["React", "TypeScript", "FastAPI", "Python ML", "Prisma", "PostgreSQL"],
        github: "https://github.com/Samxxr007/IndiaX-Unified-Farm-Intelligence",
        deploy: "https://indiax-unified-farm.vercel.app"
    },
    {
        title: "RoadGuard AI",
        category: "AI & Machine Learning",
        featured: true,
        description: "Intelligent Smart City road surface damage detection and predictive maintenance planning system utilizing CCTV video streams, YOLOv11 Computer Vision, and Leaflet GIS mapping.",
        tags: ["React 19", "FastAPI", "YOLOv11", "OpenCV", "PostgreSQL", "Leaflet"],
        github: "https://github.com/Samxxr007/RoadGuard-AI"
    },
    {
        title: "FishConnect AI",
        category: "AI & Machine Learning",
        featured: true,
        description: "Mobile-first Next.js 14 application for coastal Indian fishermen featuring AI-powered demand forecasting, real-time marine data, and a direct bulk buyer marketplace.",
        tags: ["Next.js 14", "AI", "TypeScript", "Recharts", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Fish-Connect",
        deploy: "https://fish-connect.vercel.app/"
    },
    {
        title: "AutoShip Pipeline",
        category: "Systems & DevOps",
        featured: true,
        description: "Production-grade CI/CD ecosystem designed for automated containerization, testing, and continuous delivery of Next.js applications using Docker and GitHub Actions.",
        tags: ["DevOps", "Docker", "CI/CD", "Next.js", "GitHub Actions"],
        github: "https://github.com/Samxxr007/Autoship-Pipeline-Automation"
    },
    {
        title: "ShopSphere Forensic Mirror",
        category: "AI & Machine Learning",
        description: "Edge AI and Cloud Forensic DNA verification pipeline engineered to eliminate e-commerce return fraud through automated image tampering checks and item comparison.",
        tags: ["Edge AI", "TypeScript", "React", "Python", "Computer Vision"],
        github: "https://github.com/Samxxr007/Fraud-Mirror-App-HackHustle"
    },
    {
        title: "Smart Crowd Risk Analysis",
        category: "AI & Machine Learning",
        description: "AI surveillance platform for real-time crowd density analysis, motion intelligence, and stampede risk prediction using OpenCV and FastAPI.",
        tags: ["Computer Vision", "FastAPI", "OpenCV", "Next.js 14", "Python"],
        github: "https://github.com/Samxxr007/Stampede-Alert-System-Using-CV"
    },
    {
        title: "Luminary Studio",
        category: "Full Stack & Web",
        description: "Premium, luxury-minimalist digital agency homepage demonstrating editorial UI design, smooth micro-interactions, and high-performance React features.",
        tags: ["Next.js 14", "Framer Motion", "UI/UX", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Design-Agency-Home-Page",
        deploy: "https://design-agency-home-page.vercel.app"
    },
    {
        title: "DroneSwarm Pathfinder",
        category: "Systems & DevOps",
        description: "Algorithmic DAA capstone web application applying Convex Hull and Closest-Pair algorithms for collision-free drone swarm formation and dynamic route planning.",
        tags: ["Algorithms", "TypeScript", "React", "Tailwind CSS", "DAA"],
        github: "https://github.com/Samxxr007/Drone-Swarm-Path-Finder-Project"
    },
    {
        title: "Skybrisk ERP App",
        category: "Full Stack & Web",
        description: "Comprehensive full-stack business ERP management system for managing workflows, role-based authorization, inventory, and business operations.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
        github: "https://github.com/Samxxr007/Skybrisk-ERP-App",
        deploy: "https://skybrisk-erp-app.vercel.app"
    },
    {
        title: "Prashikshan Learning Hub",
        category: "Full Stack & Web",
        description: "Modern training and learning management platform designed to streamline course delivery, interactive quizzes, and student progress tracking.",
        tags: ["React", "LMS", "Education", "Vite", "Tailwind CSS"],
        github: "https://github.com/Samxxr007/Prashikshan",
        deploy: "https://prashikshan-ten.vercel.app"
    },
    {
        title: "RM-Kart Shopping App",
        category: "Full Stack & Web",
        description: "Interactive full-stack e-commerce platform built with Backend-for-Frontend (BFF) architecture, JWT authentication, and seamless checkout experience.",
        tags: ["React", "Node.js", "BFF Pattern", "JWT", "E-Commerce"],
        github: "https://github.com/Samxxr007/RM-Kart-Shopping-App",
        deploy: "https://rm-kart-shopping-app.vercel.app"
    },
    {
        title: "CityClean360",
        category: "Systems & DevOps",
        description: "Smart city IoT waste management dashboard integrated with ESP32-based hardware for real-time fill level monitoring and dispatch alerts.",
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
                    <h4
                        className="text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-70"
                        style={{ color: "var(--color-accent)" }}
                    >
                        Portfolio
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic font-serif">
                        Featured <span style={{ color: "var(--color-accent)" }}>Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                        A curated selection of my active GitHub repositories, showcasing real-world applications, AI systems, and deployment-ready code.
                    </p>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md max-w-2xl mx-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                                    activeTab === cat
                                        ? "shadow-lg text-slate-950 font-bold"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                                }`}
                                style={{
                                    backgroundColor: activeTab === cat ? "var(--color-accent)" : "transparent"
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="glass-card group flex flex-col rounded-3xl border border-slate-800/60 bg-slate-900/40 relative overflow-hidden h-full shadow-2xl hover:border-[color:var(--color-accent)]/40 transition-colors"
                            >
                                {/* Visual Asset Area */}
                                <div className="h-44 w-full bg-slate-800/80 relative overflow-hidden group">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                                        <Code2 size={70} />
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"
                                    />

                                    {project.featured && (
                                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                                            <Sparkles size={12} style={{ color: "var(--color-accent)" }} />
                                            Featured
                                        </div>
                                    )}

                                    {/* Category Pill */}
                                    <div className="absolute top-4 right-4 text-[10px] px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700 font-medium">
                                        {project.category}
                                    </div>

                                    {/* Hover Reveal Tools/Tags */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 transition-transform translate-y-full group-hover:translate-y-0 duration-300 bg-slate-950/80 backdrop-blur-sm">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-white font-bold tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-7 flex-1 flex flex-col">
                                    <h3
                                        className="text-xl font-bold text-white mb-3 group-hover:text-[color:var(--color-accent)] transition-colors"
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Default Tags preview */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[10px] px-2 py-0.5 rounded font-medium border"
                                                style={{
                                                    borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                                                    color: "color-mix(in srgb, var(--color-accent) 90%, white)",
                                                    backgroundColor: "color-mix(in srgb, var(--color-accent) 5%, transparent)"
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-[10px] px-1.5 py-0.5 rounded text-slate-500 bg-slate-800/40">
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-5 border-t border-slate-800/50 mt-auto">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                                        >
                                            <Github size={16} /> Code
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
                                                Repository
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
