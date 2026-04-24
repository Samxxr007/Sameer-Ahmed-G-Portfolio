import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="w-full py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Experience & <span style={{ color: "var(--color-accent)" }}>Education</span>
                    </h2>
                    <p className="text-slate-400">My academic journey and professional experience.</p>
                </motion.div>

                <div className="space-y-12">
                    {/* Skybrisk Experience Item */}
                    <motion.div
                        className="relative pl-8 md:pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:flex flex-col items-end col-span-1 pt-1">
                                <div
                                    className="flex items-center gap-2 text-sm font-medium"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <Calendar size={16} />
                                    <span>2024 - Present</span>
                                </div>
                            </div>

                            <div className="md:col-span-4 relative">
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-10 md:-left-[2.5rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 flex items-center justify-center z-10"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                </div>
                                {/* Timeline line */}
                                <div className="absolute -left-[2.1rem] top-5 bottom-[-3rem] md:bottom-[-4rem] w-[2px] bg-slate-800"></div>

                                <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800/60 bg-slate-900/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2 rounded-lg bg-slate-800/80"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <Briefcase size={20} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Software Engineer</h3>
                                    </div>
                                    <h4
                                        className="text-lg font-medium mb-4"
                                        style={{ color: "var(--color-accent)" }}
                                    >
                                        The Skybrisk
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>2024 - Present</span>
                                    </div>
                                    <ul
                                        className="space-y-2 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside"
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]">Leading development of modern ERP systems and full-stack solutions.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Implementing scalable architectures using React and Node.js.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Collaborating on real-world business automation projects.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RM-Kart Experience Item */}
                    <motion.div
                        className="relative pl-8 md:pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:flex flex-col items-end col-span-1 pt-1">
                                <div
                                    className="flex items-center gap-2 text-sm font-medium"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <Calendar size={16} />
                                    <span>Mar 2026 - Present</span>
                                </div>
                            </div>

                            <div className="md:col-span-4 relative">
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-10 md:-left-[2.5rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 flex items-center justify-center z-10"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                </div>
                                {/* Timeline line */}
                                <div className="absolute -left-[2.1rem] top-5 bottom-[-3rem] md:bottom-[-4rem] w-[2px] bg-slate-800"></div>

                                <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800/60 bg-slate-900/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2 rounded-lg bg-slate-800/80"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <Briefcase size={20} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Developer (Lead)</h3>
                                    </div>
                                    <h4
                                        className="text-lg font-medium mb-4"
                                        style={{ color: "var(--color-accent)" }}
                                    >
                                        RM-Kart (E-commerce Platform)
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>Mar 2026 - Present</span>
                                    </div>
                                    <ul
                                        className="space-y-2 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside"
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]">Architected and developed a comprehensive e-commerce shopping app from scratch, featuring dynamic catalogs and checkout flows.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Implemented robust state management for cart logic and JWT-based authentication flows.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Developed an integrated admin dashboard for order tracking, inventory management, and user oversight.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Designed a modern, mobile-first responsive interface utilizing Tailwind CSS.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Item */}
                    <motion.div
                        className="relative pl-8 md:pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:flex flex-col items-end col-span-1 pt-1">
                                <div
                                    className="flex items-center gap-2 text-sm font-medium"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <Calendar size={16} />
                                    <span>Jun 2025 - Aug 2025</span>
                                </div>
                            </div>

                            <div className="md:col-span-4 relative">
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-10 md:-left-[2.5rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 flex items-center justify-center z-10"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                </div>
                                {/* Timeline line */}
                                <div className="absolute -left-[2.1rem] top-5 bottom-[-3rem] md:bottom-[-4rem] w-[2px] bg-slate-800"></div>

                                <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800/60 bg-slate-900/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2 rounded-lg bg-slate-800/80"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <Briefcase size={20} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Web Development Intern</h3>
                                    </div>
                                    <h4
                                        className="text-lg font-medium mb-4"
                                        style={{ color: "var(--color-accent)" }}
                                    >
                                        Corizo Edutech Pvt. Ltd. | Remote
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>Jun 2025 - Aug 2025</span>
                                    </div>
                                    <ul
                                        className="space-y-2 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside"
                                        style={{ "--marker-color": "var(--color-accent)" }}
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]">Completed a 2-month internship focusing on full-stack web development.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Gained exposure to both front-end and back-end technologies.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Followed company coding practices and collaborated with mentors to deliver assigned tasks.</li>
                                        <li className="marker:text-[color:var(--color-accent)]">Worked under flexible hours while adhering to company guidelines and responsibilities.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Item */}
                    <motion.div
                        className="relative pl-8 md:pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:flex flex-col items-end col-span-1 pt-1">
                                <div
                                    className="flex items-center gap-2 text-sm font-medium"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <Calendar size={16} />
                                    <span>2024 - Present</span>
                                </div>
                            </div>

                            <div className="md:col-span-4 relative">
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-10 md:-left-[2.5rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 flex items-center justify-center z-10"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                </div>

                                <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800/60 bg-slate-900/50 mt-4 md:mt-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2 rounded-lg bg-slate-800/80"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <GraduationCap size={20} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">B.Tech in Information Technology</h3>
                                    </div>
                                    <h4
                                        className="text-lg font-medium mb-4"
                                        style={{ color: "var(--color-accent)" }}
                                    >
                                        SIMATS University, Chennai, Tamil Nadu
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>2024 - Present</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-2">
                                        Currently in Second Year.
                                    </p>
                                    <p
                                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset"
                                        style={{
                                            backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                                            color: "var(--color-accent)",
                                            ringColor: "color-mix(in srgb, var(--color-accent) 20%, transparent)"
                                        }}
                                    >
                                        CGPA: 9.35
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
