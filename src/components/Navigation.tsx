import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "skills",
    label: "Skills"
  }, {
    id: "contact",
    label: "Contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-black">BY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => <Button key={item.id} variant={activeSection === item.id ? "default" : "ghost"} size="sm" onClick={() => scrollToSection(item.id)} className={`text-sm ${activeSection === item.id ? 'text-white' : 'text-black hover:text-gray-700'}`}>
                {item.label}
              </Button>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map(item => <Button key={item.id} variant={activeSection === item.id ? "default" : "ghost"} className={`w-full justify-start ${activeSection === item.id ? 'text-white' : 'text-black hover:text-gray-700'}`} onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </Button>)}
            </div>
          </div>}
      </div>
    </nav>;
};