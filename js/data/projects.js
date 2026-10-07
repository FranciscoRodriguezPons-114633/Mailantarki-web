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

  // Plans chapter on project pages. Off until every project has its plans
  // (phase 2): the plan data and images stay in place, they are just not shown.
  showPlans: false,

  // Document portal (separate Next.js app with the client login). The header
  // "Client portal" link opens /projects; each project page links straight to
  // its documents with /projects/<portalSlug>. Signed-out visitors are asked to
  // sign in (or enter a project code) and then land on that page.
  portal: {
    url: "https://portal.mailantarki.com",
    label: "Client portal",
  },

  // Brand / organization (not shown as "developer" anywhere on the site)
  developer: "Khamisu Ahmed Mailantarki",
  claim: "Six projects composed across Abuja, each with its own address.",
  overviewTitle: "A portfolio of commercial, residential and sports addresses, shaped by one commitment to quality and place.",
  description: [
    "MAILANTARKI brings together six projects across Abuja: Maylan Plaza in Asokoro, Maylan Heights Residences in Dape, the Mailantarki Sports Complex in Dakibiyu, Mauritius Golf Estate in Mabushi, Daige Residences in Kaura and Daige Heights Apartments in Katampe. Each one answers its district with its own program and identity, from commercial life and premium apartments to family communities and spaces for sport and leisure.",
    "Under the direction of Khamisu Ahmed Mailantarki, the organization approaches every address with the same priorities: well-located land, contemporary architecture, secure and well-planned environments, and places designed to hold their value over time.",
  ],

  images: {
    hero: {
      src: "assets/images/brand/hero.jpg",
      alt: "Row of three-storey white townhouses with balconies, vertical screens and front parking",
    },
    overview: {
      src: "assets/images/brand/overview.jpg",
      alt: "Mailantarki Sports Complex grandstand at dusk, with lit stands and a football match on the pitch",
      caption: "Mailantarki Sports Complex / Dakibiyu",
    },
    studio: {
      src: "assets/images/brand/studio.jpg",
      alt: "Mauritius Golf Estate, a white nine-storey residential building with curved balconies above the tree line",
      caption: "Mauritius Golf Estate / Mabushi",
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
      { label: "Mailantarki", value: "Khamisu Ahmed Mailantarki" },
      { label: "Project", value: "Rodriguez Pons Architects" },
      {
        label: "Website",
        links: [
          { label: "rodriguezpons.com", href: "https://www.rodriguezpons.com" },
          { label: "mailantarki.com", href: "https://mailantarki.com" },
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
    // Hero line: short and worded differently from shortDescription (used as the Overview title).
    tagline: "Retail, business and hospitality at one Asokoro address.",
    shortDescription: "A contemporary commercial address in Asokoro combining retail, business and hospitality within one architectural setting.",
    longDescription: [
      "The building combines a glazed entrance volume with curved façade elements, horizontal terraces, shaded walkways and planted external areas. One basement and five floors hold a supermarket, retail units, anchor shops, an office lounge and a coworking café.",
      "Its identity rests on a Wood & White palette: pale mineral surfaces, warm timber soffits and slats, charcoal metal frames and extensive glazing, carried from the street frontage into the interior spaces.",
    ],
    specs: {
      area: "5,000 m² GFA / 1,750 m² site",
      gfa: "5,000 m²", // Concept Design Report 01
      units: "TODO: units",
      status: "Under Construction",
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
    id: "maylan-heights-residences",
    // Web address of this project in the document portal (defaults to `id`).
    portalSlug: "maylan-heights-residence",
    // Texts and amenities: "MAYLAN HEIGHTS - Info" (Rodriguez Pons / Architects).
    number: "02",
    name: "Maylan Heights Residences",
    location: {
      district: "Dape",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    // Hero line: short and worded differently from shortDescription (used as the Overview title).
    tagline: "Premium residences and everyday commerce in Dape.",
    shortDescription: "A mixed-use development in Dape combining premium residences, integrated commercial spaces and modern infrastructure within a secure, well-planned environment.",
    longDescription: [
      "Maylan Heights is a thoughtfully curated mixed-use development created for individuals who value quality, convenience and long-term investment potential, positioned within the fast-growing Dape District of Abuja.",
      "Every detail was designed to deliver a balanced lifestyle, one where contemporary architecture, accessibility, privacy and functionality exist seamlessly together.",
    ],
    specs: {
      area: "TODO: m²",
      gfa: "10,000 m²",
      units: "TODO: units",
      status: "Under Construction",
    },
    // Optional: short labelled notes shown in the technical sheet chapter.
    highlights: [
      {
        label: "The Complex",
        text: "Integrated to complement the residential experience, the commercial spaces accommodate retail, wellness, dining, professional services and lifestyle-driven businesses, creating a vibrant ecosystem that supports modern urban living.",
      },
      {
        label: "Strategically positioned",
        text: "Located in Lifecamp, Maylan Heights offers a more private, residential alternative to the city’s denser districts, connected to key parts of the Federal Capital Territory through major road networks, within one of Abuja’s evolving growth corridors.",
      },
      {
        label: "Everyday convenience",
        text: "Commercial and lifestyle spaces are integrated into the masterplan so residents can access essential services within close proximity, while keeping the calm and privacy of the wider community.",
      },
    ],
    amenities: [
      "Premium residences",
      "Integrated commercial complex",
      "Retail and dining",
      "Wellness",
      "Professional services",
      "Secure, well-planned environment",
    ],
    cover: {
      src: "assets/images/projects/maylan-heights-residences/gallery-01.jpg",
      alt: "Night view of the Maylan Heights gated entrance with illuminated signage",
    },
    gallery: [
      {
        src: "assets/images/projects/maylan-heights-residences/gallery-01.jpg",
        alt: "Night view of the Maylan Heights gated entrance with illuminated signage",
        caption: "Entrance / Gated arrival at night",
      },
      {
        src: "assets/images/projects/maylan-heights-residences/gallery-02.jpg",
        alt: "Three-storey house with stone and timber facade, terraces and parking at dusk",
        caption: "Phoenix / House facade at dusk",
      },
      {
        src: "assets/images/projects/maylan-heights-residences/gallery-03.jpg",
        alt: "Row of three-storey terraced houses with white balconies and parking",
        caption: "Terraces / Townhouse frontage",
      },
      {
        src: "assets/images/projects/maylan-heights-residences/gallery-04.jpg",
        alt: "Mixed-use commercial complex with glazed upper floors, ground-floor retail and street frontage",
        caption: "The Complex / Commercial and lifestyle frontage",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/maylan-heights-residences/plan-01.jpg",
        alt: "TODO: describe plan 1 of Maylan Heights Residences",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/maylan-heights-residences/plan-02.jpg",
        alt: "TODO: describe plan 2 of Maylan Heights Residences",
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
    // Hero line: short and worded differently from shortDescription (used as the Overview title).
    tagline: "Sport, leisure and stay along a green stream.",
    shortDescription: "A low-rise sports development bringing together football fields, courts, a hotel, an indoor pool and an open mall within a green landscape.",
    longDescription: [
      "Five low-rise buildings are distributed across an irregular site that follows the line of a water stream, linked by a simple road network and surrounded by lush vegetation, sports fields and open-air parking.",
      "The central grandstand building is the meeting place of the scheme. Its F&B terrace opens directly to the exterior, while the large concrete façade frames shade the interiors and give the complex its character.",
    ],
    specs: {
      area: "18,723 m² BUA / 112,078 m² plot",
      gfa: "18,723 m²", // total built-up area (BUA), Report 02
      units: "TODO: units",
      status: "Under Construction",
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
    id: "mauritius-golf-estate",
    // Texts, units, highlights and amenities: "Mauritius Description.docx".
    number: "04",
    name: "Mauritius Golf Estate",
    location: {
      district: "Mabushi",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    // Hero line: short and worded differently from shortDescription (used as the Overview title).
    tagline: "Sixteen residences above the golf green.",
    shortDescription: "A nine-storey luxury apartment building of 16 residences overlooking the Mauritius Golf Course.",
    longDescription: [
      "Large balconies wrap a low-rise, nine-storey building, and some of the units open onto private infinity pools. Interiors and exteriors are composed for comfort and views, immersed in a high-end golf green environment with good accessibility and connectivity.",
      "The 16 apartments range from 3- and 4-bedroom units to 5-bedroom and 2-bedroom duplexes, above a ground floor with access, meeting room, gym and spa, and a basement with 59 parking places.",
    ],
    specs: {
      area: "TODO: m²",
      gfa: "10,000 m²",
      units: "16 apartments",
      status: "Under Construction",
    },
    // Level by level layout, shown as notes in the technical sheet chapter.
    highlights: [
      {
        label: "Levels 1–2",
        text: "Four 3-bedroom units and one 2-bedroom duplex.",
      },
      {
        label: "Levels 3–6",
        text: "Eight 4-bedroom units, two per floor.",
      },
      {
        label: "Levels 7–8",
        text: "Two 5-bedroom duplexes and one 2-bedroom duplex.",
      },
      {
        label: "Ground, roof and basement",
        text: "Access, meeting room, gym and spa at ground level; a roof terrace on the ninth floor; parking access and 59 parking places in the basement.",
      },
    ],
    amenities: [
      "Gym and spa",
      "Meeting room",
      "Infinity pools in selected units",
      "Roof terrace",
      "Golf course views",
      "59 parking places",
    ],
    cover: {
      src: "assets/images/projects/mauritius-golf-estate/gallery-03.jpg",
      alt: "Night view of the residential tower with curved terraces and warm interior light",
    },
    gallery: [
      {
        src: "assets/images/projects/mauritius-golf-estate/gallery-01.jpg",
        alt: "Daytime view of the white residential tower rising above the tree line",
        caption: "Exterior / Tower above the landscape",
      },
      {
        src: "assets/images/projects/mauritius-golf-estate/gallery-02.jpg",
        alt: "Aerial concept view of stacked terraces with private pools and planting",
        caption: "Concept / Terraces and private pools",
      },
      {
        src: "assets/images/projects/mauritius-golf-estate/gallery-03.jpg",
        alt: "Night view of the residential tower with curved terraces and warm interior light",
        caption: "Exterior / Evening facade",
      },
      {
        src: "assets/images/projects/mauritius-golf-estate/gallery-04.jpg",
        alt: "Dining and living interior with marble floor and full-height glazing",
        caption: "Interior / Dining and living",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/mauritius-golf-estate/plan-01.jpg",
        alt: "TODO: describe plan 1 of Mauritius Golf Estate",
        caption: "TODO: plan 01 / level or typology",
      },
      {
        src: "assets/images/projects/mauritius-golf-estate/plan-02.jpg",
        alt: "TODO: describe plan 2 of Mauritius Golf Estate",
        caption: "TODO: plan 02 / level or typology",
      },
    ],
  },
  {
    id: "daige-residences",
    // Texts, highlights and amenities: Daige Residences brochure text (Games Village / Kaura District).
    number: "05",
    name: "Daige Residences",
    location: {
      district: "Kaura",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    // Hero line: short and worded differently from shortDescription (used as the Overview title).
    tagline: "A new vision of home in Games Village.",
    shortDescription: "Bespoke living in the heart of Games Village: a master-planned community of homes and apartments in Kaura District, Abuja.",
    longDescription: [
      "Daige Residences brings a new vision of standards, reframing traditional notions about living. Set on Plot 1148, Cadastral Zone A09, around Games Village, it accommodates fully detached homes, semi-detached homes, terraces and apartments, close to Brickhall School and major areas of the FCT.",
      "The estate already has its urban facilities installed for use, including a road network, sewage system, water supply and 33 kVA electricity supply, and it sits among numerous residential developments. Each unit is delivered within the agreed timeline, with a commitment to compensation for any delays.",
    ],
    specs: {
      area: "TODO: m²",
      gfa: "10,000 m²",
      units: "6 home types",
      status: "Under Construction",
    },
    // Optional: short labelled notes shown in the technical sheet chapter.
    highlights: [
      {
        label: "The master-planned community",
        text: "Arranged to promote order, comfort and community living, with a well-articulated road network, generous building spacing and landscaped green corridors that enhance airflow, privacy and visual appeal.",
      },
      {
        label: "The layout",
        text: "Seamless vehicular movement, clearly defined residential clusters, dedicated parking for residents and visitors, and a calm, low-density living environment.",
      },
      {
        label: "Homes",
        text: "4-bedroom semi-detached homes, 4-bedroom terrace homes and 5-bedroom villas, designed for privacy, space and multi-level contemporary living.",
      },
      {
        label: "Apartments",
        text: "2-bedroom and 3-bedroom apartments, including 3-bedroom apartments with BQ, for young professionals, growing families and rental investors.",
      },
    ],
    amenities: [
      "Road network, sewage and water supply installed",
      "33 kVA electricity supply",
      "Dedicated resident and visitor parking",
      "Landscaped green corridors",
      "Schools, banks and restaurants nearby",
      "Sports centre, mosque and church nearby",
      "Minimart and Spar Mall nearby",
    ],
    // Optional: image for the project card (home + "More projects"). Falls back to cover.
    cardImage: {
      src: "assets/images/projects/daige-residences/gallery-01.jpg",
      alt: "Aerial view of the Daige Residences estate with apartment blocks, terraced houses and a central amenity",
    },
    cover: {
      src: "assets/images/projects/daige-residences/gallery-03.jpg",
      alt: "Four-storey apartment block with dark framing volumes and warm-lit balconies",
    },
    gallery: [
      {
        src: "assets/images/projects/daige-residences/gallery-02.jpg",
        alt: "Street view of a four-storey apartment block with balconies and landscaped frontage",
        caption: "Street view / Apartment block",
      },
      {
        src: "assets/images/projects/daige-residences/gallery-03.jpg",
        alt: "Four-storey apartment block with dark framing volumes and warm-lit balconies",
        caption: "Apartment block / Facade and balconies",
      },
      {
        src: "assets/images/projects/daige-residences/gallery-01.jpg",
        alt: "Aerial view of the Daige Residences estate with apartment blocks, terraced houses and a central amenity",
        caption: "Aerial / Estate master plan",
      },
      {
        src: "assets/images/projects/daige-residences/gallery-04.jpg",
        alt: "Long three-storey residential block facing a landscaped lawn",
        caption: "Residential block / Garden frontage",
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
    portalSlug: "daige-heights-apartment",
    // Texts, units, highlights and amenities: Daige Heights listing (prices and fees intentionally left out).
    number: "06",
    name: "Daige Heights Apartments",
    location: {
      district: "Katampe",
      city: "Abuja",
    },
    // Exact site coordinates (decimal degrees). Pins are hidden until both are set.
    coordinates: { lat: null, lng: null }, // TODO: coordinates
    // Hero line: short and worded differently from shortDescription (used as the Overview title).
    tagline: "Contemporary three-bedroom living in Katampe.",
    shortDescription: "A collection of 30 three-bedroom apartments with contemporary architecture in the heart of Katampe, Abuja.",
    longDescription: [
      "Daige Heights Apartments brings together 30 three-bedroom residences in the heart of Katampe, composed with a contemporary architectural language of white volumes, clean lines and open balconies.",
      "Every bedroom is ensuite, complemented by a guest toilet, a fitted kitchen with pantry and private balconies, while an elevator and a central metered generator serve the whole building.",
    ],
    specs: {
      area: "TODO: m²",
      gfa: "10,000 m²",
      units: "30 apartments",
      status: "Under Construction",
    },
    // Optional: short labelled notes shown in the technical sheet chapter.
    highlights: [
      {
        label: "Residences",
        text: "30 three-bedroom apartments, all bedrooms ensuite, with a guest toilet and private balconies.",
      },
      {
        label: "Kitchen",
        text: "A fitted kitchen with pantry in every apartment.",
      },
      {
        label: "Building services",
        text: "Elevator access and a central metered generator serving the whole building.",
      },
    ],
    amenities: [
      "All bedrooms ensuite",
      "Guest toilet",
      "Elevator",
      "Balconies",
      "Fitted kitchen with pantry",
      "Central metered generator",
    ],
    cover: {
      src: "assets/images/projects/daige-heights-apartments/gallery-01.jpg",
      alt: "Corner view of a white three-storey apartment building with glass balconies",
    },
    gallery: [
      {
        src: "assets/images/projects/daige-heights-apartments/gallery-01.jpg",
        alt: "Corner view of a white three-storey apartment building with glass balconies",
        caption: "Exterior / Corner view",
      },
      {
        src: "assets/images/projects/daige-heights-apartments/gallery-02.jpg",
        alt: "Front view of the symmetrical building with central white fin and carport",
        caption: "Exterior / Main facade",
      },
    ],
    plans: [
      {
        src: "assets/images/projects/daige-heights-apartments/plan-01.jpg",
        alt: "Rendered ground floor plan with four units, living areas and parking",
        caption: "Ground floor / Living areas and parking",
      },
      {
        src: "assets/images/projects/daige-heights-apartments/plan-02.jpg",
        alt: "Rendered upper floor plan with four units and bedrooms",
        caption: "Upper floor / Bedrooms",
      },
    ],
  },
];

export const getProject = (id) => projects.find((project) => project.id === id);
