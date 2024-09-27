<div align="center">
 <h1>Shopify App Template for Node + Typescript + React</h1>
  <p>This is a template for building a <a href='https://shopify.dev/docs/apps/getting-started'>Shopify App</a> using Node, React, TanStack Query, Typescript, Knex, and Objective. It contains the basics for building a Shopify app.</p>
  <div>
    <img src="https://img.shields.io/badge/-shopify-white?style=for-the-badge&logoColor=white&logo=shopify&color=7AB55C" alt="shopify" />
    <img src="https://img.shields.io/badge/knex%20js-white?style=for-the-badge&logoColor=white&logo=knex.js&color=D26B38" alt="knex-js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178c6" alt="typescript" />
    <img src="https://img.shields.io/badge/-PRETTIER-black?style=for-the-badge&logoColor=white&logo=prettier&color=f8bc45" alt="prettier" />
    <br/>
    <img src="https://img.shields.io/badge/-VITE-black?style=for-the-badge&logoColor=white&logo=vite&color=747bff" alt="vite" />
    <img src="https://img.shields.io/badge/-REACT_JS-black?style=for-the-badge&logoColor=white&logo=react&color=58c4dc" alt="react.js" />
    <img src="https://img.shields.io/badge/-REACT_ROUTER_DOM-black?style=for-the-badge&logoColor=white&logo=reactrouter&color=f44250" alt="react-router-dom" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
<br/>

**Build Shopify app with this boilerplate. Join us!**

<hr/>
</div>

## <a name="table">📋 Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)

## <a name="introduction">🤖 Introduction</a>

<p>This boilerplate is crafted for building robust Shopify apps using a modern tech stack that includes Node.js, React, TanStack Query, TypeScript, Knex, and Objective. It’s designed to streamline the development process, enabling developers to efficiently create feature-rich applications tailored for the Shopify ecosystem.

This boilerplate is designed to empower developers to showcase their skills while creating impactful Shopify apps in a real-time environment.

If you need assistance or encounter any issues, feel free to reach out via email.</p>

<a href="mailto:muneebmughal342@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-Contact-black?style=for-the-badge&logoColor=white&logo=gmail&color=f67373" alt="mail" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

This template combines a number of third party open-source tools:

- [Express](https://expressjs.com/) builds the backend.
- [Knex](https://expressjs.com/) SQL query builder.
- [Objective js](https://expressjs.com/) For application structure.
- [Vite](https://vitejs.dev/) builds the [React](https://reactjs.org/) frontend.
- [React Router](https://reactrouter.com/) is used for routing. We wrap this with file-based routing.
- [TanStack Query](https://tanstack.com/) queries the Admin API.
- [`i18next`](https://www.i18next.com/) and related libraries are used to internationalize the frontend.
  - [`react-i18next`](https://react.i18next.com/) is used for React-specific i18n functionality.
  - [`i18next-resources-to-backend`](https://github.com/i18next/i18next-resources-to-backend) is used to dynamically load app translations.
  - [`@formatjs/intl-localematcher`](https://formatjs.io/docs/polyfills/intl-localematcher/) is used to match the user locale with supported app locales.
  - [`@formatjs/intl-locale`](https://formatjs.io/docs/polyfills/intl-locale) is used as a polyfill for [`Intl.Locale`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) if necessary.
  - [`@formatjs/intl-pluralrules`](https://formatjs.io/docs/polyfills/intl-pluralrules) is used as a polyfill for [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) if necessary.

The following Shopify tools complement these third-party tools to ease app development:

- [Shopify API library](https://github.com/Shopify/shopify-node-api) adds OAuth to the Express backend. This lets users install the app and grant scope permissions.
- [App Bridge React](https://shopify.dev/docs/apps/tools/app-bridge/getting-started/using-react) adds authentication to API requests in the frontend and renders components outside of the App’s iFrame.
- [Polaris React](https://polaris.shopify.com/) is a powerful design system and component library that helps developers build high quality, consistent experiences for Shopify merchants.
- [Custom hooks](https://github.com/Shopify/shopify-frontend-template-react/tree/main/hooks) make authenticated requests to the Admin API.
- [File-based routing](https://github.com/Shopify/shopify-frontend-template-react/blob/main/Routes.jsx) makes creating new pages easier.
- [`@shopify/i18next-shopify`](https://github.com/Shopify/i18next-shopify) is a plugin for [`i18next`](https://www.i18next.com/) that allows translation files to follow the same JSON schema used by Shopify [app extensions](https://shopify.dev/docs/apps/checkout/best-practices/localizing-ui-extensions#how-it-works) and [themes](https://shopify.dev/docs/themes/architecture/locales/storefront-locale-files#usage).

## <a name="features">🔋 Features</a>

## Backend

- **Node.js**: Leverage the power of server-side JavaScript to handle backend processes seamlessly.

- **Node.js**: Leverage the power of server-side JavaScript to handle backend processes seamlessly.

- **TypeScript**: Enhance code quality and maintainability with static typing, catching errors during development.

- **Knex**: Utilize a powerful SQL query builder for flexible database interactions, making data management straightforward.

- **Objective**: Structure your application around best practices, ensuring a clean and scalable architecture.

## Frontend

- **Theme**: Custom theme with contexts to manage and switch between light and dark modes.

- **TanStack Query**: Simplify data fetching and state management, allowing for efficient and intuitive API interactions.

- **Routing**

  - **File-based Routing**: Handles file-based routing.
  - **Dynamic Routes**: Supports dynamic routing.
  - **Layouts**: Manages multiple layouts.
  - **404 Pages**: Configures custom 404 pages.

- **Storage**: Includes an instance for managing local storage.

- **Marquee**: Integrated marquee slider for scrolling text or images.

- **Code Architecture**: Emphasizes modularity and reusability of code.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**: Make sure you have the following installed on your machine

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/en) or [nvm](https://github.com/nvm-sh/nvm)

- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) or [npm](https://www.npmjs.com/) (Node Package Manager)

**Initalize the project using Shopify cli command**

```bash

yarn create @shopify/app --template=node

```

Remove the old frontend and create the new react project:

```bash

cd web && rm -rd frontend && yarn create vite frontend --template react-ts cd frontend

```

## **Installation for frontend**

Install the require dependencies:

```bash

yarn add @formatjs/intl-locale @formatjs/intl-localematcher @formatjs/intl-pluralrules @shopify/app-bridge @shopify/app-bridge-react @shopify/i18next-shopify @shopify/polaris @tanstack/react-query @tanstack/react-query-devtools i18next i18next-resources-to-backend lucide-react react-i18next react-router-dom

```

Install the require dev dependencies:

```bash

yarn add @eslint/js @shopify/stylelint-polaris @tailwindcss/typography @tanstack/eslint-plugin-query @trivago/prettier-plugin-sort-imports @types/eslint__js @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals history jsdom postcss prettier-plugin-tailwindcss stylelint tailwind-merge tailwindcss tailwindcss-animate typescript typescript-eslint vi-fetch tailwind-merge --dev

```

Initialize tailwindcss files using npx:

```bash
npx tailwindcss init -p --ts
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

## Root Files

<details>
<summary><code>vite.config.ts</code></summary>

<br/>

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "@src/",
          replacement: path.resolve(process.cwd(), "src") + "/",
        },
      ],
    },
  };
});
```

</details>

<details>
<summary><code>.gitignore</code></summary>

<br/>

```json
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
/dist

# misc
.DS_Store
*.pem


# debug
logs
*.log
yarn.lock
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
lerna-debug.log*
tsconfig.tsbuildinfo
# local env files
.env*.local
.env

.vscode
.contentlayer

# Json
package-lock.json
!.vscode/extensions.json
```

</details>

<details>
<summary><code>tsconfig.app.json</code></summary>

<br/>

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": "./src",
    "paths": {
      "@src/*": ["*"]
    }
  },
  "include": [
    "src/**/*.json",
    "vite.config.ts",
    "src/**/*.jpeg",
    "src/**/*.png",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.d.ts",
    "./src/types/global.d.ts",
    "src/types/vite-env.d.ts",
    "src/routes/routes.ts"
  ]
}
```

</details>

<details>
<summary><code>.prettierignore</code></summary>

<br/>

```json
dist
node_modules
build
.contentlayer
```

</details>

<details>
<summary><code>eslint.config.js</code></summary>

<br/>

```javascript
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "prettier",
      "eslint:recommended",
      "plugin:react-hooks/recommended",
      "plugin:tailwindcss/recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    files: ["./src**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ["cn"],
        config: "tailwind.config.js",
      },
    },
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        parser: "@typescript-eslint/parser",
      },
    ],
  }
);
```

</details>
<details>
<summary><code>prettier.config.js</code></summary>

<br/>

**Reload the vs code after creating this file or updating this file**

```shortcut
Press ctrl+shift+p or command+shift+p
```

Then select **`reload window`**

```javascript
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["clsx", "tw", "cn"],
  tailwindConfig: "./tailwind.config.ts",
  tailwindAttributes: ["className", "classNames"],
  importOrderSortSpecifiers: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "^types$",
    "^@src/config/(.*)$",
    "^@src/theme/(.*)$",
    "^@src/constants/(.*)$",
    "^@src/contexts/(.*)$",
    "^@src/hooks",
    "^@src/hooks/(.*)$",
    "^@src/routes/(.*)$",
    "^@src/layouts/(.*)$",
    "^@src/pages/(.*)$",
    "^@src/components/(.*)$",
    "^@src/components/ui/(.*)$",
    "^@src/components/pages/(.*)$",
    "^@src/utils/(.*)$",
    "^@src/types/(.*)$",
    "^@src/assets/images/(.*)$",
    "^@src/assets/styles/(.*)$",
    "^[./]",
  ],
};

export default config;
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

<br/>

**`Update this file after create the theme`**

```typescript
import tailwindcssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import {
  animation,
  boxShadow,
  colors,
  fontFamily,
  keyframes,
} from "./src/theme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      animation: animation,
      fontFamily: fontFamily,
      keyframes: keyframes,
      boxShadow: boxShadow,
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography()],
} satisfies Config;
```

</details>

<details>
<summary><code>package.json</code></summary>

<br/>

```json
    "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "prettier:fix": "npx prettier --write src/."
  },
  "engines": {
    "node": ">=18.20.4"
  },
```

</details>

## Global Types

<details>
<summary><code>global.d.ts</code></summary>
<br/>
  
**`Make sure to move vite-env.d.ts file into ./src/types dir`**
<br/>

`Dir and file` ./src/types/global.d.ts

```typescript
declare type PageModule = {
  default: React.ComponentType;
};

declare type Pages = {
  [key: string]: PageModule;
};

declare interface Route {
  element: ComponentType;
  layout?: string;
  path: string;
  children?: Route[];
}

declare interface GroupRoute {
  path?: string;
  children?: Route[];
  element: ComponentType;
}

declare interface GroupLayoutRoute {
  children: GroupRoute[];
  element: ComponentType | null;
}

declare interface Children {
  children: ReactNode;
}
declare interface ChildrenWithElement extends Children {
  as?: ElementType;
}

declare type Theme = "light" | "dark";

declare type InputChangeEvent = ChangeEvent<HTMLInputElement>;

declare type ErrorType = {
  name: string | null;
  state: boolean;
  message: string | null;
};

declare type ToastProps = {
  message: string;
  type: "success" | "warning" | "error";
  state: boolean;
};
```

</details>

## Theme File

<details>
<summary><code>Global Css</code></summary>
<br/>

`Dir and file` ./src/assete/styles/global-colors.css
<br/>

```css
/* ------------------------ GLOBAL-VARIABLES-FOR-THEME ------------------------ */

:root {
  --background: 0, 0%, 100%;
  --background-variant-lighter: 0, 0%, 95%;
  --background-variant-light: 0, 0%, 90%;
  --background-variant-dark: 0, 0%, 85%;

  --foreground: 0, 0%, 0%;
  --foreground-variant-lighter: 0, 0%, 85%;
  --foreground-variant-light: 0, 0%, 50%;
  --foreground-variant-dark: 0, 0%, 30%;

  --primary: 224, 76%, 48%;
  --primary-variant-dark: 193, 100%, 22%;
  --primary-variant-light: 192, 100%, 31%;

  --secondary: 188.9, 148.3%, 26.6%;
  --secondary-variant-light: 188.9, 98.16%, 35.04%;
  --secondary-variant-dark: 188.9, 99.01%, 21.84%;

  --destructive: 0, 100%, 50%;

  --muted: 210, 40%, 96.1%;
  --muted-foreground: 215.4, 16.3%, 46.9%;

  --popover: 0, 0%, 0%, 30%;

  --info: 190, 90%, 50%;
  --success: 152, 69%, 31%;
  --warning: 45, 100%, 51%;
}
.dark {
  --background: 220, 11%, 11%;
  --background-variant-light: 220, 11%, 10%;
  --background-variant-lighter: 220, 11%, 8%;
  --background-variant-dark: 220, 11%, 7%;

  --foreground: 0, 0%, 100%;
  --foreground-variant-lighter: 0, 0%, 30%;
  --foreground-variant-light: 0, 0%, 50%;
  --foreground-variant-dark: 0, 0%, 85%;

  --primary: 224, 76%, 48%;
  --primary-variant-dark: 193, 100%, 22%;
  --primary-variant-light: 192, 100%, 31%;

  --secondary: 188.9, 148.3%, 26.6%;
  --secondary-variant-light: 188.9, 98.16%, 35.04%;
  --secondary-variant-dark: 188.9, 99.01%, 21.84%;

  --destructive: 0, 63%, 31%;

  --muted: 223, 47%, 11%;
  --muted-foreground: 215.4, 16.3%, 56.9%;

  --popover: 240, 3.8%, 46.1%, 10%;
}
```

</details>

<details>
<summary><code>Marquee Css</code></summary>
<br/>

`Dir and file` ./src/assete/styles/marquee.css
<br/>

```css
/* ------------------------ MARQUEE-SLIDER-STYLES ------------------------ */

@layer utilities {
  .marquee {
    @apply max-w-max overflow-hidden;
  }

  .marquee[data-direction="right"] {
    --_animation-direction: reverse;
  }

  .marquee[data-direction="left"] {
    --_animation-direction: forwards;
  }

  .marquee_inner {
    @apply flex flex-wrap gap-6 py-3;
  }

  .marquee[data-animated="true"] .marquee_inner {
    @apply w-max animate-marquee flex-nowrap;
  }

  .marquee[data-animated="true"] {
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }
}
```

</details>

<details>
<summary><code>Main Css</code></summary>
<br/>

`Dir and file` ./src/assete/styles/index.css
<br/>

```css
@import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

@import "./marquee.css";
@import "./global-colors.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ------------------------ GLOBAL-STYLES ------------------------ */

body {
  @apply bg-background font-body font-normal text-foreground antialiased transition-all duration-150 ease-out;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

</details>

<details>
<summary><code>Theme Context</code></summary>
<br/>

`Dir and file` ./src/contexts/themeContext/ThemeContext.tsx
<br/>

```typescript
import { createContext } from "react";

type ThemeContextType = {
  theme: Theme;
  themeToggler: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
```

</details>
<details>
<summary><code>Theme Provider</code></summary>
<br/>

`Dir and file` ./src/contexts/themeContext/ThemeProvider.tsx
<br/>

```typescript
import { ReactNode, useEffect, useState } from "react";

import { storage } from "@src/utils/storage";
import { CURRENT_THEME } from "@src/utils/storage/variables";
import { ThemeContext } from "@src/contexts/themeContext/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = storage.get(CURRENT_THEME) as "light" | "dark" | null;
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("light", "dark");
    body.classList.add(theme);
  }, [theme]);

  const themeToggler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    storage.set(CURRENT_THEME, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

</details>

<details>
<summary><code>Theme Context</code></summary>
<br/>

`Dir and file` ./src/contexts/themeContext/index.ts
<br/>

```typescript
export { ThemeContext } from "@src/contexts/themeContext/ThemeContext";
export { ThemeProvider } from "@src/contexts/themeContext/ThemeProvider";
```

</details>

<details>
<summary><code>Theme Hook</code></summary>
<br/>

`Dir and file` ./src/hooks/useTheme.tsx
<br/>

```typescript
import { useContext } from "react";
import { ThemeContext } from "@src/contexts/themeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
```

</details>

<details>
<summary><code>Theme Toggler</code></summary>
<br/>
*Note that im using a global button component here feel free to replace this with you own*
<br/>
`Dir and file` ./src/components/themeToggler/ThemeToggler.tsx
<br/>

```typescript
import { useTheme } from "@src/hooks";
import { Button, Icon } from "@src/components/ui";

export const ThemeToggler = () => {
  const { theme, themeToggler } = useTheme();

  return (
    <Button after shadow size="xs" onClick={themeToggler}>
      <Icon name={theme === "dark" ? "sun-medium" : "moon-star"} size={18} />
    </Button>
  );
};
```

</details>

## Routing Configrations

<details>
<summary><code>Utils functions for router</code></summary>
<br/>

`Dir and file` ./src/utils/router/normalizePath.ts
<br/>

```typescript
export const normalizePath = (path: string): string => {
  const normalizedPath = path
    .replace(/^\.\/pages/, "") // Remove the base folder
    .replace(/\.(t|j)sx?$/, "") // Remove the file extension
    .replace(/\/page$/, "") // Remove /page for routes
    // .replace(/\/layout$/, "") // Remove /layout for routes
    .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`) // Dynamic route
    .replace(/\[\[([.\w]+?)\]\]/g, (_match, param) => `:${param}*`) // Catch-all route
    .replace(/\/$/, ""); // Remove trailing slash

  if (normalizedPath === "") {
    return "/";
  }

  return normalizedPath;
};
```

</details>

<details>
<summary><code>Utils functions for router</code></summary>
<br/>

`Dir and file` ./src/utils/router/groupRoutes.ts
<br/>

```typescript
import { normalizePath } from "@src/utils/router";

export const groupRoutes = (pages: Pages): Route[] => {
  const routes: Route[] = [];

  Object.keys(pages).forEach((key) => {
    const path = normalizePath(key);
    const segments = path.split("/");
    let currentPath = "";

    segments.forEach((segment) => {
      if (segment.startsWith("(") && segment.endsWith(")")) {
        return;
      }
      currentPath += `/${segment}`;
    });
    if (!key.endsWith("layout.tsx") && pages[key].default) {
      routes.push({
        path: currentPath,
        element: pages[key].default,
        layout: segments[1],
      });
    }
  });

  return routes;
};
```

</details>

<details>
<summary><code>Utils functions for router</code></summary>
<br/>

`Dir and file` ./src/utils/router/nestedRoutes.ts
<br/>

```typescript
import { normalizePath } from "@src/utils/router";

export const nestedRoutes = (
  routes: Route[],
  pages: Pages
): GroupLayoutRoute => {
  const nestedRoutes: GroupLayoutRoute = { children: [], element: null };

  const addLayouts: GroupRoute[] = [];

  Object.keys(pages).forEach((key) => {
    const path = normalizePath(key);
    const segments = path.split("/")[1];
    if (key === `./pages/${segments}/layout.tsx`) {
      addLayouts.push({
        element: pages[`./pages/${segments}/layout.tsx`]?.default,
        children: routes.filter((route) => {
          return route.layout === segments;
        }),
      });
    }
    if (segments === "layout") {
      nestedRoutes.element = pages[key].default;
      nestedRoutes.children = addLayouts.length > 0 ? addLayouts : routes;
    }
  });

  if (!nestedRoutes.children.length) {
    nestedRoutes.children = routes;
  }

  return nestedRoutes;
};
```

</details>

<details>
<summary><code>Utils functions for router</code></summary>
<br/>

`Dir and file` ./src/utils/router/index.ts.ts
<br/>

```typescript
export * from "@src/utils/router/groupRoutes";
export * from "@src/utils/router/nestedRoute";
export * from "@src/utils/router/normalizePath";
```

</details>

<details>
<summary><code>Router hook</code></summary>
<br/>

`Dir and file` ./src/hooks/useRouter.tsx
<br/>

```typescript
import { groupRoutes, nestedRoutes } from "@src/utils/router";

export const useRouter = (pages: Pages): GroupLayoutRoute => {
  const routes = groupRoutes(pages);
  const nestedRoute = nestedRoutes(routes, pages);

  return nestedRoute;
};
```

</details>

<details>
<summary><code>hooks folder missing file</code></summary>
<br/>

`Dir and file` ./src/hooks/index.ts
<br/>

```typescript
export * from "@src/hooks/useRouter";
export * from "@src/hooks/useTheme";
```

</details>

<details>
<summary><code>Routes</code></summary>
<br/>

`Dir and file` ./src/router/router.ts
<br/>

```typescript
import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { NotFound } from "@src/components/pages/notFound/NotFound";

export const router = (routes: GroupLayoutRoute) => {
  const buildRoutes = (routes: GroupRoute[]): RouteObject[] => {
    if (!routes) return [];

    return routes.map((route: GroupRoute) => {
      const { path, element, children } = route;

      return {
        path,
        element: React.createElement(element),
        children: children ? buildRoutes(children) : undefined,
      };
    });
  };

  const routesArray = routes ? buildRoutes(routes.children) : [];

  const baseLayout: RouteObject[] = [
    {
      element: React.createElement(routes.element),
      children: [
        ...routesArray,
        { path: "*", element: React.createElement(NotFound) },
      ],
    },
  ];

  return createBrowserRouter(baseLayout);
};
```

</details>

<details>
<summary><code>Configure everything into App.tsx</code></summary>
<br/>

`Dir and file` ./src/App.tsx
<br/>

```typescript
import { router } from '@src/router/router'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@src/contexts/themeContext'
import { useRouter } from '@src/hooks'
import { Loader } from '@src/components/ui/loader/Loader'
import '@src/assets/styles/index.css'

export const App = () => {
  const pagesRaw = import.meta.glob('./pages/**/!(*.test.[jt]sx)*.([jt]sx)', {
    eager: true,
  })
  const pages: Pages = Object.fromEntries(
    Object.entries(pagesRaw).map(([key, module]) => [key, module as PageModule])
  )
  const routes = useRouter(pages)
  const routerInstance = router(routes)

  return (
    <ThemeProvider>
      <RouterProvider router={routerInstance} fallbackElement={<Loader />} />
    </ThemeProvider>
  )
}
```

</details>

## Storage Configrations

<details>
<summary><code>Utils functions for storage</code></summary>
<br/>

`Dir and file` ./src/utils/storage/storage.ts
<br/>

```typescript
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

export default class Storage {
  private storage: globalThis.Storage;
  private prefixKey?: string;

  constructor(prefixKey = "", storage = localStorage) {
    this.storage = storage;
    this.prefixKey = prefixKey;
  }

  private getKey(key: string) {
    return `${this.prefixKey}${key}`.toUpperCase();
  }

  getAuthorization(key: string) {
    return `Bearer ${this.get(key)}`;
  }

  isAuthenticated(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  set(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
    const stringData = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    });
    this.storage.setItem(this.getKey(key), stringData);
  }

  get(key: string, def: any = null) {
    const item = this.storage.getItem(this.getKey(key));
    if (item) {
      try {
        const data = JSON.parse(item);
        const { value, expire } = data;
        if (expire === null || expire >= Date.now()) {
          return value;
        }
        this.remove(key);
      } catch (e) {
        return def;
      }
    }
    return def;
  }

  remove(key: string) {
    this.storage.removeItem(this.getKey(key));
  }
}
export const storage = new Storage("");
```

</details>

<details>
<summary><code>Utils functions for storage</code></summary>
<br/>

`Dir and file` ./src/utils//storage/variables.ts
<br/>

```typescript
export const CURRENT_THEME = "CURRENT_THEME";
```

</details>

<details>
<summary><code>Utils functions for storage</code></summary>
<br/>

`Dir and file` ./src/utils//storage/index.ts.ts
<br/>

```typescript
export * from "@src/utils/storage/storage";
export * from "@src/utils/storage/variables";
```

</details>
