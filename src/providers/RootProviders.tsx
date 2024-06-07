"use client";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const RootProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default RootProviders;
