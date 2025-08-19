import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">RestorePro</div>
            <p className="text-white/80 mb-6">
              Professional restoration and construction services since 1998. 
              Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-white/60 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-white/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Fire Damage Restoration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Water Damage Restoration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Storm Damage Restoration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mold Remediation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Construction Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Roofing Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Emergency Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Insurance Claims</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-semibold text-accent">(555) 123-4567</div>
                  <div className="text-sm">24/7 Emergency</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>info@restorepro.com</div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <div>123 Business Park Drive</div>
                  <div>Your City, State 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm">
              © 2024 RestorePro. All rights reserved. Licensed & Insured.
            </div>
            <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;