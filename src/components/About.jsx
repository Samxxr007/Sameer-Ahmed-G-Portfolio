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
                            B.Tech Information Technology Student (CGPA: <span style={{ color: "var(--color-accent)" }}>9.37, Top 5% of Cohort</span>) at <span style={{ color: "var(--color-accent)" }}>Saveetha School of Engineering (SIMATS)</span>.
                        </p>

                        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
                            Software Engineer with hands-on experience across multiple full-stack and mobile engineering internships building scalable applications using React, React Native, Next.js, and Node.js. Skilled in RESTful API integration, CI/CD pipelines (Docker & GitHub Actions), modular architecture, and high-performance system design with a strong foundation in SDLC and Agile methodologies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
