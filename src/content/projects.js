// Projects, strongest first. Image files live in /public/images/projects.
// A project can also have `clip: '/images/projects/name.mp4'` to show a short video.

export const projects = [
  {
    slug: 'rentals-by-new-era',
    title: 'Rentals by New Era',
    tagline:
      'A full redesign for a rental company with homes in Edmonton, Spruce Grove and Leduc.',
    role: 'Web developer and designer. I also handled SEO, content and client communication.',
    tools: ['WordPress', 'Elementor', 'Custom Post Types', 'Bluehost', 'FTP/SFTP'],
    liveUrl: 'https://rentalsbynewera.ca',
    image: '/images/projects/rentals-main.jpg',
    imageAlt: 'Homepage of the Rentals by New Era website after the redesign',
    brief:
      'Rentals by New Era rents residential properties in Edmonton, Spruce Grove and Leduc. Another developer had managed the company’s site. I took it over and redesigned the pages renters use most: the homepage, Listings, Why New Era, Contact and the footer.',
    process: [
      {
        title: 'Taking over the site',
        text: 'The previous developer handed over WordPress admin, FTP/SFTP, the database, DNS and plugin licenses. Before changing anything, I learned how the site was set up: local and live environments, caching, user roles and Custom Post Types.',
      },
      {
        title: 'Building the design system',
        text: 'The redesign came with reusable patterns: hero sections, a sticky navigation bar and gold call-to-action strips, plus build notes for Elementor. Every later page started from these.',
        shot: {
          src: '/images/projects/rentals-design-system.jpg',
          alt: 'The hero, sticky navigation and gold call-to-action strip used across Rentals by New Era',
        },
      },
      {
        title: 'Listing cards',
        text: 'I rebuilt the neighbourhood and property cards in Elementor with price badges, pill-shaped buttons, icon-based amenities and hover states, so renters can compare homes at a glance.',
        shot: {
          src: '/images/projects/rentals-listing-cards.jpg',
          alt: 'Redesigned property listing cards with price badges and amenity icons',
        },
      },
      {
        title: 'Contact page',
        text: 'The new contact page has a two-column hero, an FAQ accordion and quick-link tiles for the most common requests.',
        shot: {
          src: '/images/projects/rentals-contact.jpg',
          alt: 'Redesigned contact page with two-column hero and FAQ accordion',
        },
      },
    ],
    result:
      'A consistent, redesigned site across the homepage, Listings, Why New Era and Contact pages. The design system carried through all later work on the site.',
    learned:
      'Taking over someone else’s site means understanding it before improving it. Setting up the design system first made every later page faster to build.',
  },
  {
    slug: 'homes-by-new-era',
    title: 'Homes by New Era',
    tagline:
      'Reusable page templates, a blog series and an SEO plan for a homebuilder.',
    role: 'Web developer. I also handle SEO and AEO strategy, content and client communication.',
    tools: ['WordPress', 'HTML and CSS', 'Structured data', 'FAQ schema', 'Bluehost'],
    liveUrl: 'https://homesbynewera.ca',
    image: '/images/projects/homes-main.jpg',
    imageAlt: 'Homepage of the Homes by New Era website',
    brief:
      'Homes by New Era is a homebuilder working in Edmonton, Spruce Grove and Leduc. I took over development from another developer and now handle the site’s pages, templates, content and search visibility.',
    process: [
      {
        title: 'Getting access',
        text: 'The site had been crashing, and the database was the main suspect. At first I had no phpMyAdmin access, so the handover began with getting full access to the hosting, the database and the WordPress admin.',
      },
      {
        title: 'Reusable templates',
        text: 'I am building unified page templates around the New Era brand: charcoal, gold and cream, Fraunces and Work Sans type, and blueprint-grid motifs. New pages start from a template instead of from scratch.',
        shot: {
          src: '/images/projects/homes-templates.jpg',
          alt: 'A New Era page template with charcoal, gold and cream colours and a blueprint grid motif',
        },
      },
      {
        title: 'Pages the client asked for',
        text: 'A client email led to a multi-select filter for the Quick Possessions page, animation fixes and a larger Interiors page. I also redesigned and improved Quick Possessions and the Buyer’s Blueprint blog series.',
        shot: {
          src: '/images/projects/homes-quick-possessions.jpg',
          alt: 'The Quick Possessions page with its multi-select filter',
        },
      },
      {
        title: 'SEO and answer engines',
        text: 'I audited structured data, heading hierarchy and internal linking. AEO (answer engine optimization) became a priority from the start: FAQ schema, featured-snippet targeting and location-forward writing.',
      },
      {
        title: 'A blog schedule',
        text: 'I set up a biweekly community post for the website and Google Business Profile, covering Spruce Grove, Copperhaven, Harvest Ridge, Jesperdale, Mattson, Rosenthal and Woodbend.',
        shot: {
          src: '/images/projects/homes-blog.jpg',
          alt: 'A Buyer’s Blueprint blog post on the Homes by New Era website',
        },
      },
    ],
    result:
      'A shared template system, a regular publishing schedule and an SEO plan the site can build on. This work is ongoing.',
    learned:
      'Design, content and SEO are one job on a site like this. Heading structure, internal links and templates affect each other, so I plan them together.',
  },
  {
    slug: 'ahas-website',
    title: 'Alberta Helping Animals Society',
    tagline: 'A website redesign for an Edmonton non-profit, built as a three-person team.',
    role: 'Developer on a three-person team.',
    team: 'Curtis, Pavan and me, working as HPC Developments',
    tools: ['Figma', 'Astro', 'Cockpit CMS'],
    liveUrl: 'https://ahas.ca',
    image: '/images/projects/ahas-main.jpg',
    imageAlt: 'Homepage of the Alberta Helping Animals Society website',
    brief:
      'Alberta Helping Animals Society (AHAS) is a non-profit in Edmonton. Three of us rebuilt its website as a team project, working under the name HPC Developments.',
    process: [
      {
        title: 'Design in Figma',
        text: 'We started with design and wireframes in Figma so the team agreed on the structure before writing code.',
        shot: {
          src: '/images/projects/ahas-figma.jpg',
          alt: 'Figma wireframes for the AHAS website',
        },
      },
      {
        title: 'Front end in Astro',
        text: 'The front end is built with Astro, a static site framework, which keeps the pages fast.',
      },
      {
        title: 'Content in Cockpit',
        text: 'Content lives in Cockpit, a small PHP-based headless CMS, so staff can update the site without touching code.',
        shot: {
          src: '/images/projects/ahas-cms.jpg',
          alt: 'The Cockpit CMS editing screen for the AHAS website',
        },
      },
    ],
    result: 'The new site is live at ahas.ca.',
    learned:
      'A static front end paired with a headless CMS keeps the code simple for developers and the editing simple for the people who run the site.',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
