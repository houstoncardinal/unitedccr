import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Disaster Restoration",
    description: "Complete disaster restoration services for properties affected by fire, water, storm, or mold damage.",
    features: ["Fire Damage", "Water Damage", "Storm Damage", "Mold Remediation"],
    href: "/disaster-restoration"
  },
  {
    title: "Cleaning Services",
    description: "Professional cleaning services for properties after disaster damage restoration.",
    features: ["Post-Disaster Cleaning", "Sanitization", "Carpet Cleaning", "Air Duct Cleaning"],
    href: "/disaster-restoration/cleaning-services"
  },
  {
    title: "Roofing Services",
    description: "Emergency roofing services for properties damaged by storms, fire, or other disasters.",
    features: ["Emergency Repairs", "Storm Damage", "Fire Damage", "Preventive Maintenance"],
    href: "/disaster-restoration/roofing-services"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Disaster Restoration Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            Professional Disaster Restoration for Texas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            United CCR delivers premium disaster restoration services for Texas properties affected by fire, water, storm, or mold damage. 
            From emergency response to complete restoration, we provide fast response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <CardHeader className="relative pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 border-2 border-primary/20 rounded-2xl group-hover:border-primary/40 transition-all duration-500 transform group-hover:scale-110 bg-white">
                    <img 
                      src="/emblem.JPG" 
                      alt="United CCR Emblem" 
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <div className="h-2 w-2 bg-primary rounded-full shadow-sm"></div>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.href}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-r from-primary to-primary-dark p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                We're proud to introduce United CCR<br className="hidden sm:block" /> (Construct, Clean, Restore) - your trusted partner for disaster restoration across Texas. 
                With a commitment to fast response, flawless execution, and uncompromising quality, United CCR is here to restore your property after disaster strikes.
              </p>
              <a href="tel:8324668792">
                <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (832) 466-8792
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;