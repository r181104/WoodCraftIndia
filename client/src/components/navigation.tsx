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
  const { cartItems, cartCount } = useCart();
  const itemCount = cartCount;

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b" style={{ 
      background: 'rgba(45, 31, 23, 0.95)', 
      borderColor: 'rgba(251, 191, 36, 0.2)' 
    }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Premium Logo with Icon */}
          <div className="flex items-center space-x-3">
            {/* Custom Wood Craft Logo SVG */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-2xl font-playfair font-bold" style={{ 
              color: '#f5deb3',
              textShadow: '0 2px 4px rgba(26, 22, 17, 0.6)'
            }}>
              Artisan Woods
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-medium transition-colors duration-300 hover:scale-105 px-3 py-1 rounded-md"
                style={{ 
                  color: '#deb887',
                  textShadow: '0 1px 2px rgba(26, 22, 17, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#fcd34d';
                  e.target.style.textShadow = '0 2px 4px rgba(251, 191, 36, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#deb887';
                  e.target.style.textShadow = '0 1px 2px rgba(26, 22, 17, 0.4)';
                }}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Premium Cart Button */}
          <Button
            onClick={onCartOpen}
            variant="outline"
            size="sm"
            className="relative border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'rgba(251, 191, 36, 0.5)',
              background: 'rgba(26, 22, 17, 0.8)',
              color: '#fcd34d',
              backdropFilter: 'blur(10px)'
            }}
            data-testid="cart-button"
          >
            <ShoppingCart className="w-5 h-5" style={{ 
              filter: 'drop-shadow(0 1px 2px rgba(251, 191, 36, 0.3))'
            }} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                boxShadow: '0 2px 6px rgba(251, 191, 36, 0.6)'
              }}>
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}