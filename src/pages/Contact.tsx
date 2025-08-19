import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertTriangle, Send, CheckCircle } from "lucide-react";
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact United CCR - Disaster Restoration Services in Texas",
    "description": "Contact United CCR for professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation. Call (832) 466-8792.",
    "url": "https://unitedccr.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "United CCR",
      "alternateName": "United Construct Clean Restore",
      "description": "Professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation.",
      "url": "https://unitedccr.com",
      "logo": "https://unitedccr.com/emblem.jpg",
      "image": "https://unitedccr.com/thumbnail.png",
      "telephone": "+1-832-466-8792",
      "email": "info@unitedccr.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cypress",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "29.9691",
        "longitude": "-95.6972"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Insurance",
      "currenciesAccepted": "USD",
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "29.9691",
          "longitude": "-95.6972"
        },
        "geoRadius": "50000"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-832-466-8792",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact United CCR - Disaster Restoration Services in Texas | Emergency Response (832) 466-8792"
        description="Contact United CCR for professional disaster restoration services in Texas. Emergency response for fire damage, water damage, storm damage, and mold remediation. Call (832) 466-8792 for immediate assistance."
        keywords="contact United CCR, disaster restoration contact, fire damage restoration contact, water damage restoration contact, storm damage restoration contact, mold remediation contact, Texas restoration services contact, emergency response contact"
        canonical="https://unitedccr.com/contact"
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
                <Card id="contact-form" className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Schedule Your Consultation</CardTitle>
                    <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form name="contact-page" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                      <input type="hidden" name="bot-field" />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                          <Input 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First name" 
                            className="shadow-sm" 
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
                            className="shadow-sm" 
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
                          className="shadow-sm" 
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
                        className="shadow-sm" 
                        required 
                      />
                    </div>
                    
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-input rounded-md bg-background shadow-sm"
                          required
                        >
                          <option value="">Select a service...</option>
                          <option value="commercial-construction">Commercial Construction</option>
                          <option value="cleaning-maintenance">Cleaning & Maintenance</option>
                          <option value="fire-damage">Fire Damage Restoration</option>
                          <option value="water-damage">Water Damage Restoration</option>
                          <option value="storm-damage">Storm Damage Restoration</option>
                          <option value="mold-remediation">Mold Damage Remediation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please describe your business needs or project requirements..."
                          rows={4}
                          className="shadow-sm"
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
                          className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
                          disabled={isSubmitting}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                        </Button>
                        <a href="tel:8324668792">
                          <Button variant="emergency" size="lg" className="w-full shadow-lg hover:shadow-xl transition-all duration-300">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Now: (832) 466-8792
                          </Button>
                        </a>
                      </div>
                    </form>
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
    </>
  );
};

export default Contact; 