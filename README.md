# Forge Athletic — Gym Website

A static, no-build website (plain HTML/CSS/JS) for a strength & conditioning gym.
No frameworks, no dependencies — open `index.html` in a browser and it works.

## Preview locally
Just double-click `index.html`, or run a tiny local server:
```
npx serve .
```

## Deploy to GitHub
```
cd forge-athletic
git init
git add .
git commit -m "Forge Athletic gym site"
git branch -M main
git remote add origin https://github.com/code-paul-creator/forge-athletic.git
git push -u origin main
```

## Deploy to Vercel
**Option A — Vercel CLI**
```
npm i -g vercel
cd forge-athletic
vercel
vercel --prod
```

**Option B — Vercel dashboard**
1. Push this folder to a GitHub repo (steps above).
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Other** (it's static, no build step needed).
4. Click **Deploy**. Done — no build command or output directory required.

## Editing content
- Text, prices, schedule, coach names: edit `index.html`.
- Colors/fonts/spacing: edit `css/style.css` (tokens are at the top of the file under `:root`).
- The contact form at the bottom is client-side only — it doesn't send anywhere yet.
  To make it work, either point `<form>` at a form backend (e.g. Formspree, Getform)
  or wire it to a Vercel serverless function under `/api`.
