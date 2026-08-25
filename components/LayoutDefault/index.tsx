'use client'



export default function LayoutDefault({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body className="overflow-x-hidden selection:bg-primary/40 selection:text-white">
            {children}
        </body>
    )
}