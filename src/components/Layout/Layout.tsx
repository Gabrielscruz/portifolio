"use client";

import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  return (
    <main data-theme={theme} className="flex w-screen h-screen">
      <Sidebar />
      <section className="flex flex-col w-full h-full">
        <Navbar />
        <div className="overflow-y-auto scrollbar-thin ">
          {children}
        </div>
      </section>
    </main>
  );
}
