import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, CheckCircle, Building, Home, Hammer, Wrench, PaintBucket, Zap } from "lucide-react";

const ConstructionServices = () => {
  const services = [
    {
      icon: Building,
      title: "New Construction",
      description: "Complete new construction projects from foundation to finish, including residential homes, commercial buildings, and custom projects in Houston, TX.",
      features: ["Site Preparation", "Foundation Work", "Framing & Structure", "Electrical & Plumbing", "Interior & Exterior Finishing"]
    },
    {
      icon: Home,
      title: "Home Remodeling",
      description: "Comprehensive home renovation and remodeling services to transform your space with modern design and improved functionality.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Room Additions", "Basement Finishing", "Whole House Renovations"]
    },
    {
      icon: Hammer,
      title: "Commercial Build-Outs",
      description: "Professional commercial construction and tenant improvement services for offices, retail spaces, and industrial facilities.",
      features: ["Office Build-Outs", "Retail Construction", "Restaurant Fit-Outs", "Medical Facilities", "Industrial Spaces"]
    },
    {
      icon: Wrench,
      title: "Reconstruction Services",
      description: "Complete reconstruction services after disaster damage, bringing your property back to better than original condition.",
      features: ["Post-Disaster Reconstruction", "Structural Rebuilding", "Code Compliance Updates", "Modern System Integration", "Insurance Coordination"]
    }
  ];

  const specialties = [
    {
      icon: PaintBucket,
      title: "Interior Renovations",
      description: "Transform your interior spaces with expert craftsmanship and attention to detail.",
      features: ["Custom Millwork", "Flooring Installation", "Painting & Finishes", "Lighting Design"]
    },
    {
      icon: Zap,
      title: "Electrical & Plumbing",
      description: "Complete electrical and plumbing services for new construction and renovation projects.",
      features: ["Electrical Installation", "Plumbing Systems", "HVAC Integration", "Smart Home Technology"]
    },
    {
      icon: Building,
      title: "Structural Work",
      description: "Comprehensive structural construction and reinforcement services for all project types.",
      features: ["Foundation Work", "Framing", "Structural Repairs", "Load-Bearing Modifications"]
    }
  ];

  const projectTypes = [
    {
      category: "Residential Projects",
      projects: ["Custom Homes", "Home Additions", "Kitchen & Bath Remodels", "Basement Finishing", "Outdoor Living Spaces"]
    },
    {
      category: "Commercial Projects", 
      projects: ["Office Buildings", "Retail Spaces", "Restaurants", "Medical Facilities", "Warehouses"]
    },
    {
      category: "Specialty Projects",
      projects: ["Historic Renovations", "Disaster Reconstruction", "Green Building", "Accessibility Improvements", "Code Compliance Updates"]
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
                Professional Construction Services in Houston, TX
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Our specialized teams are ready to complete your new build, re-build or build-out. 
                From residential remodeling to commercial construction, we deliver quality craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: (832) 466-8792
                </Button>
                <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                  Get Project Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Construction */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Choose United CCR for Construction Services?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                With years of experience in Houston construction, we provide comprehensive building services 
                from initial planning to final completion with quality materials and expert craftsmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">Licensed Contractors</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Fully licensed and insured general contractors with expertise in all construction trades and building codes.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">Quality Craftsmanship</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Superior construction quality using premium materials and proven building techniques for lasting results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Hammer className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">On-Time Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Professional project management ensures timely completion within budget and according to specifications.
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
                Comprehensive Construction Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From new construction to complete renovations, we provide full-service construction solutions 
                for residential and commercial projects throughout Houston and surrounding areas.
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

        {/* Specialties */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Construction Specialties & Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our skilled construction teams specialize in all aspects of building and renovation, 
                ensuring comprehensive solutions for every project requirement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-primary rounded-full mb-4">
                        <specialty.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl text-primary mb-2">{specialty.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {specialty.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {specialty.features.map((feature, featureIndex) => (
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

        {/* Project Types */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Types of Construction Projects We Handle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you need residential remodeling, commercial construction, or specialty projects, 
                our experienced team has the expertise to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projectTypes.map((type, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary text-center mb-4">{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span>{project}</span>
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
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From planning to completion, United CCR manages every aspect of your construction project 
              with professional expertise and quality craftsmanship. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (832) 466-8792
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-white text-primary border-white hover:bg-primary hover:text-white">
                Request Project Estimate
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConstructionServices;