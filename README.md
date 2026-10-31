# swadhinbharat.github.io

Personal site for [swadh.in](https://swadh.in), built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`).
In the repo settings, set **Pages → Source** to **GitHub Actions**.

Quotes live in `src/data/quotes.json`. Static files (favicons, `/files`) live in `public/`.
