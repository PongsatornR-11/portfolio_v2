"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { ScrollProgress } from "@/components/scroll-progress";
import { ParticleBackground } from "@/components/particle-background";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full h-12 w-12 glow glow-hover"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ left: mousePosition.x - 8, top: mousePosition.y - 8 }}
        animate={{ scale: isHovering ? 2 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ left: mousePosition.x - 20, top: mousePosition.y - 20 }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </div>
  );
}

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <CursorEffect />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
