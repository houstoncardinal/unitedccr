import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, CheckCircle, HardHat, Shield, Home, Wrench, Hammer, Building } from "lucide-react";

const RoofingServices = () => {
  const services = [
    {
      icon: Home,
      title: "Roof Replacement",
      description: "Complete roof replacement services for residential and commercial properties using high-quality materials and expert installation techniques.",
      features: ["Material Selection Consultation", "Complete Tear-Off", "New Roof Installation", "Cleanup & Disposal", "Warranty Protection"]
    },
    {
      icon: Wrench,
      title: "Roof Repairs",
      description: "Professional roof repair services for storm damage, leaks, missing shingles, and structural issues to restore your roof's integrity.",
      features: ["Leak Detection & Repair", "Shingle Replacement", "Flashing Repair", "Gutter Repair", "Emergency Tarping"]
    },
    {
      icon: Building,
      title: "Commercial Roofing",
      description: "Specialized commercial roofing services including flat roof systems, membrane roofing, and metal roofing for businesses in Houston, TX.",
      features: ["TPO Roofing Systems", "EPDM Membrane", "Modified Bitumen", "Metal Roofing", "Roof Coatings"]
    },
    {
      icon: Hammer,
      title: "Storm Damage Assessment",
      description: "Comprehensive storm damage assessment and insurance claim assistance to get your roof repaired or replaced after severe weather.",
      features: ["Insurance Claim Assistance", "Damage Documentation", "Emergency Repairs", "Structural Assessment", "Timeline Planning"]
    }
  ];

  const materials = [
    {
      name: "Asphalt Shingles",
      description: "Durable, cost-effective roofing solution with excellent weather resistance and variety of colors and styles.",
      benefits: ["Cost-Effective", "Easy Installation", "Wide Color Selection", "Good Weather Resistance"]
    },
    {
      name: "Metal Roofing",
      description: "Long-lasting, energy-efficient metal roofing systems perfect for Texas weather conditions and commercial applications.",
      benefits: ["50+ Year Lifespan", "Energy Efficient", "Fire Resistant", "Low Maintenance"]
    },
    {
      name: "Tile Roofing",
      description: "Premium clay and concrete tile roofing offering superior durability and distinctive architectural appeal.",
      benefits: ["Exceptional Durability", "Energy Efficient", "Fire Resistant", "Aesthetic Appeal"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Roofing Services in Houston, TX
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                If the structure of your building is compromised, we are ready to assess, repair and rebuild. 
                Expert roofing contractors serving Houston and surrounding areas with quality craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: (832) 466-8792
                </Button>
                <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                  Free Roof Inspection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Roofing */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Choose United CCR for Roofing Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                As Houston's trusted roofing contractor, we provide expert roof installation, repair, and replacement 
                services with quality materials and professional craftsmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Fully licensed roofing contractors with comprehensive insurance for your protection.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <HardHat className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">Expert Craftsmen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Skilled roofing professionals with years of experience in all roofing systems and materials.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">Quality Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We use only premium roofing materials from trusted manufacturers with excellent warranties.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">Warranty Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive warranties on labor and materials to protect your roofing investment.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Complete Roofing Services for Houston Properties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From emergency repairs to complete roof replacement, we provide comprehensive roofing services 
                for residential and commercial properties throughout Houston, TX.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Roofing Materials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Premium Roofing Materials for Every Need
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We work with the highest quality roofing materials from trusted manufacturers to ensure 
                your roof provides long-lasting protection for your Houston property.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {materials.map((material, index) => (
                <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary mb-4">{material.name}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {material.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {material.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Roof Repair or Replacement in Houston?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't wait until a small roofing problem becomes a major disaster. Contact United CCR today 
              for a free roof inspection and expert assessment of your roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (832) 466-8792
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-white text-primary border-white hover:bg-primary hover:text-white">
                Schedule Free Inspection
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RoofingServices;