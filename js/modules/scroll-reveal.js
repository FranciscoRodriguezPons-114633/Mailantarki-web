export function initScrollReveal() {
  const revealItems = document.querySelectorAll("[data-reveal], [data-mask-reveal]");
  const revealTargets = new WeakMap();

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = revealTargets.get(entry.target) || entry.target;
        target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );

  revealItems.forEach((item, index) => {
    item.style.animationDelay = `${Math.min(index * 36, 260)}ms`;
    const trigger = item.classList.contains("chapter__text--panel") ? item.closest("[data-chapter]") || item : item;
    revealTargets.set(trigger, item);
    revealObserver.observe(trigger);
  });
}
