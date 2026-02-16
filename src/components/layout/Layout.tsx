import { Helmet } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { ContactBlock } from "@/components/ContactBlock";
import { DockVariantProvider } from "@/contexts/DockVariantContext";
import { siteConfig } from "@/data/site";

const globalJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: "https://carboni-hospitality.netlify.app",
    email: siteConfig.links.email,
    telephone: siteConfig.links.phone,
    address: { "@type": "PostalAddress", addressLocality: "Lausanne", addressCountry: "CH" },
    sameAs: [siteConfig.links.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: "https://carboni-hospitality.netlify.app",
    author: { "@type": "Person", name: siteConfig.name },
    inLanguage: "en",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <DockVariantProvider>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(globalJsonLd)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ContactBlock />
      </div>
    </DockVariantProvider>
  );
}
