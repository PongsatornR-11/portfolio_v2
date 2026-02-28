"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;

          const dx = mousePos.x - p.x;
          const dy = mousePos.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            newX -= (dx / distance) * 0.5;
            newY -= (dy / distance) * 0.5;
          }

          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          return { ...p, x: newX, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [mousePos, mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      ))}
    </div>
  );
}
