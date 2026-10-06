import { projects, site } from "./data/projects.js";
import { renderHome } from "./render/home.js";
import { renderProject } from "./render/project.js";
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

// Generated content arrives after the browser's own hash jump: re-apply it.
if (window.location.hash) {
  document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView({ block: "start" });
}
