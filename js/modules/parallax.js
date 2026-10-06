export function initParallax({ prefersReducedMotion }) {
  const parallaxItems = document.querySelectorAll("[data-parallax] img");

  if (prefersReducedMotion || !parallaxItems.length) return;

  let ticking = false;

  const renderParallax = () => {
    const offset = Math.min(window.scrollY * 0.08, 72);
    parallaxItems.forEach((item) => {
      item.style.transform = `translateY(${offset}px) scale(1.04)`;
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      window.requestAnimationFrame(renderParallax);
      ticking = true;
    },
    { passive: true },
  );
}
