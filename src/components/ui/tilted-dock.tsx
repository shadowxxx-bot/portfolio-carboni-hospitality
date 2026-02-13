"use client";
import { motion } from "framer-motion";
import { Home, FolderGit2, Briefcase, Award, User, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDockVariant } from "@/contexts/DockVariantContext";

interface DockItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  to: string;
  external?: boolean;
}

function getDockItems(isHome: boolean): DockItem[] {
  return [
    { id: 1, icon: <Home size={22} />, label: "Home", to: "/" },
    { id: 2, icon: <FolderGit2 size={22} />, label: "Projects", to: "/projects" },
    { id: 3, icon: <Briefcase size={22} />, label: "Experience", to: "/experience" },
    { id: 4, icon: <Award size={22} />, label: "Certifications", to: "/certifications" },
    { id: 5, icon: <User size={22} />, label: "Personal", to: "/personal" },
    {
      id: 6,
      icon: <Mail size={22} />,
      label: "Contact",
      to: isHome ? "#contact" : "mailto:alexandre.carboni@ehl.ch",
      external: !isHome,
    },
  ];
}

export default function SideDock() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Dynamic variant from context (Home updates it on scroll)
  const { variant } = useDockVariant();
  const isDark = variant === "dark";

  const items = getDockItems(isHome);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        className={`flex flex-col gap-5 px-3 py-5 rounded-2xl backdrop-blur-2xl border shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-[background-color,border-color] duration-300 ${
          isDark
            ? "bg-white/10 border-white/15"
            : "bg-white/60 border-black/10"
        }`}
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: -12,
          rotateX: mouse.y * 8,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        {items.map((item) => {
          const isActive = location.pathname === item.to;

          const iconContent = (
            <motion.div
              key={item.id}
              className="relative flex items-center justify-center"
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
              animate={{
                scale: hovered === item.id ? 1.35 : 1,
                z: hovered === item.id ? 80 : hovered ? -10 : 0,
                opacity: hovered && hovered !== item.id ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{
                  rotateX: hovered === item.id ? -8 : 0,
                  rotateY: hovered === item.id ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isActive
                    ? isDark
                      ? "text-white bg-white/15"
                      : "text-accent bg-accent/10"
                    : isDark
                      ? "text-white/70 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.icon}
              </motion.div>

              {/* Tooltip — left of icon */}
              <motion.span
                className={`absolute right-full mr-3 whitespace-nowrap text-xs font-medium px-2.5 py-1 rounded-md pointer-events-none ${
                  isDark
                    ? "bg-white text-dark"
                    : "bg-dark text-white"
                }`}
                animate={{
                  opacity: hovered === item.id ? 1 : 0,
                  x: hovered === item.id ? 0 : 8,
                }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          );

          // External links (mailto, anchor)
          if (item.external || item.to.startsWith("#") || item.to.startsWith("mailto:")) {
            return (
              <a key={item.id} href={item.to}>
                {iconContent}
              </a>
            );
          }

          return (
            <Link key={item.id} to={item.to}>
              {iconContent}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
