'use client'

import { useNavbar } from "./NavbarRoot";
import cn from 'classnames';

interface NavbarConteinerProps {
    children: React.ReactNode;
}

export function NavbarContainer({ children }: NavbarConteinerProps) {
    const { isOpen } = useNavbar();

    return (
        <div className={cn(
            // Estilos base para o menu móvel (sempre aplicado em telas pequenas)
            "absolute left-0 top-24 flex w-full flex-col items-center gap-10 border-b border-white/5 bg-background/80 p-10 backdrop-blur-xl",
            // Transições
            "transition-all duration-300 ease-in-out",
            // Estilos para Desktop (telas 'md' ou maiores)
            "md:relative md:top-auto md:w-auto md:flex-row md:border-none md:bg-transparent md:p-0 md:backdrop-blur-none",
            // Lógica de visibilidade para o menu móvel
            {
                // Aberto: Visível e na posição
                "opacity-100 translate-y-0": isOpen,
                // Fechado: Invisível, deslocado e sem interação
                "opacity-0 -translate-y-4 pointer-events-none": !isOpen,
                // Garante que em desktop esteja sempre visível e funcional
                "md:opacity-100! md:translate-y-0! md:pointer-events-auto!": true,
            }
        )}>
            {children}
        </div>
    )
}