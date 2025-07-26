
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    for (const el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add('active');
        gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
      }
    }
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  const scrollToTopBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
