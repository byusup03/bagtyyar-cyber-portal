import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-[var(--hero-gradient)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent rounded-full animate-spin" style={{
        animationDuration: '20s'
      }}></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-accent-glow rounded-full animate-spin" style={{
        animationDuration: '15s',
        animationDirection: 'reverse'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen py-20">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/a5af8d27-cf7f-4fe1-bf1e-8d5630990e62.png" alt="Bagtyyar Yusubov" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-center border-4 border-accent-glow/30 shadow-glow animate-glow-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-accent-glow/20"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground text-left">
            <span className="bg-gradient-to-r from-accent-glow to-accent bg-clip-text text-transparent font-bold text-5xl text-justify">Bagtyyar Yusubov</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Passionate about{" "}
            <span className="text-accent-glow font-semibold">cybersecurity</span>{" "}
            and{" "}
            <span className="text-accent-glow font-semibold">digital safety</span>
          </p>

          <p className="text-lg sm:text-xl mb-12 text-primary-foreground/70 max-w-2xl mx-auto">
            Dedicated to protecting digital assets and ensuring secure environments through ethical hacking, threat analysis, and innovative security solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" onClick={() => scrollToSection('projects')} className="text-lg px-8 py-3">
              View My Work
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="mailto:bagtyyar@example.com" className="text-primary-foreground/60 hover:text-accent-glow transition-colors duration-300" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/bagtyyar" className="text-primary-foreground/60 hover:text-accent-glow transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/bagtyyar" className="text-primary-foreground/60 hover:text-accent-glow transition-colors duration-300" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={() => scrollToSection('about')} className="text-primary-foreground/60 hover:text-accent-glow">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>;
};