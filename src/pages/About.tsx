import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Shield, Users, Clock, Award, CheckCircle, MapPin, Phone, Star, Building, Zap } from "lucide-react";

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About United CCR - Disaster Restoration Services in Texas",
    "description": "Learn about United CCR, your trusted partner for disaster restoration across Texas. Professional fire damage, water damage, storm damage, and mold remediation services.",
    "url": "https://unitedccr.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "United CCR",
      "alternateName": "United Construct Clean Restore",
      "description": "Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation.",
      "url": "https://unitedccr.com",
      "logo": "https://unitedccr.com/emblem.jpg",
      "image": "https://unitedccr.com/thumbnail.png",
      "telephone": "+1-832-683-7433",
      "email": "info@unitedccr.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cypress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "foundingDate": "2020",
      "slogan": "Construct, Clean, Restore",
      "knowsAbout": [
        "Disaster Restoration",
        "Fire Damage Restoration",
        "Water Damage Restoration",
        "Storm Damage Restoration",
        "Mold Remediation",
        "Emergency Response",
        "Property Restoration"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-832-683-7433",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  };

  const features = [
    { 
      icon: Building, 
      title: "Build with Precision", 
      description: "Our skilled construction team delivers flawless execution on every project, from corporate offices to large-scale developments.",
      number: "01"
    },
    { 
      icon: Shield, 
      title: "Maintain with Care", 
      description: "Professional cleaning and maintenance services to keep your business running at its best with ongoing support.",
      number: "02"
    },
    { 
      icon: Zap, 
      title: "Restore with Speed", 
      description: "Fast response disaster restoration services to get your business back up and running quickly when disaster strikes.",
      number: "03"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Flawless Execution",
      description: "We maintain the highest standards in every project, ensuring quality results that exceed expectations."
    },
    {
      icon: Award,
      title: "Unmatched Quality",
      description: "Premium construction, cleaning & maintenance, and restoration services for Texas businesses."
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick response times to keep your business running at its best when you need us most."
    },
    {
      icon: Users,
      title: "Commercial Focus",
      description: "Specialized expertise in serving corporate offices, medical facilities, luxury retail, and large-scale developments."
    }
  ];

  const stats = [
    { number: "Fast", label: "Response Time", icon: Clock },
    { number: "Texas", label: "Businesses Trust Us", icon: Users },
    { number: "Premium", label: "Service Quality", icon: Award },
    { number: "Commercial", label: "Focus", icon: Building }
  ];

  const team = [
    {
      name: "Certified Technicians",
      description: "Our team holds multiple certifications and extensive training in all aspects of construction, cleaning, and restoration.",
      icon: Shield
    },
    {
      name: "Experienced Professionals",
      description: "Years of experience serving Texas businesses with proven track records of success and customer satisfaction.",
      icon: Users
    },
    {
      name: "Dedicated Support",
      description: "24/7 availability and commitment to keeping your business running at its best with reliable service.",
      icon: Clock
    }
  ];

  return (
    <>
      <SEOHead
        title="About United CCR - Disaster Restoration Services in Texas | Professional Emergency Response"
        description="Learn about United CCR, your trusted partner for disaster restoration across Texas. Professional fire damage, water damage, storm damage, and mold remediation services with emergency response."
        keywords="about United CCR, disaster restoration company, fire damage restoration, water damage restoration, storm damage restoration, mold remediation, Texas restoration services, emergency response"
        canonical="https://unitedccr.com/about"
        schema={schema}
      />
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  About United CCR
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                  Your Trusted Partner in Texas
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                  Delivering premium construction, cleaning & maintenance, and restoration services for Texas businesses since our founding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:8324668792">
                    <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Us: (832) 466-8792
                    </Button>
                  </a>
                  <a href="/disaster-restoration">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                      View Our Services
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Flawless execution. Unmatched quality.
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Texas businesses trust United CCR. We deliver premium construction, cleaning & maintenance, and restoration services for Texas businesses. 
                  From corporate offices to luxury retail, we provide fast response and exceptional results.
                </p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="pt-8 pb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Why Choose United CCR?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We combine expertise, technology, and dedication to deliver exceptional services for Texas businesses.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white group">
                    <CardContent className="pt-6">
                      <div className="text-6xl font-bold text-primary/10 mb-4">{feature.number}</div>
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110">
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  These principles guide everything we do and ensure we deliver the best possible service to Texas businesses.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-lg">
                          <value.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Our Team
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Dedicated professionals committed to delivering exceptional results for Texas businesses.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <Card key={index} className="text-center p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-lg">
                          <member.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{member.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Area */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-6">
                    Serving Texas Businesses
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Based in Cypress, Texas, United CCR serves the greater Houston metropolitan area and surrounding communities throughout Texas. 
                    Our focus is on commercial and retail businesses, from corporate offices to luxury retail.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Based in Cypress, TX | Serving Houston & statewide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:8326837433" className="text-muted-foreground hover:text-primary transition-colors">(832) 683-7433</a>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-gradient-to-r from-primary to-primary-dark p-8 rounded-3xl shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Whether you need construction, cleaning & maintenance, or restoration services, our team is here to help Texas businesses.
                    </p>
                    <div className="space-y-3">
                      <a href="tel:8324668792">
                        <Button variant="corporate" size="lg" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now: (832) 466-8792
                        </Button>
                      </a>
                      <a href="/contact">
                        <Button variant="outline" size="lg" className="w-full bg-white text-primary border-white hover:bg-primary hover:text-white">
                          Schedule Consultation
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About; 