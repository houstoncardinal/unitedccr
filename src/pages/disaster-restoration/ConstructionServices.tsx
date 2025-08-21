import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight, Building, Home, Hammer, Wrench, PaintBucket, Zap, Clock, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ConstructionServices = () => {
  const services = [
    {
      title: "Disaster Reconstruction",
      description: "Complete reconstruction of properties damaged by disasters",
      icon: Building
    },
    {
      title: "Emergency Repairs",
      description: "Emergency structural repairs and stabilization",
      icon: Home
    },
    {
      title: "Post-Disaster Construction",
      description: "Construction services after fire, water, or storm damage",
      icon: Hammer
    },
    {
      title: "Restoration Construction",
      description: "Complete restoration construction and rebuilding",
      icon: Wrench
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Damage Assessment",
      description: "Comprehensive assessment of disaster damage and structural integrity"
    },
    {
      step: "2", 
      title: "Emergency Stabilization",
      description: "Immediate structural stabilization to prevent further damage"
    },
    {
      step: "3",
      title: "Reconstruction Planning",
      description: "Detailed planning for complete reconstruction and restoration"
    },
    {
      step: "4",
      title: "Complete Construction",
      description: "Full construction and restoration to pre-disaster condition"
    }
  ];

  const whyChooseUs = [
    {
      title: "Emergency Response",
      description: "Emergency response for all construction emergencies",
      icon: Clock
    },
    {
      title: "Certified Technicians",
      description: "Licensed and certified construction professionals",
      icon: Shield
    },
    {
      title: "Insurance Coordination",
      description: "Direct work with insurance companies to streamline claims",
      icon: CheckCircle
    },
    {
      title: "Advanced Equipment",
      description: "State-of-the-art equipment for complete construction services",
      icon: Zap
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Disaster Construction Services in Texas",
    "description": "Professional disaster construction services in Texas. Complete reconstruction, emergency repairs, and post-disaster construction. Licensed, insured, and serving Houston & statewide.",
    "url": "https://unitedccr.com/disaster-restoration/construction-services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "United CCR",
      "alternateName": "United Construct Clean Restore",
      "telephone": "+1-832-683-7433",
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
    "serviceType": "Disaster Construction Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Disaster Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Disaster Reconstruction",
            "description": "Complete reconstruction of properties damaged by disasters"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Repairs",
            "description": "Emergency structural repairs and stabilization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Disaster Construction",
            "description": "Construction services after fire, water, or storm damage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restoration Construction",
            "description": "Complete restoration construction and rebuilding"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Disaster Construction Services in Texas | Emergency Repairs & Reconstruction - United CCR"
        description="Professional disaster construction services in Texas. Complete reconstruction, emergency repairs, and post-disaster construction. Licensed, insured, and serving Houston & statewide. Call (832) 683-7433."
        keywords="disaster construction services Texas, emergency repairs, reconstruction, post-disaster construction, Houston construction services, United CCR"
        canonical="https://unitedccr.com/disaster-restoration/construction-services"
        schema={schema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Disaster Construction Services in Texas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Professional disaster construction specialists with emergency response. 
              Complete reconstruction and restoration services after disaster damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8326837433">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (832) 683-7433
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
              Disaster Construction & Reconstruction Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From emergency repairs to complete reconstruction, we handle all aspects of disaster construction with professional expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Our Disaster Construction Process
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure complete disaster construction and reconstruction with minimal disruption.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gradient-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Why Choose United CCR for Disaster Construction?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              As licensed disaster construction specialists, we provide fast response, professional service, and complete construction solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Disaster Construction Emergency? We're Available 24/7/365
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait when disaster strikes your Texas property. Contact United CCR immediately for fast, professional disaster construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8326837433">
              <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (832) 683-7433
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

export default ConstructionServices;