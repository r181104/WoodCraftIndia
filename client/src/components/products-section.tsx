import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { ProductCard } from './product-card';
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
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-wood-dark mb-4 animate-slide-in-left">
            Our Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-slide-in-right">
            Discover our curated selection of premium wooden furniture and home decor
          </p>
        </div>

        {/* Product Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={cn(
                "btn-primary font-semibold transition-all duration-300 transform hover:scale-105",
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

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-20 bg-gray-300 rounded"></div>
                    <div className="h-10 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            data-testid="products-grid"
          >
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in-up card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

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
