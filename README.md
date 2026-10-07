# MAILANTARKI / landing

Landing de los 6 proyectos Mailantarki en Abuja. Usa el mismo stack y la misma organización que `../OneMaitama`: HTML estático, CSS vanilla modular y ES modules, sin build ni dependencias.

## Cómo funciona

- `index.html` (home): Hero / 01 Overview / 02 Mapa con 6 pines / 03 Projects (6 tarjetas) / 04 Studio / 05 Contact.
- `project.html?id=<id-del-proyecto>`: una sola plantilla para los 6 proyectos. Hero / 01 Overview / 02 Ficha técnica + galería / 03 Planos / 04 Amenities / 05 Otros proyectos / 06 Contact. El mapa con los 6 pines está solo en la home.
- **Todo el contenido y todas las rutas de imágenes están en `js/data/projects.js`.** `js/render/*.js` convierte esos datos en el mismo markup y las mismas clases de ONE MAITAMA. Después corren los módulos JS originales (reveal, carruseles, nav, menú mobile).
- Contacto: `index.html?project=<id>#contact` preselecciona un proyecto en el formulario. En cada página de proyecto, ese proyecto ya viene seleccionado.

## Ver en el navegador

Los ES modules no funcionan con `file://`, así que hay que servir la carpeta:

```
cd Mailantarki
python3 serve.py   # igual que http.server, pero sin caché del navegador
# http://localhost:8000
```

## Portal de clientes (login)

- La landing vive en `mailantarki.com` y el portal de documentación (otro proyecto de Vercel, con el login) en `portal.mailantarki.com`. La URL está en `site.portal.url` de `projects.js`.
- Header y menú mobile: botón "Client portal" → `/projects` del portal. Si no hay sesión, el portal muestra el login y la opción de código de proyecto.
- Cada página de proyecto: "Project documents" → `/projects/<portalSlug>` del portal. Después del login (o del código), el usuario cae directo en ese proyecto. `portalSlug` es la dirección web del proyecto en el portal; si no está, se usa `id`.

## Planos (fase 2)

La sección Plans está apagada en todos los proyectos con `site.showPlans: false` en `projects.js`. Los datos y las imágenes de planos siguen guardados. Para mostrarla, cambiá a `true`: la sección, el link del menú y la numeración se ajustan solos.

## Placeholders

- Todo texto que empieza con `TODO` se ve con un recuadro punteado en la página. `site.showTodoMarkers: false` los oculta.
- Una imagen que falta muestra un marco rayado con la ruta esperada, y desaparece cuando el archivo existe.
- Los pines del mapa aparecen solo cuando están cargadas las `coordinates` del proyecto **y** `site.map.bounds`. `bounds` son los bordes geográficos exactos de la imagen del mapa (por ejemplo, el bounding box con el que la exportás).

## Estructura

```
index.html / project.html
css/styles.css                      imports (mismo orden que ONE MAITAMA)
css/base, css/layout                copiados sin cambios
css/components/                     componentes de ONE MAITAMA + nuevos:
  projects-grid.css                 tarjetas de proyecto (home + "More projects")
  project-page.css                  amenities, header de proyecto
  contact-form.css                  formulario con selector de proyecto
  placeholders.css                  marcas TODO e imágenes faltantes
js/main.js                          render + init
js/data/projects.js                 ← CONTENIDO Y RUTAS DE IMÁGENES
js/render/templates.js              bloques compartidos (mapa, capítulo, tarjeta, contacto)
js/render/home.js, project.js       uno por página
js/modules/                         módulos de ONE MAITAMA + map-pins.js (hotspots
                                    genérico), image-placeholders.js, contact-form.js
assets/images/                      vacía: acá van las imágenes
```

## Lista de TODO (todo en `js/data/projects.js` salvo indicación)

**Marca (`site`)**
- `developer`: nombre de la desarrolladora (aparece en el hero y en Contact).
- `overviewTitle`: frase de marca.
- `description`: 2 párrafos sobre la marca / desarrolladora.
- `alt` y `caption` de las imágenes de hero, overview y studio.
- `map.bounds`: norte / sur / oeste / este de la imagen del mapa.
- `studio`: confirmar la autoría de RP/A y el texto.
- `contact.details`: nombre de la desarrolladora y web de Mailantarki.

**En cada uno de los 6 proyectos**
- `coordinates.lat` / `coordinates.lng`
- `tagline`: frase corta del hero, distinta de la descripción corta.
- `fit: "contain"` (opcional, en una imagen de galería): la muestra entera sin recortar, útil para imágenes verticales.
- `cardImage` (opcional): imagen de la tarjeta en la home si tiene que ser distinta de la portada (hoy en Daige Residences).
- `shortDescription`: 1 frase (título del Overview y tarjetas).
- `longDescription`: párrafos.
- `specs.area` / `specs.units` (`specs.status` = Under Construction en todos; `specs.gfa` = 10,000 m² provisorio salvo Maylan Plaza y Sports Complex, que tienen el dato de sus informes)
- `amenities`: la cantidad que quieras.
- `highlights` (opcional): notas con título que aparecen en el capítulo de ficha técnica (hoy en Maylan Heights, Mauritius, Daige Residences y Daige Heights).
- `alt` y `caption` de la portada, la galería y los planos (ya completos en los 4 proyectos con fotos, salvo los planos pendientes).

**Fuera del archivo de datos**
- `index.html`: URL `canonical`, `og:image` y `twitter:image` (los crawlers de redes no ejecutan JS).
- `js/modules/contact-form.js`: conectar el envío (por ahora el formulario es solo maquetado).

## Rutas de imágenes

Las fotos de `Desktop/aa1_fotos Mailantarki` (carpetas A a F) están copiadas y optimizadas: JPG de máximo 2400 px, y los planos recortados al dibujo. Si un proyecto no tiene `cover.jpg` propio, la portada reutiliza una imagen de la galería. Si cambiás el formato de una imagen, actualizá la extensión en `projects.js`. Podés agregar o quitar imágenes de galería y planos: los tabs se generan solos.

### Brand / home (site.images, site.map)

| Uso | Ruta | Estado |
|---|---|---|
| Hero home (también og:image) | `assets/images/projects/maylan-plaza/gallery-01.jpg` (la misma portada de Maylan Plaza) | cargada |
| Overview home | `assets/images/brand/overview.jpg` | **falta** |
| Mapa de Abuja | `assets/images/map/abuja-map.jpg` | **falta** |
| Studio | `assets/images/brand/studio.jpg` | **falta** |

### 01 / Maylan Plaza / Asokoro

| Uso | Ruta | Estado |
|---|---|---|
| Portada (hero + tarjeta) | `assets/images/projects/maylan-plaza/gallery-01.jpg` | cargada |
| Galería 1 | `assets/images/projects/maylan-plaza/gallery-01.jpg` | cargada |
| Galería 2 | `assets/images/projects/maylan-plaza/gallery-02.jpg` | cargada |
| Galería 3 | `assets/images/projects/maylan-plaza/gallery-03.jpg` | cargada |
| Galería 4 | `assets/images/projects/maylan-plaza/gallery-04.jpg` | cargada |
| Plano 1 | `assets/images/projects/maylan-plaza/plan-01.jpg` | **falta** |
| Plano 2 | `assets/images/projects/maylan-plaza/plan-02.jpg` | **falta** |

### 02 / Maylan Heights Residences / Dape

| Uso | Ruta | Estado |
|---|---|---|
| Portada (hero + tarjeta) | `assets/images/projects/maylan-heights-residences/gallery-01.jpg` | cargada |
| Galería 1 | `assets/images/projects/maylan-heights-residences/gallery-01.jpg` | cargada |
| Galería 2 | `assets/images/projects/maylan-heights-residences/gallery-02.jpg` | cargada |
| Galería 3 | `assets/images/projects/maylan-heights-residences/gallery-03.jpg` | cargada |
| Galería 4 | `assets/images/projects/maylan-heights-residences/gallery-04.jpg` | cargada |
| Plano 1 | `assets/images/projects/maylan-heights-residences/plan-01.jpg` | **falta** |
| Plano 2 | `assets/images/projects/maylan-heights-residences/plan-02.jpg` | **falta** |

### 03 / Mailantarki Sports Complex / Dakibiyu

| Uso | Ruta | Estado |
|---|---|---|
| Portada (hero + tarjeta) | `assets/images/projects/mailantarki-sports-complex/gallery-01.jpg` | cargada |
| Galería 1 | `assets/images/projects/mailantarki-sports-complex/gallery-01.jpg` | cargada |
| Galería 2 | `assets/images/projects/mailantarki-sports-complex/gallery-02.jpg` | cargada |
| Galería 3 | `assets/images/projects/mailantarki-sports-complex/gallery-03.jpg` | cargada |
| Plano 1 | `assets/images/projects/mailantarki-sports-complex/plan-01.jpg` | cargada |

### 04 / Mauritius Golf Estate / Mabushi

| Uso | Ruta | Estado |
|---|---|---|
| Portada (hero + tarjeta) | `assets/images/projects/mauritius-golf-estate/gallery-03.jpg` | cargada |
| Galería 1 | `assets/images/projects/mauritius-golf-estate/gallery-01.jpg` | cargada |
| Galería 2 | `assets/images/projects/mauritius-golf-estate/gallery-02.jpg` | cargada |
| Galería 3 | `assets/images/projects/mauritius-golf-estate/gallery-03.jpg` | cargada |
| Galería 4 | `assets/images/projects/mauritius-golf-estate/gallery-04.jpg` | cargada |
| Plano 1 | `assets/images/projects/mauritius-golf-estate/plan-01.jpg` | **falta** |
| Plano 2 | `assets/images/projects/mauritius-golf-estate/plan-02.jpg` | **falta** |

### 05 / Daige Residences / Kaura

| Uso | Ruta | Estado |
|---|---|---|
| Portada (hero + tarjeta) | `assets/images/projects/daige-residences/gallery-03.jpg` | cargada |
| Galería 1 | `assets/images/projects/daige-residences/gallery-01.jpg` | cargada |
| Galería 2 | `assets/images/projects/daige-residences/gallery-02.jpg` | cargada |
| Galería 3 | `assets/images/projects/daige-residences/gallery-03.jpg` | cargada |
| Galería 4 | `assets/images/projects/daige-residences/gallery-04.jpg` | cargada |
| Plano 1 | `assets/images/projects/daige-residences/plan-01.jpg` | **falta** |
| Plano 2 | `assets/images/projects/daige-residences/plan-02.jpg` | **falta** |

### 06 / Daige Heights Apartments / Katampe

| Uso | Ruta | Estado |
|---|---|---|
| Portada (hero + tarjeta) | `assets/images/projects/daige-heights-apartments/gallery-01.jpg` | cargada |
| Galería 1 | `assets/images/projects/daige-heights-apartments/gallery-01.jpg` | cargada |
| Galería 2 | `assets/images/projects/daige-heights-apartments/gallery-02.jpg` | cargada |
| Plano 1 | `assets/images/projects/daige-heights-apartments/plan-01.jpg` | cargada |
| Plano 2 | `assets/images/projects/daige-heights-apartments/plan-02.jpg` | cargada |

