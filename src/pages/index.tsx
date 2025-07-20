import { GitHubIcon, LinkedInIcon } from "../components/icons";
import Link from "next/link";

export default function Home() {
    return (
        <div className="px-10 lg:px-60">
            <div className="flex gap-5 flex-col justify-center items-center h-[100vh] mx-[5%] xl:mx-[10%]">
                <h1 className="text-7xl font-bold text-center">Vishal Hall</h1>
                <p className="text-xl my-0 text-center">
                    Welcome to my website, where I share some of my learnings
                    and experiences. Explore my developer blogs, projects, and
                    insights as I document my tech journey. Feel free to connect
                    with me on LinkedIn to talk about any of my work.
                </p>
                <div className="flex gap-10">
                    <Link
                        href="https://www.linkedin.com/in/vishal-hall/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </Link>
                    <Link
                        href="https://github.com/VishalHall"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <GitHubIcon />
                    </Link>
                </div>
            </div>
            <h2 className="text-4xl">Recent Blogs</h2>
        </div>
    );
}
