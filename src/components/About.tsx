import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    { 
      title: "Build with Precision", 
      description: "Our skilled restoration team delivers flawless execution on every disaster restoration project, from emergency response to complete restoration.",
      number: "01",
      icon: Shield
    },
    { 
      title: "Maintain with Care", 
      description: "Professional cleaning and maintenance services to restore properties after disaster damage with ongoing support.",
      number: "02",
      icon: Users
    },
    { 
      title: "Restore with Speed", 
      description: "Fast response disaster restoration services to get your property back to pre-disaster condition quickly when disaster strikes.",
      number: "03",
      icon: Clock
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            We're proud to introduce United CCR<br className="hidden sm:block" /> (Construct, Clean, Restore)
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Your trusted partner for disaster restoration across Texas. From corporate offices and medical facilities to luxury retail and large-scale developments, our mission is simple. Build with precision, maintain with care, restore with speed. With a commitment to fast response, flawless execution, and uncompromising quality, United CCR is here to restore your property after disaster strikes.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center p-8 shadow-soft hover:shadow-strong transition-all duration-300 border-border/50 group">
                <CardContent className="pt-6">
                  <div className="text-6xl md:text-7xl font-bold text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">{feature.number}</div>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 border-2 border-primary/20 rounded-full bg-white group-hover:border-primary/40 transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/about">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Learn More About United CCR
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;