'use client'

import { createContext, useContext, useState, useEffect } from "react";
import cn from "classnames";

interface NavbarContextProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error("useNavbar must be used within a Navbar.Root");
    }
    return context;
}

interface NavbarRootProps {
    children: React.ReactNode;
}
export function NavbarRoot({ children }: NavbarRootProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
            <nav className={cn(
                "glass-nav fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300",
                scrolled ? "py-4 h-20 shadow-2xl shadow-black/20" : "h-24"
            )}>
                <div className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-full">
                    {children}
                </div>
            </nav>
        </NavbarContext.Provider>
    )
}