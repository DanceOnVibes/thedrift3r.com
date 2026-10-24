# thedrift3r.com

Official site of DanceOnVibes – The Drift3r. Free music, from 124 BPM to techno. Home of DriftMix (coming soon).

## How it works

A plain static website: HTML, CSS and a little JavaScript. No framework, no database.
Cloudflare serves it, and it deploys automatically from this repo when a change is merged into `main`.

## Where things live

| File | What it is |
|---|---|
| `public/index.html` | The home page: every section, top to bottom |
| `public/privacy.html` | The privacy page |
| `public/404.html` | The page shown for a wrong address |
| `public/css/styles.css` | All the colours and layout (colours are at the top) |
| `public/js/main.js` | Loads YouTube/SoundCloud only when someone presses play |
| `public/images/` | All the pictures |
| `public/_headers` | Security rules (which sites the page may load from) |
| `wrangler.jsonc` | Cloudflare settings |

## Common changes

- **New music:** upload to YouTube or SoundCloud and add it to the playlist. The site updates by itself.
- **Change a word:** edit `public/index.html`.
- **Change a colour:** edit the `:root` block at the top of `public/css/styles.css`.

## Rules

- Work on a branch, open a pull request, merge into `main` only when ready. Merging = live.
- No secrets in this repo, ever.
