import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold });

  const animationClasses = {
    fadeInUp: 'animate-fade-in-up',
    fadeInLeft: 'animate-slide-in-left',
    fadeInRight: 'animate-slide-in-right',
    scaleIn: 'animate-scale-in',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? animationClasses[animation] : 'opacity-0 transform translate-y-10',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}