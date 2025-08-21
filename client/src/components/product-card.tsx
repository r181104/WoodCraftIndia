import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@shared/schema';
import { formatCurrency, generateStars } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image
    });
  };

  return (
    <Card 
      className="product-card bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" 
      data-animate="true"
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          data-testid={`product-image-${product.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Badge 
          className="absolute top-4 right-4 bg-amber text-wood-dark hover:bg-amber-light"
          data-testid={`product-category-${product.id}`}
        >
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 
          className="font-playfair text-xl font-semibold text-wood-dark mb-2"
          data-testid={`product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <p 
          className="text-gray-600 text-sm mb-4 line-clamp-2"
          data-testid={`product-description-${product.id}`}
        >
          {product.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-amber text-sm">
            {generateStars(parseFloat(product.rating || '5'))}
          </div>
          <span className="text-xs text-gray-500 ml-2">
            ({Math.floor(Math.random() * 50) + 10} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span 
            className="text-2xl font-bold text-walnut"
            data-testid={`product-price-${product.id}`}
          >
            {formatCurrency(parseFloat(product.price))}
          </span>
          <Button
            onClick={handleAddToCart}
            className="bg-walnut text-white hover:bg-walnut-light transition-colors duration-200"
            data-testid={`add-to-cart-${product.id}`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
