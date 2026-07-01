# Ibad Ahmad — Portfolio

Personal portfolio site showcasing projects, skills, and blog posts. Built with
**Vite**, **React 18**, **SCSS (Dart Sass, `@use`)**, **Framer Motion**, and an
animated **tsParticles** hero background.

## Features

- Animated particle hero with typing effect and gradient headline
- Modern glass **pill navbar** with scroll-spy active highlighting + gradient CTA
- **Projects** grid with category filters, hover cards, and a screenshot-carousel
  modal (projects curated from real work)
- **About** with hexagon highlight badges, profile photo, and a categorized
  tech stack (Frontend, Backend, AI/LLM, No-Code/Low-Code, Cloud)
- **Contact** form with real email delivery (Web3Forms, or zero-config
  FormSubmit fallback)
- Shared design system: tokens + mixins in `config.scss`, reusable
  `SectionHeading`/`.btn`/`.tag`, consistent container width and spacing
- Fully responsive; uniform card sizing across breakpoints

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

## Contact form

The form works out of the box via [FormSubmit](https://formsubmit.co) — the
first submission triggers a one-time confirmation email; click it once and every
message is delivered thereafter.

For the spam-safe path (email not exposed in the page source), create a free
[Web3Forms](https://web3forms.com) access key and add it to a `.env` file:

```sh
cp .env.example .env
# then set VITE_WEB3FORMS_ACCESS_KEY=your-key
```

## Project structure

```
src/
  components/
    common/      # Logo (SVG), SectionHeading
    home/        # hero + tsParticles background
    header/      # pill navbar with scroll-spy
    about/       # highlights, profile, tech stack
    projects/    # grid, cards, modal + ProjectsData
    blogs/       # blog cards
    contact/     # form (Web3Forms / FormSubmit)
    footer/
  styles/        # global.scss (reset + tokens) + per-section partials
                 # config.scss = SCSS variables + mixins (no CSS output)
  assets/        # images and screenshots
```

## Tech

Vite 6 · React 18 · Dart Sass · Framer Motion 11 · tsParticles · react-icons ·
react-hot-toast · react-responsive-carousel · AOS

## Deployment

Run `npm run build` and deploy the `dist/` folder to any static host
(Netlify, Vercel, Cloudflare Pages, etc.). Configure an SPA fallback to
`index.html` if you add client-side routing.
