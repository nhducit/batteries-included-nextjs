# Batteries Included Next.js template

Base on https://github.com/zeit/next.js/blob/canary/examples/with-tailwindcss

## Features:

### Next.js

The powerful react framework for SSR application.

- Known issues:
  https://github.com/zeit/next.js/issues/5214#issuecomment-581021603

### Tailwinds

A utility-first CSS framework for rapidly building custom designs.

- Document:
  https://tailwindcss.com/
- Limitations:
  Dynamically generated class strings will be purged
  Purgecss takes a very straightforward approach to removing unused CSS. It simply searches an entire file for a string that matches a regular expression. As a result, class strings that are dynamically created in a template using string concatenation will be considered unused and removed from your stylesheet. Tailwind CSS addresses this problem in more detail in their documentation.

  https://github.com/zeit/next.js/tree/canary/examples/with-tailwindcss#limitations

- Control file size
  https://tailwindcss.com/docs/controlling-file-size

### Typescript

TypeScript brings you optional static type-checking along with the latest ECMAScript features.

- Document:
  https://typescriptlang.org
  https://basarat.gitbook.io/typescript/
- How to set up
  https://nextjs.org/docs/basic-features/typescript
- Enable all strict type checking options: `strict:true`
  https://www.typescriptlang.org/docs/handbook/compiler-options.html

Notes:
https://blog.asana.com/2020/01/typescript-quirks/

### Prettier

An opinionated code formatter

- Document: https://prettier.io/

### Yarn

Save exact dependency's version by default

- Document:
  https://github.com/yarnpkg/yarn/issues/3045

use `.yarnrc` file

```
save-prefix ""
```

or `yarn config set save-prefix`

### lint-staged

Run linters on git staged files

https://github.com/okonet/lint-staged

### Husky

Husky can prevent bad git commit, git push and more 🐶 woof!

- Document
  https://github.com/typicode/husky

### Eslint

### Organize Imports CLI

VS Code's 'Organize imports' executable from command line

- Document:
  https://github.com/thorn0/organize-imports-cli

### SVG Component

Use svg as React component
https://github.com/zeit/next.js/blob/canary/examples/svg-components

### Preact

Fast 3kB alternative to React with the same modern API.

- Document
  https://preactjs.com/

### React testing library

React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

- Document
  https://testing-library.com/docs/react-testing-library/intro

### Jest

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- Document
  https://jestjs.io/

### next-seo

Next SEO is a plug in that makes managing your SEO easier in Next.js projects.

### env files

### Sentry

Application Monitoring and Error Tracking Software

- Document
  https://sentry.io/

### Storybook for React

- Document
  https://storybook.js.org/docs/guides/guide-react/

### io-ts

Runtime type system for IO decoding/encoding

- Size
  fp-ts (io-ts depends on fp-ts):
  stat size: 90.02KB
  parsed size: 26.74KB
  gzip size: 36KB

io-ts:
TBD

Shared by all chunks:
before: 36.7KB
after: 70.2KB
delta = 70.2KB - 36.7KB = 33.5KB

- Document:
  https://transform.tools/json-to-io-ts/

### bs-json + gentype

Another way to type safe decode json to typescript type.
bs-json is used to decode json to reasonml data structure then we use `gentype` to compile reasonml code to javascript and Typescript type bindings

Bundle size:
the bundle size is smaller than io-ts (50.6KB vs 56.5KB)

Workflow:

- define reasonml type
- define json decoder by using bs-json
- use gentype to compile `.re` files to `.js` + `.d.ts` files

Other ways to decode json with reasonml which I have not tried yet:

- https://github.com/jaredly/milk: looks interesting which have schema migration but I am not sure whether the complexity worth it
- https://github.com/mattjbray/ocaml-decoders: Elm-inspired decoders for Ocaml
- https://github.com/reasonml-labs/decco: looks promising, generate decoder/encoder from user-defined types
- https://github.com/ahrefs/atd: require write the type definition in a specific format and the library will generate decoders/encoders base on this file
  Example repo: https://github.com/ahrefs/atdgen-workshop-starter/
