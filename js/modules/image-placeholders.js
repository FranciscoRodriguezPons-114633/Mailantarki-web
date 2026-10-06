/*
 * Images are defined in js/data/projects.js. Until a file exists at its path,
 * the frame shows a striped placeholder with the expected path, so it is
 * obvious which image is still missing.
 */
export function initImagePlaceholders() {
  const markMissing = (image) => {
    const frame = image.parentElement;
    if (!frame) return;
    frame.classList.add("is-placeholder");
    frame.dataset.placeholder = image.dataset.placeholderSrc || image.getAttribute("src") || "TODO: image";
  };

  document.querySelectorAll("img[data-placeholder-src]").forEach((image) => {
    if (image.complete && image.naturalWidth === 0) {
      markMissing(image);
      return;
    }
    image.addEventListener("error", () => markMissing(image), { once: true });
  });
}
