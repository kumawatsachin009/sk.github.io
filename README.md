# sk.github.io

My personal site: a single-page portfolio built with React and Vite, deployed to GitHub Pages.

## What's on the page

- Intro and contact links
- Experience (CoinDCX, IntelleWings)
- Projects
- Skills
- Background (education, recognition, certification)

The site is static — no 3D, no animation libraries, no client-side routing. Theme follows the
system light/dark preference.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to GitHub Pages.

## Content

CV content lives in `src/components/Experience.jsx`, `Skills.jsx` and `Background.jsx`.
The downloadable CV is `public/assets/cv.pdf`.
