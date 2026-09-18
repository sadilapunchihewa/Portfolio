# Sadila Punchihewa — Portfolio

A responsive Software Engineering portfolio built with React, Vite and Tailwind CSS. It includes Sadila's downloadable CV, accessible section navigation and data-driven project cards with real images.

## Run locally

Use Node.js 20.19+ or 22.12+.

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. To make a production build:

```bash
pnpm build
pnpm preview
```

`npm install`, `npm run dev`, `npm run build` and `npm run preview` also work if you use npm instead of pnpm.

## Update content

- Edit project copy, stacks, features and URLs in `src/data/projects.js`. Add another object to the array to publish another card. `github` and `demo` are intentionally `null` until a verified public link is available; buttons render only for URLs you provide.
- Edit categorized technologies in `src/data/skills.js`.
- Update personal copy and contact information in `src/App.jsx`.
- The home page portrait is the image in `public/images/`. To replace it, update the `src` path in `PortraitVisual` in `src/App.jsx`; keep the same descriptive `alt` text pattern.
- The CV download serves Sadila's supplied PDF at `public/Sadila-Punchihewa-CV.pdf`. Replace that file under the same filename when the CV is updated.
- Project screenshots and photos live in `public/images/`. Set `image` and `imageAlt` on a project in `src/data/projects.js` to display one. All four featured projects currently use images supplied by Sadila.

## Deploy

To deploy on Vercel, import this GitHub repository as a new project. Vercel should detect Vite. Use `pnpm build` as the build command and `dist` as the output directory. The site uses hash navigation, so no rewrite rule is needed.

Before publishing, update the project repository/demo URLs, review the CV, and set a canonical production URL and absolute Open Graph image URL in `index.html` once the domain is known.

## Accessibility and performance

The site uses semantic sections, a skip link, visible focus outlines, keyboard-accessible mobile navigation and reduced-motion support. Project images load lazily. No API key or client-side GitHub API request is needed.
