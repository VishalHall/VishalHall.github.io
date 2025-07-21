import { JSX } from "react"

export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    author: string
    tags: string[]
    coverImage?: string
    readTime: string
    featured?: boolean
    component: () => JSX.Element
}