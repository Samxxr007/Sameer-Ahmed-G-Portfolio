import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        id: "truck-hai",
        role: "React Native Developer",
        type: "Active Internship",
        company: "Truck Hai",
        subline: "Logistics & Freight Mobility",
        location: "India · Remote",
        period: "Jul 2026 - Present",
        isCurrent: true,
        icon: Briefcase,
        points: [
            { label: "Cross-Platform Mobile Engineering", desc: "Architected and built core screens for the Truck Hai driver & fleet app using React Native, Expo, TypeScript, and Go." },
            { label: "Backend & Microservices", desc: "Contributed to high-throughput backend services in Go, integrating REST APIs with optimized payload latency." },
            { label: "Relational Database Testing", desc: "Engineered PostgreSQL schemas, queries, and migrations for local development workflows and integration test suites." },
            { label: "Team Velocity & Quality", desc: "Managed pull requests, peer code reviews, and followed weekly Agile sprints to rapidly ship driver dispatch and tracking features." }
        ],
        skills: ["React Native", "Expo", "TypeScript", "Go (Golang)", "PostgreSQL", "REST APIs", "Agile Sprint"]
    },
    {
        id: "skybrisk",
        role: "Web Developer Intern",
        type: "Enterprise ERP",
        company: "The Skybrisk",
        subline: "Enterprise Business Systems",
        location: "Remote",
        period: "Feb 2026 - Apr 2026",
        isCurrent: false,
        icon: Briefcase,
        points: [
            { label: "Enterprise ERP Architecture", desc: "Developed and deployed a production-grade ERP web platform using MERN Stack and Material-UI." },
            { label: "RBAC Security", desc: "Built a multi-tier Role-Based Access Control authorization engine, securing sensitive administrative and client records." },
            { label: "Workflow Optimization", desc: "Streamlined data entry workflows, reducing operational friction across inventory, invoicing, and order pipelines." }
        ],
        skills: ["React", "Node.js", "Express", "MongoDB", "Material-UI", "RBAC Engine", "JWT"]
    },
    {
        id: "rmkart",
        role: "Full Stack Intern",
        type: "E-Commerce Platform",
        company: "RMkart",
        subline: "ShopSphere Platform",
        location: "Remote",
        period: "Feb 2026 - Mar 2026",
        isCurrent: false,
        icon: Briefcase,
        points: [
            { label: "BFF Pattern Transition", desc: "Transitioned monolithic e-commerce endpoints to a decoupled Backend-for-Frontend (BFF) architecture, improving mobile responsiveness." },
            { label: "Authentication & Security", desc: "Implemented JWT token rotation and secure session management across buyer and seller portals." },
            { label: "Scalable React/Vite UI", desc: "Designed interactive product catalogs and lightning-fast checkout experiences." }
        ],
        skills: ["React", "Node.js", "BFF Pattern", "JWT Rotation", "Vite", "Tailwind CSS"]
    },
    {
        id: "corizo",
        role: "Full Stack Web Development Intern",
        type: "Engineering Training",
        company: "Corizo Edutech Pvt. Ltd.",
        subline: "Edutech Solutions",
        location: "Remote",
        period: "Jun 2025 - Aug 2025",
        isCurrent: false,
        icon: Briefcase,
        points: [
            { label: "Hands-On Full Stack Training", desc: "Completed intensive 2-month engineering projects mastering modern web fundamentals, REST API conventions, and frontend state." },
            { label: "Code Quality", desc: "Adhered to industry coding standards, participating in mentor-guided code reviews and agile sprints." }
        ],
        skills: ["Full Stack Web", "JavaScript ES6+", "HTML5/CSS3", "REST APIs", "Git/GitHub"]
    },
    {
        id: "education",
        role: "B.Tech in Information Technology",
        type: "3rd Year Undergraduate",
        company: "SIMATS University",
        subline: "School of Engineering",
        location: "Chennai, Tamil Nadu",
        period: "2024 - Present",
        isEducation: true,
        icon: GraduationCap,
        cgpa: "9.35",
        points: [
            { label: "Academic Standing", desc: "Currently in 3rd Year (Pre-Final Year) with a 9.35 CGPA, focusing on Distributed Systems, Cloud Architecture, and Machine Learning." },
            { label: "Core Coursework", desc: "Data Structures & Algorithms, Database Management Systems (PostgreSQL), Computer Networks, and Software Engineering Principles." }
        ],
        skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-24 px-4 sm:px-6 md:px-12 overflow-hidden relative">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 border shadow-lg"
                        style={{
                            borderColor: "color-mix(in srgb, var(--color-accent) 25%, transparent)",
                            color: "var(--color-accent)",
                            backgroundColor: "color-mix(in srgb, var(--color-accent) 8%, transparent)"
                        }}
                    >
                        <Sparkles size={13} />
                        Engineering Journey
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Experience & <span style={{ color: "var(--color-accent)" }}>Education</span>
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base font-light">
                        My active internships, engineering contributions, and academic milestones.
                    </p>
                </motion.div>

                {/* Vertical Timeline Items List */}
                <div className="space-y-12">
                    {experiences.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                className="relative pl-8 md:pl-0"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                                    
                                    {/* Desktop Left Date Column */}
                                    <div className="hidden md:flex flex-col items-end col-span-1 pt-1">
                                        <div
                                            className="flex items-center gap-2 text-sm font-bold"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            <Calendar size={16} />
                                            <span>{item.period}</span>
                                        </div>
                                        <span className="text-xs text-slate-500 mt-1 font-medium">
                                            {item.isCurrent ? "Current Role" : item.type}
                                        </span>
                                    </div>

                                    {/* Right Content Area */}
                                    <div className="md:col-span-4 relative">
                                        
                                        {/* Timeline Dot Node */}
                                        <div
                                            className="absolute -left-10 md:-left-[2.5rem] top-1 h-5 w-5 rounded-full border-4 border-slate-950 flex items-center justify-center z-10 shadow-[0_0_14px_var(--color-accent)]"
                                            style={{ backgroundColor: "var(--color-accent)" }}
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                        </div>

                                        {/* Flowing Laser Timeline Connector Line */}
                                        {index !== experiences.length - 1 && (
                                            <div className="absolute -left-[2.1rem] top-5 bottom-[-3rem] md:bottom-[-4rem] w-[2px] bg-slate-800 overflow-hidden">
                                                <motion.div
                                                    animate={{ y: ["-100%", "200%"] }}
                                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
                                                    className="w-full h-1/2 bg-gradient-to-b from-transparent via-[color:var(--color-accent)] to-transparent"
                                                />
                                            </div>
                                        )}

                                        {/* Glass Experience Card */}
                                        <div className="group glass-card p-6 md:p-8 rounded-3xl border border-slate-800/80 bg-slate-900/50 hover:border-[color:var(--color-accent)]/40 hover:shadow-2xl transition-all">
                                            
                                            {/* Role Header + Status */}
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-[color:var(--color-accent)]/40 transition-colors shadow-inner"
                                                        style={{ color: "var(--color-accent)" }}
                                                    >
                                                        <Icon size={20} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[color:var(--color-accent)] transition-colors">
                                                            {item.role}
                                                        </h3>
                                                    </div>
                                                </div>

                                                {/* Live Pulse or CGPA Badge */}
                                                {item.isCurrent ? (
                                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm">
                                                        <span className="relative flex h-2 w-2">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                                        </span>
                                                        Active Internship
                                                    </span>
                                                ) : item.cgpa ? (
                                                    <span
                                                        className="text-[11px] font-bold px-3 py-0.5 rounded-full border shadow-sm"
                                                        style={{
                                                            borderColor: "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                                                            color: "var(--color-accent)",
                                                            backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)"
                                                        }}
                                                    >
                                                        CGPA: {item.cgpa}
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400">
                                                        {item.type}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Company, Subline & Location */}
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                                                <h4
                                                    className="text-lg font-semibold"
                                                    style={{ color: "var(--color-accent)" }}
                                                >
                                                    {item.company} · {item.subline}
                                                </h4>
                                                <span className="text-slate-500 text-xs">•</span>
                                                <span className="text-slate-400 text-sm flex items-center gap-1">
                                                    <MapPin size={13} /> {item.location}
                                                </span>
                                            </div>

                                            {/* Mobile-only date view */}
                                            <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mb-4">
                                                <Calendar size={14} />
                                                <span>{item.period}</span>
                                            </div>

                                            {/* Contribution Points */}
                                            <ul className="space-y-2.5 text-slate-300 text-sm md:text-base leading-relaxed list-disc list-inside font-light mb-6">
                                                {item.points.map((pt, pIdx) => (
                                                    <li key={pIdx} className="marker:text-[color:var(--color-accent)]">
                                                        <strong className="text-white font-medium">{pt.label}:</strong> {pt.desc}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech Badges Row */}
                                            <div className="pt-3 border-t border-slate-800/80">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {item.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
