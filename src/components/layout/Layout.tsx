import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DockVariantProvider } from "@/contexts/DockVariantContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <DockVariantProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </DockVariantProvider>
  );
}
