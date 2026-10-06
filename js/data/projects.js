/*
 * MAILANTARKI / single source of content and image paths.
 *
 * Every text and every image path used by index.html and project.html lives
 * here. To finish the site, replace each "TODO: ..." string and drop the
 * images at the paths below (or change the paths to match your files).
 *
 * - Any string starting with "TODO" is rendered with a dashed marker on the
 *   page so it is easy to spot. Set `showTodoMarkers: false` to hide markers.
 * - Missing images render as a striped placeholder showing the expected path.
 * - Arrays (gallery, plans, amenities, longDescription) can hold any number of
 *   items; carousels, tabs and lists are generated from them.
 */

export const site = {
  name: "MAILANTARKI",
  city: "Abuja",
  country: "Nigeria",
  showTodoMarkers: true,

  // Brand / developer
  developer: "TODO: developer name",
  claim: "Six projects composed across Abuja, each with its own address.",
  overviewTitle: "TODO: brand statement (one editorial sentence about Mailantarki).",
  description: [
    "TODO: brand / developer description / paragraph 1.",
    "TODO: brand / developer description / paragraph 2.",
  ],

  images: {
    hero: {
      src: "assets/images/brand/hero.jpg",
      alt: "TODO: describe the Mailantarki hero image",
    },
    overview: {
      src: "assets/images/brand/overview.jpg",
      alt: "TODO: describe the overview image",
      caption: "TODO: overview caption",
    },
    studio: {
      src: "assets/images/brand/studio.jpg",
      alt: "TODO: describe the studio image (drawing, elevation, sketch)",
      caption: "TODO: studio caption",
    },
  },

  // Static map of Abuja. The pins are placed by projecting each project's
  // lat/lng onto this image, so `bounds` must be the exact geographic edges
  // of the image (e.g. the bounding box used when exporting it).
  map: {
    src: "assets/images/map/abuja-map.jpg",
    alt: "Map of Abuja with the six Mailantarki projects",
    caption: "Abuja / Federal Capital Territory",
    bounds: {
      north: null, // TODO: map bounds (top edge latitude)
      south: null, // TODO: map bounds (bottom edge latitude)
      west: null, // TODO: map bounds (left edge longitude)
      east: null, // TODO: map bounds (right edge longitude)
    },
  },

  studio: {
    // TODO: confirm RP/A authorship and adapt the copy if needed.
    name: "RODRIGUEZ PONS Architects",
    title: "An international studio framing a family of residential and civic addresses.",
    text: "RODRIGUEZ PONS / Architects works across architecture, engineering, master planning, landscaping and interior design. For MAILANTARKI, that integrated practice is applied across six projects in Abuja.",
  },

  contact: {
    title: ["Choose the address.", "We will take it from there."],
    details: [
      { label: "Developer", value: "TODO: developer name" },
      { label: "Project", value: "Rodriguez Pons Architects" },
      {
        label: "Website",
        links: [
          { label: "rodriguezpons.com", href: "https://www.rodriguezpons.com" },
          { label: "TODO: mailantarki website", href: "#" },
        ],
      },
      {
        label: "RP/Digital",
        value: "Francisco Rodriguez Pons / ",
        links: [
          {
            label: "franciscorodriguezpons1@gmail.com",
            href: "mailto:franciscorodriguezpons1@gmail.com",
          },
        ],
      },
    ],
  },
};

export const projects = [
  {
    id: "maylan-plaza",
    // Texts, area and amenities: "RP-2250-25 ASOKORO PLAZA - Concept Design Report 01" (Oct 2026).
    number: "01",
    name: "Maylan Plaza",
    location: {
      district: "Asokoro",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    shortDescription: "A contemporary commercial address in Asokoro combining retail, business and hospitality within one architectural setting.",
    longDescription: [
      "The building combines a glazed entrance volume with curved façade elements, horizontal terraces, shaded walkways and planted external areas. One basement and five floors hold a supermarket, retail units, anchor shops, an office lounge and a coworking café.",
      "Its identity rests on a Wood & White palette: pale mineral surfaces, warm timber soffits and slats, charcoal metal frames and extensive glazing, carried from the street frontage into the interior spaces.",
    ],
    specs: {
      area: "5,000 m² GFA / 1,750 m² site",
      units: "TODO: units",
      status: "TODO: construction status",
      delivery: "TODO: delivery date",
    },
    amenities: [
      "Supermarket",
      "Anchor shops and retail units",
      "Office lounge",
      "Coworking café",
      "21 parking spaces",
    ],
    cover: {
      src: "assets/images/projects/maylan-plaza/gallery-01.jpg",
      alt: "Evening view of the plaza entrance with its glazed central volume and landscaped frontage",
    },
    gallery: [
      {
        src: "assets/images/projects/maylan-plaza/gallery-01.jpg",
        alt: "Evening view of the main entrance, glazed central volume and landscaped forecourt",
        caption: "Access / Main entrance and glazed frontage",
      },
      {
        src: "assets/images/projects/maylan-plaza/gallery-02.jpg",
        alt: "Corner view of the commercial building with terraces, signage and retail frontage",
        caption: "Street corner / Terraces and retail frontage",
      },
      {
        src: "assets/images/projects/maylan-plaza/gallery-03.jpg",
        alt: "Office lounge with feature timber stair, tropical planting and city views",
        caption: "Office lounge / Feature stair and city views",
      },
      {
        src: "assets/images/projects/maylan-plaza/gallery-04.jpg",
        alt: "Coworking café with reception counter, communal bar and timber slatted ceiling",
        caption: "Coworking café / Reception and communal counter",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/maylan-plaza/plan-01.jpg",
        alt: "TODO: describe plan 1 of Maylan Plaza",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/maylan-plaza/plan-02.jpg",
        alt: "TODO: describe plan 2 of Maylan Plaza",
        caption: "TODO: plan 02 / level or typology",
      },
    ],
  },
  {
    id: "maylan-heights-life-camp",
    number: "02",
    name: "Maylan Heights Residences Life Camp",
    location: {
      district: "Dape",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    shortDescription: "TODO: short description of Maylan Heights Residences Life Camp (one sentence).",
    longDescription: [
      "TODO: long description of Maylan Heights Residences Life Camp / paragraph 1.",
      "TODO: long description of Maylan Heights Residences Life Camp / paragraph 2.",
    ],
    specs: {
      area: "TODO: m²",
      units: "TODO: units",
      status: "TODO: construction status",
      delivery: "TODO: delivery date",
    },
    amenities: [
      "TODO: amenity 01",
      "TODO: amenity 02",
      "TODO: amenity 03",
    ],
    cover: {
      src: "assets/images/projects/maylan-heights-life-camp/cover.jpg",
      alt: "TODO: describe the cover image of Maylan Heights Residences Life Camp",
    },
    gallery: [
      {
        src: "assets/images/projects/maylan-heights-life-camp/gallery-01.jpg",
        alt: "TODO: describe image 1 of Maylan Heights Residences Life Camp",
        caption: "TODO: caption / gallery 01",
      },
      {
        src: "assets/images/projects/maylan-heights-life-camp/gallery-02.jpg",
        alt: "TODO: describe image 2 of Maylan Heights Residences Life Camp",
        caption: "TODO: caption / gallery 02",
      },
      {
        src: "assets/images/projects/maylan-heights-life-camp/gallery-03.jpg",
        alt: "TODO: describe image 3 of Maylan Heights Residences Life Camp",
        caption: "TODO: caption / gallery 03",
      },
      {
        src: "assets/images/projects/maylan-heights-life-camp/gallery-04.jpg",
        alt: "TODO: describe image 4 of Maylan Heights Residences Life Camp",
        caption: "TODO: caption / gallery 04",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/maylan-heights-life-camp/plan-01.jpg",
        alt: "TODO: describe plan 1 of Maylan Heights Residences Life Camp",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/maylan-heights-life-camp/plan-02.jpg",
        alt: "TODO: describe plan 2 of Maylan Heights Residences Life Camp",
        caption: "TODO: plan 02 / level or typology",
      },
    ],
  },
  {
    id: "mailantarki-sports-complex",
    // Texts, area and amenities: "RP-2233-22 - SPORTS COMPLEX - REPORT 02" (Apr 2022).
    number: "03",
    name: "Mailantarki Sports Complex",
    location: {
      district: "Dakibiyu",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    shortDescription: "A low-rise sports development bringing together football fields, courts, a hotel, an indoor pool and an open mall within a green landscape.",
    longDescription: [
      "Five low-rise buildings are distributed across an irregular site that follows the line of a water stream, linked by a simple road network and surrounded by lush vegetation, sports fields and open-air parking.",
      "The central grandstand building is the meeting place of the scheme. Its F&B terrace opens directly to the exterior, while the large concrete façade frames shade the interiors and give the complex its character.",
    ],
    specs: {
      area: "18,723 m² BUA / 112,078 m² plot",
      units: "TODO: units",
      status: "TODO: construction status",
      delivery: "TODO: delivery date",
    },
    amenities: [
      "Football fields and sports courts",
      "Grandstand building with F&B terrace",
      "Hotel",
      "Indoor pool",
      "Open mall",
      "Green areas along the water stream",
    ],
    cover: {
      src: "assets/images/projects/mailantarki-sports-complex/gallery-01.jpg",
      alt: "Front view of the grandstand building over the main football pitch",
    },
    gallery: [
      {
        src: "assets/images/projects/mailantarki-sports-complex/gallery-01.jpg",
        alt: "Front view of the grandstand building over the main football pitch",
        caption: "Grandstand / Main pitch frontage",
      },
      {
        src: "assets/images/projects/mailantarki-sports-complex/gallery-02.jpg",
        alt: "Side view of the grandstand building at dusk with the Mailantarki Sports Complex signage",
        caption: "Grandstand / Evening side view",
      },
      {
        src: "assets/images/projects/mailantarki-sports-complex/gallery-03.jpg",
        alt: "Terrace and stands overlooking the pitch, with the hospitality level behind glass",
        caption: "Grandstand / Terraces and hospitality level",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/mailantarki-sports-complex/plan-01.jpg",
        alt: "Aerial master plan of the sports complex along the water stream",
        caption: "Master plan / Site layout along the stream",
      },
    ],
  },
  {
    id: "mauritius-sports-complex",
    number: "04",
    name: "Mauritius Sports Complex",
    location: {
      district: "Mabushi",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    shortDescription: "TODO: short description of Mauritius Sports Complex (one sentence).",
    longDescription: [
      "TODO: long description of Mauritius Sports Complex / paragraph 1.",
      "TODO: long description of Mauritius Sports Complex / paragraph 2.",
    ],
    specs: {
      area: "TODO: m²",
      units: "TODO: units",
      status: "TODO: construction status",
      delivery: "TODO: delivery date",
    },
    amenities: [
      "TODO: amenity 01",
      "TODO: amenity 02",
      "TODO: amenity 03",
    ],
    cover: {
      src: "assets/images/projects/mauritius-sports-complex/gallery-03.jpg",
      alt: "Night view of the residential tower with curved terraces and warm interior light",
    },
    gallery: [
      {
        src: "assets/images/projects/mauritius-sports-complex/gallery-01.jpg",
        alt: "Daytime view of the white residential tower rising above the tree line",
        caption: "Exterior / Tower above the landscape",
      },
      {
        src: "assets/images/projects/mauritius-sports-complex/gallery-02.jpg",
        alt: "Aerial concept view of stacked terraces with private pools and planting",
        caption: "Concept / Terraces and private pools",
      },
      {
        src: "assets/images/projects/mauritius-sports-complex/gallery-03.jpg",
        alt: "Night view of the residential tower with curved terraces and warm interior light",
        caption: "Exterior / Evening facade",
      },
      {
        src: "assets/images/projects/mauritius-sports-complex/gallery-04.jpg",
        alt: "Dining and living interior with marble floor and full-height glazing",
        caption: "Interior / Dining and living",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/mauritius-sports-complex/plan-01.jpg",
        alt: "TODO: describe plan 1 of Mauritius Sports Complex",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/mauritius-sports-complex/plan-02.jpg",
        alt: "TODO: describe plan 2 of Mauritius Sports Complex",
        caption: "TODO: plan 02 / level or typology",
      },
    ],
  },
  {
    id: "daige-residences",
    number: "05",
    name: "Daige Residences",
    location: {
      district: "Kaura",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    shortDescription: "TODO: short description of Daige Residences (one sentence).",
    longDescription: [
      "TODO: long description of Daige Residences / paragraph 1.",
      "TODO: long description of Daige Residences / paragraph 2.",
    ],
    specs: {
      area: "TODO: m²",
      units: "TODO: units",
      status: "TODO: construction status",
      delivery: "TODO: delivery date",
    },
    amenities: [
      "TODO: amenity 01",
      "TODO: amenity 02",
      "TODO: amenity 03",
    ],
    cover: {
      src: "assets/images/projects/daige-residences/gallery-01.jpg",
      alt: "Hillside residence with infinity pool, white volumes and landscaped terraces",
    },
    gallery: [
      {
        src: "assets/images/projects/daige-residences/gallery-01.jpg",
        alt: "Hillside residence with infinity pool, white volumes and landscaped terraces",
        caption: "Exterior / Pool terrace over the landscape",
      },
      {
        src: "assets/images/projects/daige-residences/gallery-02.jpg",
        alt: "Arrival path to a residence with a dark stone volume at dusk",
        caption: "Access / Arrival sequence at dusk",
      },
      {
        src: "assets/images/projects/daige-residences/gallery-03.jpg",
        alt: "Open living area with bar, fireplace and glazing toward the pool and city",
        caption: "Interior / Living toward the pool",
      },
      {
        src: "assets/images/projects/daige-residences/gallery-04.jpg",
        alt: "Evening gathering around the pool terrace",
        caption: "Pool terrace / Evening social life",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/daige-residences/plan-01.jpg",
        alt: "TODO: describe plan 1 of Daige Residences",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/daige-residences/plan-02.jpg",
        alt: "TODO: describe plan 2 of Daige Residences",
        caption: "TODO: plan 02 / level or typology",
      },
    ],
  },
  {
    id: "daige-heights-apartments",
    number: "06",
    name: "Daige Heights Apartments",
    location: {
      district: "Katampe",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    shortDescription: "TODO: short description of Daige Heights Apartments (one sentence).",
    longDescription: [
      "TODO: long description of Daige Heights Apartments / paragraph 1.",
      "TODO: long description of Daige Heights Apartments / paragraph 2.",
    ],
    specs: {
      area: "TODO: m²",
      units: "TODO: units",
      status: "TODO: construction status",
      delivery: "TODO: delivery date",
    },
    amenities: [
      "TODO: amenity 01",
      "TODO: amenity 02",
      "TODO: amenity 03",
    ],
    cover: {
      src: "assets/images/projects/daige-heights-apartments/cover.jpg",
      alt: "TODO: describe the cover image of Daige Heights Apartments",
    },
    gallery: [
      {
        src: "assets/images/projects/daige-heights-apartments/gallery-01.jpg",
        alt: "TODO: describe image 1 of Daige Heights Apartments",
        caption: "TODO: caption / gallery 01",
      },
      {
        src: "assets/images/projects/daige-heights-apartments/gallery-02.jpg",
        alt: "TODO: describe image 2 of Daige Heights Apartments",
        caption: "TODO: caption / gallery 02",
      },
      {
        src: "assets/images/projects/daige-heights-apartments/gallery-03.jpg",
        alt: "TODO: describe image 3 of Daige Heights Apartments",
        caption: "TODO: caption / gallery 03",
      },
      {
        src: "assets/images/projects/daige-heights-apartments/gallery-04.jpg",
        alt: "TODO: describe image 4 of Daige Heights Apartments",
        caption: "TODO: caption / gallery 04",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/daige-heights-apartments/plan-01.jpg",
        alt: "TODO: describe plan 1 of Daige Heights Apartments",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/daige-heights-apartments/plan-02.jpg",
        alt: "TODO: describe plan 2 of Daige Heights Apartments",
        caption: "TODO: plan 02 / level or typology",
      },
    ],
  },
];

export const getProject = (id) => projects.find((project) => project.id === id);
