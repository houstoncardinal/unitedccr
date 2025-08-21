import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight, Flame, Droplets, Wind, Eye, Brush, HardHat, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const DisasterRestoration = () => {
  const allServices = [
    {
      title: "Fire Damage Restoration",
      description: "Complete fire damage cleanup, smoke removal, and structural restoration services.",
      features: ["Smoke Damage Cleanup", "Soot Removal", "Structural Repairs", "Odor Elimination"],
      href: "/disaster-restoration/fire-damage",
      icon: Flame
    },
    {
      title: "Water Damage Restoration",
      description: "Rapid water extraction, drying, and restoration to prevent mold growth.",
      features: ["Water Extraction", "Structural Drying", "Mold Prevention", "Complete Restoration"],
      href: "/disaster-restoration/water-damage",
      icon: Droplets
    },
    {
      title: "Storm Damage Restoration",
      description: "Emergency storm damage repair including roof, siding, and structural restoration.",
      features: ["Emergency Tarping", "Roof Repairs", "Structural Assessment", "Complete Restoration"],
      href: "/disaster-restoration/storm-damage",
      icon: Wind
    },
    {
      title: "Mold Damage Remediation",
      description: "Professional mold inspection, removal, and prevention services.",
      features: ["Mold Inspection", "Safe Removal", "Air Quality Testing", "Prevention Solutions"],
      href: "/disaster-restoration/mold-remediation",
      icon: Eye
    },
    {
      title: "Cleaning Services",
      description: "Hazardous, specialized, and standard cleaning for all situations.",
      features: ["Post-Disaster Cleaning", "Deep Cleaning", "Sanitization", "Content Cleaning"],
      href: "/disaster-restoration/cleaning-services",
      icon: Brush
    },
    {
      title: "Roofing Services",
      description: "Complete roofing solutions from repairs to full replacement.",
      features: ["Emergency Repairs", "Storm Damage", "Fire Damage", "Preventive Maintenance"],
      href: "/disaster-restoration/roofing-services",
      icon: HardHat
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Emergency Response",
      description: "We respond within 60 minutes to assess the damage and begin emergency mitigation to prevent further loss."
    },
    {
      step: "02", 
      title: "Damage Assessment",
      description: "Our certified technicians conduct a thorough assessment and create a detailed restoration plan with timeline and costs."
    },
    {
      step: "03",
      title: "Insurance Coordination",
      description: "We work directly with your insurance company to streamline the claims process and ensure proper coverage."
    },
    {
      step: "04",
      title: "Restoration Work",
      description: "Our skilled team performs all necessary restoration work using industry-leading equipment and techniques."
    },
    {
      step: "05",
      title: "Final Inspection",
      description: "We conduct a comprehensive final inspection to ensure your property is fully restored to pre-loss condition."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Disaster Restoration Services in Texas",
    "description": "Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation. Licensed, insured, and serving Houston & statewide.",
    "url": "https://unitedccr.com/disaster-restoration",
    "provider": {
      "@type": "LocalBusiness",
      "name": "United CCR",
      "alternateName": "United Construct Clean Restore",
      "telephone": "+1-832-466-8792",
      "email": "info@unitedccr.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cypress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      }
    },
    "serviceType": "Disaster Restoration",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Disaster Restoration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Damage Restoration",
            "description": "Complete fire damage cleanup, smoke removal, and structural restoration services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Damage Restoration",
            "description": "Rapid water extraction, drying, and restoration to prevent mold growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storm Damage Restoration",
            "description": "Emergency storm damage repair including roof, siding, and structural restoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Remediation",
            "description": "Professional mold inspection, removal, and prevention services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cleaning Services",
            "description": "Post-disaster cleaning and sanitization services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roofing Services",
            "description": "Emergency roofing repairs and disaster-related roof restoration"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Disaster Restoration Services in Texas | Fire, Water, Storm & Mold Damage - United CCR"
        description="Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation. Licensed, insured, and serving Houston & statewide. Call (832) 466-8792."
        keywords="disaster restoration Texas, fire damage restoration, water damage restoration, storm damage restoration, mold remediation, emergency response, property restoration, United CCR, Houston disaster restoration"
        canonical="https://unitedccr.com/disaster-restoration"
        schema={schema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Disaster Restoration Services in Texas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Serving Texas with emergency response for fire, water, storm, and mold damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8324668792">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (832) 466-8792
                </Button>
              </a>
              <a href="/contact">
                <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Complete Disaster Restoration Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              United CCR provides comprehensive disaster restoration services to get your Texas property back to pre-disaster condition quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={service.href}>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Why Choose United CCR for Disaster Restoration?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              As Texas's trusted disaster restoration company, we provide fast response, professional service, and complete restoration solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Emergency Response</h3>
              <p className="text-muted-foreground">Emergency response for all disaster situations.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Certified Technicians</h3>
              <p className="text-muted-foreground">Licensed and certified restoration professionals with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Insurance Coordination</h3>
              <p className="text-muted-foreground">We work directly with your insurance company to streamline the claims process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Don't Wait When Disaster Strikes
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait when disaster strikes your Texas property. Contact United CCR immediately for fast, professional disaster restoration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8324668792">
              <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: (832) 466-8792
              </Button>
            </a>
            <a href="/contact">
              <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DisasterRestoration;