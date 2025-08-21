export function initScrollAnimations() {
  // Optimized intersection observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animateElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale'
  );
  
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}

export function addStaggeredAnimation(elements: NodeListOf<Element> | Element[], baseDelay = 100) {
  Array.from(elements).forEach((el, index) => {
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