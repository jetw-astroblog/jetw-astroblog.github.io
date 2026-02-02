interface BlogPost {
    slug: string;
    title: string;
    description: string;
    content: string;
    pubDate: Date;
    updatedDate?: Date;
    tags: string[];
    categories: string[];
    author?: string;
    image?: string;
    draft?: boolean;
    readingTime?: number;
}
interface PostFrontmatter {
    title: string;
    description: string;
    pubDate: string;
    updatedDate?: string;
    tags?: string[];
    categories?: string[];
    author?: string;
    image?: string;
    draft?: boolean;
}
interface Tag {
    name: string;
    count: number;
    slug: string;
}
interface Category {
    name: string;
    count: number;
    slug: string;
}
interface SearchResult {
    title: string;
    description: string;
    url: string;
    content: string;
    tags: string[];
    categories: string[];
}
interface NavigationItem {
    name: string;
    href: string;
    icon?: string;
    children?: NavigationItem[];
}
interface SiteConfig {
    title: string;
    description: string;
    author: string;
    email?: string;
    avatar?: string;
    social?: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
    menu: NavigationItem[];
}
interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
}

export type { BlogPost, Category, NavigationItem, PostFrontmatter, SEOProps, SearchResult, SiteConfig, Tag };
