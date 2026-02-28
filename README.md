# Portfolio v2

A modern, interactive portfolio website showcasing my projects and skills as a Full Stack Software Engineer.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker)

## Features

- **Modern Design** - Clean, responsive UI with dark/light theme support
- **Interactive Animations** - Smooth animations powered by Framer Motion
- **Custom Cursor** - Interactive cursor effect on desktop
- **Particle Background** - Dynamic particle system that responds to mouse movement
- **Scroll Progress** - Visual reading progress indicator
- **Loading Screen** - Animated loading state
- **Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Meta tags and Open Graph support
- **Docker Ready** - Easy deployment with Docker

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Animations | Framer Motion |
| Icons | Lucide React |
| Theme | next-themes |
| Containerization | Docker |

## Sections

1. **Hero** - Introduction with animated gradient blobs
2. **About** - Personal info, stats, and highlights
3. **Skills** - Categorized skills with animated progress bars
4. **Experience** - Work history with tabbed navigation
5. **Projects** - Featured projects with hover effects
6. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PongsatornR-11/portfolio_v2.git
cd portfolio_v2

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Docker

### Using Docker Compose (Recommended)

```bash
docker compose up -d
```

### Using Docker

```bash
# Build image
docker build -t portfolio-v2 .

# Run container
docker run -p 3000:3000 portfolio-v2
```

## Project Structure

```
portfolio_v2/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   └── contact.tsx
│   ├── ui/
│   ├── particle-background.tsx
│   ├── scroll-progress.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── PongsatornR_Pic.jpg
│   ├── Pongsatorn's Resume.pdf
│   └── projectPics/
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Customization

1. **Personal Info** - Edit components in `components/sections/`
2. **Projects** - Update `components/sections/projects.tsx`
3. **Skills** - Modify `components/sections/skills.tsx`
4. **Experience** - Update `components/sections/experience.tsx`
5. **Colors** - Edit CSS variables in `app/globals.css`
6. **Images** - Replace files in `public/`

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker compose up -d
```

### Static Export

```bash
npm run build
# Deploy .next folder
```

## Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Load JS: ~168 kB
- Static pre-rendering for fast initial load

## Inspiration

Design inspired by [Brittany Chiang](https://github.com/bchiang7/v4)

## License

MIT License - feel free to use this for your own portfolio!

## Contact

- **Email**: pongsatorn.rk@gmail.com
- **GitHub**: [@PongsatornR-11](https://github.com/PongsatornR-11)
- **Facebook**: [bas.pongsatorn](https://www.facebook.com/bas.pongsatorn/)
- **Instagram**: [@bass_sssssy](https://www.instagram.com/bass_sssssy/)
