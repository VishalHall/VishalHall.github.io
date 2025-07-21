import { BlogPost } from '@/types';

import KokoroTTS from './kokoro-tts';

export const posts: BlogPost[] = [
    {
        slug: 'KokoroTTS',
        title: 'Introduction to Kokoro',
        description: 'My experiences getting into the world of TTS models and Kokoro.',
        date: '2025-07-21',
        author: 'Vishal Hall',
        tags: ['TTS', 'Kokoro'],
        readTime: '3 min read',
        component: KokoroTTS
    },
];