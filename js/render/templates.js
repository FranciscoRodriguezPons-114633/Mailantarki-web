/*
 * Shared HTML templates. Every block keeps the class names of the ONE MAITAMA
 * components (hero, overview, master-plan, product-chapter, studio, contact)
 * so the original CSS and JS modules work unchanged on generated markup.
 */

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ESCAPES[char]);

export const isTodo = (value) =>
  value === null || value === undefined || value === "" || /^TODO\b/i.test(String(value).trim());

/* Text content: TODO values get a visible marker (see css/components/placeholders.css). */
export const txt = (value) => {
  if (isTodo(value)) {
    const label = value ? esc(value) : "TODO";
    return `<span class="todo" data-todo>${label}</span>`;
  }
  return esc(value);
};

export const projectUrl = (id) => `project.html?id=${encodeURIComponent(id)}`;

export const districtLabel = (project) => `${project.location.district}, ${project.location.city}`;

export const img = (image = {}, { priority = false } = {}) => `
  <img
    src="${esc(image.src)}"
    alt="${esc(image.alt)}"
    ${priority ? 'fetchpriority="high"' : 'loading="lazy"'}
    decoding="async"
    data-placeholder-src="${esc(image.src)}"
  />`;

export const caption = (value) => (value ? `<figcaption class="image-caption">${txt(value)}</figcaption>` : "");

/* ---------- Map ---------- */

const hasNumber = (value) => typeof value === "number" && Number.isFinite(value);

/* Equirectangular projection of lat/lng onto the map image (fine at city scale). */
export const projectOnMap = (coordinates = {}, bounds = {}) => {
  const { lat, lng } = coordinates;
  const { north, south, west, east } = bounds;
  if (![lat, lng, north, south, west, east].every(hasNumber)) return null;
  const x = ((lng - west) / (east - west)) * 100;
  const y = ((north - lat) / (north - south)) * 100;
  if (x < 0 || x > 100 || y < 0 || y > 100) return null;
  return { x: x.toFixed(2), y: y.toFixed(2) };
};

export const mapVisual = ({ map, projects, activeId = "" }) => {
  const pins = projects
    .map((project) => {
      const position = projectOnMap(project.coordinates, map.bounds);
      if (!position) return "";
      const isCurrent = project.id === activeId;
      return `
        <a
          class="hotspot${isCurrent ? " is-current" : ""}"
          href="${isCurrent ? "#top" : projectUrl(project.id)}"
          style="left: ${position.x}%; top: ${position.y}%"
          data-hotspot="${esc(project.id)}"
          aria-label="${esc(`${project.name}, ${districtLabel(project)}`)}"
        ><span class="hotspot__label">${esc(project.number)}</span></a>`;
    })
    .join("");

  const legend = projects
    .map((project) => {
      const isCurrent = project.id === activeId;
      return `
        <a
          class="plan-marker${isCurrent ? " is-current" : ""}"
          href="${isCurrent ? "#top" : projectUrl(project.id)}"
          data-hotspot-card="${esc(project.id)}"
          ${isCurrent ? 'aria-current="page"' : ""}
        >
          <span>${esc(project.number)} / ${esc(project.location.district)}</span>
          <strong>${esc(project.name)}</strong>
        </a>`;
    })
    .join("");

  return `
    <div class="master-plan__visual" data-reveal>
      <figure class="master-plan__diagram" data-hotspot-diagram data-active-pin="${esc(activeId)}">
        <div class="master-plan__canvas">
          ${img({ src: map.src, alt: map.alt })}
          ${pins}
        </div>
        ${caption(map.caption)}
      </figure>
      <nav class="master-plan__legend" aria-label="Mailantarki projects">${legend}</nav>
    </div>`;
};

/* ---------- Product chapter (gallery / plans viewer) ---------- */

export const specRows = (project) => [
  ["Area", project.specs.area],
  ["Units", project.specs.units],
  ["GFA", project.specs.gfa],
  ["Status", project.specs.status],
  ["Location", districtLabel(project)],
];

const definitionList = (rows = []) =>
  rows.length
    ? `<dl>${rows.map(([term, value]) => `<div><dt>${esc(term)}</dt><dd>${txt(value)}</dd></div>`).join("")}</dl>`
    : "";

const slidesAndTabs = (slides, label, { sketch = false } = {}) => `
  <div class="product-chapter__viewer" aria-label="${esc(label)}">
    <div class="product-chapter__slides">
      ${slides
        .map(
          (slide, index) => `
        <figure class="product-chapter__slide${sketch ? " product-chapter__slide--sketch" : ""}${index === 0 ? " is-active" : ""}" data-product-slide>
          ${img(slide)}
          ${caption(slide.caption)}
        </figure>`,
        )
        .join("")}
    </div>
    ${
      slides.length > 1
        ? `<div class="product-chapter__tabs" role="tablist" aria-label="${esc(label)}">
        ${slides
          .map(
            (_, index) => `
          <button class="${index === 0 ? "is-active" : ""}" type="button" role="tab" data-product-tab aria-selected="${index === 0}">
            ${String(index + 1).padStart(2, "0")}
          </button>`,
          )
          .join("")}
      </div>`
        : ""
    }
  </div>`;

export const productChapter = ({ id, modifier = "", number, title, intro, rows = [], notes = [], slides = [], viewerLabel, sketch = false }) => `
  <article
    class="product-chapter${modifier ? ` product-chapter--${modifier}` : ""}"
    id="${esc(id)}"
    aria-labelledby="${esc(id)}-title"
    data-product-carousel
    data-reveal
  >
    <div class="product-chapter__copy">
      <span class="product-chapter__number">${number}</span>
      <h2 id="${esc(id)}-title">${title}</h2>
      ${intro ? `<p>${intro}</p>` : ""}
      ${definitionList(rows)}
      ${
        notes.length
          ? `<div class="product-chapter__notes">${notes
              .map((note) => `<article>${note.label ? `<span>${txt(note.label)}</span>` : ""}<p>${txt(note.text)}</p></article>`)
              .join("")}</div>`
          : ""
      }
    </div>
    ${slidesAndTabs(slides, viewerLabel, { sketch })}
  </article>`;

/* ---------- Project card ---------- */

export const projectCard = (project, { headingLevel = 3 } = {}) => `
  <article class="project-card" data-reveal>
    <a class="project-card__link" href="${projectUrl(project.id)}">
      <figure class="project-card__media">
        ${img(project.cover)}
        <figcaption class="image-caption">${esc(project.number)} / ${esc(districtLabel(project))}</figcaption>
      </figure>
      <div class="project-card__body">
        <span class="project-card__number">${esc(project.number)} / ${esc(project.location.district)}</span>
        <h${headingLevel} class="project-card__title">${esc(project.name)}</h${headingLevel}>
        <p>${txt(project.shortDescription)}</p>
        <dl class="project-card__facts">
          <div><dt>GFA</dt><dd>${txt(project.specs.gfa)}</dd></div>
          <div><dt>Status</dt><dd>${txt(project.specs.status)}</dd></div>
        </dl>
        <span class="text-cta">View project</span>
      </div>
    </a>
  </article>`;

/* ---------- Contact ---------- */

const contactDetails = (details) =>
  details
    .map((item) => {
      const links = (item.links || [])
        .map((link) => `<a href="${esc(link.href)}">${txt(link.label)}</a>`)
        .join(" / ");
      const value = item.value ? txt(item.value) : "";
      return `<div><dt>${esc(item.label)}</dt><dd>${value}${links}</dd></div>`;
    })
    .join("");

export const contactSection = ({ site, projects, index, context, selectedId = "" }) => `
  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="contact__grid">
      <div class="contact__intro" data-reveal>
        <p class="contact__small">${index} / Contact / ${context}</p>
        <h2 id="contact-title" data-mask-reveal>${site.contact.title.map(esc).join("<br />")}</h2>
        <dl class="contact__links">${contactDetails(site.contact.details)}</dl>
      </div>
      <form class="contact-form" data-contact-form novalidate data-reveal>
        <div class="contact-form__field contact-form__field--project">
          <label for="contact-project">Project of interest</label>
          <select id="contact-project" name="project" required>
            <option value="general"${selectedId ? "" : " selected"}>General enquiry / all projects</option>
            ${projects
              .map(
                (project) =>
                  `<option value="${esc(project.id)}"${project.id === selectedId ? " selected" : ""}>${esc(project.number)} / ${esc(project.name)} / ${esc(project.location.district)}</option>`,
              )
              .join("")}
          </select>
        </div>
        <div class="contact-form__field">
          <label for="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="contact-form__field">
          <label for="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required />
        </div>
        <div class="contact-form__field">
          <label for="contact-phone">Phone <small>(optional)</small></label>
          <input id="contact-phone" name="phone" type="tel" autocomplete="tel" />
        </div>
        <div class="contact-form__field contact-form__field--full">
          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="4"></textarea>
        </div>
        <div class="contact-form__footer">
          <button class="button button--primary" type="submit">Send enquiry</button>
          <p class="contact-form__status" role="status" aria-live="polite" data-contact-status></p>
        </div>
      </form>
    </div>
  </section>`;
