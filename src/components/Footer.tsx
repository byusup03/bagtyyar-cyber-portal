import { Shield, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-accent-glow" />
            <span className="text-2xl font-bold">Bagtyyar Yusubov</span>
          </div>

          {/* Tagline */}
          <p className="text-primary-foreground/80 max-w-md">
            Protecting digital assets and building secure futures through innovative cybersecurity solutions.
          </p>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
            <span>© {currentYear} Bagtyyar Yusubov. Made with</span>
            <Heart className="h-4 w-4 text-accent-glow fill-current" />
            <span>for cybersecurity.</span>
          </div>

          {/* Security Notice */}
          <div className="text-xs text-primary-foreground/50 max-w-2xl">
            <p>
              This portfolio showcases cybersecurity projects and expertise. All sensitive information 
              has been appropriately sanitized. For detailed project discussions, please reach out directly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};