"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = ["Full Stack Software Engineer", "React Developer", "Node.js Developer", "Problem Solver"];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">Pongsatorn R.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          ( Bass )
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-primary font-medium mb-6"
        >
          Full Stack Software Engineer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A self-taught Full Stack Software Engineer with a background in Electrical Engineering.
          Passionate about building robust and user-friendly web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button size="lg" className="glow glow-hover group" asChild>
            <a href="mailto:pongsatorn.rk@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="/Pongsatorn's Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/PongsatornR-11"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/bas.pongsatorn/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/bass_sssssy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="#about">
                <ArrowDown className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
