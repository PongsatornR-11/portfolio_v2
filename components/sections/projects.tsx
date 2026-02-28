"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "ecommerce-shopping-website",
    title: "Ecommerce Shopping Website",
    description: "A full-stack e-commerce platform built with React, Node.js (Express), MySQL (Prisma), and integrated with Cloudinary for image management and Stripe for payments. Features user authentication, product browsing, shopping cart, and admin panel.",
    tags: ["React", "Node.js", "MySQL", "Prisma", "Stripe", "Tailwind CSS"],
    liveUrl: "https://ecom.mypiserviceshub.com/",
    githubUrl: "https://github.com/PongsatornR-11/Ecommerce",
    featured: true,
    emoji: "🛒",
  },
  {
    id: "camping-website",
    title: "Camping Website",
    description: "A web application for discovering and managing camping locations in Thailand. Users can browse, search, view details, save favorites, and add new locations. Features Clerk auth, interactive map with Leaflet.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Shadcn UI"],
    liveUrl: "https://github.com/PongsatornR-11/camping",
    githubUrl: "https://github.com/PongsatornR-11/camping",
    featured: true,
    emoji: "🏕️",
  },
  {
    id: "system-monitor-raspberry-pi",
    title: "System Monitor for Raspberry Pi",
    description: "A full-stack application providing a web-based interface to monitor Raspberry Pi system resources in real-time. Displays CPU, memory, and network info with interactive charts and modern UI.",
    tags: ["React", "Express.js", "Tailwind CSS", "Cloudflared", "PM2"],
    liveUrl: "https://sysmonitor.mypiserviceshub.com/",
    githubUrl: "https://github.com/PongsatornR-11/sysmonitor",
    featured: true,
    emoji: "📊",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/project/${project.id}`}>
                <Card className="h-full overflow-hidden group border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20">
                    <div className="absolute inset-0 flex items-center justify-center text-5xl">
                      {project.emoji}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-white font-medium">View Details</span>
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">Featured</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/PongsatornR-11" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
