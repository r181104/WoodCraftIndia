export function initScrollAnimations() {
  // Enhanced intersection observer for scroll animations
  const observerOptions = {
    threshold: [0.1, 0.2, 0.3],
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements appearing at once
        setTimeout(() => {
          entry.target.classList.add('is-visible');
          
          // Add ripple effect for special elements
          if (entry.target.classList.contains('card-hover')) {
            entry.target.style.animationDelay = `${index * 100}ms`;
          }
        }, index * 50);
      }
    });
  }, observerOptions);

  // Observe all elements with different scroll animation classes
  const animateElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale'
  );
  
  animateElements.forEach((el, index) => {
    // Add slight delay based on element position
    if (el instanceof HTMLElement) {
      el.style.transitionDelay = `${index * 0.02}s`;
    }
    observer.observe(el);
  });

  return () => observer.disconnect();
}

export function addStaggeredAnimation(elements: NodeListOf<Element> | Element[], baseDelay = 100) {
  elements.forEach((el, index) => {
    if (el instanceof HTMLElement) {
      el.style.animationDelay = `${index * baseDelay}ms`;
    }
  });
}

// Add entrance animations on page load
export function addPageLoadAnimations() {
  document.body.classList.add('page-loaded');
  
  // Stagger hero section animations
  const heroElements = document.querySelectorAll('#home [class*="animate-"]');
  addStaggeredAnimation(heroElements, 150);
  
  // Initialize floating elements
  const floatingElements = document.querySelectorAll('.animate-float');
  floatingElements.forEach((el, index) => {
    if (el instanceof HTMLElement) {
      el.style.animationDelay = `${1 + index * 0.5}s`;
    }
  });
}