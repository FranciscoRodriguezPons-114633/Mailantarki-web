export function initProductCarousels({ prefersReducedMotion }) {
  const carousels = [...document.querySelectorAll("[data-product-carousel]")];

  carousels.forEach((carousel) => {
    const slides = [...carousel.querySelectorAll("[data-product-slide]")];
    const tabs = [...carousel.querySelectorAll("[data-product-tab]")];
    const slideDeck = carousel.querySelector(".product-chapter__slides");
    let activeIndex = 0;
    let timer = null;
    let pointerStart = null;

    if (slides.length < 2 || !tabs.length) return;

    slideDeck?.setAttribute("role", "button");
    slideDeck?.setAttribute("tabindex", "0");
    slideDeck?.setAttribute("aria-label", "Show next image");

    const setActive = (index) => {
      activeIndex = index;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === activeIndex);
      });
      tabs.forEach((tab, tabIndex) => {
        const isActive = tabIndex === activeIndex;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
    };

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    const start = () => {
      if (prefersReducedMotion || window.matchMedia("(max-width: 820px)").matches || timer) return;
      timer = window.setInterval(() => {
        setActive((activeIndex + 1) % slides.length);
      }, 5200);
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        stop();
        setActive(index);
      });
    });

    const goNext = () => {
      stop();
      setActive((activeIndex + 1) % slides.length);
    };

    slideDeck?.addEventListener("pointerdown", (event) => {
      pointerStart = {
        x: event.clientX,
        y: event.clientY,
      };
    });

    slideDeck?.addEventListener("pointerup", (event) => {
      if (!pointerStart) return;
      const deltaX = Math.abs(event.clientX - pointerStart.x);
      const deltaY = Math.abs(event.clientY - pointerStart.y);
      pointerStart = null;

      if (deltaX > 12 || deltaY > 12) return;
      goNext();
    });

    slideDeck?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      goNext();
    });

    carousel.addEventListener("pointerenter", stop);
    carousel.addEventListener("pointerleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    setActive(0);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            start();
          } else {
            stop();
          }
        },
        { threshold: 0.34 }
      );

      observer.observe(carousel);
    } else {
      start();
    }
  });
}
