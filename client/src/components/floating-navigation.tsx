import { useState, useEffect } from 'react';
import { Hammer, Phone, ShoppingCart, Home, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { scrollToSection } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';

export function FloatingNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { cartItems, cartCount } = useCart();
  const cartItemCount = cartCount;

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

  const navigationItems = [
    {
      icon: Home,
      label: 'Home',
      section: 'home',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Package,
      label: 'Products',
      section: 'products',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Hammer,
      label: 'Custom Orders',
      section: 'custom',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: Phone,
      label: 'Contact',
      section: 'contact',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-6 z-50 space-y-3 animate-fade-in-up">
      {/* Cart Button */}
      <div className="relative">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => scrollToSection('products')}
              className="floating-btn w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              data-testid="floating-cart-btn"
            >
              <ShoppingCart className="w-6 h-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Shopping Cart ({cartItemCount})</p>
          </TooltipContent>
        </Tooltip>
        {cartItemCount > 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            {cartItemCount > 9 ? '9+' : cartItemCount}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {navigationItems.map((item, index) => (
        <div 
          key={item.section}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="animate-scale-in"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => scrollToSection(item.section)}
                className={`floating-btn w-12 h-12 ${item.color} shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
                data-testid={`floating-nav-${item.section}`}
              >
                <item.icon className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      ))}
    </div>
  );
}