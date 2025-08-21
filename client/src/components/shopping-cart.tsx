import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Cart Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        data-testid="cart-overlay"
      />

      {/* Shopping Cart Sidebar */}
      <div
        className={cn(
          "cart-slide fixed right-0 top-0 h-full w-96 max-w-full bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300",
          isOpen ? "open" : ""
        )}
        data-testid="cart-sidebar"
      >
        <div className="flex items-center justify-between p-6 border-b border-teak/10">
          <h2 className="font-playfair text-2xl font-semibold text-wood-dark">
            Shopping Cart
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 text-walnut hover:text-teak"
            data-testid="cart-close"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6" data-testid="cart-items">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <div className="w-16 h-16 mx-auto mb-4 text-gray-300">🛍️</div>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  data-testid={`cart-item-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-wood-dark text-sm">
                      {item.name}
                    </h4>
                    <p className="text-walnut font-bold">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0"
                      data-testid={`decrease-quantity-${item.id}`}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span 
                      className="w-8 text-center text-sm"
                      data-testid={`quantity-${item.id}`}
                    >
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0"
                      data-testid={`increase-quantity-${item.id}`}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    data-testid={`remove-item-${item.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-teak/10 p-6" data-testid="cart-footer">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg">Total:</span>
              <span 
                className="font-bold text-xl text-walnut"
                data-testid="cart-total"
              >
                {formatCurrency(cartTotal)}
              </span>
            </div>
            <Button 
              className="w-full bg-walnut text-white hover:bg-walnut-light"
              data-testid="checkout-btn"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
