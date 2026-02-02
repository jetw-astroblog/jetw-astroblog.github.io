import { SiteConfig, NavigationItem } from './types/index.js';
import { S as SidebarConfig } from './sidebar-DNdiCKBw.js';

/**
 * 社交链接配置
 */
interface SocialLink {
    type: string;
    url: string;
    label?: string;
    icon?: string;
}
declare const defaultIcons: Record<string, string>;
declare const socialLinks: SocialLink[];
declare const defaultSocialLinks: SocialLink[];
/**
 * Define social links
 */
declare function defineSocialLinks(links: SocialLink[]): SocialLink[];

/**
 * Footer 配置
 */

interface FooterLink {
    name: string;
    href: string;
}
interface FooterConfig {
    quickLinksTitle: string;
    quickLinks: FooterLink[];
    contactTitle: string;
    socialLinks: SocialLink[];
    showRss: boolean;
    rssUrl: string;
    copyright: string;
    poweredBy: {
        text: string;
        url: string;
    };
}
declare const footerConfig: FooterConfig;
/**
 * Define footer configuration
 */
declare function defineFooterConfig(config: Partial<FooterConfig>): FooterConfig;
declare const defaultFooterConfig: FooterConfig;

/**
 * i18n Configuration Module
 *
 * Provides multi-language support configuration for the blog.
 */

/**
 * Locale definition
 */
interface Locale {
    /** Language code (e.g., 'en', 'zh-CN', 'ja') */
    code: string;
    /** Display name (e.g., 'English', '中文') */
    name: string;
    /** HTML lang attribute value */
    htmlLang: string;
    /** Locale for Intl.DateTimeFormat */
    dateLocale: string;
    /** Text direction */
    direction?: 'ltr' | 'rtl';
}
/**
 * UI translation strings
 */
interface UITranslations {
    home: string;
    blog: string;
    about: string;
    search: string;
    posts: string;
    postList: string;
    noPostsFound: string;
    readMore: string;
    readingTime: string;
    minuteRead: string;
    tags: string;
    categories: string;
    allTags: string;
    allCategories: string;
    taggedWith: string;
    inCategory: string;
    archives: string;
    postsInArchive: string;
    recentPosts: string;
    popularTags: string;
    friendLinks: string;
    documentTree: string;
    quickLinks: string;
    contact: string;
    searchPlaceholder: string;
    searchResults: string;
    noResults: string;
    searching: string;
    searchArticles: string;
    searchInAllArticles: string;
    searchTips: string;
    basicSearch: string;
    advancedFeatures: string;
    searchTipKeyword: string;
    searchTipMixedLang: string;
    searchTipCaseInsensitive: string;
    searchTipRealtime: string;
    searchTipFilter: string;
    searchTipFuzzy: string;
    browsePosts: string;
    aboutMe: string;
    previousPage: string;
    nextPage: string;
    page: string;
    of: string;
    publishedOn: string;
    updatedOn: string;
    author: string;
    tableOfContents: string;
    readingProgress: string;
    relatedPosts: string;
    sharePost: string;
    previousPost: string;
    nextPost: string;
    backToTop: string;
    copyCode: string;
    copied: string;
    expand: string;
    collapse: string;
    expandCode: string;
    collapseCode: string;
    lines: string;
    viewMode: string;
    cardView: string;
    listView: string;
    sortBy: string;
    sortByDate: string;
    sortByTitle: string;
    filterByTag: string;
    filterByCategory: string;
    clearFilter: string;
    allPosts: string;
    draft: string;
    slides: string;
    slidesList: string;
    rssFeed: string;
    quickNavigation: string;
    timeline: string;
    viewAllTimeline: string;
    postsCount: string;
}
/**
 * Locale-specific configuration
 */
interface LocaleConfig {
    /** Site configuration overrides */
    site?: Partial<SiteConfig>;
    /** Navigation menu items */
    menu?: NavigationItem[];
    /** Footer configuration overrides */
    footer?: Partial<FooterConfig>;
    /** Sidebar configuration overrides */
    sidebar?: Partial<SidebarConfig>;
    /** UI translation overrides */
    ui?: Partial<UITranslations>;
    /** Content path prefix for filtering posts by locale (e.g., 'blog_docs_en' for English) */
    contentPathPrefix?: string;
}
/**
 * i18n routing configuration
 */
interface I18nRoutingConfig {
    /** Whether to add prefix for default locale (e.g., /zh-CN/posts vs /posts) */
    prefixDefaultLocale: boolean;
}
/**
 * Complete i18n configuration
 */
interface I18nConfig {
    /** Default locale code */
    defaultLocale: string;
    /** Available locales */
    locales: Locale[];
    /** Locale-specific configurations */
    localeConfigs: Record<string, LocaleConfig>;
    /** Routing configuration */
    routing: I18nRoutingConfig;
}
/**
 * Default Chinese (Simplified) UI translations
 */
declare const zhCNTranslations: UITranslations;
/**
 * Default English UI translations
 */
declare const enTranslations: UITranslations;
/**
 * Built-in translations for common languages
 */
declare const builtInTranslations: Record<string, UITranslations>;
/**
 * Default locales
 */
declare const defaultLocales: Locale[];
/**
 * Default i18n configuration (Chinese only, backward compatible)
 */
declare const defaultI18nConfig: I18nConfig;
/**
 * Helper function to define i18n configuration with type safety
 */
declare function defineI18nConfig(config: Partial<I18nConfig>): I18nConfig;
/**
 * Get UI translations for a specific locale
 * Falls back to built-in translations, then to English
 */
declare function getUITranslations(locale: string, config?: I18nConfig): UITranslations;

export { type FooterConfig as F, type I18nConfig as I, type Locale as L, type SocialLink as S, type UITranslations as U, defaultSocialLinks as a, defineSocialLinks as b, defaultFooterConfig as c, defaultIcons as d, defineFooterConfig as e, footerConfig as f, defaultI18nConfig as g, defineI18nConfig as h, getUITranslations as i, builtInTranslations as j, enTranslations as k, defaultLocales as l, type FooterLink as m, type LocaleConfig as n, type I18nRoutingConfig as o, socialLinks as s, zhCNTranslations as z };
