import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ShoppingBag, Network } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { updateScrollProgress, handleNavbarScroll } from '@/lib/animations';
import { debounce } from '@/lib/utils';

interface NavigationProps {
  onCartOpen: () => void;
}

export function Navigation({ onCartOpen }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = debounce(() => {
      updateScrollProgress();
      handleNavbarScroll();
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', section: 'home' },
    { href: '#products', label: 'Products', section: 'products' },
    { href: '#custom', label: 'Custom Orders', section: 'custom' },
    { href: '#about', label: 'About', section: 'about' },
    { href: '#contact', label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" />

      {/* Navigation */}
      <nav
        id="navbar"
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-teak/10 transition-all duration-300"
        data-testid="navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
              <Network className="h-8 w-8 text-walnut" />
              <span className="font-playfair text-2xl font-bold text-wood-dark">
                Artisan Woods
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleNavClick(link.section)}
                  className={cn(
                    "nav-link text-wood-dark hover:text-walnut transition-colors duration-200",
                    location === link.href && "active"
                  )}
                  data-testid={`nav-link-${link.section}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onCartOpen}
                className="relative p-2 text-walnut hover:text-teak transition-colors duration-200"
                data-testid="cart-toggle"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-amber text-wood-dark text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
                    data-testid="cart-count"
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-walnut hover:text-teak transition-colors duration-200"
                data-testid="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-teak/10" data-testid="mobile-menu">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => handleNavClick(link.section)}
                  className="block w-full text-left text-wood-dark hover:text-walnut transition-colors duration-200"
                  data-testid={`mobile-nav-link-${link.section}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
