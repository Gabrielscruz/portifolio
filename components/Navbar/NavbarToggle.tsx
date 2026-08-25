'use client'

import { useNavbar } from "./NavbarRoot";

export function NavbarToggle() {
    const { isOpen, setIsOpen } = useNavbar();

    return (
        <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-on-surface-variant hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="sr-only">Abrir menu principal</span>
            {/* Ícone de Hambúrguer (quando fechado) */}
            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            {/* Ícone de Fechar (X) (quando aberto) */}
            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    )
}