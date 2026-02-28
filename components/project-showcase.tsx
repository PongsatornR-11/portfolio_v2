"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Database, Server, Code2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageModal } from "@/components/ui/image-modal";
import { ShowcaseProject } from "@/lib/data/projects";
import { getTechIcon } from "@/lib/data/techIcons";

interface ProjectShowcaseProps {
  project: ShowcaseProject;
}

function TechBadge({ name }: { name: string }) {
  const { icon: Icon, className } = getTechIcon(name);
  return (
    <Badge variant="secondary" className="flex items-center gap-2 py-1.5 px-3">
      <Icon className={`h-4 w-4 ${className}`} />
      <span>{name}</span>
    </Badge>
  );
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const { header, overview, backend, frontend, challenges } = project;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button variant="ghost" className="group" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{header.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground">{header.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                {overview.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{overview.description}</p>

              <div className="flex items-center gap-2">
                <span className="font-medium">Role:</span>
                <Badge variant="outline">{overview.role}</Badge>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {overview.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {overview.links.live && (
                  <Button asChild className="glow glow-hover">
                    <a href={overview.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {overview.links.source && (
                  <Button variant="outline" asChild>
                    <a href={overview.links.source} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Backend */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                {backend.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{backend.summary}</p>

              {backend.database && (
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    {backend.database.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">{backend.database.description}</p>
                  {backend.database.image && (
                    <ImageModal
                      src={backend.database.image}
                      alt={`${header.title} Database Schema`}
                      className="max-w-2xl"
                    />
                  )}
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {backend.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Frontend */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="border-border hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                {frontend.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {frontend.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {frontend.screenshots && (
                <div>
                  <h4 className="font-semibold mb-4">{frontend.screenshots.title}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {frontend.screenshots.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      >
                        <ImageModal
                          src={image.src}
                          alt={image.alt || `${header.title} screenshot ${index + 1}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.section>

        {/* Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-border hover:border-primary/30 transition-colors bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                {challenges.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{challenges.description}</p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
