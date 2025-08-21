import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center justify-center text-white relative"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-walnut/20"></div>
      
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Handcrafted Wooden
          <span className="block text-amber">Masterpieces</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the finest collection of handcrafted wooden furniture and home decor, 
          meticulously crafted by master artisans using traditional Indian woodworking techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('products')}
            size="lg"
            className="bg-amber text-wood-dark hover:bg-amber-light transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-lg px-8 py-4"
            data-testid="explore-collection-btn"
          >
            Explore Collection
          </Button>
          <Button
            onClick={() => scrollToSection('custom')}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-wood-dark transition-all duration-300 transform hover:scale-105 font-semibold text-lg px-8 py-4"
            data-testid="custom-orders-btn"
          >
            Custom Orders
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-float">
        <div className="glass-effect rounded-full p-4 text-amber">
          <div className="w-8 h-8 flex items-center justify-center">🔨</div>
        </div>
      </div>
      <div className="absolute top-20 right-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-effect rounded-full p-4 text-amber">
          <div className="w-8 h-8 flex items-center justify-center">🍃</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
