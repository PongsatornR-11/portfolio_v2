"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const stats = [
  { label: "Technologies", value: "20+" },
  { label: "Projects", value: "3+" },
  { label: "Years Learning", value: "2+" },
  { label: "Background", value: "EE" },
];

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications from frontend to backend",
  },
  {
    icon: Palette,
    title: "Modern Technologies",
    description: "React, Next.js, Node.js, and modern databases",
  },
  {
    icon: Rocket,
    title: "Self-Taught",
    description: "Continuous learning and adapting to new technologies",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Strong analytical skills from engineering background",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse-glow" />
              <div className="absolute inset-4 bg-muted rounded-xl overflow-hidden">
                <Image
                  src="/PongsatornR_Pic.jpg"
                  alt="Pongsatorn R."
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-primary/30 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Software Engineer
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Highly motivated and self-taught Full Stack Software Engineer with a 
              Bachelor&apos;s degree in Electrical Engineering (Power). Passionate about 
              developing robust, user-friendly web applications.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Brings a strong foundation in electronics production and equipment 
              engineering, with proven skills in problem-solving, system optimization, 
              and analytical thinking.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Proficient in modern web technologies including JavaScript (React, Node.js, 
              Express.js), Next.js, and database management (MySQL, SQL). Currently 
              looking for new opportunities as a Full Stack Software Engineer.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
