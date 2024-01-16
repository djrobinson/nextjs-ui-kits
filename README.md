# NextJS UI Component Library Analysis

The goal of this repo is to compare and contrast how popular UI Libraries integrate with Next.js.

## Summary of Findings

### Top Contenders

Choose the following library if...

- [NextUI](https://nextui.org/) - you like their out-of-the-box styling, need a low learning curve, and like the feel of a traditional npm module UI kit.
- [Shadcn/UI](https://ui.shadcn.com/) - you want the widest variety of components with the most features, are hoping to develop an in-house component library long-term, and don't mind learning a few tools to customize and extend it.
- [TailwindUI](https://tailwindui.com/) - you are rapid prototyping and don't mind spending money. You want minimalist tooling, 0 learning curve, and want the widest variety of styled copy/paste code examples.

**Don't** choose the following library if...

- NextUI - you want to override many component styles and implement your own variants.
- Shadcn/UI - you don't want to learn any new tools and would prefer that your ui kit was an npm package.
- TailwindUI - you want a more batteries included/opinionated UI kit, might not be the best long-term solution.

## NextUI

**Description:** Thoroughly styled & animated UI kit purpose built for Nextjs using taiwindcss. It's an npm package so it's familiar if coming from MUI or similar component libraries.

- [Dependencies](https://github.com/djrobinson/nextjs-ui-kits/blob/master/next-ui/package.json)
- Config
  - Setup Config: [Step 1](https://github.com/djrobinson/nextjs-ui-kits/blob/master/next-ui/app/providers.tsx) | [Step 2](https://github.com/djrobinson/nextjs-ui-kits/blob/master/next-ui/app/layout.tsx)
  - [Theme Config](https://github.com/djrobinson/nextjs-ui-kits/blob/master/next-ui/tailwind.config.ts)
- [Example Usage](https://github.com/djrobinson/nextjs-ui-kits/blob/master/next-ui/components/CardDemo.tsx)
- [Example Customization](https://github.com/djrobinson/nextjs-ui-kits/commit/623cdce1a4b0649bb7404eca4ff832f1b8dd3ca5)


### Pros

- Simple, familiar npm package install
- Richest styling and animations out of the box
- Purpose built for Next.js, includes routing integration (Link component)
- Can update new releases via `npm update` (not true for Shadcn or Tailwind UI)
- Only 2 dependencies

### Cons

- Not as customizable as Shadcn. Two different methods to override styles and they're not straighforward
  - Customizing component styles by adding a new variant is clunky and requires [knowledge of source code](https://nextui.org/docs/customization/custom-variants#extend-the-original-component-variants)
  - You have to learn [tailwind-variants](https://www.tailwind-variants.org/) to use & customize (I find Shadcn's use of class-variance-authority more intuitive)
- Less component variety than Shadcn (36 unique components, no complex componentry like datepicker & complex datagrids)

## Shadcn/UI

**Description:** This is not a component library as much as it is super clean boilerplate code for you to build your own component library. It is not an npm package, but instead uses a CLI tool to copy the boilerplate into your code. It utilizes Radix UI to create an easy to theme & customize design system and has a CLI that enables simple NextJS integration. Their use of [`class-variance-authority`](https://cva.style/docs), [`clsx`](https://github.com/lukeed/clsx), and [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) give the components a good developer experience. The unique paradigm of the "disappearing UI kit" enables devs to serve themselves when changing the behavior of a component, without requiring weird wrapper components or submitting a PR to an open source project.


- [Dependencies](https://github.com/djrobinson/nextjs-ui-kits/blob/master/shadcn-ui/package.json)
- Config
  - Setup Config: [Step 1](https://github.com/djrobinson/nextjs-ui-kits/blob/master/shadcn-ui/components.json)
  - Theme Config: [File 1](https://github.com/djrobinson/nextjs-ui-kits/blob/master/shadcn-ui/tailwind.config.ts) | [File 2](https://github.com/djrobinson/nextjs-ui-kits/blob/master/shadcn-ui/app/globals.css)
- [Example Usage](https://github.com/djrobinson/nextjs-ui-kits/blob/master/shadcn-ui/components/CardDemo.tsx)
- [Example Customization](https://github.com/djrobinson/nextjs-ui-kits/commit/ce2105bfa0d709fed2afbf44ac70313a5d4f3d9e#diff-8d9fa6b59deadb28cfd2fbd8a6cdbb78abfa74983a28588e722b4827980030e7R41)

### Pros

- Richest component featureset of all tailwind-based options researched (46 components, regular new releases. Includes complex components like datapickers and complex data grids)
- CLI makes it feel like an npm module, but it lives alongside application code. It's a happy medium between TailwindUI & NextUI
- Completely customizable. You own the code.
- Simple cli that handles bootstrapping the project & imports component code
- Open source project has massive traction & is wildly popular
- Paradigm enables amazing self service

### Cons

- The code is a part of your codebase, so you have to maintain it and can't simply `npm update` Shadcn (rather you'd do this for the dependencies it pulls in)
- Learning curve required to modify the components themselves
- Adds many npm packages that need to be maintained (radix-ui, cva, etc)
- Base styling is super bland, feels like OpenAI
- Less copy/paste examples than the other 2
- I'm skeptical by how much hype it's gotten in 2023


## Tailwind UI

Description: Tailwind UI is a collection of Tailwind CSS templates, so it's less of a library and more of a copy/pastable set of snippets. It requires no new dependencies and has no developer CSS tooling like Shadcn & NextUI

- [Dependencies](https://github.com/djrobinson/nextjs-ui-kits/blob/master/tailwind-ui/package.json)
- [Config](https://github.com/djrobinson/nextjs-ui-kits/blob/master/tailwind-ui/tailwind.config.ts)
- [Example Usage](https://github.com/djrobinson/nextjs-ui-kits/blob/master/tailwind-ui/components/CardDemo.tsx)

### Pros

- Fully customizable
- You choose how you implement the component in your codebase
- Minimalistic. It's essentially just tailwindcss
- Widest range of templates & styling
- Includes full webpage templates, so great for throwaway rapid prototyping
- Backed by the tailwindcss folks

### Cons

- Verbose
- Not free ($799 for teams)
- These are not components, just code snippets. There's no form of auto-install or update, so you have to do all the work to integrate.
- Need to build additional tooling to enable variants
- Lack of opinions & tooling could lead to more disorganized code
  - Example: Tailwind UI's [Select component](https://tailwindui.com/components/application-ui/forms/select-menus) is just a single code chunk, where [Shadcn](https://ui.shadcn.com/docs/components/dropdown-menu) & [NextUI](https://nextui.org/docs/components/dropdown) break their dropdowns into subcomponents that improve customization.


### Others Analyzed (and why they didn't make the cut)

- [Mantine](https://mantine.dev/) - full featured development toolkit that includes prebuilt components and utility react hooks that speeds up development.
  - Loved this one, but its compound components [don't work with SSR](https://mantine.dev/guides/next/#compound-components-in-server-components) and it's not tailwindcss based so it has it's own theming approach, so it barely misses the cut
- [Radix UI](https://www.radix-ui.com/) - Set of low level component library primitives and theming that enable teams to build their own component libraries. Has easy tailwindcss integration
  - Shadcn/UI uses radix primitives under the hood and is significantly more feature rich. Unless there's something specific about Shadcn/UI you want to override, there's nothing that would make me choose Radix over Shadcn/UI 
- [Catalyst](https://tailwindcss.com/blog/introducing-catalyst) - Built by the Tailwind folks, similar design philosophy to Shadcn where it's a "dissappearing UI kit" that lives alongside your code and you edit directly.
  - Too early phase. First introduced in December 20, 2023 and not enough component variety to beat out Shadcn
- [Chakra](https://github.com/chakra-ui/chakra-ui/issues/7649#issuecomment-1571777824)
  - [Doesn't support](https://chakra-ui.com/getting-started/nextjs-app-guide#setup-provider) server components.
- [Ant Design](https://ant.design/)
  - App router [isn't compatible](https://ant.design/docs/react/use-with-next) with subcomponents
- [Evergreen](https://evergreen.segment.com/)
  - Doesn't support server components.
  