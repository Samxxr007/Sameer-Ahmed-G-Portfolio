import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Globe } from "lucide-react";

const skillGroups = [
    {
        title: "Mobile & Frontend",
        icon: <Layout size={24} />,
        skills: ["React Native", "Expo", "React 19", "Next.js 14", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Backend & Cloud",
        icon: <Database size={24} />,
        skills: ["Go (Golang)", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Prisma"]
    },
    {
        title: "AI & Computer Vision",
        icon: <Cpu size={24} />,
        skills: ["YOLOv11", "OpenCV", "Scikit-Learn", "REST APIs", "BFF Patterns"]
    },
    {
        title: "DevOps & Tooling",
        icon: <Terminal size={24} />,
        skills: ["Docker", "CI/CD", "GitHub Actions", "Git", "Vercel", "Render"]
    },
    {
        title: "Core Languages",
        icon: <Code2 size={24} />,
        skills: ["TypeScript", "JavaScript", "Go", "Python", "Java", "C/C++"]
    },
    {
        title: "UI/UX & Interactive",
        icon: <Globe size={24} />,
        skills: ["Framer Motion", "Material-UI", "Recharts", "Leaflet GIS", "Responsive UI"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function TechStack() {
    return (
        <section id="skills" className="w-full py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h4
                        className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
                        style={{ color: "var(--color-accent)" }}
                    >
                        Technical Toolbox
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic font-serif">
                        Skills & <span style={{ color: "var(--color-accent)" }}>Technologies</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Technologies and tools I use to bring ideas to life and build resilient digital products.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="glass-card p-8 rounded-3xl border border-slate-800/70 bg-slate-900/40 relative group overflow-hidden shadow-xl hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300"
                        >
                            {/* Ambient shine sweep on hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            />

                            <div className="flex items-center justify-between mb-6">
                                <div
                                    className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 w-fit"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    {group.icon}
                                </div>
                                <div
                                    className="h-2 w-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2 group-hover:text-[color:var(--color-accent)] transition-colors">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-default shadow-sm"
                                        style={{
                                            borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                                            color: "color-mix(in srgb, var(--color-accent) 90%, white)",
                                            backgroundColor: "color-mix(in srgb, var(--color-accent) 6%, transparent)"
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
