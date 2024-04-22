"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { Layout } from "./Layout";

interface LayoutAppProps {
  children: React.ReactNode;
}

export function LayoutApp({ children }: LayoutAppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}
