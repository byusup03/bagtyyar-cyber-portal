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
      {/* Spline Background */}
      <div className="absolute inset-0">
        <iframe 
          src='https://my.spline.design/particlenebula-m99iFI3Rb7R9TkspyP0yisMQ/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen py-20">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/a5af8d27-cf7f-4fe1-bf1e-8d5630990e62.png" alt="Bagtyyar Yusubov" className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover object-center border-4 border-accent/30 shadow-lg brightness-110" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-accent/10"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Bagtyyar Yusubov</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-accent/90 max-w-2xl mx-auto leading-relaxed text-center">
            Passionate about cybersecurity and digital safety. Dedicated to protecting digital assets and ensuring secure environments through ethical hacking, threat analysis, and innovative security solutions.
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
            <a href="mailto:bagtyyaryusupov1997@gmail.com" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/bagtyyar" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/byusup03" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={() => scrollToSection('about')} className="text-primary-foreground/60 hover:text-accent">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>;
};