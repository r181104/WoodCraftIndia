import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ProductsSection } from '@/components/products-section';
import { CustomCalculator } from '@/components/custom-calculator';
import { TestimonialsSection } from '@/components/testimonials-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ShoppingCart } from '@/components/shopping-cart';
import { animateOnScroll } from '@/lib/animations';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Initialize scroll animations
    animateOnScroll();

    // Close cart on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
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
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navigation onCartOpen={() => setIsCartOpen(true)} />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <CustomCalculator />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      <ShoppingCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </div>
  );
}
