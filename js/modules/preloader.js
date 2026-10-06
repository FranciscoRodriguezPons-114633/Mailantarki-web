export function initPreloader() {
  window.addEventListener("load", () => {
    document.querySelector("[data-preloader]")?.classList.add("is-hidden");
  });
}
