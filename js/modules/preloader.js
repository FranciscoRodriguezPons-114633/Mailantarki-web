const INTRO_KEY = "mailantarki-intro-seen";

/*
 * Brand preloader (MAILANTARKI / ABUJA). Shown only on the first page of a
 * visit: once seen, a sessionStorage flag lets the inline script in <head>
 * add .skip-preloader before the first paint, so moving between projects
 * does not show it again. A new visit (new tab or browser session) shows it.
 */
export function initPreloader() {
  const preloader = document.querySelector("[data-preloader]");
  if (!preloader || document.documentElement.classList.contains("skip-preloader")) return;

  window.addEventListener("load", () => {
    preloader.classList.add("is-hidden");
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch (error) {
      // Storage unavailable (private mode, blocked): the preloader simply shows again.
    }
  });
}
