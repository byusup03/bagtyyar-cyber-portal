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
        <iframe src='https://my.spline.design/particlenebula-m99iFI3Rb7R9TkspyP0yisMQ/' frameBorder='0' width='100%' height='100%' className="w-full h-full" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center items-center min-h-screen py-20">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/52845ccc-c659-4734-82a6-b3fe2edd6633.png" alt="Bagtyyar Yusubov" className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover object-[center_20%] border-4 border-primary/30 shadow-lg brightness-105" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-primary/10"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center">
            <span className="text-white drop-shadow-lg">Bagtyyar Yusubov</span>
          </h1>
          
          <p className="text-lg sm:text-xl mb-12 text-white/95 max-w-2xl mx-auto leading-relaxed text-center drop-shadow-md lg:text-2xl font-extrabold">
            Cybersecurity expert protecting digital assets through ethical hacking and innovative security solutions.
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

      </div>
    </section>;
};