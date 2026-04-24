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
                            Software Engineer at <span style={{ color: "var(--color-accent)" }}>The Skybrisk</span> and a second-year B.Tech Student at <span style={{ color: "var(--color-accent)" }}>SIMATS University</span>.
                        </p>

                        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
                            Highly motivated Software Engineer specializing in Full Stack development. I have a passion for creating clean, responsive, and performance-driven applications. Currently balancing my professional role at The Skybrisk with academic excellence at SIMATS, I strive to contribute to real-world projects and push the boundaries of modern web technologies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
