import { BlogPost } from '@/types';

// Import all your post components
import KokoroTTS from './kokoro-tts';

export const posts: BlogPost[] = [
    {
        slug: 'my-first-post',
        title: 'My First Post',
        description: 'A detailed description of my first blog post',
        date: '2024-01-01',
        excerpt: 'This is my first blog post...',
        author: 'Your Name',
        tags: ['react', 'nextjs'],
        readTime: '2 min read',
        component: KokoroTTS
    },
];