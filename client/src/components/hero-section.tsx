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
      
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="inline-block animate-slide-in-left animate-stagger-1">Handcrafted</span>{' '}
          <span className="inline-block animate-slide-in-right animate-stagger-2">Wooden</span>
          <span className="block text-amber animate-elastic-in animate-stagger-3">Masterpieces</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-4">
          Discover the finest collection of handcrafted wooden furniture and home decor, 
          meticulously crafted by master artisans using traditional Indian woodworking techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-5">
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

      {/* Decorative Floating Elements with Parallax */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-float-up animate-stagger-7 parallax-element">
        <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-2xl animate-bounce-gentle shadow-2xl magnetic-hover">
          🔨
        </div>
      </div>
      <div className="absolute top-20 right-10 hidden lg:block animate-morph-in animate-stagger-8 parallax-element">
        <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-xl animate-pulse-slow shadow-2xl magnetic-hover">
          🌿
        </div>
      </div>
      <div className="absolute top-1/2 left-20 hidden xl:block animate-float-up animate-stagger-6 parallax-element">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-lg animate-bounce-gentle shadow-xl magnetic-hover">
          ⚒️
        </div>
      </div>
      <div className="absolute bottom-1/2 right-20 hidden xl:block animate-rotate-in animate-stagger-7 parallax-element">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-sm animate-pulse-slow shadow-lg magnetic-hover">
          🪵
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
}
