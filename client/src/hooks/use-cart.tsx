import { useLocalStorage } from './use-local-storage';
import { CartItem } from '@/types';
import { useToast } from './use-toast';

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('artisan-woods-cart', []);
  const { toast } = useToast();

  const addToCart = (product: { id: string; name: string; price: number; image: string }, quantity = 1) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Cart Updated",
          description: `${product.name} quantity updated`,
        });
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast({
          title: "Added to Cart",
          description: `${product.name} added to cart`,
        });
        return [...currentItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity
        }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(currentItems => {
      const item = currentItems.find(item => item.id === productId);
      if (item) {
        toast({
          title: "Removed from Cart",
          description: `${item.name} removed from cart`,
        });
      }
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items removed from cart",
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal
  };
}
