"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = {
  utac: {
    name: "UTAC",
    role: "Equipment Engineer",
    company: "UTAC Thai Limited",
    location: "Thailand",
    period: "2023 - Present",
    description: [
      "Optimized laser marking machines to reduce downtime and improve UPH.",
      "Managed machine tooling and maintained a PHP-based tooling system.",
      "Performed preventive maintenance on critical equipment.",
      "Troubleshot sensor, sequence, and design issues in automated machines.",
      "Collaborated with teams to meet customer needs and enhance performance.",
    ],
    technologies: ["Equipment Engineering", "Problem Solving", "System Optimization", "PHP", "Team Collaboration"],
  },
  calcomp: {
    name: "Cal-Comp",
    role: "Production Engineer",
    company: "Cal-Comp Electronics",
    location: "Thailand",
    period: "2021 - 2023",
    description: [
      "Investigated PCBA quality issues post-SMT, reflow, THT insertion, and wave soldering.",
      "Applied analytical skills to identify root causes and implement corrective actions.",
      "Gained insight into complex manufacturing workflows, applicable to software development.",
    ],
    technologies: ["Quality Analysis", "Root Cause Analysis", "Manufacturing", "Process Improvement"],
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="utac" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="utac" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                UTAC
              </TabsTrigger>
              <TabsTrigger value="calcomp" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Cal-Comp
              </TabsTrigger>
            </TabsList>

            {Object.entries(experiences).map(([key, exp]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{exp.role}</CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mt-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">▹</span>
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
