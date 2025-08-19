import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, CheckCircle, Droplets, Trash2, Brush, Shield, AlertTriangle, Zap } from "lucide-react";

const CleaningServices = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: "Hazardous Material Cleaning",
      description: "Professional hazmat cleanup services including biohazard remediation, chemical spills, and contaminated material removal with certified technicians.",
      features: ["Biohazard Cleanup", "Chemical Spill Response", "Asbestos Removal", "Lead Paint Removal", "Mold Contamination Cleanup"]
    },
    {
      icon: Droplets,
      title: "Specialized Cleaning",
      description: "Advanced cleaning services for unique situations including crime scene cleanup, trauma cleaning, and post-construction cleaning.",
      features: ["Crime Scene Cleanup", "Trauma Cleaning", "Post-Construction Cleanup", "Hoarding Cleanup", "Vandalism Cleanup"]
    },
    {
      icon: Brush,
      title: "Commercial Cleaning",
      description: "Comprehensive commercial cleaning services for offices, retail spaces, medical facilities, and industrial properties in Houston, TX.",
      features: ["Office Cleaning", "Medical Facility Sanitization", "Retail Space Cleaning", "Industrial Cleaning", "Carpet & Upholstery Cleaning"]
    },
    {
      icon: Shield,
      title: "Disinfection Services",
      description: "Professional disinfection and sanitization services using EPA-approved products to eliminate viruses, bacteria, and pathogens.",
      features: ["COVID-19 Disinfection", "Pathogen Elimination", "Air Purification", "Surface Sanitization", "Ongoing Maintenance"]
    }
  ];

  const cleaningTypes = [
    {
      category: "Emergency Cleaning",
      description: "Rapid response cleaning for urgent situations requiring immediate attention.",
      services: ["Sewage Backup Cleanup", "Flood Water Cleanup", "Fire Damage Cleaning", "Smoke Odor Removal", "Emergency Sanitization"]
    },
    {
      category: "Standard Cleaning",
      description: "Regular and deep cleaning services for residential and commercial properties.",
      services: ["Deep House Cleaning", "Move-In/Move-Out Cleaning", "Window Cleaning", "Pressure Washing", "Janitorial Services"]
    },
    {
      category: "Restoration Cleaning",
      description: "Specialized cleaning as part of property restoration after damage or contamination.",
      services: ["Post-Fire Cleaning", "Water Damage Cleanup", "Mold Cleanup", "Storm Damage Cleaning", "Reconstruction Cleanup"]
    }
  ];

  const industries = [
    {
      name: "Healthcare Facilities",
      description: "Specialized cleaning for medical offices, clinics, and healthcare facilities requiring strict sanitation standards.",
      features: ["OSHA Compliance", "Medical Waste Disposal", "Infection Control", "Disinfection Protocols"]
    },
    {
      name: "Educational Institutions", 
      description: "Professional cleaning services for schools, universities, and educational facilities to maintain healthy learning environments.",
      features: ["Classroom Sanitization", "Cafeteria Cleaning", "Gymnasium Maintenance", "Campus-Wide Services"]
    },
    {
      name: "Industrial Facilities",
      description: "Heavy-duty cleaning for manufacturing plants, warehouses, and industrial facilities with specialized equipment needs.",
      features: ["Equipment Cleaning", "Facility Decontamination", "Chemical Cleanup", "Safety Compliance"]
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
                Professional Cleaning Services in Houston, TX
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Whether you need hazardous, specialized or standard cleaning, we're ready to respond! 
                24/7 emergency cleaning services with certified technicians and advanced equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (832) 466-8792
                </Button>
                <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                  Request Cleaning Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Cleaning */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Choose United CCR for Cleaning Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our certified cleaning professionals use advanced equipment and EPA-approved products to handle 
                everything from routine cleaning to hazardous material remediation with safety and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">Certified Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    OSHA-trained cleaning specialists with certifications in hazardous material handling and safety protocols.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">Advanced Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    State-of-the-art cleaning equipment and technology for efficient and thorough cleaning results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">EPA-Approved Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Only EPA-registered disinfectants and cleaning products that are safe and effective for all environments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">24/7 Emergency Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Immediate response for emergency cleaning situations requiring urgent professional attention.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Comprehensive Cleaning Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From hazardous material cleanup to standard commercial cleaning, we provide safe, thorough, 
                and professional cleaning services for all types of properties and situations in Houston, TX.
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

        {/* Cleaning Types */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Types of Cleaning Services We Provide
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive cleaning services cover emergency situations, regular maintenance, 
                and specialized restoration cleaning with appropriate protocols for each situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cleaningTypes.map((type, index) => (
                <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary mb-2">{type.category}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our cleaning services meet the specific needs and compliance requirements of various industries 
                throughout Houston and the surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary mb-4">{industry.name}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-primary mb-3">Specialized Services:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
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
              Need Professional Cleaning Services in Houston?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Whether you need emergency hazmat cleanup, regular commercial cleaning, or specialized disinfection services, 
              United CCR has the expertise and equipment to handle any cleaning challenge safely and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (832) 466-8792
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-white text-primary border-white hover:bg-primary hover:text-white">
                Request Cleaning Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CleaningServices;