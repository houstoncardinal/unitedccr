import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">United CCR</div>
            <div className="ml-2 text-sm text-muted-foreground">Construct • Clean • Restore</div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/disaster-restoration" className="text-foreground hover:text-primary transition-colors font-medium">
              Disaster Restoration
            </a>
            <a href="/roofing-services" className="text-foreground hover:text-primary transition-colors font-medium">
              Roofing
            </a>
            <a href="/construction-services" className="text-foreground hover:text-primary transition-colors font-medium">
              Construction
            </a>
            <a href="/cleaning-services" className="text-foreground hover:text-primary transition-colors font-medium">
              Cleaning
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Emergency Contact */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">24/7 Emergency</span>
            </div>
            <Button variant="emergency" size="lg" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(832) 466-8792</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;