export interface ProjectLink {
  live?: string;
  source?: string;
}

export interface ScreenshotImage {
  src: string;
  alt?: string;
}

export interface ProjectHeader {
  title: string;
  subtitle: string;
}

export interface ProjectOverview {
  title: string;
  description: string;
  role: string;
  features: string[];
  links: ProjectLink;
}

export interface ProjectBackend {
  title: string;
  summary: string;
  database?: {
    title: string;
    description: string;
    image?: string;
  };
  techStack: string[];
}

export interface ProjectFrontend {
  title: string;
  techStack: string[];
  screenshots?: {
    title: string;
    images: ScreenshotImage[];
  };
}

export interface ProjectChallenges {
  title: string;
  description: string;
}

export interface ShowcaseProject {
  id: string;
  header: ProjectHeader;
  overview: ProjectOverview;
  backend: ProjectBackend;
  frontend: ProjectFrontend;
  challenges: ProjectChallenges;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "ecommerce-shopping-website",
    header: {
      title: "Ecommerce Shopping Website",
      subtitle: "A full-stack e-commerce platform built with React, Node.js, MySQL, and Stripe integration.",
    },
    overview: {
      title: "Project Overview",
      description: "A comprehensive e-commerce shopping website that provides a complete shopping experience. Built with a modern tech stack including React for the frontend, Node.js/Express for the backend, and MySQL with Prisma ORM for data management. The application features secure user authentication, product browsing with categories and search, shopping cart functionality, and seamless payment processing through Stripe.",
      role: "Full-Stack Developer",
      features: [
        "User authentication and authorization with JWT",
        "Product browsing with categories and search functionality",
        "Shopping cart with quantity management",
        "Secure checkout with Stripe payment integration",
        "Admin panel for product and category management",
        "Image upload and management with Cloudinary",
        "Responsive design for all device sizes",
        "Order history and tracking for users",
      ],
      links: {
        live: "https://ecom.mypiserviceshub.com/",
        source: "https://github.com/PongsatornR-11/Ecommerce",
      },
    },
    backend: {
      title: "Back-end",
      summary: "The backend is built with Node.js and Express.js, providing a RESTful API for the frontend. MySQL database with Prisma ORM ensures type-safe database operations. Cloudinary handles image storage and optimization, while Stripe processes payments securely.",
      database: {
        title: "Database Schema",
        description: "MySQL with Prisma ORM - Includes tables for Users, Products, Categories, Orders, CartItems, and OrderItems with proper relationships.",
        image: "/projectPics/ecommerce/Database Ecommerce Project.jpg",
      },
      techStack: ["Node.js", "Express.js", "MySQL", "Prisma", "Cloudinary", "Stripe", "JWT"],
    },
    frontend: {
      title: "Front-end",
      techStack: ["React", "Vite", "Tailwind CSS", "React Router", "React Query", "Zustand"],
      screenshots: {
        title: "Page Screenshots",
        images: [
          { src: "/projectPics/ecommerce/Screenshot Ecommerce Project.jpg", alt: "Homepage" },
          { src: "/projectPics/ecommerce/Screenshot Ecommerce Project_2.jpg", alt: "Product Page" },
          { src: "/projectPics/ecommerce/Screenshot Ecommerce Project_3.jpg", alt: "Cart Page" },
        ],
      },
    },
    challenges: {
      title: "Challenges & Solutions",
      description: "One of the main challenges was implementing secure user authentication while maintaining a smooth user experience. I solved this by using JWT tokens with proper expiration and refresh mechanisms. Another challenge was handling image uploads efficiently - Cloudinary's transformation API helped optimize images for different screen sizes while maintaining quality.",
    },
  },
  {
    id: "camping-website",
    header: {
      title: "Camping Website",
      subtitle: "A web application for discovering and managing camping locations in Thailand.",
    },
    overview: {
      title: "Project Overview",
      description: "A comprehensive camping location discovery platform for Thailand. Users can browse, search, and view detailed information about camping spots. The application features user authentication with Clerk, an interactive map powered by Leaflet, and the ability for users to save favorites and contribute new locations.",
      role: "Full-Stack Developer",
      features: [
        "User authentication with Clerk",
        "Interactive map with Leaflet integration",
        "Browse and search camping locations",
        "View detailed location information with images",
        "Save favorite locations for quick access",
        "Add new camping locations to the database",
        "Responsive design for mobile and desktop",
        "Real-time location data with Supabase",
      ],
      links: {
        live: "https://github.com/PongsatornR-11/camping",
        source: "https://github.com/PongsatornR-11/camping",
      },
    },
    backend: {
      title: "Back-end",
      summary: "Built with Next.js API routes and Prisma ORM connected to PostgreSQL. Clerk handles user authentication and management. Supabase provides real-time data synchronization and file storage for location images.",
      database: {
        title: "Database Schema",
        description: "PostgreSQL with Prisma ORM - Includes tables for Users, Locations, Reviews, Favorites, and LocationImages.",
        image: "/projectPics/camping/Database Camping Project.jpg",
      },
      techStack: ["Next.js API", "PostgreSQL", "Prisma", "Clerk", "Supabase"],
    },
    frontend: {
      title: "Front-end",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Leaflet", "React Query"],
      screenshots: {
        title: "Page Screenshots",
        images: [
          { src: "/projectPics/camping/Screenshot camping Project.jpg", alt: "Homepage" },
          { src: "/projectPics/camping/Screenshot camping Project_2.jpg", alt: "Map View" },
          { src: "/projectPics/camping/Screenshot camping Project_3.jpg", alt: "Location Detail" },
          { src: "/projectPics/camping/Screenshot camping Project_4.jpg", alt: "Add Location" },
        ],
      },
    },
    challenges: {
      title: "Challenges & Solutions",
      description: "Integrating Leaflet maps with Next.js required careful handling of SSR issues. I solved this by dynamically importing the map component. Another challenge was implementing real-time location updates - Supabase's real-time subscriptions provided an elegant solution for keeping the map data synchronized.",
    },
  },
  {
    id: "system-monitor-raspberry-pi",
    header: {
      title: "System Monitor for Raspberry Pi",
      subtitle: "A real-time system monitoring dashboard for Raspberry Pi with web interface.",
    },
    overview: {
      title: "Project Overview",
      description: "A full-stack application that provides a web-based interface to monitor Raspberry Pi system resources in real-time. Displays detailed information about CPU usage, memory consumption, and network activity with interactive charts and a clean, modern UI. Deployed using Cloudflare Tunnel for secure remote access.",
      role: "Full-Stack Developer",
      features: [
        "Real-time CPU usage monitoring",
        "Memory consumption tracking",
        "Network activity visualization",
        "Interactive charts with historical data",
        "Clean and responsive dashboard UI",
        "Lightweight for Raspberry Pi resources",
        "Secure remote access via Cloudflare Tunnel",
        "Process management with PM2",
      ],
      links: {
        live: "https://sysmonitor.mypiserviceshub.com/",
        source: "https://github.com/PongsatornR-11/sysmonitor",
      },
    },
    backend: {
      title: "Back-end",
      summary: "Express.js server that collects system metrics using the SystemInformation library. The backend provides a RESTful API and WebSocket connection for real-time data streaming. Designed to be lightweight to minimize resource usage on the Raspberry Pi.",
      techStack: ["Express.js", "SystemInformation", "WebSocket", "PM2"],
    },
    frontend: {
      title: "Front-end",
      techStack: ["React", "Tailwind CSS", "Recharts", "Socket.io Client"],
      screenshots: {
        title: "Page Screenshots",
        images: [
          { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project.jpg", alt: "Dashboard" },
          { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_2.jpg", alt: "CPU Monitor" },
          { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_3.jpg", alt: "Memory Monitor" },
          { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_4.jpg", alt: "Network Monitor" },
          { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_5.jpg", alt: "Process List" },
          { src: "/projectPics/system_monitor/Screenshot Systemmonitor Project_6.jpg", alt: "Settings" },
        ],
      },
    },
    challenges: {
      title: "Challenges & Solutions",
      description: "Optimizing performance for the Raspberry Pi's limited resources was crucial. I achieved this by using efficient polling intervals and minimizing WebSocket data payloads. Setting up secure remote access was solved with Cloudflare Tunnel, eliminating the need for port forwarding while maintaining security.",
    },
  },
];

export function getProjectById(id: string): ShowcaseProject | undefined {
  return showcaseProjects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return showcaseProjects.map((project) => project.id);
}
