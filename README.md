# NextJS UI Component Library Analysis

The goal of this repo is to compare and contrast how popular UI Libraries integrate with Next JS. The 3 libraries analyzed

## Summary of Findings

### Top Contenders

- NextUI - Best choice for speed, out-of-the-box styling, and low learning curve.
- Shadcn/UI - Best choice when you're ready to build your own in-house component library and dedicate some time to theming.

### Others Analyzed

- Mantine -
- Tailwind UI -
- Catalyst -
- Chakra -
- Ant Design -
- Evergreen -

## NextUI

**Deployed Example:**

**Description:** Similar to the familiar NPM installed component libraries in non-NextJS world. They handle the `use client` addition for applicable components in a way that doesn't require you add it to your components: https://nextui.org/docs/frameworks/nextjs#app-directory-setup.

### Pros

- Simple, familiar npm package install
- Only 2 dependencies
- Richest styling and animations out of the box
- Purpose built for Next.js, includes routing integration
- No additional config beyond what tailwind requires

### Cons

- Not as customizable as Shadcn (But there are thoughtful ways to override https://nextui.org/docs/customization/override-styles)
- Less component variety than Shadcn (36 unique components, no complex componentry like datepicker & complex datagrids)

## Shadcn/UI

https://mwskwong.com/blog/when-not-to-use-shadcn-ui

**Deployed Example:**

**Description:** Like Tailwind UI, it's really just a collection of prestyled tailwind components, however it utilizes Radix UI to create an easy to theme & customize design system and has a CLI that enables simple NextJS integration. Their use of `class-variance-authority` also makes customizing these components super straightforward. However, there is a learning curve to the opinionated toolset Shadcn uses, and ultimately it's a set of UI components that you must maintain.

### Pros

- Richest componentry of the 3 options (46 components, regular new releases. Includes complex components like datapickers)
- Feels like an npm module, but lives alongside application code
- Completely customizable. You own the code.
- Simple cli that handles bootstrapping the project & imports component code
- Massive traction

### Cons

- Learning curve required to modify the components themselves
- Adds many npm packages that need to be maintained (radix-ui, cva, etc)
- Base styling is super bland, feels like OpenAI
- Potentially overhyped by twitter. Paradigm is super different from traditional UI kits
