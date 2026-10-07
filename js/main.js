import { projects, site } from "./data/projects.js";
import { renderHome } from "./render/home.js";
import { renderProject } from "./render/project.js";
import { portalUrl } from "./render/templates.js";
import { initContactForm } from "./modules/contact-form.js";
import { initImagePlaceholders } from "./modules/image-placeholders.js";
import { initMapPins } from "./modules/map-pins.js";
import { initMobileNav } from "./modules/mobile-nav.js";
import { initNavActiveState } from "./modules/nav-active-state.js";
import { initParallax } from "./modules/parallax.js";
import { initPreloader } from "./modules/preloader.js";
import { initProductCarousels } from "./modules/product-carousel.js";
import { initScrollReveal } from "./modules/scroll-reveal.js";

document.documentElement.classList.add("has-js");
document.documentElement.classList.toggle("show-todos", site.showTodoMarkers);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.querySelector("[data-page-root]");
const page = document.body.dataset.page;

// 1. Render the page from js/data/projects.js
if (root && page === "home") renderHome({ site, projects, root });
if (root && page === "project") renderProject({ site, projects, root });

// Header "Client portal" links: URL and label come from site.portal (removed if it is not set).
document.querySelectorAll("[data-portal-link]").forEach((link) => {
  const url = portalUrl(site);
  if (!url) return link.remove();
  link.href = url;
  link.textContent = site.portal.label;
});

// Hide in-page links whose section is not rendered (e.g. Plans while site.showPlans is off).
document.querySelectorAll('.nav a[href^="#"], .mobile-nav-panel a[href^="#"]').forEach((link) => {
  const id = link.getAttribute("href").slice(1);
  if (id && id !== "top" && !document.getElementById(id)) link.remove();
});

// 2. Same behaviour layer as ONE MAITAMA, applied to the generated markup
initPreloader();
initImagePlaceholders();
initScrollReveal();
initNavActiveState();
initParallax({ prefersReducedMotion });
initMobileNav();
initMapPins();
initProductCarousels({ prefersReducedMotion });
initContactForm();

// Scroll behaviour on load / reload:
// - Arriving with a #section (e.g. "All projects" -> index.html#projects) still
//   jumps to it, since the content is rendered after the browser's own jump.
// - The #section is then removed from the address bar, and the browser's scroll
//   restoration is off, so a reload always starts at the top of the page.
const cleanUrl = () => window.history.replaceState(null, "", window.location.pathname + window.location.search);

if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";

if (window.location.hash) {
  document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({ block: "start" });
  cleanUrl();
} else {
  window.scrollTo(0, 0);
}

// In-page menu links (#overview, #projects...) scroll as before, without leaving the hash behind.
window.addEventListener("hashchange", cleanUrl);
