import { I as I18nConfig, L as Locale, F as FooterConfig, U as UITranslations } from '../i18n-DYYPTq4o.js';
export { n as LocaleConfig, j as builtInTranslations, g as defaultI18nConfig, h as defineI18nConfig, k as enTranslations, i as getUITranslations, z as zhCNTranslations } from '../i18n-DYYPTq4o.js';
import { SiteConfig, NavigationItem } from '../types/index.js';
import { S as SidebarConfig } from '../sidebar-DNdiCKBw.js';

/**
 * i18n Utility Functions
 *
 * Provides helper functions for multi-language support.
 */

/**
 * Merged locale configuration with all defaults applied
 */
interface MergedLocaleConfig {
    locale: Locale;
    site: SiteConfig;
    menu: NavigationItem[];
    footer: FooterConfig;
    sidebar: SidebarConfig;
    ui: UITranslations;
}
/**
 * Alternate link for SEO (hreflang)
 */
interface AlternateLink {
    locale: string;
    url: string;
    hreflang: string;
}
/**
 * Get current locale from URL pathname
 *
 * @example
 * getLocaleFromPath('/en/posts', config) // 'en'
 * getLocaleFromPath('/posts', config) // 'zh-CN' (default)
 * getLocaleFromPath('/zh-CN/about', config) // 'zh-CN'
 */
declare function getLocaleFromPath(pathname: string, config?: I18nConfig): string;
/**
 * Get locale data by code
 */
declare function getLocaleByCode(code: string, config?: I18nConfig): Locale | undefined;
/**
 * Remove locale prefix from pathname
 *
 * @example
 * removeLocalePrefix('/en/posts', config) // '/posts'
 * removeLocalePrefix('/posts', config) // '/posts'
 */
declare function removeLocalePrefix(pathname: string, config?: I18nConfig): string;
/**
 * Get localized path for a given locale
 *
 * @example
 * getLocalizedPath('/posts', 'en', config) // '/en/posts'
 * getLocalizedPath('/en/posts', 'zh-CN', config) // '/posts' (if zh-CN is default)
 */
declare function getLocalizedPath(pathname: string, targetLocale: string, config?: I18nConfig): string;
/**
 * Get all alternate links for SEO (hreflang tags)
 *
 * @example
 * getAlternateLinks('/posts', 'https://example.com', config)
 * // Returns links for all locales
 */
declare function getAlternateLinks(pathname: string, baseUrl: string, config?: I18nConfig): AlternateLink[];
/**
 * Get merged configuration for a specific locale
 * Combines default config with locale-specific overrides
 */
declare function getLocaleConfig(locale: string, config?: I18nConfig): MergedLocaleConfig;
/**
 * Translation function - get a UI translation string
 *
 * @example
 * t('readMore', 'en') // 'Read more'
 * t('readMore', 'zh-CN') // '阅读更多'
 */
declare function t(key: keyof UITranslations, locale: string, config?: I18nConfig): string;
/**
 * Format date according to locale
 *
 * @example
 * formatDate(new Date(), 'en') // 'January 1, 2024'
 * formatDate(new Date(), 'zh-CN') // '2024年1月1日'
 */
declare function formatDate(date: Date | string, locale: string, options?: Intl.DateTimeFormatOptions): string;
/**
 * Format date in short format
 *
 * @example
 * formatDateShort(new Date(), 'en') // '1/1/2024'
 * formatDateShort(new Date(), 'zh-CN') // '2024/1/1'
 */
declare function formatDateShort(date: Date | string, locale: string): string;
/**
 * Check if a locale is RTL (right-to-left)
 */
declare function isRTL(locale: string, config?: I18nConfig): boolean;
/**
 * Get the HTML dir attribute value
 */
declare function getTextDirection(locale: string, config?: I18nConfig): 'ltr' | 'rtl';
/**
 * Check if multi-language is enabled (more than one locale)
 */
declare function isMultiLanguageEnabled(config?: I18nConfig): boolean;
/**
 * Get prefix for a locale in routes
 * Returns empty string for default locale if prefixDefaultLocale is false
 * If base is provided, it will be prepended to the locale prefix
 *
 * @example
 * // Without base
 * getLocalePrefix('en', config) // '' (for default locale)
 * getLocalePrefix('zh-CN', config) // '/zh-CN'
 *
 * // With base '/my-blog'
 * getLocalePrefix('en', config, '/my-blog') // '/my-blog'
 * getLocalePrefix('zh-CN', config, '/my-blog') // '/my-blog/zh-CN'
 */
declare function getLocalePrefix(locale: string, config?: I18nConfig, base?: string): string;
/**
 * Get content path prefix for a specific locale
 * Returns the contentPathPrefix from locale config, or undefined if not set
 */
declare function getContentPathPrefix(locale: string, config?: I18nConfig): string | undefined;
/**
 * Filter posts by locale based on contentPathPrefix
 * If contentPathPrefix is set, only return posts that start with that prefix
 * If not set, return all posts (backward compatible)
 *
 * @example
 * // If en locale has contentPathPrefix: 'blog_docs_en'
 * filterPostsByLocale(posts, 'en', config)
 * // Returns only posts with id starting with 'blog_docs_en/'
 */
declare function filterPostsByLocale<T extends {
    id: string;
}>(posts: T[], locale: string, config?: I18nConfig): T[];
/**
 * Add base URL prefix to a path
 * This is used when the site is deployed to a subdirectory (e.g., /jet-w.astro-blog/)
 *
 * @example
 * // If BASE_URL is '/jet-w.astro-blog'
 * withBase('/posts') // '/jet-w.astro-blog/posts'
 * withBase('/') // '/jet-w.astro-blog/'
 *
 * // If BASE_URL is '/'
 * withBase('/posts') // '/posts'
 */
declare function withBase(path: string, base?: string): string;
/**
 * Remove base URL prefix from a path
 * Useful for getting the actual path without base prefix
 *
 * @example
 * // If BASE_URL is '/jet-w.astro-blog'
 * removeBase('/jet-w.astro-blog/posts', '/jet-w.astro-blog') // '/posts'
 */
declare function removeBase(path: string, base?: string): string;

export { type AlternateLink, I18nConfig, Locale, type MergedLocaleConfig, UITranslations, filterPostsByLocale, formatDate, formatDateShort, getAlternateLinks, getContentPathPrefix, getLocaleByCode, getLocaleConfig, getLocaleFromPath, getLocalePrefix, getLocalizedPath, getTextDirection, isMultiLanguageEnabled, isRTL, removeBase, removeLocalePrefix, t, withBase };
