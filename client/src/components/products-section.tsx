import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ProductCard } from './product-card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Product } from '@shared/schema';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'furniture', label: 'Furniture' },
  { id: 'decor', label: 'Home Decor' },
  { id: 'custom', label: 'Custom Items' },
];

export function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our curated selection of premium wooden furniture and home decor
          </p>
        </div>

        {/* Product Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              style={{ transitionDelay: `${index * 0.1}s` }}
              className={cn(
                "font-semibold transition-all duration-300 transform hover:scale-105",
                activeFilter === category.id
                  ? "bg-walnut text-white shadow-lg"
                  : "bg-white text-walnut border-2 border-walnut hover:bg-walnut hover:text-white"
              )}
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid - Simple and Working */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-wood-dark mb-2 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500 text-lg">
                    {'★'.repeat(Math.floor(parseFloat(product.rating || '5')))}
                    {'☆'.repeat(5 - Math.floor(parseFloat(product.rating || '5')))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2 font-medium">
                    ({Math.floor(Math.random() * 50) + 10} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-wood-dark to-amber-700 bg-clip-text text-transparent">
                    ₹{parseFloat(product.price).toLocaleString('en-IN')}
                  </span>
                  <button 
                    onClick={() => {
                      // Add to cart functionality - using the product data
                      const cartItem = {
                        id: product.id,
                        name: product.name,
                        price: parseFloat(product.price),
                        image: product.image,
                        quantity: 1
                      };
                      
                      // Store in localStorage for cart persistence
                      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
                      const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id);
                      
                      if (existingItemIndex > -1) {
                        existingCart[existingItemIndex].quantity += 1;
                      } else {
                        existingCart.push(cartItem);
                      }
                      
                      localStorage.setItem('cart', JSON.stringify(existingCart));
                      
                      // Visual feedback
                      const button = event?.target as HTMLButtonElement;
                      const originalText = button.textContent;
                      button.textContent = 'Added!';
                      button.classList.add('bg-green-500');
                      setTimeout(() => {
                        button.textContent = originalText;
                        button.classList.remove('bg-green-500');
                      }, 1500);
                      
                      console.log('Added to cart:', product.name, '₹' + parseFloat(product.price).toLocaleString('en-IN'));
                    }}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            className="bg-walnut text-white hover:bg-walnut-light transition-colors duration-200"
            data-testid="load-more-btn"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
}
