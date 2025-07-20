import "react";
import Link from "next/link";
import { BlogPost } from "@/types";

export function BlogPreview(blog: BlogPost) {
    console.log(blog);
    return (
        <div className="px-10 flex">
            <img
                src={`/assets/${blog.coverImage}`}
                alt="img"
                className="border"
                width={150}
                height={150}
            />
            <div className="px-10 w-full">
                <div className="flex flex-row justify-between pb-5">
                    <Link href={`/blogs/${blog.slug}`}>
                        <h3 className="font-bold">{blog.title}</h3>
                    </Link>
                    <p className="">
                        {new Date(blog.date).toLocaleDateString()}
                    </p>
                </div>
                <div>{blog.description}</div>
            </div>
        </div>
    );
}
