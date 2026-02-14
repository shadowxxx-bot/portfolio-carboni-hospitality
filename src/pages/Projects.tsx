import { featuredProjects, secondaryProjects } from "@/data/projects";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Projects() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Projects</h1>
        <p className="text-sm text-text-secondary mb-12">
          Academic and professional projects spanning finance, strategy, and hospitality.
        </p>

        {/* Featured */}
        <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Featured</h2>
        <div className="mb-16">
          <FocusCards projects={featuredProjects} />
        </div>

        {/* Secondary */}
        <h2 className="text-xs uppercase tracking-wider text-text-secondary mb-4">Secondary projects</h2>
        <FocusCards projects={secondaryProjects} />
      </div>
    </div>
  );
}
