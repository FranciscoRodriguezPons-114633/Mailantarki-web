/*
 * Highlights the nav link of the section currently being read.
 *
 * ONE MAITAMA used an IntersectionObserver with threshold 0.42, which never
 * fires for sections taller than the viewport (e.g. the six-card Projects
 * grid), so the previous link stayed active. Here a reference line just below
 * the header decides: the active section is the one that line is crossing,
 * and no link is active over the hero or sections without a nav link.
 */
export function initNavActiveState() {
  // Only in-page anchors take part (links such as "index.html#projects" are skipped).
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  const targets = navLinks
    .map((link) => ({ link, section: document.getElementById(link.getAttribute("href").slice(1)) }))
    .filter(({ section }) => section);

  if (!targets.length) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const header = document.querySelector(".site-header");
    const line = (header?.offsetHeight || 0) + window.innerHeight * 0.25;

    const current = targets.find(({ section }) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= line && rect.bottom > line;
    });

    targets.forEach(({ link }) => link.classList.toggle("is-active", link === current?.link));
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);
  update();
}
