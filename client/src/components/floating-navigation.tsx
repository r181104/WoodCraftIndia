import { useState, useEffect } from 'react';
import { Hammer, Phone, ShoppingCart, Home, Package, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useCart } from '@/hooks/use-cart';

interface FloatingNavigationProps {
  onCartOpen: () => void;
}

export function FloatingNavigation({ onCartOpen }: FloatingNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = [
    {
      icon: Home,
      label: 'Home',
      section: 'hero',
      color: 'bg-gradient-to-r from-amber-600 via-wood-dark to-amber-700 hover:from-amber-700 hover:via-amber-800 hover:to-wood-dark',
      shadow: 'shadow-amber-500/40'
    },
    {
      icon: Package,
      label: 'Products',
      section: 'products', 
      color: 'bg-gradient-to-r from-wood-dark via-amber-700 to-wood-dark hover:from-amber-700 hover:via-wood-dark hover:to-amber-700',
      shadow: 'shadow-wood-dark/40'
    },
    {
      icon: Hammer,
      label: 'Custom Orders',
      section: 'custom-orders',
      color: 'bg-gradient-to-r from-amber-700 via-wood-dark to-amber-800 hover:from-wood-dark hover:via-amber-800 hover:to-amber-900',
      shadow: 'shadow-amber-600/40'
    },
    {
      icon: Phone,
      label: 'Contact',
      section: 'contact',
      color: 'bg-gradient-to-r from-wood-dark via-amber-800 to-wood-dark hover:from-amber-800 hover:via-wood-dark hover:to-amber-900',
      shadow: 'shadow-wood-medium/40'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={`fixed right-6 bottom-6 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="flex flex-col space-y-3">
        {/* Cart Button - Premium Design */}
        <div className="relative">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={onCartOpen}
                size="lg"
                className="relative w-16 h-16 rounded-full bg-gradient-to-r from-wood-dark via-amber-700 to-amber-800 hover:from-amber-800 hover:via-wood-dark hover:to-amber-900 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group border-2 border-amber-300/20"
                data-testid="floating-cart-btn"
              >
                <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 group-hover:from-amber-400/40 group-hover:to-amber-600/40 transition-all duration-300"></div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-black/90 text-white border border-amber-500/20 shadow-xl backdrop-blur-sm">
              <p className="font-semibold">Shopping Cart</p>
              <p className="text-xs text-amber-200">{cartCount} items</p>
            </TooltipContent>
          </Tooltip>
          {cartCount > 0 && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce shadow-lg border-2 border-white">
              {cartCount > 99 ? '99+' : cartCount}
            </div>
          )}
        </div>

        {/* Navigation Buttons - Elegant Design */}
        {navigationItems.map((item, index) => (
          <div 
            key={item.section}
            style={{ 
              animationDelay: `${index * 100}ms`,
              transform: `translateY(${isVisible ? 0 : 20}px)`,
              opacity: isVisible ? 1 : 0,
              transition: `all 0.3s ease ${index * 50}ms`
            }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="lg"
                  onClick={() => scrollToSection(item.section)}
                  className={`w-16 h-16 rounded-full ${item.color} text-white shadow-2xl hover:shadow-3xl ${item.shadow} transition-all duration-500 hover:scale-110 group border-2 border-amber-300/30 backdrop-blur-sm relative overflow-hidden`}
                  data-testid={`floating-nav-${item.section}`}
                >
                  <item.icon className="w-7 h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
                  
                  {/* Premium Shine Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/40 via-transparent to-amber-600/20 group-hover:from-amber-200/60 group-hover:to-amber-500/40 transition-all duration-500"></div>
                  
                  {/* Floating Glow */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500/0 via-amber-400/20 to-amber-500/0 group-hover:from-amber-400/30 group-hover:via-amber-300/40 group-hover:to-amber-400/30 transition-all duration-500 blur-lg"></div>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-gradient-to-r from-wood-dark to-amber-900 text-amber-100 border border-amber-500/30 shadow-2xl backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="font-bold text-lg">{item.label}</p>
                <p className="text-xs text-amber-200 opacity-80">Click to navigate</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}

        {/* Enhanced Scroll to Top Button */}
        <div style={{ 
          animationDelay: '400ms',
          transform: `translateY(${isVisible ? 0 : 20}px)`,
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.3s ease 400ms'
        }}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                onClick={() => {
                  scrollToSection('hero');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-wood-dark via-amber-900 to-wood-dark hover:from-amber-800 hover:via-wood-dark hover:to-amber-800 text-amber-100 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group border-2 border-amber-400/40 relative overflow-hidden animate-pulse hover:animate-none"
                data-testid="back-to-top-btn"
              >
                <svg className="w-7 h-7 group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/30 via-transparent to-amber-600/20 group-hover:from-amber-200/50 group-hover:to-amber-500/30 transition-all duration-500"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500/0 via-amber-400/15 to-amber-500/0 group-hover:from-amber-400/25 group-hover:via-amber-300/35 group-hover:to-amber-400/25 transition-all duration-500 blur-lg"></div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-gradient-to-r from-wood-dark to-amber-900 text-amber-100 border border-amber-500/30 shadow-2xl backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="font-bold text-lg">Back to Top</p>
              <p className="text-xs text-amber-200 opacity-80">Return to hero section</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}