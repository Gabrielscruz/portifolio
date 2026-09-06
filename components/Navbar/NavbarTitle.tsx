import Link from "next/link";

interface NavbarTitleProps {
    children: string;
}
export function NavbarTitle({ children }: NavbarTitleProps) {
    return (
        <Link href="/" className="flex items-center gap-2.5 group">
            <span className="pixel-soul" />
            <div className="flex items-center gap-2">
                <h1 className="font-pixel text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-teal-300 transition-colors">
                    {children}
                </h1>
                <span className="hidden sm:inline-block font-pixel text-[8px] px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/40 text-teal-300">
                    LV 99
                </span>
            </div>
        </Link>
    )
}
