import { ComponentProps } from "react";
import cn from 'classnames'
export function NavbarButton({ children, ...props }: ComponentProps<'button'>) {
    return (
        <button
            className={cn(
                "bg-primary text-on-primary px-7 py-2.5 rounded-full text-label-md hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20", props.className)
            }{...props}
        >
            {children}
        </button>
    )
}