"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeButton from "./theme-button";
import { CloseMenuIcon, MenuIcon } from "./icons";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div
            className={`dark:shadow-effect dark:bg-[#212223] px-10 py-7 md:py-10 md:px-20 lg:px-60`}
        >
            <div className="hidden justify-between md:flex text-2xl text-center">
                <Link href="/" className="font-bold hover-effect">
                    Vishal Hall
                </Link>
                <div className="flex items-center justify-center gap-10">
                    {/* <Link href="/about">About</Link> */}
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/projects">Projects</Link>
                    <div className="w-[2px] h-[80%] bg-current rounded-xl"></div>
                    <ThemeButton iconSize={30}></ThemeButton>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="flex flex-row justify-between text-3xl items-center md:hidden">
                {menuOpen ? (
                    <div className="fixed top-0 left-0 w-full flex flex-col p-10 z-10 bg-light_primary h-screen dark:bg-black dark:text-white bg-opacity-100">
                        <div className="flex justify-between w-full pb-[50%]">
                            <ThemeButton iconSize={48}></ThemeButton>
                            <button onClick={() => setMenuOpen(false)}>
                                <CloseMenuIcon />
                            </button>
                        </div>
                        <div className="text-3xl flex flex-col items-center justify-center gap-20 text-center mx-auto pb-[70%]">
                            <Link
                                href="/"
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                            >
                                About
                            </Link>
                            <Link
                                href="/blogs"
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                            >
                                Blogs
                            </Link>
                            <Link
                                href="/projects"
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                            >
                                Projects
                            </Link>
                        </div>
                        <div className="absolute left-0 px-[20%] w-full bottom-0 flex justify-between content-around text-2xl text-gray-400 pb-10">
                            <Link
                                href="https://www.linkedin.com/in/vishal-hall/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://github.com/VishalHall"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="hover-effect">Vishal Hall</div>
                        <button onClick={() => setMenuOpen(true)}>
                            <MenuIcon />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
