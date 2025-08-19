import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to restore your property? Contact our expert team for a free estimate or emergency service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Phone className="h-6 w-6" />
                  <span>Emergency Hotline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent mb-2">(555) 123-4567</div>
                <p className="text-muted-foreground">Available 24/7 for emergency response</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Mail className="h-6 w-6" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-semibold mb-2">info@restorepro.com</div>
                <p className="text-muted-foreground">For estimates and general inquiries</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <MapPin className="h-6 w-6" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-semibold mb-2">123 Business Park Drive</div>
                <div className="text-muted-foreground mb-2">Your City, State 12345</div>
                <p className="text-muted-foreground">Serving the entire metropolitan area</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Clock className="h-6 w-6" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Emergency Only</span>
                  </div>
                  <div className="text-accent font-semibold mt-2">
                    24/7 Emergency Response Available
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get Your Free Estimate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select a service...</option>
                  <option>Fire Damage Restoration</option>
                  <option>Water Damage Restoration</option>
                  <option>Storm Damage Restoration</option>
                  <option>Mold Remediation</option>
                  <option>Construction Services</option>
                  <option>Roofing Services</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Please describe your restoration needs or emergency situation..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-3">
                <Button variant="hero" size="lg" className="w-full">
                  Get Free Estimate
                </Button>
                <Button variant="emergency" size="lg" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Emergency: (555) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;