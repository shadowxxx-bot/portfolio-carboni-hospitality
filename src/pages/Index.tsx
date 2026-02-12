import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen relative scroll-smooth">
      {/* Background Image for entire page */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Brighter Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50 -z-10 will-change-transform" />
      
      <Header />
      <main className="will-change-scroll">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
