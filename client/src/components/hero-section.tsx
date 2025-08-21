import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        background: 'linear-gradient(135deg, #1a1611 0%, #2d1f17 30%, #1f1711 60%, #2d1f17 100%)',
        color: '#f5deb3'
      }}
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-900/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.08'%3E%3Cpath d='M10 10h40v2H10zM10 20h40v2H10zM10 30h40v2H10zM10 40h40v2H10zM10 50h40v2H10z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }}></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{
          textShadow: '0 4px 8px rgba(26, 22, 17, 0.6), 0 0 20px rgba(251, 191, 36, 0.2)'
        }}>
          <span className="inline-block animate-slide-in-left animate-stagger-1" style={{ color: '#f5deb3' }}>Handcrafted</span>{' '}
          <span className="inline-block animate-slide-in-right animate-stagger-2" style={{ color: '#f5deb3' }}>Wooden</span>
          <span className="block animate-elastic-in animate-stagger-3" style={{ 
            background: 'linear-gradient(135deg, #fbbf24, #fcd34d, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3))'
          }}>Masterpieces</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-stagger-4" style={{ color: '#deb887' }}>
          Discover the finest collection of handcrafted wooden furniture and home decor, 
          meticulously crafted by master artisans using traditional Indian woodworking techniques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-stagger-5">
          <Button
            onClick={() => scrollToSection('products')}
            size="lg"
            className="font-semibold text-lg px-8 py-4 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-2 border-amber-400/30"
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              color: 'white',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.2)'
            }}
            data-testid="explore-collection-btn"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Explore Collection
          </Button>
          <Button
            onClick={() => scrollToSection('custom')}
            variant="outline"
            size="lg"
            className="font-semibold text-lg px-8 py-4 transition-all duration-500 transform hover:scale-105 border-2"
            style={{
              borderColor: 'rgba(251, 191, 36, 0.5)',
              background: 'rgba(45, 31, 23, 0.8)',
              color: '#fcd34d',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(26, 22, 17, 0.6), inset 0 1px 1px rgba(251, 191, 36, 0.1)'
            }}
            data-testid="custom-orders-btn"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 1px 2px rgba(251, 191, 36, 0.3))' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Custom Orders
          </Button>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block animate-float-up animate-stagger-7">
        <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-2xl animate-bounce-gentle shadow-lg">
          🔨
        </div>
      </div>
      <div className="absolute top-20 right-10 hidden lg:block animate-morph-in animate-stagger-8">
        <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-xl animate-pulse-slow shadow-lg">
          🌿
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 transition-all duration-300 hover:scale-125" 
          style={{ 
            color: '#deb887',
            filter: 'drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3))'
          }}
        />
      </div>
    </section>
  );
}
