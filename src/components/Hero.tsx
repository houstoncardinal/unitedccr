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
          <div className="text-lg font-semibold text-accent mb-4">UNITED CCR</div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Respond.
            <span className="block text-accent">Recover.</span>
            <span className="block">Restore.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
            When disaster strikes, our trained and certified quick response teams are ready to deploy!
            Serving Houston, TX and all of Texas with 24/7/365 emergency response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Response: (832) 466-8792
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
              <span className="font-semibold">60 Minutes Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">★★★★★ 5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;