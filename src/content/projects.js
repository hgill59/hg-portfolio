
export const projects = [
  {
    slug: 'rentals-by-new-era',
    title: 'Rentals by New Era',
    tagline:
      'A full redesign for a rental company with homes in Edmonton, Spruce Grove and Leduc.',
    role: 'Web developer and designer. I also handled SEO, content and client communication.',
    tools: ['WordPress', 'Elementor', 'Custom Post Types', 'FTP/SFTP'],
    liveUrl: 'https://rentalsbynewera.ca',
    image: '/images/projects/rentals-main.webp',
    clip: '/images/projects/rentals-site.mp4',
    imageAlt: 'Homepage of the Rentals by New Era website after the redesign',
    brief:
      'Rentals by New Era rents residential properties in Edmonton, Spruce Grove and Leduc. Another developer had managed the company’s site. I took it over and redesigned the pages renters use most: the homepage, Listings, Why New Era, Contact and the footer.',
    process: [
      {
        title: 'Taking over the site',
        text: 'The previous developer handed over WordPress admin, FTP/SFTP, the database, DNS and plugin licenses. Before changing anything, I learned how the site was set up: local and live environments, caching, user roles and Custom Post Types. The biggest thing was learning the main plugin Elementor, as it was the main area of build. It is a drag and drop website builder so going from looking at a bunch little words and letters on a screen for some time to this was a bit of a challenge'
      },
      {
        title: 'Listing cards',
        text: 'I rebuilt the neighbourhood and property cards in Elementor with price badges, pill-shaped buttons, icon-based amenities and hover states, so renters can compare homes at a glance.',
        shot: {
          src: '/images/projects/rentals-listing-cards.webp',
          alt: 'Redesigned property listing cards with price badges and amenity icons',
        },
      },
      {
        title: 'Why New Era page',
        text: 'The Why New Era page previously had the content on the page be displayed out of order with little to no care. For more contrast and readibility I added more of a heading structure with each section being a different background color. Changing up the positioning of each section would allow users to be open to explore more.',
        shot: {
          src: '/images/projects/why-new-era-sect.webp',
          alt: 'Redesigned Why New Era page',
        },
      },
    ],
    result:
      'A consistent, redesigned site across the homepage, Listings, Why New Era and Contact pages. The design system carried through all later work on the site. With constant client communication and rapid responses, the sites health has exponentially increased user retention rates. The last developers rushed the initial build so I had to make sure clients were happy with what I was providing.',
    learned:
      'Taking over someone else’s site means understanding it before improving it on adding my own spin and expertise to it. This is critical because when clients ask for changes and new features, having that knowledge already will make it a easier task.'
  },
  {
    slug: 'homes-by-new-era',
    title: 'Homes by New Era',
    tagline:
      'Reusable page templates, a blog series and an SEO plan for a homebuilder.',
    role: 'Web developer. I also handle SEO and AEO strategy, content and client communication.',
    tools: ['WordPress', 'HTML and CSS', 'Structured data', 'FAQ schema', 'Bluehost'],
    liveUrl: 'https://homesbynewera.ca',
    image: '/images/projects/homes-by-new-era.webp',
    clip: '/images/projects/homes-video.mp4',
    imageAlt: 'Homepage of the Homes by New Era website',
    brief:
      'Homes by New Era is a homebuilder working in Edmonton, Spruce Grove and Leduc. I took over development from another developer and now handle the site’s pages, templates, content and search visibility.',
    process: [
      {
        title: 'Getting access',
        text: 'The proccess of getting access to the site files and Wordpress Admin page was simple, until issues starting to stem from the hosting. The site had been crashing, and the database was the main suspect. At first I had no phpMyAdmin access, so I also had to takeover hosting as well. It is hosted on Bluehost, as well is Rentals By New Era.',
      },
      {
        title: 'Reusable templates',
        text: 'I am building unified page templates around the New Era brand: charcoal, gold and cream, Fraunces and Work Sans type, and blueprint-grid motifs. New pages start from a template instead of from scratch.',
        shot: {
          src: '/images/projects/homes-theme-build.webp',
          alt: 'A New Era page template with charcoal, gold and cream colours and a blueprint grid motif',
        },
      },
      {
        title: 'Pages the client asked for',
        text: 'This site before handed to me already had a styling that the client liked so my job was to make sure whatever knew was to be added fit with there criteria. For example, a client email led to a multi-select filter for the Quick Possessions page instead of the dropdown filters that were there previously. New features that were added by me as well were the GST rebate and mortgage calculators using Javascript. I used Bootstrap CSS as it resembled the most to the rest of the site.',
        shot: {
          src: '/images/projects/quick-possessions.webp',
          alt: 'The Quick Possessions page with its multi-select filter',
        },
      },
      {
        title: 'SEO and answer engines',
        text: 'I audited structured data, heading hierarchy and internal linking. AEO (answer engine optimization) became a priority from the startby adding FAQ schemas and location-forward writing in pages and posts.',
      },
      {
        title: 'A blog schedule',
        text: 'I set up a biweekly community post for the website and Google Business Profile, covering Spruce Grove, Copperhaven, Harvest Ridge, Jesperdale, Mattson, Rosenthal and Woodbend.',
        shot: {
          src: '/images/projects/homes-blog.webp',
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
    role: 'Developer and Designer on a three-person team.',
    team: 'Curtis, Pavan and me, working as HPC Developments',
    tools: ['Figma', 'Astro', 'Cockpit CMS', 'React', 'Tailwind CSS'],
    liveUrl: 'https://ahas.ca',
    image: '/images/projects/ahas-main.webp',
    clip: '/images/projects/ahas-video.mp4',
    imageAlt: 'Homepage of the Alberta Helping Animals Society website',
    brief:
      'Alberta Helping Animals Society (AHAS) is a non-profit in Edmonton. Three of us rebuilt its website as a team project, working under the name HPC Developments.',
    process: [
      {
        title: 'Design in Figma',
        text: 'We started with design and wireframes in Figma so the team agreed on the structure before writing code. Me and my team conducted a proper Design Sprint which took us a week to complete. Doing this made later stages in development much more streamlined. If there was any changes to be made, we at least have a starting point to build off of.',
        shot: {
          src: '/images/projects/ahas-figma.webp',
          alt: 'Figma wireframes for the AHAS website',
        },
      },
      {
        title: 'Initial Development',
        text: 'No Node.js was available for us to use, and we wanted to use a framework written in JS or Typescript which astro supports. But there was no server side rendering options in js if node wasn’t available. The CMS we we needed had to be able to be self hosted, in shared hosting using PHP. After some research, we looked at a ton of headless headless CMS platforms, Sanity, Strapi, Payload, Keystone, and wordpress headless. All the good ones (headless) except wordpress required server side execution with node. It was getting quite frustrating but eventually we found a small CMS called Cockpit - only ~600 stars on github, and installed it to try it out.'
      },
      {
        title: 'Content in Cockpit',
        text: 'Content lives in Cockpit, a small PHP-based headless CMS, so staff can update the site without touching code. Cockpit is a headless cms written in php. API First, so we can have any frontend framework that supports fetch over http. And comes with a lot of built-ins and out of the box features like field types already defined, an asset management system, and all self hosted and with a nice free tier. Well the biggest was the lack of support online. There is a small community of developers maintaining this project.',
        shot: {
          src: '/images/projects/ahas-cms.webp',
          alt: 'The Cockpit CMS editing screen for the AHAS website',
        },
      },
      {
        title: 'Front end in Astro',
        text: 'The front end is built with Astro, a static site framework, which keeps the pages fast.',
      },
    ],
    result: 'The new site is live at ahas.ca.',
    learned:
      'A static front end paired with a headless CMS keeps the code simple for developers and the editing simple for the people who run the site.',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
