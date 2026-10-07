import { caption, contactSection, esc, img, mapVisual, projectCard, txt } from "./templates.js";

export function renderHome({ site, projects, root }) {
  const count = projects.length;
  const countWord = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][count] || count;
  const params = new URLSearchParams(window.location.search);
  const requestedProject = projects.some((project) => project.id === params.get("project")) ? params.get("project") : "";

  root.innerHTML = `
    <section class="hero hero--brand" aria-labelledby="hero-title">
      <figure class="hero__media">
        ${img(site.images.hero, { priority: true })}
      </figure>
      <div class="hero__scrim" aria-hidden="true"></div>
      <div class="hero__content">
        <p class="hero__meta" data-reveal>
          ${esc(site.city)}, ${esc(site.country)} / ${count} projects
        </p>
        <h1 id="hero-title" data-mask-reveal>${esc(site.name)}</h1>
        <p class="hero__claim" data-reveal>${txt(site.claim)}</p>
      </div>
      <div class="hero__footer hero__footer--many" data-reveal>
        ${projects.map((project) => `<span>${esc(project.location.district)}</span>`).join("")}
      </div>
    </section>

    <section class="section overview" id="overview" aria-labelledby="overview-title">
      <div class="layout-grid">
        <p class="section__index" data-reveal>01 / Overview</p>
        <h2 id="overview-title" class="overview__title" data-reveal>${txt(site.overviewTitle)}</h2>
        <div class="overview__copy" data-reveal>
          ${site.description.map((paragraph) => `<p>${txt(paragraph)}</p>`).join("")}
        </div>
        <figure class="overview__image" data-reveal>
          ${img(site.images.overview)}
          ${caption(site.images.overview.caption)}
        </figure>
      </div>
    </section>

    <section class="section master-plan" id="map" aria-labelledby="map-title">
      <div class="master-plan__grid">
        <div class="master-plan__copy" data-reveal>
          <p class="section__index">02 / ${count} projects / 1 city</p>
          <h2 id="map-title">${countWord} addresses across ${esc(site.city)}, read as one family.</h2>
          <p>
            Each project keeps its own district, program and identity. Select a
            point on the map to open the project.
          </p>
        </div>
        ${mapVisual({ map: site.map, projects })}
      </div>
    </section>

    <section class="section projects" id="projects" aria-labelledby="projects-title">
      <div class="projects__header" data-reveal>
        <p class="section__index">03 / Projects</p>
        <h2 id="projects-title">The projects</h2>
      </div>
      <div class="projects-grid">
        ${projects.map((project) => projectCard(project)).join("")}
      </div>
    </section>

    <section class="section studio" id="studio" aria-labelledby="studio-title">
      <div class="studio__surface" data-reveal>
        <figure>
          ${img(site.images.studio)}
          ${caption(site.images.studio.caption)}
        </figure>
        <div class="studio__copy">
          <p class="section__index">04 / Studio / ${esc(site.studio.name)}</p>
          <h2 id="studio-title">${txt(site.studio.title)}</h2>
          <p>${txt(site.studio.text)}</p>
        </div>
      </div>
    </section>

    ${contactSection({
      site,
      projects,
      index: "05",
      context: `${esc(site.name)} / ${esc(site.city)}`,
      selectedId: requestedProject,
    })}
  `;
}
