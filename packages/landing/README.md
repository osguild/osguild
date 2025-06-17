# Welcome to Voyager!

This is the first theme using Tailwind CSS V4! This is also the first theme to make use of my up-coming Starwind UI components and setup. It includes more accessible and capable components than I was previously creating and I am excited to hear what you think of it.

## Quickstart

1. To get started, first install all necessary packages with `npm install` or `pnpm install`, then run an initial build to make sure the setup works `npm run build` or `pnpm build`.
2. Next, you'll want to configure your site i18n setup (one language, or multiple). Simply run the command `npm run config-i18n` and follow the script instructions to get setup! For further information, see the [i18n documentation](https://cosmicthemes.com/docs/i18n/).
3. Now you can setup the site to your liking!
   - [Style customization](https://cosmicthemes.com/docs/styles/)
   - [Content editing](https://cosmicthemes.com/docs/content/)
   - [Animations](https://cosmicthemes.com/docs/animations/)
   - [Keystatic CMS](https://cosmicthemes.com/docs/keystatic/) - if you don't want Keystatic you can run `npm run remove-keystatic`
   - [Forms](https://cosmicthemes.com/docs/contact-form/)

Should you need any assistance, send me a message at support@cosmicthemes.com

## Code Intro

I have created a few code tours to help introduce you to the codebase. You will need the extension [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) to view them in VSCode or another IDE.

## Code Structure

The source files have the following setup. Note that not all files are included - it is already long, no one wants it to be longer.

```
.
├── .tours/
│   └── code-intro.tour
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── hero.jpg
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── HeroCentered.astro
│   │   │   └── HeroGradient.astro
│   │   └── Footer/
│   │       └── Footer.astro
│   ├── config/
│   │   ├── siteSettings.json.ts
│   │   └── translationData.json.ts
│   ├── data/
│   │   ├── authors/
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── otherPages/
│   ├── icons/
│   │   └── tabler/
│   ├── js/
│   │   └── textUtils.ts
│   ├── layouts/
│   │   ├── BaseHead.astro
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── examples/
│   │   │   └── (contains example pages so you can see how to use components)
│   │   ├── [page].astro
│   │   ├── 404.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── resume.astro
│   │   ├── overview.astro (links to example pages)
│   │   └── rss.xml.ts
│   ├── styles/
│   │   ├── buttons.css (button styles)
│   │   ├── global.css (global styles)
│   │   └── markdown-content.css (styling for markdown pages)
│   └── content.config.ts
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── netlify.toml
├── package.json
├── README.md
└── tsconfig.json
```

For robots like Google to see the correct sitemap, you will want to edit the `public/robots.txt` file to use your website domain.

## More Resources

- See my blog post on [recommended Astro web development setup](https://cosmicthemes.com/blog/astro-web-development-setup/).
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) page on the [Cosmic Themes Website](https://cosmicthemes.com/).
- For support, see the [support page](https://cosmicthemes.com/support/).
- [License details](https://cosmicthemes.com/license/)

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Want to learn more?

Feel free to check [the documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).
