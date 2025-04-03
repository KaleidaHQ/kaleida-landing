# Kaleida Landing Page

A retro-futuristic landing page for Kaleida, a technology incubator & R&D lab. This project is built with Astro and React, optimized for deployment on Cloudflare Pages.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌩️ Deploying to Cloudflare Pages

This project is configured to work with Cloudflare Pages. Follow these steps to deploy:

1. Push your code to a GitHub repository
2. Log in to your Cloudflare account and go to Pages
3. Click "Create a project" and select your GitHub repository
4. Configure your project with the following settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: None required
5. Click "Save and Deploy"

Cloudflare Pages will automatically build and deploy your site. The Astro adapter for Cloudflare is already configured in this project.

## ⚙️ Compatibility with Cloudflare Pages

This project has been specifically optimized for Cloudflare Pages, addressing the compatibility issues that NextJS has with Cloudflare Pages. By using Astro with the Cloudflare adapter, we get:

- Static site generation with dynamic components
- Efficient edge rendering
- No compatibility issues with Cloudflare's environment
- Optimized asset delivery through Cloudflare's CDN
