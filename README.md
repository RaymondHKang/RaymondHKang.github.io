# Personal Website

A Next.js portfolio site configured for static export and deployment to **GitHub Pages** at `https://<username>.github.io`.

## Project structure

```text
personal-website/
├── .github/workflows/deploy.yml   # GitHub Actions deploy pipeline
├── public/
│   ├── .nojekyll                  # Required for GitHub Pages + Next.js assets
│   └── resume.pdf                 # Add your résumé here (optional)
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind + theme styles
│   │   ├── layout.js              # Root layout, fonts, metadata
│   │   └── page.js                # Home page sections
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── data/
│       └── site.js                # Edit this file to personalize content
├── next.config.mjs                # Static export settings for GitHub Pages
├── package.json
└── README.md
```

## Customize your content

Edit `src/data/site.js` to update:

- Name, tagline, bio, email, location
- LinkedIn and GitHub URLs
- Project cards and skills
- Site URL (`https://YOUR_USERNAME.github.io`)

Drop your résumé at `public/resume.pdf` so the Resume button works.

## Local development

1. Install [Node.js 20+](https://nodejs.org/)
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Build locally

```bash
npm run build
```

Static files are output to the `out/` directory.

## Deploy to GitHub Pages (user site)

Because you chose a **user site**, your GitHub repository must be named:

```text
<username>.github.io
```

Example: if your GitHub username is `jane-doe`, create a repo named `jane-doe.github.io`.

### Steps

1. Create the GitHub repo named `<username>.github.io`
2. Push this project to the `main` branch
3. In the repo, go to **Settings → Pages**
4. Under **Build and deployment**, set **Source** to **GitHub Actions**
5. Push to `main` (or run the workflow manually) — the site deploys to `https://<username>.github.io`

### First push example

```bash
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

## Why static export?

GitHub Pages hosts static files only. This project uses Next.js `output: "export"` so `npm run build` generates a fully static site in `out/`, which GitHub Actions uploads on every push to `main`.

## Optional: custom domain

Add a `CNAME` file in `public/` with your domain (for example `www.yourname.com`), then configure DNS in your domain provider and GitHub Pages settings.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- GitHub Actions for CI/CD
