/*
 * Data-driven version of ONE MAITAMA's hotspots module.
 * Pins and legend items share a key (project id). Hover/focus highlights both
 * and zooms the map toward the pin; the click is a plain link to the project.
 * On a project page the current project stays highlighted (data-active-pin).
 */
export function initMapPins() {
  document.querySelectorAll("[data-hotspot-diagram]").forEach((diagram) => {
    const visual = diagram.closest(".master-plan__visual") || diagram;
    const pins = [...diagram.querySelectorAll("[data-hotspot]")];
    const cards = [...visual.querySelectorAll("[data-hotspot-card]")];
    const restingKey = diagram.dataset.activePin || "";

    const setActive = (key) => {
      const pin = pins.find((item) => item.dataset.hotspot === key);

      diagram.classList.toggle("is-focused", Boolean(pin));
      if (pin) {
        diagram.style.setProperty("--focus-x", pin.style.left);
        diagram.style.setProperty("--focus-y", pin.style.top);
      }

      pins.forEach((item) => item.classList.toggle("is-active", item.dataset.hotspot === key));
      cards.forEach((card) => card.classList.toggle("is-active", card.dataset.hotspotCard === key));
    };

    [...pins, ...cards].forEach((item) => {
      const key = item.dataset.hotspot || item.dataset.hotspotCard;
      item.addEventListener("mouseenter", () => setActive(key));
      item.addEventListener("focus", () => setActive(key));
      item.addEventListener("blur", () => setActive(restingKey));
    });

    visual.addEventListener("mouseleave", () => setActive(restingKey));
    setActive(restingKey);
  });
}
