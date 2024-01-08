# NextJS UI Component Library Analysis

The goal of this repo is to compare and contrast how popular UI Libraries integrate with Next JS. The 3 libraries analyzed

## Tailwind UI

**Deployed Example:**

**Description:** Tailwind UI is a collection of Tailwind CSS templates, so it's less of a library and more of a copy/pastable set of snippets.

### Pros

- Fully customizable
- Choose how you implement them
- It's essentially just tailwindcss
- Wide range of templates
- Backed by the tailwindcss folks

### Cons

- Verbose
- These are not components, just code snippets

Stats:

### Sidenote

Catalyst by the Tailwind people is in development preview: https://catalyst.tailwindui.com/docs
It seems to take a similar approach to Shadcn, but requires fewer dependencies. It's too early phase to use just yet, though.

## Shadcn/UI

**Deployed Example:**

**Description:** Like Tailwind UI, it's really just a collection of prestyled tailwind components, however it utilizes Radix UI to create an easy to theme & customize design system and has a CLI that enables simple NextJS integration. Their use of `class-variance-authority` also makes customizing these components super straightforward. However, there is a learning curve to the opinionated toolset Shadcn uses, and ultimately it's a set of UI components that you must maintain.

### Pros

- Feels like an npm module, but lives alongside application code
- Most extensive componentry of the 3 options (46 components, with new releases)
- Completely customizable. You own the code.
- Simple cli that handles bootstrapping the project & imports component code

### Cons

- Learning curve required to modify the components themselves
- Adds many npm packages that need to be maintained (radix-ui, cva, etc)
- Base styling is super bland, feels like OpenAI

## NextUI

**Deployed Example:**

**Description:** Similar to the familiar NPM installed component libraries in non-NextJS world. They handle the `use client` addition for applicable components in a way that doesn't require you add it to your components: https://nextui.org/docs/frameworks/nextjs#app-directory-setup.

### Pros

- Simple, familiar npm package install
- Only 2 dependencies
- Richest styling out of the box

### Cons

- Not as customizable (But there are thoughtful ways to override https://nextui.org/docs/customization/override-styles)
- Less component variety than Shadcn (36 unique components)
