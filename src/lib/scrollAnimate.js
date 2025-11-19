// Simple scroll-triggered animation initializer
export default function initScrollAnimations() {
  if (typeof window === 'undefined' || !window.document) return;

  // Respect users who prefer reduced motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const selector = 'section, article';
  const nodes = Array.from(document.querySelectorAll(selector));

  if (nodes.length === 0) return;

  // Add baseline class so elements start hidden
  nodes.forEach((el, i) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate');
    }
    // small stagger for nicer effect
    el.style.setProperty('--delay', `${Math.min(i * 40, 400)}ms`);
  });

  if (prefersReduced) {
    // Make all visible immediately
    nodes.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  nodes.forEach((el) => observer.observe(el));
}
