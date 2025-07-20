import { posts } from './posts';

export function getAllPosts() {
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug);
};