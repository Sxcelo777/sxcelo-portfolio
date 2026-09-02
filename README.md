# Sxcelo Inez — Personal Portfolio

A personal IT & software portfolio built with React and Vite, showcasing IT support
experience, technical skills, projects and contact information. Deployed as a static
site on GitHub Pages.

**Live site:** `https://your-username.github.io/portfolio/` *(update once deployed)*

## Technologies

- React 19
- Vite
- react-icons
- Plain CSS with a shared design-token system (`src/index.css`)

No backend is required — this is a fully static frontend application.

## Project structure

```
portfolio/
├── public/
│   └── images/          # project screenshots + design portfolio images
├── src/
│   ├── components/      # one .jsx + .css pair per section
│   ├── data/            # projects.js, experience.js, skills.js, designs.js
│   ├── App.jsx           # composes all sections, holds contact/social info
│   ├── index.css         # design tokens, base styles, shared button classes
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Before you deploy — things to update

1. **Contact & social links** — edit the `PROFILE` object at the top of `src/App.jsx`
   (email, LinkedIn, GitHub, location).
2. **Project images** — replace the placeholder SVGs in `public/images/` with real
   screenshots (`math-snake.png`, etc.) and update the `image` path in
   `src/data/projects.js` to match.
3. **Project links** — update `github` and `demo` URLs in `src/data/projects.js`,
   especially the Math Snake live demo URL.
4. **Design portfolio** — add your real design work to `src/data/designs.js` and
   `public/images/`.
5. **Experience dates** — several roles in `src/data/experience.js` are missing exact
   dates; fill those in.
6. **`vite.config.js` → `base`** — must match your GitHub repo name (see below).

## Adding a new project

Projects are data-driven — the pill selector and detail panel in the Projects section
are generated automatically. To add one, append an object to the array in
`src/data/projects.js`:

```js
{
  id: 'my-new-project',
  name: 'My New Project',
  tagline: 'Short category label',
  description: 'A sentence or two about what it does.',
  technologies: ['React', 'Node.js'],
  image: '/images/my-new-project.png',
  github: 'https://github.com/your-username/my-new-project',
  demo: 'https://your-username.github.io/my-new-project/',
}
```

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Building

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. In `vite.config.js`, set `base` to match your repo name:
   - Repo at `github.com/you/portfolio` → `base: '/portfolio/'`
   - Repo at `github.com/you/you.github.io` (user site) → `base: '/'`
3. Deploy:

   ```bash
   npm run deploy
   ```

   This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch
   using the `gh-pages` package (already included as a dev dependency).
4. In your repository settings on GitHub, under **Pages**, set the source branch to
   `gh-pages`.
5. Your site will be live at `https://your-username.github.io/portfolio/` (or your
   custom domain, if configured) within a few minutes.

## Accessibility notes

- Semantic HTML landmarks (`header`, `main`, `footer`, `section`) throughout.
- All interactive elements are keyboard-reachable with visible focus states.
- `prefers-reduced-motion` is respected — animations and smooth scroll are disabled
  for users who request it.
- Images use descriptive `alt` text; update it if you swap in real project screenshots.

## Future enhancements (not in v1)

Dark mode, animated project transitions, a blog, downloadable CV, contact form,
project filtering, dedicated project detail pages, GitHub API integration, visitor
analytics, testimonials, and an interactive skills visualization.
