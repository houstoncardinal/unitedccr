import { Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">United CCR</h2>
            </div>
            <p className="text-white/80 mb-6">
              We're proud to introduce United CCR<br className="hidden sm:block" /> (Construct, Clean, Restore) - your trusted partner for disaster restoration across Texas. With a commitment to fast response, flawless execution, and uncompromising quality, United CCR is here to restore your property after disaster strikes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/UNITEDCCR" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/disaster-restoration/fire-damage" className="hover:text-white transition-colors">Fire Damage Restoration</a></li>
              <li><a href="/disaster-restoration/water-damage" className="hover:text-white transition-colors">Water Damage Restoration</a></li>
              <li><a href="/disaster-restoration/storm-damage" className="hover:text-white transition-colors">Storm Damage Restoration</a></li>
              <li><a href="/disaster-restoration/mold-remediation" className="hover:text-white transition-colors">Mold Damage Remediation</a></li>
              <li><a href="/disaster-restoration/cleaning-services" className="hover:text-white transition-colors">Cleaning Services</a></li>
              <li><a href="/disaster-restoration/roofing-services" className="hover:text-white transition-colors">Roofing Services</a></li>
              <li><a href="/disaster-restoration/construction-services" className="hover:text-white transition-colors">Construction Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/disaster-restoration" className="hover:text-white transition-colors">All Services</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>

              <li><a href="tel:8324668792" className="hover:text-white transition-colors">Emergency: (832) 466-8792</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white" />
                <div>
                  <a href="tel:8324668792" className="font-semibold text-white hover:text-white/80 transition-colors">(832) 466-8792</a>
                  <div className="text-sm">Fast Response</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white" />
                <div>
                  <div>Based in Cypress, TX</div>
                  <div>Serving Texas statewide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm">
              © 2024 United CCR. All rights reserved. Texas properties trust United CCR for disaster restoration.
            </div>
            <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;