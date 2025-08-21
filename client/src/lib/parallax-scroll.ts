export function initParallaxScroll() {
  let ticking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        const rate = scrolled * -0.3;
        const yPos = -(rate / (index + 1));
        element.style.transform = `translateY(${yPos}px) scale(${1 + scrolled * 0.00015})`;
        element.style.opacity = String(Math.max(0.3, 1 - scrolled * 0.001));
      }
    });

    // Floating navigation smooth reveal
    const floatingNav = document.querySelector('.floating-nav');
    if (floatingNav instanceof HTMLElement) {
      const showThreshold = 300;
      if (scrolled > showThreshold) {
        floatingNav.style.transform = `translateY(0) scale(1)`;
        floatingNav.style.opacity = '1';
      } else {
        floatingNav.style.transform = `translateY(20px) scale(0.9)`;
        floatingNav.style.opacity = '0';
      }
    }

    // Smooth background parallax
    const heroSection = document.querySelector('.hero-bg');
    if (heroSection instanceof HTMLElement) {
      const bgRate = scrolled * 0.5;
      heroSection.style.backgroundPosition = `center ${bgRate}px`;
      heroSection.style.filter = `brightness(${Math.max(0.7, 1 - scrolled * 0.001)})`;
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
      const target = document.querySelector(this.getAttribute('href')!);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
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

  revealElements.forEach(el => revealObserver.observe(el));
  
  return () => revealObserver.disconnect();
}