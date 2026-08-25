import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Suspense } from "react";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Silva — Software Architect",
  description: "Technology professional with 6+ years of experience in software architecture, data engineering, automation and cloud infrastructure.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value ?? 'en';
  const isPortuguese = localeCookie === 'pt';

  return (
    <html lang={localeCookie}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..900&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar.Root>
          <Navbar.Title>Gabriel Da Silva Cruz</Navbar.Title>
          <Navbar.Container>
            <Navbar.Link href={isPortuguese ? "/?lang=pt" : "/"} text={isPortuguese ? "Início" : "Home"} />
            <Navbar.Link href={isPortuguese ? "/experience?lang=pt" : "/experience"} text={isPortuguese ? "Experiência" : "Experience"} />
            <Navbar.Link href={isPortuguese ? "/projects?lang=pt" : "/projects"} text={isPortuguese ? "Projetos" : "Projects"} />
            <Navbar.Link href={isPortuguese ? "/blog?lang=pt" : "/blog"} text="Blog" />
            <Navbar.Link href={isPortuguese ? "/contact?lang=pt" : "/contact"} text={isPortuguese ? "Contato" : "Contact"} />
            <Suspense fallback={null}>
              <LocaleSwitcher />
            </Suspense>
          </Navbar.Container>
          <Navbar.Toggle />
        </Navbar.Root>
        <main className="relative">
          {children}
        </main>
        <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                © 2024 Gabriel Da Silva Cruz • São Paulo, SP
              </p>
            </div>
            <div className="flex gap-8">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">LinkedIn</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Email</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
