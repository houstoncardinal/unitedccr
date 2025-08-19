import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-restoration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional disaster restoration services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white">
          <div className="text-base md:text-lg font-semibold text-white mb-3">UNITED CCR</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Construct, Clean, Restore
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 max-w-2xl leading-relaxed">
            We're proud to introduce United CCR (Construct, Clean, Restore) - your trusted partner for disaster restoration across Texas. From corporate offices and medical facilities to luxury retail and large-scale developments, our mission is simple. Build with precision, maintain with care, restore with speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
            <a href="tel:8324668792" className="w-full sm:w-auto">
              <Button variant="emergency" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-4 h-auto w-full sm:w-auto">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                <span className="hidden sm:inline">Emergency Response: </span>
                <span>(832) 466-8792</span>
              </Button>
            </a>
            <a href="/contact" className="w-full sm:w-auto">
              <Button variant="corporate" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-4 h-auto w-full sm:w-auto">
                Schedule Consultation
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base">Emergency Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm md:text-base">Texas Properties Trust Us</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm md:text-base">Disaster Restoration Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;