"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, FileCode, Server, Database, GitBranch, Monitor, LucideIcon, Layers, Globe, Cpu, PenTool, Wrench } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode,
  Server,
  Database,
  GitBranch,
  Monitor,
  Layers,
  Globe,
  Cpu,
  PenTool,
  Wrench,
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90, icon: "Code2" },
      { name: "CSS", level: 85, icon: "PenTool" },
      { name: "JavaScript (ES6+)", level: 88, icon: "FileCode" },
      { name: "TypeScript", level: 80, icon: "FileCode" },
      { name: "React", level: 88, icon: "Layers" },
      { name: "Next.js", level: 85, icon: "Layers" },
      { name: "Responsive Design", level: 85, icon: "Monitor" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: "Server" },
      { name: "Express.js", level: 85, icon: "Server" },
      { name: "RESTful APIs", level: 85, icon: "Globe" },
      { name: "MySQL", level: 80, icon: "Database" },
      { name: "SQL", level: 80, icon: "Database" },
      { name: "Prisma", level: 78, icon: "Database" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "GitHub", level: 85, icon: "GitBranch" },
      { name: "VS Code", level: 90, icon: "Code2" },
      { name: "Postman", level: 85, icon: "Wrench" },
      { name: "Raspberry Pi", level: 75, icon: "Cpu" },
      { name: "Arduino / ESP32", level: 70, icon: "Cpu" },
    ],
  },
];

const allTechnologies = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express.js", "MySQL", "Prisma", "Git", "GitHub",
  "Tailwind CSS", "REST APIs", "PostgreSQL"
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">What I know</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Expertise</h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent className="h-4 w-4 text-primary" />
                          </motion.div>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full group-hover:shadow-lg transition-shadow"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
