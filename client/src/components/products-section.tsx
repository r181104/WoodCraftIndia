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
    <section id="products" className="py-20" style={{ background: 'linear-gradient(135deg, #1a1611 0%, #2d1f17 30%, #1f1711 100%)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5deb3' }}>
            Our Exquisite Collection
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#deb887' }}>
            Discover our curated selection of premium handcrafted wooden furniture and home decor
          </p>
        </div>

        {/* Product Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={cn(
                "font-semibold transition-all duration-500 transform hover:scale-105 border-2 relative overflow-hidden backdrop-blur-sm",
                activeFilter === category.id
                  ? "text-white shadow-2xl border-amber-400/50"
                  : "text-amber-100 border-amber-400/30 hover:text-white hover:border-amber-300/60"
              )}
              style={{
                transitionDelay: `${index * 0.1}s`,
                background: activeFilter === category.id 
                  ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
                  : 'linear-gradient(135deg, rgba(45, 31, 23, 0.8) 0%, rgba(26, 22, 17, 0.9) 100%)',
                boxShadow: activeFilter === category.id 
                  ? '0 8px 25px rgba(251, 191, 36, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
                  : '0 4px 15px rgba(26, 22, 17, 0.6), inset 0 1px 1px rgba(251, 191, 36, 0.1)'
              }}
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
              className="rounded-2xl shadow-2xl overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative border border-amber-400/20 backdrop-blur-sm"
              style={{ 
                background: 'rgba(45, 31, 23, 0.95)',
                transitionDelay: `${index * 0.1}s`,
                boxShadow: '0 8px 32px rgba(26, 22, 17, 0.6), inset 0 1px 2px rgba(251, 191, 36, 0.1)'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl border border-amber-300/50 backdrop-blur-sm group-hover:scale-110 transition-all duration-300">
                  <span className="flex items-center gap-1">
                    {product.category === 'furniture' && (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                      </svg>
                    )}
                    {product.category === 'decor' && (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                    )}
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-amber-300 transition-colors duration-300" style={{ color: '#f5deb3' }}>
                  {product.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: '#deb887' }}>
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
