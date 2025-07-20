"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { LightModeIcon, DarkModeIcon } from "./icons";

export default function ThemeButton(props: { iconSize: number }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const theme = document.documentElement.getAttribute("data-theme");
        if (theme) {
            setTheme(theme);
        }
        setMounted(true);
    }, [setTheme]);

    if (!mounted) return null;

    return (
        <button
            onClick={() => {
                const nextTheme = theme === "dark" ? "light" : "dark";
                setTheme(nextTheme);
                document.documentElement.setAttribute("data-theme", nextTheme);
            }}
            className="hover-effect dark:text-white"
        >
            {theme === "dark" ? (
                <LightModeIcon iconSize={props.iconSize} />
            ) : (
                <DarkModeIcon iconSize={props.iconSize} />
            )}
        </button>
    );
}
