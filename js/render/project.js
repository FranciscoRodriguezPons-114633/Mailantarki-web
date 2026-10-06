import {
  contactSection,
  districtLabel,
  esc,
  img,
  isTodo,
  mapVisual,
  productChapter,
  projectCard,
  projectUrl,
  specRows,
  txt,
} from "./templates.js";

const plainText = (value) => (isTodo(value) ? "" : String(value));

function renderNotFound({ root }) {
  root.innerHTML = `
    <section class="section overview project-missing" aria-labelledby="missing-title">
      <div class="layout-grid">
        <p class="section__index">404 / Project</p>
        <h2 id="missing-title" class="overview__title">This project could not be found.</h2>
        <div class="overview__copy">
          <p><a class="text-cta" href="index.html#projects">See all projects</a></p>
        </div>
      </div>
    </section>`;
}

function updateDocumentMeta(site, project) {
  document.title = `${project.name} / ${site.name}`;
  const description = plainText(project.shortDescription) || `${project.name}, ${districtLabel(project)}. A ${site.name} project.`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", `${project.name} / ${site.name}`);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector("[data-header-project]")?.replaceChildren(document.createTextNode(project.name));
}

export function renderProject({ site, projects, root }) {
  const id = new URLSearchParams(window.location.search).get("id");
  const index = projects.findIndex((item) => item.id === id);

  if (index === -1) {
    renderNotFound({ root });
    return null;
  }

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const others = projects.filter((item) => item.id !== project.id);
  const { lat, lng } = project.coordinates;
  const hasCoordinates = typeof lat === "number" && typeof lng === "number";

  updateDocumentMeta(site, project);

  root.innerHTML = `
    <section class="hero hero--project" aria-labelledby="hero-title">
      <figure class="hero__media">
        ${img(project.cover, { priority: true })}
      </figure>
      <div class="hero__scrim" aria-hidden="true"></div>
      <div class="hero__content">
        <p class="hero__meta" data-reveal>
          ${esc(districtLabel(project))} / ${txt(project.specs.area)} / ${esc(site.name)}
        </p>
        <h1 id="hero-title" data-mask-reveal>${esc(project.name)}</h1>
        <p class="hero__claim" data-reveal>${txt(project.shortDescription)}</p>
      </div>
      <div class="hero__footer" data-reveal>
        <span>Project ${esc(project.number)} / ${String(projects.length).padStart(2, "0")}</span>
        <span>${esc(project.location.district)}</span>
        <span>${txt(project.specs.status)}</span>
        <span>${txt(project.specs.delivery)}</span>
      </div>
    </section>

    <section class="section overview" id="overview" aria-labelledby="overview-title">
      <div class="layout-grid">
        <p class="section__index" data-reveal>01 / Overview</p>
        <h2 id="overview-title" class="overview__title" data-reveal>${txt(project.shortDescription)}</h2>
        <div class="overview__copy" data-reveal>
          ${project.longDescription.map((paragraph) => `<p>${txt(paragraph)}</p>`).join("")}
        </div>
        <figure class="overview__image" data-reveal>
          ${img(project.gallery.find((image) => image.src !== project.cover.src) || project.cover)}
          <figcaption class="image-caption">${esc(project.name)} / ${esc(project.location.district)}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section product-suite" aria-label="${esc(project.name)} chapters">
      ${productChapter({
        id: "gallery",
        modifier: "signature",
        number: "02 / Technical sheet",
        title: esc(project.name),
        intro: `${esc(project.name)} in ${esc(districtLabel(project))}, one of ${projects.length} ${esc(site.name)} projects.`,
        rows: specRows(project),
        slides: project.gallery,
        viewerLabel: `${project.name} perspectives`,
      })}
      ${
        project.plans.length
          ? productChapter({
              id: "plans",
              modifier: "villas",
              number: "03 / Plans",
              title: "Plans",
              intro: `Floor plans and layouts for ${esc(project.name)}. Select a sheet or tap the drawing to advance.`,
              slides: project.plans,
              viewerLabel: `${project.name} plans`,
              sketch: true,
            })
          : ""
      }
    </section>

    <section class="section amenities" id="amenities" aria-labelledby="amenities-title">
      <div class="amenities__grid">
        <div class="amenities__header" data-reveal>
          <p class="section__index">04 / Amenities</p>
          <h2 id="amenities-title">Amenities</h2>
        </div>
        <ol class="amenities__list" data-reveal>
          ${project.amenities
            .map(
              (amenity, amenityIndex) => `
            <li>
              <span>${String(amenityIndex + 1).padStart(2, "0")}</span>
              <strong>${txt(amenity)}</strong>
            </li>`,
            )
            .join("")}
        </ol>
      </div>
    </section>

    <section class="section master-plan master-plan--location" id="location" aria-labelledby="location-title">
      <div class="master-plan__grid">
        <div class="master-plan__copy" data-reveal>
          <p class="section__index">05 / Location</p>
          <h2 id="location-title">${esc(project.location.district)}, ${esc(project.location.city)}</h2>
          <p>
            ${esc(project.name)} sits in ${esc(project.location.district)}. The map shows its
            position within the ${projects.length} ${esc(site.name)} addresses across ${esc(site.city)}.
          </p>
          <dl class="location__facts">
            <div>
              <dt>Coordinates</dt>
              <dd>${hasCoordinates ? `${lat.toFixed(5)}, ${lng.toFixed(5)}` : txt("TODO: coordinates")}</dd>
            </div>
            ${
              hasCoordinates
                ? `<div><dt>Directions</dt><dd><a class="text-cta" href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}" target="_blank" rel="noopener">Open in Google Maps</a></dd></div>`
                : ""
            }
          </dl>
        </div>
        ${mapVisual({ map: site.map, projects, activeId: project.id })}
      </div>
    </section>

    <section class="section projects projects--more" id="more" aria-labelledby="more-title">
      <div class="projects__header" data-reveal>
        <p class="section__index">06 / More projects</p>
        <h2 id="more-title">
          Next: <a href="${projectUrl(next.id)}">${esc(next.name)}</a>
        </h2>
      </div>
      <div class="projects-grid projects-grid--compact">
        ${others.map((item) => projectCard(item)).join("")}
      </div>
    </section>

    ${contactSection({
      site,
      projects,
      index: "07",
      context: `${esc(project.name)} / ${esc(districtLabel(project))}`,
      selectedId: project.id,
    })}
  `;

  return project;
}
