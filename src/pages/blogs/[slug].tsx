import { getPostBySlug } from "../content";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const PostComponent = post.component;

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                </div>
                {post.coverImage && (
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-64 object-cover mt-6 rounded-lg"
                    />
                )}
            </header>

            <div className="prose max-w-none">
                <PostComponent />
            </div>

            <footer className="mt-8">
                <div className="flex gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </footer>
        </article>
    );
}

export async function generateStaticParams() {
    const { getAllPosts } = await import("../content");
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}
