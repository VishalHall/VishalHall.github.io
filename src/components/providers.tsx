"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <>{children}</>;

    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem={true}
            >
                {children}
            </ThemeProvider>
        </>
    );
}
