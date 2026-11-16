# Harman Gill portfolio

React + Tailwind CSS (v4) + React Router, built with Vite.

## Run it

```bash
npm install
npm run dev      # local site at http://localhost:5173
npm run build    # production build in /dist
```

For hosting, upload `/dist` to Netlify, Vercel or similar. `public/_redirects` makes page URLs like `/projects` work on Netlify.

## Where to edit

| What | File |
| --- | --- |
| Name, job title, email, nav links | `src/content/site.js` |
| Projects (brief, role, process, result, lessons) | `src/content/projects.js` |
| Other page items | `src/content/other.js` |
| About page text | `src/pages/About.jsx` |
| Colours and fonts | `src/index.css` (the `@theme` block) |

## Images to add

Until a file exists, the page shows a quiet hexagon tile with the image description, so nothing looks broken. Drop real files into `public/images/` with these names (or change the paths in the content files):

- `harman.jpg`: a clear, friendly photo of you (landing and About)
- `projects/`: `rentals-main.jpg`, `rentals-design-system.jpg`, `rentals-listing-cards.jpg`, `rentals-contact.jpg`, `homes-main.jpg`, `homes-templates.jpg`, `homes-quick-possessions.jpg`, `homes-blog.jpg`, `ahas-main.jpg`, `ahas-figma.jpg`, `ahas-cms.jpg`, `messaging-main.jpg`, `messaging-schema.jpg`
- `other/`: `git-tutorial.jpg`, `cms-tutorials.jpg`, `lifting.jpg`

To show a clip on a project, add `clip: '/images/projects/your-clip.mp4'` to that project in `projects.js`.

## Before you submit

- Replace anything in the copy that doesn't sound like you or isn't accurate.
- Run a spell check and have someone else read it.
- Have a partner do the five-second test on the landing page.
- Click every link once on the built site.
