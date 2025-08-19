import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertTriangle, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Contact United CCR
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Need assistance? We have answers. Our team is ready to help Texas businesses with construction, cleaning & maintenance, and restoration services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8324668792">
                  <Button variant="emergency" size="lg" className="text-lg px-8 py-4 h-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact: (832) 466-8792
                  </Button>
                </a>
                <a href="#contact-form">
                  <Button variant="corporate" size="lg" className="text-lg px-8 py-4 h-auto">
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you need construction, cleaning & maintenance, or restoration services, our team is here to help Texas businesses.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-primary">
                      <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <span>Contact Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:8324668792" className="text-3xl font-bold text-primary mb-2 hover:text-primary-dark transition-colors">(832) 466-8792</a>
                    <p className="text-muted-foreground">Available for fast response service</p>
                  </CardContent>
                </Card>

                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-primary">
                      <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-semibold mb-2">Based in Cypress, TX</div>
                    <div className="text-muted-foreground mb-2">Serving Houston & statewide</div>
                    <p className="text-muted-foreground">Texas businesses trust United CCR</p>
                  </CardContent>
                </Card>

                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-primary">
                      <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <span>Service Areas</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="font-semibold text-primary">Commercial & Retail Focus</div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Corporate Offices</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Medical Facilities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Luxury Retail</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Large-Scale Developments</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Information */}
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-primary">Fast Response, Flawless Execution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      United CCR's team members are committed to fast response, flawless execution, and uncompromising quality. 
                      We're here to keep your business running at its best.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Call our team at <a href="tel:8324668792" className="font-semibold text-primary hover:text-primary-dark transition-colors">(832) 466-8792</a> to learn how United CCR can help your Texas business!
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Schedule Your Consultation</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                      <Input placeholder="John" className="shadow-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input placeholder="Doe" className="shadow-sm" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" className="shadow-sm" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input type="tel" placeholder="(832) 466-8792" className="shadow-sm" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                    <select className="w-full p-3 border border-input rounded-md bg-background shadow-sm">
                      <option>Select a service...</option>
                      <option>Commercial Construction</option>
                      <option>Cleaning & Maintenance</option>
                      <option>Fire Damage Restoration</option>
                      <option>Water Damage Restoration</option>
                      <option>Storm Damage Restoration</option>
                      <option>Mold Damage Remediation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Please describe your business needs or project requirements..."
                      rows={4}
                      className="shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <a href="#contact-form">
                      <Button variant="hero" size="lg" className="w-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <Send className="h-4 w-4 mr-2" />
                        Schedule Consultation
                      </Button>
                    </a>
                    <a href="tel:8324668792">
                      <Button variant="emergency" size="lg" className="w-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now: (832) 466-8792
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get answers to common questions about our construction, cleaning & maintenance, and restoration services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-3">What services does United CCR offer?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    United CCR delivers premium construction, cleaning & maintenance, and restoration services for Texas businesses. From corporate offices to luxury retail, we provide fast response.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-3">What sets United CCR apart from the competition?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide flawless execution, unmatched quality, and fast response. Texas businesses trust United CCR for their construction, cleaning, and restoration needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-3">What types of businesses do you serve?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We focus on commercial and retail businesses including corporate offices, medical facilities, luxury retail, and large-scale developments across Texas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-primary mb-3">How quickly can you respond to service requests?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide fast response times to keep your business running at its best. Contact us at <a href="tel:8324668792" className="text-primary hover:text-primary-dark transition-colors">(832) 466-8792</a> for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Service Areas
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We proudly serve the greater Houston metropolitan area and surrounding communities throughout Texas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Houston Metro</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Houston</li>
                    <li>Spring</li>
                    <li>The Woodlands</li>
                    <li>Katy</li>
                    <li>Sugar Land</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">North Houston</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Cypress</li>
                    <li>Tomball</li>
                    <li>Magnolia</li>
                    <li>Conroe</li>
                    <li>Montgomery</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Statewide</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Bellaire</li>
                    <li>West University</li>
                    <li>River Oaks</li>
                    <li>Memorial</li>
                    <li>All of Texas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact; 