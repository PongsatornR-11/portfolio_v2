import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiPrisma, SiMysql, SiPostgresql, SiMongodb,
  SiSocketdotio, SiCloudflare, SiDocker, SiGit, SiGithub, SiFigma,
  SiVercel, SiStripe, SiSupabase, SiClerk
} from "react-icons/si";
import { FaDatabase, FaServer, FaCloudUploadAlt, FaMapMarkerAlt } from "react-icons/fa";
import { LucideIcon, Code2, Globe, Shield, Zap, Activity, Cpu } from "lucide-react";

interface TechIconConfig {
  icon: React.ComponentType<{ className?: string }> | LucideIcon;
  className?: string;
}

export const techIconMap: Record<string, TechIconConfig> = {
  "React": { icon: SiReact, className: "text-cyan-400" },
  "Next.js": { icon: SiNextdotjs, className: "text-white" },
  "Next.js API": { icon: SiNextdotjs, className: "text-white" },
  "TypeScript": { icon: SiTypescript, className: "text-blue-500" },
  "JavaScript": { icon: SiJavascript, className: "text-yellow-400" },
  "ES6+": { icon: SiJavascript, className: "text-yellow-400" },
  "Tailwind CSS": { icon: SiTailwindcss, className: "text-teal-400" },
  "Vite": { icon: SiVite, className: "text-purple-500" },
  "Node.js": { icon: SiNodedotjs, className: "text-green-500" },
  "Express.js": { icon: SiExpress, className: "text-gray-300" },
  "Express": { icon: SiExpress, className: "text-gray-300" },
  "Prisma": { icon: SiPrisma, className: "text-gray-300" },
  "MySQL": { icon: SiMysql, className: "text-blue-400" },
  "PostgreSQL": { icon: SiPostgresql, className: "text-blue-500" },
  "MongoDB": { icon: SiMongodb, className: "text-green-500" },
  "SQL": { icon: FaDatabase, className: "text-orange-400" },
  "Database": { icon: FaDatabase, className: "text-orange-400" },
  "REST APIs": { icon: Globe, className: "text-green-400" },
  "RESTful API": { icon: Globe, className: "text-green-400" },
  "Socket.io": { icon: SiSocketdotio, className: "text-white" },
  "WebSocket": { icon: SiSocketdotio, className: "text-white" },
  "Socket.io Client": { icon: SiSocketdotio, className: "text-white" },
  "Cloudflare": { icon: SiCloudflare, className: "text-orange-500" },
  "Cloudflare Tunnel": { icon: SiCloudflare, className: "text-orange-500" },
  "Cloudflared": { icon: SiCloudflare, className: "text-orange-500" },
  "Docker": { icon: SiDocker, className: "text-blue-500" },
  "Git": { icon: SiGit, className: "text-orange-500" },
  "GitHub": { icon: SiGithub, className: "text-white" },
  "Figma": { icon: SiFigma, className: "text-purple-400" },
  "Vercel": { icon: SiVercel, className: "text-white" },
  "Stripe": { icon: SiStripe, className: "text-purple-500" },
  "Supabase": { icon: SiSupabase, className: "text-green-500" },
  "Clerk": { icon: SiClerk, className: "text-purple-400" },
  "JWT": { icon: Shield, className: "text-red-400" },
  "PM2": { icon: Activity, className: "text-blue-400" },
  "Cloudinary": { icon: FaCloudUploadAlt, className: "text-blue-400" },
  "SystemInformation": { icon: FaServer, className: "text-gray-400" },
  "Raspberry Pi": { icon: Cpu, className: "text-green-500" },
  "Leaflet": { icon: FaMapMarkerAlt, className: "text-green-500" },
  "React Router": { icon: SiReact, className: "text-cyan-400" },
  "React Query": { icon: SiReact, className: "text-red-400" },
  "Recharts": { icon: SiReact, className: "text-purple-400" },
  "Zustand": { icon: Zap, className: "text-yellow-400" },
  "Shadcn UI": { icon: Code2, className: "text-white" },
  "HTML": { icon: Code2, className: "text-orange-500" },
  "CSS": { icon: Code2, className: "text-blue-400" },
};

export function getTechIcon(techName: string): TechIconConfig {
  return techIconMap[techName] || { icon: Code2, className: "text-gray-400" };
}
