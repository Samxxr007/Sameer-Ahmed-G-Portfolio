import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
    {
        title: "FishConnect AI",
        description: "A mobile-first Next.js 14 application for coastal Indian fishermen featuring AI-powered demand forecasting, marine data, and a direct buyer marketplace.",
        tags: ["Next.js 14", "AI", "TypeScript", "Recharts"],
        github: "https://github.com/Samxxr007/Fish-Connect",
        deploy: "https://fish-connect.vercel.app/"
    },
    {
        title: "Luminary Studio",
        description: "A premium, luxury-minimalist digital agency homepage demonstrating editorial design and high-performance React features.",
        tags: ["Next.js 14", "Framer Motion", "UI/UX", "Vercel"],
        github: "https://github.com/Samxxr007/Design-Agency-Home-Page",
        deploy: "https://design-agency-home-page.vercel.app"
    },
    {
        title: "Prashikshan Learning Hub",
        description: "A modern training and learning management platform designed to streamline course delivery and user progress.",
        tags: ["React", "LMS", "Education", "Vite"],
        github: "https://github.com/Samxxr007/Prashikshan",
        deploy: "https://prashikshan-ten.vercel.app"
    },
    {
        title: "Skybrisk ERP App",
        description: "A comprehensive full-stack business ERP management system for managing workflows, inventory, and business operations.",
        tags: ["React", "Node.js", "Full Stack", "ERP"],
        github: "https://github.com/Samxxr007/Skybrisk-ERP-App",
        deploy: "https://skybrisk-erp-app.vercel.app"
    },
    {
        title: "RM-Kart Shopping App",
        description: "An interactive e-commerce platform featuring product listings, cart functionality, and a seamless checkout experience.",
        tags: ["React", "E-commerce", "Web App"],
        github: "https://github.com/Samxxr007/RM-Kart-Shopping-App",
        deploy: "https://rm-kart-shopping-app.vercel.app"
    },
    {
        title: "CityClean360",
        description: "A smart city waste management dashboard integrated with ESP32-based hardware for real-time monitoring.",
        tags: ["React", "IoT", "Firebase", "Dashboard"],
        github: "https://github.com/Samxxr007/Cityclean360"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
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
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A curated selection of my active GitHub repositories, showcasing real-world applications and deployment-ready code.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            whileHover={{ y: -12, transition: { duration: 0.3 } }}
                            className="glass-card group flex flex-col rounded-3xl border border-slate-800/60 bg-slate-900/40 relative overflow-hidden h-full shadow-2xl"
                        >
                            {/* Visual Asset Area */}
                            <div className="h-48 w-full bg-slate-800/80 relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                                    <Code2 size={80} />
                                </div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"
                                />

                                {/* Hover Reveal Tools/Tags */}
                                <div className="absolute inset-x-0 bottom-0 p-4 transition-transform translate-y-full group-hover:translate-y-0 duration-300">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-white/10 backdrop-blur-md px-2 py-1 rounded text-white font-bold uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3
                                    className="text-2xl font-bold text-white mb-4 group-hover:text-[color:var(--color-accent)] transition-colors"
                                >
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                                    >
                                        <Github size={18} /> Repo
                                    </a>
                                    {project.deploy ? (
                                        <a
                                            href={project.deploy}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "var(--color-accent)" }}
                                            className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] hover:brightness-125 transition-all"
                                        >
                                            Live Demo <ExternalLink size={14} />
                                        </a>
                                    ) : (
                                        <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest italic">
                                            Documentation Only
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
