# Ibad Ahmad — Portfolio

Personal portfolio site showcasing projects, skills, and blog posts. Built with
**Vite**, **React 18**, **SCSS (Dart Sass)**, **Framer Motion**, and an animated
**tsParticles** hero background.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (bundled with Node)

## Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the dev server on port 3000  |
| `npm run build`   | Production build to `dist/`        |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Run ESLint                         |

## Getting started

```sh
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  components/   # home (hero), header, about, projects, blogs, contact, footer
  styles/       # SCSS partials + shared design tokens (config.scss)
  assets/       # images and screenshots
```

## Deployment

Run `npm run build` and deploy the `dist/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, etc.). Configure an SPA fallback to
`index.html` if you add client-side routing.
