# Portfolio2

Personal portfolio of **Sharvil Mishra** — a single-page site with a Three.js glass-shard
background, scroll-reveal sections, project cards with interactive bubbles, and a live GitHub stats strip.

## Run it locally

It is a static site — no install step. Serve the folder with any static server
(opening `index.html` directly also works, but the GitHub stats request needs `http://`):

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## What's in the folder

| File         | Purpose |
| ------------ | ------- |
| `index.html` | Page shell: fonts, metadata, and the `#root` mount point |
| `style.css`  | All styling (design tokens are the CSS variables at the top) |
| `script.js`  | Pre-built bundle: React 18.3.1 + Three.js r160 (minified) followed by the readable app code |

## Editing content

Everything shown on the page lives in the readable section at the **bottom of `script.js`**, under the
`PORTFOLIO APP` comment: `PROJECTS`, `GAMES`, `TIMELINE`, `SKILL_GROUPS`, `MARQUEE_ITEMS`, and the contact details.

To add a game, add an entry to `GAMES` with a unique URL-safe `slug`, `name`, `desc`, `url`, and optional
`stack`, `github`, and `offset` fields. It will appear in Work with a **Play** link, and the portfolio will
redirect `?play=<slug>` to its `url` (for example, `?play=your-game`).
The "Work" heading counts the projects automatically.

> `script.js` is a build output — there is no `src/` or `package.json` in this repository. To change the
> minified React/Three.js part (or to reduce the bundle size), restore the original source project and rebuild.

## Contact

eng.sharvilmishra@gmail.com
