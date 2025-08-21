import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';

interface NavigationProps {
  onCartOpen: () => void;
}

const navItems = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'products', label: 'Products', href: '#products' },
  { id: 'preview', label: 'Preview', href: '#preview' },
  { id: 'custom', label: 'Custom Orders', href: '#custom' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation({ onCartOpen }: NavigationProps) {
  const { items } = useCart();
  const itemCount = (items || []).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-wood-dark">
              Artisan Woods
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-700 hover:text-wood-dark transition-colors duration-200 font-medium"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Cart Button */}
          <Button
            onClick={onCartOpen}
            variant="outline"
            size="sm"
            className="relative"
            data-testid="cart-button"
          >
            <ShoppingCart className="w-4 h-4" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-wood-dark text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}