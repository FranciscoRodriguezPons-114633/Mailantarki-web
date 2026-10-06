export function initMobileNav() {
  const toggle = document.querySelector("[data-mobile-nav-toggle]");
  const panel = document.querySelector("[data-mobile-nav-panel]");

  if (!toggle || !panel) return;

  const setOpen = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.classList.toggle("is-open", isOpen);
    document.documentElement.classList.toggle("has-mobile-nav-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
