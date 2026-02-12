import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Certifications", to: "/certifications" },
  { label: "Personal", to: "/personal" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-dark/90 border-b border-white/5">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-text-on-dark font-semibold text-base tracking-tight hover:opacity-80 transition-opacity"
        >
          Alexandre Carboni
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors ${
                location.pathname === link.to
                  ? "text-white font-medium"
                  : "text-text-muted-dark hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={isHome ? "#contact" : "mailto:alexandre.carboni@ehl.ch"}
            className="ml-2 px-4 py-1.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-on-dark p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark border-t border-white/5 px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm py-1.5 ${
                location.pathname === link.to
                  ? "text-white font-medium"
                  : "text-text-muted-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={isHome ? "#contact" : "mailto:alexandre.carboni@ehl.ch"}
            onClick={() => setMobileOpen(false)}
            className="block text-sm py-1.5 text-accent font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
