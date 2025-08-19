import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Professional disaster restoration services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white">
          <div className="text-base md:text-lg font-semibold text-white mb-3 drop-shadow-lg">UNITED CCR</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-xl">
            Construct, Clean, Restore<span className="text-blue-900">.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/95 max-w-2xl leading-relaxed drop-shadow-lg">
            Your trusted partner for disaster restoration across Texas. Emergency response for fire, water, storm, and mold damage. Licensed, insured, and serving Houston & statewide.
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
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0 drop-shadow-md" />
              <span className="font-semibold text-sm md:text-base drop-shadow-md">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0 drop-shadow-md" />
              <span className="font-semibold text-sm md:text-base drop-shadow-md">Emergency Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm md:text-base drop-shadow-md">Texas Properties Trust Us</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm md:text-base drop-shadow-md">Disaster Restoration Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;