import { Link } from "react-router-dom";
import { NeonButton } from "@/components/ui/neon-button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-text-primary mb-2">404</h1>
        <p className="text-text-secondary mb-6">Page not found</p>
        <NeonButton asChild variant="ghost">
          <Link to="/" className="text-sm text-accent">
            Back to home
          </Link>
        </NeonButton>
      </div>
    </div>
  );
}
