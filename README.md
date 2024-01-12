# NextJS UI Component Library Analysis

The goal of this repo is to compare and contrast how popular UI Libraries integrate with Next JS.

## Summary of Findings

### Top Contenders

- NextUI - Best choice for out-of-the-box styling and low learning curve and don't mind missing a few complex components and overriding some styles with tailwind classes.
- Shadcn/UI - Most feature-rich choice, ideal for building your own in-house component library and don't mind dedicating some styling time up front.

### Others Analyzed (and why they didn't make the cut)

- [Mantine](https://mantine.dev/) - full featured development toolkit that includes prebuilt components and utility react hooks that speeds up development.
  - Loved this one, but its compound components [don't work with SSR](https://mantine.dev/guides/next/#compound-components-in-server-components) and it's not tailwindcss based so it has it's own theming approach, so it barely misses the cut.
- [Tailwind UI](https://tailwindui.com/) - Tailwind UI is not as much a component library as it is a collection of copy/pastable tailwind templates.
  - Not a proper component library, would prefer more batteries included.
  - Not free
- [Catalyst](https://tailwindcss.com/blog/introducing-catalyst) - Built by the Tailwind folks, similar design philosophy to Shadcn where it's a "dissappearing UI kit" that lives alongside your code and you edit directly.
  - Too early phase. First introduced in December 20, 2023 and not enough component variety to beat out Shadcn
- [Chakra](https://github.com/chakra-ui/chakra-ui/issues/7649#issuecomment-1571777824)
  - [Doesn't support](https://chakra-ui.com/getting-started/nextjs-app-guide#setup-provider) server components.
- [Ant Design](https://ant.design/)
  - App router [isn't compatible](https://ant.design/docs/react/use-with-next) with subcomponents
- [Evergreen](https://evergreen.segment.com/)
  - Doesn't support server components.

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
