export function initParallaxScroll() {
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;

    // Simplified floating navigation reveal
    const floatingNav = document.querySelector('.floating-nav');
    if (floatingNav instanceof HTMLElement) {
      const showThreshold = 200;
      if (scrolled > showThreshold) {
        floatingNav.style.opacity = '1';
        floatingNav.style.transform = 'translateY(0)';
      } else {
        floatingNav.style.opacity = '0';
        floatingNav.style.transform = 'translateY(10px)';
      }
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  return () => window.removeEventListener('scroll', requestTick);
}

export function initSmoothScrolling() {
  // Enhanced smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const href = (this as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = (target as HTMLElement).offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

export function addScrollRevealEffects() {
  // Add reveal effects on scroll
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  Array.from(revealElements).forEach(el => revealObserver.observe(el));
  
  return () => revealObserver.disconnect();
}