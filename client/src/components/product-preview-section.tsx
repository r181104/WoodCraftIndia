import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@shared/schema';
import { useCart } from '@/hooks/use-cart';

export function ProductPreviewSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const { addItem } = useCart();
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="preview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            Product Showcase
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get a detailed look at our premium handcrafted pieces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Featured Products List */}
          <div className="animate-on-scroll-left">
            <h3 className="font-playfair text-2xl font-bold text-wood-dark mb-6">
              Featured Products
            </h3>
            <div className="space-y-4">
              {featuredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className={`cursor-pointer transition-all duration-300 card-hover ${
                    selectedProduct?.id === product.id ? 'ring-2 ring-wood-dark' : ''
                  }`}
                  onClick={() => handleProductSelect(product)}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-wood-dark">{product.name}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-wood-dark">
                            ₹{Number(product.price).toLocaleString()}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Detail Preview */}
          <div className="animate-on-scroll-right">
            {selectedProduct ? (
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-playfair text-2xl text-wood-dark">
                      {selectedProduct.name}
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-80 object-cover rounded-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-wood-dark text-white">
                        Featured
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProduct.description}
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{selectedProduct.rating}</span>
                          <span className="text-gray-500">(24 reviews)</span>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          In Stock
                        </Badge>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-bold text-wood-dark">
                            ₹{Number(selectedProduct.price).toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500">
                            Free shipping included
                          </span>
                        </div>
                        
                        <Button
                          onClick={() => addItem(selectedProduct)}
                          className="w-full bg-wood-dark hover:bg-wood-dark/90 text-white"
                          size="lg"
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-20">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👈</span>
                  </div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    Select a Product
                  </h3>
                  <p className="text-gray-500">
                    Click on any featured product to see detailed preview
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}