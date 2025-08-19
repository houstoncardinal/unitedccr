import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Droplets, Zap, Home, Brush, HardHat, Phone } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description: "Complete fire damage cleanup, smoke removal, and structural restoration with advanced equipment and techniques.",
    features: ["Smoke & Soot Removal", "Odor Elimination", "Structural Repairs", "Content Restoration"]
  },
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    description: "Fast water extraction, drying, and restoration to prevent mold growth and structural damage.",
    features: ["Water Extraction", "Structural Drying", "Mold Prevention", "Dehumidification"]
  },
  {
    icon: Zap,
    title: "Storm Damage Restoration",
    description: "Emergency storm damage repair including roof, siding, windows, and structural restoration.",
    features: ["Emergency Tarping", "Structural Assessment", "Debris Removal", "Complete Restoration"]
  },
  {
    icon: Home,
    title: "Mold Damage Remediation",
    description: "Professional mold inspection, removal, and prevention with certified technicians and equipment.",
    features: ["Mold Inspection", "Safe Removal", "Air Quality Testing", "Prevention Solutions"]
  },
  {
    icon: Brush,
    title: "Cleaning Services",
    description: "Professional cleaning services for residential and commercial properties after damage restoration.",
    features: ["Deep Cleaning", "Sanitization", "Carpet Cleaning", "Air Duct Cleaning"]
  },
  {
    icon: HardHat,
    title: "Construction & Roofing",
    description: "Full construction and roofing services from repairs to complete renovations and new construction.",
    features: ["Roof Replacement", "Siding Installation", "Interior Renovations", "New Construction"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive restoration and construction services with 24/7 emergency response.
            Licensed, insured, and committed to restoring your property to better than new.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-strong transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-accent p-8 rounded-2xl shadow-emergency">
            <h3 className="text-2xl font-bold text-white mb-4">
              Emergency? We're Available 24/7
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Don't wait when disaster strikes. Our emergency response team is ready to help immediately.
            </p>
            <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;