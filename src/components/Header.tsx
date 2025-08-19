import { Button } from "@/components/ui/button";
import { Phone, Clock, ChevronDown, Menu, X, Facebook } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isDisasterMenuOpen, setIsDisasterMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDisasterMenuOpen, setIsMobileDisasterMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const disasterServices = [
    {
      title: "Fire Damage Restoration",
      description: "Complete fire damage cleanup, smoke removal, and structural restoration",
      href: "/disaster-restoration/fire-damage"
    },
    {
      title: "Water Damage Restoration", 
      description: "Rapid water extraction, drying, and restoration to prevent mold growth",
      href: "/disaster-restoration/water-damage"
    },
    {
      title: "Storm Damage Restoration",
      description: "Emergency storm damage repair including roof, siding, and structural restoration",
      href: "/disaster-restoration/storm-damage"
    },
    {
      title: "Mold Damage Remediation",
      description: "Professional mold inspection, removal, and prevention services",
      href: "/disaster-restoration/mold-remediation"
    },
    {
      title: "Cleaning Services",
      description: "Hazardous, specialized, and standard cleaning for all situations",
      href: "/disaster-restoration/cleaning-services"
    },
    {
      title: "Roofing Services",
      description: "Complete roofing solutions from repairs to full replacement",
      href: "/disaster-restoration/roofing-services"
    },
    {
      title: "Construction Services",
      description: "Disaster reconstruction, emergency repairs, and post-disaster construction",
      href: "/disaster-restoration/construction-services"
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDisasterMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDisasterMenuOpen(false);
    }, 150); // Small delay to prevent accidental closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              {/* Logo Image */}
              <img 
                src="/logo.jpg" 
                alt="UNITED Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium py-8">
              Home
            </a>
            
            {/* Disaster Restoration Mega Menu */}
            <div 
              ref={menuRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium py-8"
              >
                <span>Disaster Restoration</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDisasterMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu */}
              {isDisasterMenuOpen && (
                <div className="absolute top-full left-0 w-[500px] bg-white shadow-2xl rounded-xl border border-gray-200 p-6 mt-2 z-50">
                  <div className="grid grid-cols-1 gap-3">
                    {disasterServices.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group border border-transparent hover:border-primary/20"
                      >
                        <h4 className="font-semibold text-primary group-hover:text-primary-dark transition-colors mb-1 text-sm">
                          {service.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </a>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <a
                      href="/disaster-restoration"
                      className="block text-center bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-lg hover:shadow-xl text-sm"
                    >
                      View All Disaster Services
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium py-8">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium py-8">
              Contact
            </a>
          </nav>

          {/* Desktop Emergency Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">24/7 Emergency</span>
            </div>
            <a href="https://www.facebook.com/UNITEDCCR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow us on Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="tel:8324668792">
              <Button variant="emergency" size="lg" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(832) 466-8792</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <a 
                  href="/" 
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                
                {/* Mobile Disaster Restoration Menu */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileDisasterMenuOpen(!isMobileDisasterMenuOpen)}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    <span>Disaster Restoration</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileDisasterMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileDisasterMenuOpen && (
                    <div className="space-y-1">
                      {disasterServices.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 pl-4"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </a>
                      ))}
                      <a
                        href="/disaster-restoration"
                        className="block text-sm text-primary hover:text-primary-dark transition-colors py-2 pl-4 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View All Services
                      </a>
                    </div>
                  )}
                </div>
                
                <a 
                  href="/about" 
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="/contact" 
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Emergency Contact */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm mb-4">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">24/7 Emergency</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <a href="tel:8324668792" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="emergency" size="lg" className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>(832) 466-8792</span>
                    </Button>
                  </a>
                  <a href="https://www.facebook.com/UNITEDCCR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Follow us on Facebook">
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;