import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "Years Experience", value: "25+" },
    { icon: Users, label: "Projects Completed", value: "5,000+" },
    { icon: Clock, label: "Average Response Time", value: "< 1 Hour" },
    { icon: Award, label: "Customer Satisfaction", value: "99.8%" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Trusted Restoration Experts Since 1998
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              RestorePro has been the leading restoration and construction company in the region for over 25 years. 
              We specialize in emergency response services, helping families and businesses recover from fire, water, 
              storm, and mold damage.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our certified technicians use state-of-the-art equipment and proven restoration techniques to restore 
              your property quickly and efficiently. We work directly with insurance companies to streamline the 
              claims process and minimize your stress during difficult times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Get Free Estimate
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-soft hover:shadow-strong transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-primary rounded-full">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Guarantees */}
        <div className="mt-20">
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary text-center mb-8">
              Why Choose RestorePro?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Licensed & Insured</h4>
                <p className="text-muted-foreground">
                  Fully licensed contractors with comprehensive insurance coverage for your protection.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Certified Technicians</h4>
                <p className="text-muted-foreground">
                  IICRC certified restoration specialists with ongoing training and education.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">24/7 Emergency Response</h4>
                <p className="text-muted-foreground">
                  Rapid response team available around the clock for emergency situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;