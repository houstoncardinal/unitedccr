import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-restoration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional restoration services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Professional
            <span className="block text-accent">Restoration</span>
            <span className="block">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
            24/7 Emergency Response • Fire, Water, Storm & Mold Damage Restoration
            Expert Construction & Roofing Services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Response: (555) 123-4567
            </Button>
            <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
              Get Free Estimate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-accent" />
              <span className="font-semibold">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">★★★★★ 5.0 Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;