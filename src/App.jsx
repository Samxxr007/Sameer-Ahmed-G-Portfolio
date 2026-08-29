import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ThemeCustomizer from "./components/ThemeCustomizer";
import Preloader from "./components/Preloader";
import DynamicBackground from "./components/DynamicBackground";
import { ThemeProvider } from "./context/ThemeContext";

import ClickSpark from "./components/ClickSpark";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Prevention of scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      <ClickSpark
        sparkColor="var(--color-accent, #ff7b00)"
        sparkSize={11}
        sparkRadius={18}
        sparkCount={8}
        duration={420}
        easing="ease-out"
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={handleLoadingComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="min-h-screen text-slate-50 font-inter selection:bg-indigo-500/30 selection:text-white pb-20"
            >
              <DynamicBackground />
              <ThemeCustomizer />
              <Navbar />
              <main className="flex flex-col items-center w-full">
                <Hero />
                <About />
                <TechStack />
                <Experience />
                <Projects />
                <Certificates />
                <Contact />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </ClickSpark>
    </ThemeProvider>
  );
}