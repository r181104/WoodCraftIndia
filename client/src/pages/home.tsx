import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProductsSection } from '@/components/products-section';
import { ProductPreviewSection } from '@/components/product-preview-section';
import { CustomCalculator } from '@/components/custom-calculator';
import { ContactSection } from '@/components/contact-section';
import { ShoppingCart } from '@/components/shopping-cart';
import { FloatingNavigation } from '@/components/floating-navigation';
import { initScrollAnimations, addPageLoadAnimations } from '@/lib/scroll-animations';
import { initParallaxScroll, initSmoothScrolling, addScrollRevealEffects } from '@/lib/parallax-scroll';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Initialize all animation systems
    addPageLoadAnimations();
    const cleanupScrollAnimations = initScrollAnimations();
    const cleanupParallax = initParallaxScroll();
    const cleanupRevealEffects = addScrollRevealEffects();
    initSmoothScrolling();
    
    // Close cart on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      cleanupScrollAnimations();
      cleanupParallax();
      cleanupRevealEffects();
    };
  }, []);

  useEffect(() => {
    // Prevent body scroll when cart is open
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden page-enter" style={{ background: 'linear-gradient(135deg, #1a1611 0%, #2d1f17 30%, #1f1711 100%)' }}>
      <Navigation onCartOpen={() => setIsCartOpen(true)} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ProductPreviewSection />
        <CustomCalculator />
        <ContactSection />
      </main>
      
      <ShoppingCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      <FloatingNavigation />
    </div>
  );
}
