# NextJS UI Component Library Analysis

The goal of this repo is to compare and contrast how popular UI Libraries integrate with Next JS. Initially I want to see if these libraries work with NextJS 13+'s latest SSR which uses React Server Components.

## Ant Design

**Works with React Server Components? Kind of**

Ant is the most compatible of the non-tailwindcss based libraries out there, however it still has [a major snag](https://github.com/ant-design/ant-design-examples/blob/main/examples/with-nextjs-app-router-inline-style/src/app/with-sub-components/page.tsx#L1). Sub-components (example: `Select.Option`) require a `use client;` annotation. This seems to be pretty prevalent in the current version. Also worth noting that there's additional setup to make Ant work with Next.

## Chakra

**Works with React Server Components? No**

Chakra uses React Context in its current version, so every part of the app that uses Chakra [MUST be rendered on the client](https://github.com/ant-design/ant-design-examples/blob/main/examples/with-nextjs-app-router-inline-style/src/app/with-sub-components/page.tsx#L1). Chakra has published a NextJS module that makes routing easier at the very least.

## Evergreen

**Works with React Server Components? No**

Nice simple library, but no support for NextJS and very little mention of it in their docs & github.

## Fluent-ui

**Works with React Server Components? No**

https://www.tarascodes.com/nextjs-fluentui-setup < seems possible to use, but only maintains Layout SSR. So not terribly useful.

## Tailwind UI

**Works with React Server Components? Yes**

Tailwind UI is really just a collection of Tailwind CSS examples, so it's super compatible with NextJS. It was a breeze getting up & running, but ultimately leaves you with pretty verbose tailwindcss classes

## Shadcn/UI

**Works with React Server Components? Yes**

This is a weird one, but seems to be gaining popularity rapidly. [This is NOT a component library](https://ui.shadcn.com/docs). Like Tailwind UI, it's really just a collection of prestyled tailwind components, however it utilizes Radix UI to create an easy to theme & customize design system and has a CLI that enables simple NextJS integration. Their use of `class-variance-authority` also makes customizing these components super straightforward. However, there is a learning curve to the opinionated toolset Shadcn uses, and ultimately it's a set of UI components that you must maintain.

## NextUI

**Works with React Server Components? TBD**
