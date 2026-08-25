'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useNavbar } from "./NavbarRoot";

interface NavbarLinkProps {
    href: string;
    text: string;
}

export function NavbarLink({ href, text }: NavbarLinkProps) {
    const pathname = usePathname()
    const { setIsOpen } = useNavbar()
    const isActive = pathname === href

    return (
        <Link 
            href={href} 
            data-active={isActive} 
            className="text-label-md text-on-surface-variant font-bold transition-all hover:text-white data-[active=true]:text-primary" 
            onClick={() => setIsOpen(false)}
        >
            {text}
        </Link>
    )
}