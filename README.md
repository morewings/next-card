[![Deploy to GitHub Pages](https://github.com/morewings/ts-global-state-next/actions/workflows/pages.yml/badge.svg)](https://github.com/morewings/ts-global-state-next/actions/workflows/pages.yml)
[![Post-merge tasks](https://github.com/morewings/ts-global-state-next/actions/workflows/merge-jobs.yml/badge.svg)](https://github.com/morewings/ts-global-state-next/actions/workflows/merge-jobs.yml)
[![Vercel](https://vercelbadge.vercel.app/api/morewings/ts-global-state-next)](https://vercel.com/dima-vyshniakovs-projects/ts-global-state-next)

# Global state capable Next template

[![TS Redux Next](./design/github.jpg)](#)

Global state Next template (GSN) is designed for Next.js-based web applications utilizing global state and remote data sources. It includes the App Router configuration of Next.js and tests for React components, reducers, and hooks.


Static html deployment: [Github pages](https://morewings.github.io/ts-global-state-next/)

Full-featured deployment: [Vercel](https://ts-global-state-next.vercel.app/)

## Features

- Written in **Typescript**.
- Powered by **Nextjs**. Configured to use **App router**.
- Global state support using **React.Context** with devtools support.
- Remote data sources support with **TanStack Query** with devtools support.
- **Generate** components and features from CLI.
- **pnpm** for fast package management.
- **Husky** for git hooks.
- **Eslint** and **stylelint**.
- **Jest** and **react-testing-library** for testing.
- Supports **CSS Modules** and **Styled components**.

## Quickstart

### Prerequisites

1. Install **Node** >= 20.x.
2. Install **pnpm**. E.g. `corepack prepare pnpm@latest --activate`.


### Installation

Manually clone repo or use `degit`.

```shell script
# With CSS Modules config
npx degit github:morewings/ts-global-state-next my-app
# With Styled Components config
npx degit github:morewings/ts-global-state-next#styled-components my-app
cd ./my-app
pnpm i
```

## Generate components and features

Template uses [generate-react-cli](https://www.npmjs.com/package/generate-react-cli). Templates are located at `./templates` directory.

```shell script
pnpm run generate:component Foo
```

Creates all necessary React component files in `./src/components/Foo`. 

```shell script
pnpm run generate:component-loading Foo
```

Creates React component files for component with dynamically loading content in `./src/components/Foo`. 

```shell script
pnpm run generate:feature-local Foo
```

Creates `React.Context` based feature with reducer, Context.Provider, hooks and selectors in `./src/features/Foo`. 

```shell script
pnpm run generate:feature-connected Foo
```

Creates `@tanstack/react-query` based feature with global storage, queries, hooks and selectors in `./src/features/Foo`.

```shell script
pnpm run generate:page Foo
```

Creates Next App router compatible page in `./app/Foo` directory.

## Enable Styled components

Refer to this [PR](https://github.com/morewings/ts-global-state-next/pull/40) and [styled-components](https://github.com/morewings/ts-global-state-next/tree/styled-components) branch for all necessary changes.

## Previous implementations

[cra-template-no-redux](https://github.com/morewings/cra-template-no-redux)

[react-template](https://github.com/morewings/react-template)

## Acknowledgements

Cover frame image by [GDJ](https://pixabay.com/users/gdj-1086657/).

