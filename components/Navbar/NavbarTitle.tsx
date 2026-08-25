interface NavbarTitleProps {
    children: string;
}
export function NavbarTitle({ children }: NavbarTitleProps) {
    return (
        <h1 className="font-display text-xl md:text-2xl font-extrabold tracking-tighter text-white">{children}</h1>
    )
}