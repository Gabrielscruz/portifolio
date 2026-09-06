import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Suspense } from "react";
import { getResolvedLocale } from "@/lib/locale";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Da Silva Cruz — Engenheiro de Software Sênior & Arquiteto",
  description: "Engenheiro de Software Sênior e Arquiteto de Sistemas com 6+ anos de experiência em React, Node.js, NestJS, TypeScript, AWS, Docker, Microsserviços e Princípios SOLID.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getResolvedLocale();
  const isPortuguese = locale === 'pt';

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Silkscreen:wght@400;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
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
              <LocaleSwitcher initialLocale={locale} />
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
            <div className="flex flex-wrap gap-6 md:gap-8 items-center">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/gabriel-da-silva-cruz-a033a23b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="mailto:gabriel-blz@outlook.com.br">Email</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="https://wa.me/5511958773054" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/Gabrielscruz" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
