export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
}

export function animateOnScroll(): void {
  const observer = createIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  });

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate="true"]').forEach(el => {
    observer.observe(el);
  });
}

export function updateScrollProgress(): void {
  const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
  if (!scrollIndicator) return;

  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + '%';
}

export function handleNavbarScroll(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const scrolled = window.scrollY > 50;
  if (scrolled) {
    navbar.classList.add('bg-white/95', 'shadow-lg');
    navbar.classList.remove('bg-white/90');
  } else {
    navbar.classList.remove('bg-white/95', 'shadow-lg');
    navbar.classList.add('bg-white/90');
  }
}
