import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, CheckCircle, Clock, Shield, Flame, Droplets, Wind, Home } from "lucide-react";

const DisasterRestoration = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire & Smoke Damage Restoration",
      description: "Complete fire damage cleanup including smoke removal, soot cleaning, odor elimination, and structural restoration using advanced equipment and proven techniques.",
      features: ["Smoke & Soot Removal", "Odor Elimination", "Structural Repairs", "Content Restoration", "Air Quality Testing"]
    },
    {
      icon: Droplets,
      title: "Water Damage Restoration",
      description: "Rapid water extraction, structural drying, and complete restoration to prevent mold growth and minimize property damage in Houston, TX.",
      features: ["Emergency Water Extraction", "Structural Drying", "Mold Prevention", "Dehumidification", "Moisture Detection"]
    },
    {
      icon: Wind,
      title: "Storm Damage Restoration",
      description: "Emergency storm damage repair including roof damage, siding repairs, window replacement, and complete structural restoration services.",
      features: ["Emergency Tarping", "Structural Assessment", "Debris Removal", "Insurance Claims Assistance", "Complete Restoration"]
    },
    {
      icon: Home,
      title: "Mold Remediation",
      description: "Professional mold inspection, safe removal, and prevention services with certified technicians and state-of-the-art equipment.",
      features: ["Mold Inspection", "Safe Mold Removal", "Air Quality Testing", "Prevention Solutions", "Post-Remediation Verification"]
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

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Disaster Restoration Services in Houston, TX
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                When disaster strikes, our trained and certified quick response teams are ready to deploy! 
                Serving Houston and all of Texas with 60-minute emergency response times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: (832) 466-8792
                </Button>
                <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                  Get Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Why Choose United CCR for Disaster Restoration?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                As Houston's trusted property damage cleanup company, we provide certified restoration services 
                with a 100% customer satisfaction guarantee and 5-star rating.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">60-Minute Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We guarantee on-site response within 60 minutes for emergency disaster restoration services in Houston, TX.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">Certified Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our skilled restoration team holds multiple certifications and is knowledgeable in every aspect of property damage restoration.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">100% Satisfaction Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We stand behind our work with a complete satisfaction guarantee. Your property will be restored to better than new condition.
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
                Comprehensive Disaster Restoration Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From fire and smoke damage to water damage and mold remediation, we handle all types of property disasters 
                with advanced equipment and proven restoration techniques.
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Our Proven Disaster Restoration Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a systematic approach to ensure complete restoration of your property with minimal disruption to your life.
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

        {/* Emergency CTA */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Disaster Emergency? We're Available 24/7/365
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't wait when disaster strikes your Houston property. Our emergency response team is ready to deploy 
              within 60 minutes to begin the restoration process and minimize further damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (832) 466-8792
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-white text-primary border-white hover:bg-primary hover:text-white">
                Request Free Assessment
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DisasterRestoration;