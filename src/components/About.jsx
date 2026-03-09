import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        About <span style={{ color: "var(--color-accent)" }}>Me</span>
                    </h2>

                    <div className="glass-card p-8 md:p-12 rounded-2xl w-full border border-slate-800/60 bg-slate-900/50">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 font-medium">
                            Second-year B.Tech Information Technology student at SIMATS University.
                        </p>

                        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
                            Highly motivated intern with a passion for software engineering and web development. Seeking a hands-on role where I can contribute to real-world projects and grow professionally. I strive to create clean, responsive, and performance-driven applications while exploring new technologies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
