import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal, Cpu, Globe } from "lucide-react";

const skillGroups = [
    {
        title: "Frontend Development",
        icon: <Globe size={24} />,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js 14"]
    },
    {
        title: "Mobile & UI/UX",
        icon: <Layout size={24} />,
        skills: ["React Native", "Tailwind CSS", "Material-UI", "Framer Motion"]
    },
    {
        title: "Backend & Database",
        icon: <Database size={24} />,
        skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
    },
    {
        title: "Core Languages",
        icon: <Code2 size={24} />,
        skills: ["Java", "Python", "C", "C++"]
    },
    {
        title: "Tools & Deployment",
        icon: <Terminal size={24} />,
        skills: ["Git", "GitHub", "Vite", "Vercel", "Render", "Postman"]
    },
    {
        title: "AI & Architecture",
        icon: <Cpu size={24} />,
        skills: ["ChatGPT", "GitHub Copilot", "REST APIs", "BFF Patterns"]
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
                        Technical Skills
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 italic font-serif">
                        My Toolbox & <span style={{ color: "var(--color-accent)" }}>Technologies</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Technologies and tools I use to bring ideas to life and build exceptional digital experiences.
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
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 relative group overflow-hidden"
                        >
                            {/* Shine effect on hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            />

                            <div
                                className="mb-6 p-3 rounded-xl bg-slate-800/50 w-fit"
                                style={{ color: "var(--color-accent)" }}
                            >
                                {group.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full text-xs font-bold border transition-all"
                                        style={{
                                            borderColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                                            color: "color-mix(in srgb, var(--color-accent) 90%, white)",
                                            backgroundColor: "color-mix(in srgb, var(--color-accent) 5%, transparent)"
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
