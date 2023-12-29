// app/providers.tsx
"use client";

// DANNY NOTE: MEH, THIS WON'T WORK: Next.js 13 introduced a new app/ directory / folder structure. By default it uses Server Components. However, Chakra UI only works in client-side components.
// Next.js 13 introduced a new app/ directory / folder structure. By default it uses Server Components. However, Chakra UI only works in client-side components.

import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
