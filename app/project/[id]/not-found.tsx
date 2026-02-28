import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <FileQuestion className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link href="/#projects">Back to Projects</Link>
        </Button>
      </div>
    </div>
  );
}
