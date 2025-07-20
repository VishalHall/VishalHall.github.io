import Link from "next/link";
import { getAllPosts } from "../content";
import Image from "next/image";

export default function BlogPage() {
    const posts = getAllPosts();
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <div className="grid gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="border rounded-lg p-6">
                        {post?.coverImage && (
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                        )}
                        <h2 className="text-xl font-semibold mb-2">
                            <Link
                                href={`/blogs/${post.slug}`}
                                className="hover:text-blue-600"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>{post.date}</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                            {post.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-200 rounded text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
