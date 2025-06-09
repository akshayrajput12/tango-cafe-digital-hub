
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Taco Tango</h3>
                <p className="text-xs opacity-80">& New Range Cafe</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Where youth meets flavor in perfect harmony. Your favorite spot for 
              great food, good vibes, and unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Menu', href: '#menu' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Events', href: '#events' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>123 University Avenue</p>
                  <p>Student Quarter, Campus City</p>
                  <p>PIN: 500032</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="opacity-80" />
                <a href="tel:+919876543210" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={16} className="mt-1 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>Mon-Thu: 9 AM - 10 PM</p>
                  <p>Fri-Sat: 9 AM - 11 PM</p>
                  <p>Sunday: 10 AM - 10 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Stay Connected</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
              <div>
                <p className="text-sm opacity-80 mb-2">Follow us for daily updates!</p>
                <p className="text-sm font-medium">@tacotango_cafe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 Taco Tango & New Range Cafe. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
