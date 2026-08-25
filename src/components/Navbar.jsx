import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Droplet } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { openCustomizer } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleThemeClick = () => {
        setIsOpen(false);
        openCustomizer();
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/50 shadow-lg" : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full h-16 flex items-center justify-between">
                <a href="#home" className="text-xl font-bold tracking-tight text-slate-100 transition-colors hover:text-[color:var(--color-accent)]">
                    Sameer <span style={{ color: "var(--color-accent)" }}>Ahmed G</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-[color:var(--color-accent)] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={openCustomizer}
                        className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-semibold"
                        title="Customize Theme"
                    >
                        <Droplet size={14} style={{ color: "var(--color-accent)" }} />
                        <span>Theme</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={handleThemeClick}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                        aria-label="Open Theme Palette"
                    >
                        <Droplet size={18} style={{ color: "var(--color-accent)" }} />
                    </button>
                    <button
                        className="p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 right-0 bg-slate-900/98 backdrop-blur-2xl border-b border-slate-800 flex flex-col items-center py-6 gap-5 md:hidden shadow-2xl z-40"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-slate-300 hover:text-[color:var(--color-accent)] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={handleThemeClick}
                            className="mt-2 px-5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-sm font-semibold flex items-center gap-2 text-white"
                        >
                            <Droplet size={16} style={{ color: "var(--color-accent)" }} />
                            Customize Colors
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
