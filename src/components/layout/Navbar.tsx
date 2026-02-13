import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDockVariant } from "@/contexts/DockVariantContext";
import { GlowCard } from "@/components/ui/spotlight-card";

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

  const { variant } = useDockVariant();
  const isDark = variant === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? "bg-dark/90 border-white/5"
          : "bg-white/80 border-black/10"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`font-semibold text-base tracking-tight hover:opacity-80 transition-all duration-300 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Alexandre Carboni
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <GlowCard
                key={link.to}
                customSize
                glowColor="blue"
                borderWidth={1}
                spotlightSize={120}
                borderRadius={8}
                backdrop="transparent"
                outerGlow={false}
                className="rounded-lg"
              >
                <Link
                  to={link.to}
                  className={`relative z-10 block px-3 py-1.5 text-sm transition-colors duration-300 ${
                    isActive
                      ? isDark
                        ? "text-white font-medium"
                        : "text-gray-900 font-medium"
                      : isDark
                        ? "text-white/60 hover:text-white"
                        : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </GlowCard>
            );
          })}
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
          className={`md:hidden p-1 transition-colors duration-300 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t px-6 pb-4 space-y-3 transition-colors duration-300 ${
            isDark
              ? "bg-dark border-white/5"
              : "bg-white border-black/10"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm py-1.5 transition-colors duration-300 ${
                location.pathname === link.to
                  ? isDark
                    ? "text-white font-medium"
                    : "text-gray-900 font-medium"
                  : isDark
                    ? "text-white/60"
                    : "text-gray-500"
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
