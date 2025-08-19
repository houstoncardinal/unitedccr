import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ArrowRight, Eye, Zap, Home, AlertTriangle, Clock, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const MoldRemediation = () => {
  const services = [
    {
      title: "Mold Inspection",
      description: "Comprehensive mold inspection and testing services",
      icon: Eye
    },
    {
      title: "Safe Removal",
      description: "Professional mold removal with safety protocols",
      icon: Zap
    },
    {
      title: "Air Quality Testing",
      description: "Complete air quality testing and purification",
      icon: Home
    },
    {
      title: "Prevention Solutions",
      description: "Mold prevention and moisture control solutions",
      icon: AlertTriangle
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Mold Inspection",
      description: "Comprehensive mold inspection and testing to identify all affected areas"
    },
    {
      step: "2", 
      title: "Safe Removal",
      description: "Professional mold removal using industry-standard safety protocols"
    },
    {
      step: "3",
      title: "Air Filtration",
      description: "Complete air filtration and purification to remove mold spores"
    },
    {
      step: "4",
      title: "Prevention Measures",
      description: "Implementation of moisture control and prevention measures"
    },
    {
      step: "5",
      title: "Final Testing",
      description: "Final air quality testing to ensure complete mold removal"
    }
  ];

  const whyChooseUs = [
    {
      title: "Emergency Response",
      description: "Emergency response for all mold remediation situations",
      icon: Clock
    },
    {
      title: "Certified Technicians",
      description: "IICRC certified mold remediation specialists",
      icon: Shield
    },
    {
      title: "Insurance Coordination",
      description: "Direct work with insurance companies to streamline claims",
      icon: CheckCircle
    },
    {
      title: "Advanced Equipment",
      description: "State-of-the-art equipment for complete mold remediation",
      icon: Zap
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mold Remediation in Texas",
    "description": "Professional mold remediation services in Texas. Complete mold inspection, safe removal, air quality testing, and prevention solutions. Licensed, insured, and serving Houston & statewide.",
    "url": "https://unitedccr.com/disaster-restoration/mold-remediation",
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
    "serviceType": "Mold Remediation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mold Remediation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Inspection",
            "description": "Professional mold inspection and assessment services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Safe Removal",
            "description": "Safe and effective mold removal and cleanup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Quality Testing",
            "description": "Comprehensive air quality testing and monitoring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prevention Solutions",
            "description": "Mold prevention and moisture control solutions"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Mold Remediation in Texas | Professional Mold Removal & Prevention - United CCR"
        description="Professional mold remediation services in Texas. Complete mold inspection, safe removal, air quality testing, and prevention solutions. Licensed, insured, and serving Houston & statewide. Call (832) 466-8792."
        keywords="mold remediation Texas, mold removal, mold inspection, air quality testing, mold prevention, Houston mold remediation, United CCR"
        canonical="https://unitedccr.com/disaster-restoration/mold-remediation"
        schema={schema}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mold Remediation in Texas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Professional mold remediation specialists with emergency response. 
              From mold inspection to complete removal and prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8324668792">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (832) 466-8792
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
              Complete Mold Remediation Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From mold inspection to complete removal and prevention, we handle all aspects of mold remediation with professional expertise.
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
              Our Mold Remediation Process
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure complete mold removal and prevention with minimal disruption.
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
              Why Choose United CCR for Mold Remediation?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              As certified mold remediation specialists, we provide fast response, professional service, and complete remediation solutions.
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
            Mold Emergency? We're Available 24/7/365
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait when mold strikes your Texas property. Contact United CCR immediately for fast, professional mold remediation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8324668792">
              <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (832) 466-8792
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

export default MoldRemediation; 