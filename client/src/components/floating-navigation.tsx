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
      color: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      shadow: 'shadow-blue-500/30'
    },
    {
      icon: Package,
      label: 'Products',
      section: 'products', 
      color: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      shadow: 'shadow-green-500/30'
    },
    {
      icon: Hammer,
      label: 'Custom Orders',
      section: 'custom',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      shadow: 'shadow-orange-500/30'
    },
    {
      icon: Phone,
      label: 'Contact',
      section: 'contact',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      shadow: 'shadow-purple-500/30'
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
                  className={`w-14 h-14 rounded-full ${item.color} text-white shadow-xl hover:shadow-2xl ${item.shadow} transition-all duration-300 hover:scale-110 group border border-white/20 backdrop-blur-sm`}
                  data-testid={`floating-nav-${item.section}`}
                >
                  <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-black/90 text-white border border-gray-600/20 shadow-xl backdrop-blur-sm">
                <p className="font-semibold">{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}

        {/* Scroll to Top Button */}
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-white/20"
                data-testid="scroll-to-top"
              >
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white group-hover:scale-110 transition-transform duration-300"></div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-black/90 text-white border border-gray-600/20 shadow-xl backdrop-blur-sm">
              <p className="font-semibold">Back to Top</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}