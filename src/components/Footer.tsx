import { Instagram, Facebook, Twitter } from "lucide-react";
import logoImage from "/zentea-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-3">
              <img 
                src={logoImage} 
                alt="Zen Tea Logo" 
                className="h-12 w-12 object-contain logo"
              />
              <h3 className="text-3xl font-serif text-foreground">
                Zen Tea
              </h3>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Peace in every cup.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://instagram.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border w-full">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zen Tea. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Design from ♥️ by <span className="text-primary font-medium">trahoangdev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
