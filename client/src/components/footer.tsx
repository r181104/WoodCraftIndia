import { Network, Facebook, Instagram, Youtube, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Custom Orders', href: '#custom' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  products: [
    { label: 'Dining Tables', href: '#' },
    { label: 'Bedroom Sets', href: '#' },
    { label: 'Home Decor', href: '#' },
    { label: 'Kitchen Cabinets', href: '#' },
    { label: 'Custom Furniture', href: '#' },
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Phone, href: '#', label: 'WhatsApp' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-wood-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Network className="h-8 w-8 text-amber" />
              <span className="font-playfair text-2xl font-bold">Artisan Woods</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating timeless wooden masterpieces with traditional craftsmanship and modern design.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-amber transition-colors duration-200"
                    aria-label={social.label}
                    data-testid={`footer-social-${index}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-amber transition-colors duration-200 text-left"
                    data-testid={`footer-quick-link-${index}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber transition-colors duration-200"
                    data-testid={`footer-product-link-${index}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new collections and offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex" data-testid="newsletter-form">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-700 text-white border-gray-600 rounded-r-none"
                data-testid="newsletter-email"
              />
              <Button
                type="submit"
                className="bg-amber text-wood-dark hover:bg-amber-light rounded-l-none"
                data-testid="newsletter-submit"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Artisan Woods. All rights reserved. | 
            <a href="#" className="hover:text-amber transition-colors duration-200 ml-1">
              Privacy Policy
            </a> | 
            <a href="#" className="hover:text-amber transition-colors duration-200 ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
