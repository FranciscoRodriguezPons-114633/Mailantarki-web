export function initNavActiveState() {
  // Only in-page anchors take part (links such as "index.html#projects" are skipped).
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || !sections.length) return;

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.42 },
  );

  sections.forEach((section) => navObserver.observe(section));
}
