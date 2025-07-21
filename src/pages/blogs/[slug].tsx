import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../content";
import { GetStaticProps, GetStaticPaths } from "next";

export default function BlogPostComponent({ slug }: { slug: any }) {
    if (!slug) {
        return notFound;
    }
    const post = getPostBySlug(slug);
    if (!post) return notFound;
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
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log("static props is running");
    const slug = params?.slug as string;

    return {
        props: {
            slug: slug,
        },
    };
};
