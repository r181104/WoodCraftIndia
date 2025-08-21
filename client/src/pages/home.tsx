import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ProductsSection } from '@/components/products-section';
import { CustomCalculator } from '@/components/custom-calculator';
import { ContactSection } from '@/components/contact-section';
import { ShoppingCart } from '@/components/shopping-cart';
import { FloatingNavigation } from '@/components/floating-navigation';
import { initScrollAnimations, addPageLoadAnimations } from '@/lib/scroll-animations';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Initialize animations
    addPageLoadAnimations();
    const cleanupScrollAnimations = initScrollAnimations();
    
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
    <div className="min-h-screen bg-cream overflow-x-hidden page-enter">
      <Navigation onCartOpen={() => setIsCartOpen(true)} />
      
      <main>
        <HeroSection />
        <ProductsSection />
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
