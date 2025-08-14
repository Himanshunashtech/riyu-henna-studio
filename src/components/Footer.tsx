
import { Heart, Youtube, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' }
  ];

  const services = [
    'Bridal Henna',
    'Arabic Designs',
    'Traditional Patterns',
    'Party & Events',
    'Kids Special',
    'Workshop Classes'
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="font-bold text-2xl">Riyu.Riya</h1>
                <p className="text-background/70">Professional Henna Artist</p>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 max-w-md">
              Creating beautiful henna designs for over 5 years. Specializing in bridal, traditional, 
              and modern Arabic patterns. Making every occasion special with intricate artistry.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@riyuhennaartist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 text-background p-3 rounded-lg transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/riyuhennaartist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 hover:bg-background/20 text-background p-3 rounded-lg transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="bg-background/10 hover:bg-background/20 text-background p-3 rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:riyuhennaartist@gmail.com"
                className="bg-background/10 hover:bg-background/20 text-background p-3 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#testimonials"
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/70 hover:text-background transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-center md:text-left">
              © 2024 Riyu.Riya Henna Artist. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-background/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for beautiful art</span>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Channel Strip */}
      <div className="bg-red-600 text-white py-3">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Youtube className="w-5 h-5" />
            <span className="font-medium">
              Subscribe to my YouTube channel @riyuhennaartist for tutorials and inspiration!
            </span>
            <a
              href="https://youtube.com/@riyuhennaartist"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
