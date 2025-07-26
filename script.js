
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

  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 4000);
});
