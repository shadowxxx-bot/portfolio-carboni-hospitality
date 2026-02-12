import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-text-primary mb-2">404</h1>
        <p className="text-text-secondary mb-6">Page not found</p>
        <Link to="/" className="text-sm text-accent hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
