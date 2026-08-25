import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

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
                    <p className="text-slate-400">My academic journey and professional engineering experience.</p>
                </motion.div>

                <div className="space-y-12">
                    {/* Truck Hai Experience Item */}
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
                                    className="flex items-center gap-2 text-sm font-bold"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <Calendar size={16} />
                                    <span>Jul 2026 - Present</span>
                                </div>
                                <span className="text-xs text-slate-500 mt-1 font-medium">Current Role</span>
                            </div>

                            <div className="md:col-span-4 relative">
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-10 md:-left-[2.5rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 flex items-center justify-center z-10 shadow-[0_0_12px_var(--color-accent)]"
                                    style={{ backgroundColor: "var(--color-accent)" }}
                                >
                                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                </div>
                                {/* Timeline line */}
                                <div className="absolute -left-[2.1rem] top-5 bottom-[-3rem] md:bottom-[-4rem] w-[2px] bg-slate-800"></div>

                                <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800/70 bg-slate-900/50 hover:border-[color:var(--color-accent)]/40 hover:shadow-2xl transition-all">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60"
                                                style={{ color: "var(--color-accent)" }}
                                            >
                                                <Briefcase size={20} />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white">React Native Developer</h3>
                                        </div>
                                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                                            Active Internship
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                                        <h4
                                            className="text-lg font-semibold"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            Truck Hai · Logistics & Freight Mobility
                                        </h4>
                                        <span className="text-slate-500 text-xs">•</span>
                                        <span className="text-slate-400 text-sm flex items-center gap-1">
                                            <MapPin size={13} /> India · Remote
                                        </span>
                                    </div>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>Jul 2026 - Present</span>
                                    </div>
                                    <ul
                                        className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside font-light"
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Cross-Platform Mobile Engineering:</strong> Architected and built core screens for the Truck Hai driver & fleet app using React Native, Expo, TypeScript, and Go.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Backend & Microservices:</strong> Contributed to high-throughput backend services in Go, integrating REST APIs with optimized payload latency.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Relational Database Testing:</strong> Engineered PostgreSQL schemas, queries, and migrations for local development workflows and integration test suites.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Team Velocity & Quality:</strong> Managed pull requests, peer code reviews, and followed weekly Agile sprints to rapidly ship driver dispatch and tracking features.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skybrisk Experience Item */}
                    <motion.div
                        className="relative pl-8 md:pl-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                            <div className="hidden md:flex flex-col items-end col-span-1 pt-1">
                                <div
                                    className="flex items-center gap-2 text-sm font-medium"
                                    style={{ color: "var(--color-accent)" }}
                                >
                                    <Calendar size={16} />
                                    <span>Feb 2026 - Apr 2026</span>
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

                                <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800/70 bg-slate-900/50 hover:border-[color:var(--color-accent)]/30 hover:shadow-2xl transition-all">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <Briefcase size={20} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Web Developer Intern</h3>
                                    </div>
                                    <h4
                                        className="text-lg font-medium mb-4"
                                        style={{ color: "var(--color-accent)" }}
                                    >
                                        The Skybrisk · Enterprise Systems
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>Feb 2026 - Apr 2026</span>
                                    </div>
                                    <ul
                                        className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside font-light"
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Enterprise ERP Architecture:</strong> Developed and deployed a production-grade ERP web platform using MERN Stack and Material-UI.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">RBAC Security:</strong> Built a multi-tier Role-Based Access Control authorization engine, securing sensitive administrative and client records.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Workflow Optimization:</strong> Streamlined data entry workflows, reducing operational friction across inventory, invoicing, and order pipelines.</li>
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
                                    <span>Feb 2026 - Mar 2026</span>
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

                                <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800/70 bg-slate-900/50 hover:border-[color:var(--color-accent)]/30 hover:shadow-2xl transition-all">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <Briefcase size={20} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">Full Stack Intern</h3>
                                    </div>
                                    <h4
                                        className="text-lg font-medium mb-4"
                                        style={{ color: "var(--color-accent)" }}
                                    >
                                        RMkart · ShopSphere Platform
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>Feb 2026 - Mar 2026</span>
                                    </div>
                                    <ul
                                        className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside font-light"
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">BFF Pattern Transition:</strong> Transitioned monolithic e-commerce endpoints to a decoupled Backend-for-Frontend (BFF) architecture, improving mobile responsiveness.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Authentication & Security:</strong> Implemented JWT token rotation and secure session management across buyer and seller portals.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Scalable React/Vite UI:</strong> Designed interactive product catalogs and lightning-fast checkout experiences.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Corizo Experience Item */}
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

                                <div className="glass-card p-6 md:p-8 rounded-3xl border border-slate-800/70 bg-slate-900/50 hover:border-[color:var(--color-accent)]/30 hover:shadow-2xl transition-all">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60"
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
                                        Corizo Edutech Pvt. Ltd. · Remote
                                    </h4>
                                    <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                        <Calendar size={14} />
                                        <span>Jun 2025 - Aug 2025</span>
                                    </div>
                                    <ul
                                        className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside font-light"
                                    >
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Hands-On Full Stack Training:</strong> Completed intensive 2-month engineering projects mastering modern web fundamentals, REST API conventions, and frontend state.</li>
                                        <li className="marker:text-[color:var(--color-accent)]"><strong className="text-white font-medium">Code Quality:</strong> Adhered to industry coding standards, participating in mentor-guided code reviews and agile sprints.</li>
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
