import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectShowcase } from "@/components/project-showcase";
import { getProjectById, getAllProjectIds, ShowcaseProject } from "@/lib/data/projects";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const projectIds = getAllProjectIds();
  return projectIds.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.header.title} | Pongsatorn R.`,
    description: project.header.subtitle,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectShowcase project={project} />;
}
