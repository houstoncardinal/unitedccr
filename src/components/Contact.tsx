import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            Need Disaster Restoration Assistance?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question? We have <strong>answers</strong>. United CCR is here to help Texas properties with disaster restoration services after fire, water, storm, or mold damage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <div className="p-3 border-2 border-primary/20 rounded-lg bg-white">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <span>Contact Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:8326837433" className="text-xl md:text-2xl font-bold text-primary mb-2 hover:text-primary-dark transition-colors">
                  (832) 683-7433
                </a>
                <p className="text-muted-foreground">Available for fast response service</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <div className="p-3 border-2 border-primary/20 rounded-lg bg-white">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <span>Main Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg md:text-xl font-semibold mb-2">Based in Cypress, TX</div>
                <div className="text-muted-foreground mb-2">Serving Texas statewide</div>
                <p className="text-muted-foreground">Texas properties trust United CCR</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <div className="p-3 border-2 border-primary/20 rounded-lg bg-white">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <span>Service Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <div className="font-semibold text-primary">Disaster Restoration Focus</div>
                  <div>• Fire Damage Restoration</div>
                  <div>• Water Damage Restoration</div>
                  <div>• Storm Damage Restoration</div>
                  <div>• Mold Damage Remediation</div>
                </div>
              </CardContent>
            </Card>

            {/* Service Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-primary">Fast Response, Flawless Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  United CCR's team members are committed to fast response, flawless execution, and uncompromising quality. 
                  We're here to restore your property after disaster strikes.
                </p>
                <p className="text-muted-foreground">
                  Call our team at <a href="tel:8326837433" className="font-semibold text-primary hover:text-primary-dark transition-colors">(832) 683-7433</a> to learn how United CCR can help restore your Texas property after disaster!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-primary">Schedule Your Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="bot-field" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="fire-damage">Fire Damage Restoration</option>
                    <option value="water-damage">Water Damage Restoration</option>
                    <option value="storm-damage">Storm Damage Restoration</option>
                    <option value="mold-remediation">Mold Damage Remediation</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="roofing">Roofing Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your disaster damage or restoration needs..."
                    rows={4}
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">Thank you! Your message has been sent. We'll contact you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">There was an error sending your message. Please try again or call us directly.</p>
                  </div>
                )}
                
                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                  </Button>
                  <a href="tel:8326837433" className="block">
                    <Button variant="emergency" size="lg" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: (832) 683-7433
                    </Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/contact">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              View Full Contact Information
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;