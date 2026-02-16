import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useDockVariant } from "@/contexts/DockVariantContext";
import { NeonButton } from "@/components/ui/neon-button";

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
  const navigate = useNavigate();

  const { variant } = useDockVariant();
  const isDark = variant === "dark";

  const scrollToContact = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  }, [navigate]);

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
              <NeonButton
                key={link.to}
                asChild
                variant="ghost"
                size="sm"
                className={`rounded-lg ${
                  isActive
                    ? isDark
                      ? "text-white font-medium"
                      : "text-gray-900 font-medium"
                    : isDark
                      ? "text-white/60 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Link to={link.to}>
                  {link.label}
                </Link>
              </NeonButton>
            );
          })}
          <NeonButton asChild variant="solid" size="sm" className="ml-2">
            <a href="#contact" onClick={scrollToContact}>
              Contact
            </a>
          </NeonButton>
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
            href="#contact"
            onClick={(e) => { scrollToContact(e); setMobileOpen(false); }}
            className="block text-sm py-1.5 text-accent font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
