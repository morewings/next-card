[![Deploy to GitHub Pages](https://github.com/morewings/next-card/actions/workflows/pages.yml/badge.svg)](https://github.com/morewings/next-card/actions/workflows/pages.yml)

# Next Card

[![next card](./repo-logo.jpg)](#)

Jumpstart your online presence with this pre-built website template. Easily create a professional-looking business card or link-in-bio page to share everything you want your audience to know.

Demo: [morewings.github.io/next-card/](https://morewings.github.io/next-card/)

## Quick start

First step, click the 'Use this template' button. It will offer you to clone the repository to your account.

Second, change `./vite.config.ts` to contain your chosen repository name.

```js
import { defineConfig } from "vite";

// This is needed for GitHub pages or other non-index page deployments.
const baseUrl = "/next-card/";

export default defineConfig({
    //...
});
```

Go to `Settings > Pages` section and enable deployment via GitHub action.

![Settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/agsm36v13ebg1j13b5ee.png)

### Fill your info

Replace `./src/card-image.jpg` with your picture and update import at `./src/components/Header/Header.tsx` if needed.

Enter your data into `./src/config.ts`. Here are the available settings:

- `title`: Set your or company name.

- `bio`: Add a brief description to display below the name.

- `background`: Select a background style. There are 12 different styles available: fresh, strict, bold, gradient, rainbow, rastafari, sunset, elegant,
  selenium, evening, optimistic, mesh. See below.

- `gaId`: Set your Google Analytics ID to enable tracking. More later.

- `shareTitle`: Localize the sharing text.

```ts
export const config: Config = {
    title: "Patrick Bateman",
    bio: "Specialist in mergers and acquisitions",
    background: "gradient",
    gaId: "G-XXXXXXXXX",
    shareTitle: "Share link",
    // ...
};
```

### Add contact links

In the same file, `./src/config.ts` fill `headerLinks` array with your contact info links and set up your hero links at the `mainLinks` section of the config.
Each entry consists of `title`: the display name of the link; `id`: a unique identifier for the link; `url`: The URL the link points to; `icon`: an icon to be displayed with the link. You can use any icon from the [Phosphor icons collection](https://phosphoricons.com/).

```ts
import { EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export const config: Config = {
    // ...
    headerLinks: [
        {
            title: "Email",
            id: "email",
            url: "mailto:user@example.com",
            icon: EnvelopeIcon,
        },
    ],
    mainLinks: [
        {
            id: "github",
            title: "GitHub",
            url: "https://github.com/user-name",
            icon: GithubLogoIcon,
        },
    ],
};
```

### Attach vCard file

A vCard, also known as a VCF (Virtual Contact File), serves as a standardized file format for electronic business cards. This file can be attached to your link in bio, allowing visitors to easily import your contact info into their smartphones, Outlook, and other calendar applications without having to copy/paste. You can configure this at `./src/config.ts`. You can also enable `isOrganization` to display contact as a company.

```ts
export const config: Config = {
    // ...
    vCard: {
        firstName: "Patrick",
        lastName: "Bateman",
        organization: "Pierce & Pierce",
        title: "Vice President",
        birthday: new Date(1961, 9, 23),
        workPhone: "+1 212 555 6342",
        email: "patrick@psycho.us",
        // isOrganization: true,
    },
};
```

### Deploy website

Commit your changes, push to the main branch, and wait until `.github/workflows/pages.yml` is done. Your Next Card is available at `https://<user-name>.github.io/<repo-name>/`.

## Set up analytics

Next Card supports Google Analytics. You just need to set up your id in config.

There are two custom events to track: `link_click` and `contact_click`. Each event reports link title as a `value` parameter.

## Custom domain

You can [set up a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for your card.

Remember to change `basePath` value to `/` from the `./vite.config.js`.

## Font support

Next card uses [Rubik Variable font](https://fontsource.org/fonts/rubik). By default, it bundles with `latin` subset. You can enable additional subsets and tweak font parameters at `./src/font.css`.

```css
@font-face {
    font-display: fallback;
    font-family: "Rubik Variable";
    font-style: normal;
    font-weight: 300 900;
    src: url("@fontsource-variable/rubik/files/rubik-latin-wght-normal.woff2") format("woff2-variations");
    unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F,
        U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    font-family: "Rubik Variable", sans-serif;
}
```

## Meta-tags and social preview image

Card's meta-tags can be set at `vite.config.ts`, there's a local vite plugin `Inject meta tags` responsible for that functionality.

```typescript
const baseUrl = "/next-card/";

export default defineConfig({
    //...
    plugins: [
        //...
        {
            name: "Inject meta tags",
            apply: () => true,
            transformIndexHtml(_) {
                return [
                    // set card title
                    {
                        tag: "title",
                        children: config.title,
                        injectTo: "head",
                    },
                    // set social image.  You may need to change `viteStaticCopy` settings below.
                    {
                        tag: "meta",
                        attrs: {
                            name: "og:image",
                            content: `${baseUrl}assets/card-image.jpg`,
                        },
                        injectTo: "head",
                    },
                ];
            },
        },
    ],
    //...
});
```

## Available themes

<table>
    <tr>
        <th>Background example</th>
        <th>Preview link</th>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/fresh.png" alt="fresh"></td>
        <td><a href="https://morewings.github.io/next-card/?background=fresh">Fresh</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/strict.png" alt="strict"></td>
        <td><a href="https://morewings.github.io/next-card/?background=strict">Strict</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/bold.png" alt="bold"></td>
        <td><a href="https://morewings.github.io/next-card/?background=bold">bold</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/gradient.gif" alt="gradient"></td>
        <td><a href="https://morewings.github.io/next-card/?background=gradient">Gradient (Animated)</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/rainbow.gif" alt="rainbow"></td>
        <td><a href="https://morewings.github.io/next-card/?background=rainbow">Rainbow (Animated)</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/rastafari.png" alt="rastafari"></td>
        <td><a href="https://morewings.github.io/next-card/?background=rastafari">Rastafari</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/sunset.png" alt="sunset"></td>
        <td><a href="https://morewings.github.io/next-card/?background=sunset">Sunset</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/selenium.png" alt="selenium"></td>
        <td><a href="https://morewings.github.io/next-card/?background=selenium">Selenium</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/evening.png" alt="evening"></td>
        <td><a href="https://morewings.github.io/next-card/?background=evening">Evening</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/optimistic.png" alt="optimistic"></td>
        <td><a href="https://morewings.github.io/next-card/?background=optimistic">Optimistic</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/elegant.png" alt="elegant"></td>
        <td><a href="https://morewings.github.io/next-card/?background=elegant">Elegant</a></td>
    </tr>
    <tr>
        <td><img width="222" height="222" src="/theme-previews/mesh.gif" alt="mesh"></td>
        <td><a href="https://morewings.github.io/next-card/?background=mesh">Mesh</a></td>
    </tr>
</table>
