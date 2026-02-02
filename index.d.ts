export { defaultMenu, defaultSEO, defaultSiteConfig, defineMenu, defineSiteConfig, menu, siteConfig } from './config/index.js';
import { S as SidebarConfig } from './sidebar-DNdiCKBw.js';
export { D as DividerConfig, M as ManualConfig, f as MixedConfig, P as PathMatchConfig, e as ScanConfig, b as SidebarGroup, c as SidebarItem, d as defaultSidebarConfig, a as defineSidebarConfig, s as sidebarConfig } from './sidebar-DNdiCKBw.js';
import { F as FooterConfig, S as SocialLink, I as I18nConfig } from './i18n-DYYPTq4o.js';
export { m as FooterLink, o as I18nRoutingConfig, L as Locale, n as LocaleConfig, U as UITranslations, j as builtInTranslations, c as defaultFooterConfig, g as defaultI18nConfig, d as defaultIcons, l as defaultLocales, a as defaultSocialLinks, e as defineFooterConfig, h as defineI18nConfig, b as defineSocialLinks, k as enTranslations, f as footerConfig, i as getUITranslations, s as socialLinks, z as zhCNTranslations } from './i18n-DYYPTq4o.js';
import { SiteConfig } from './types/index.js';
export { BlogPost, Category, NavigationItem, PostFrontmatter, SEOProps, SearchResult, Tag } from './types/index.js';
export { AstroBlogIntegrationOptions, default as astroBlog, default as astroBlogIntegration } from './integration.js';
export { AlternateLink, MergedLocaleConfig, filterPostsByLocale, formatDate, formatDateShort, getAlternateLinks, getContentPathPrefix, getLocaleByCode, getLocaleConfig, getLocaleFromPath, getLocalePrefix, getLocalizedPath, getTextDirection, isMultiLanguageEnabled, isRTL, removeLocalePrefix, t } from './utils/i18n.js';
export { I18N_CONFIG_KEY, I18N_LOCALE_KEY, I18N_TRANSLATIONS_KEY, I18nContext, UseI18nReturn, createI18nContext, useI18n } from './utils/useI18n.js';
import 'astro';
import 'vue';

/**
 * Define blog configuration helper
 */
interface BlogConfig {
    site: SiteConfig;
    sidebar?: SidebarConfig;
    footer?: FooterConfig;
    social?: SocialLink[];
    i18n?: I18nConfig;
}
declare function defineBlogConfig(config: BlogConfig): BlogConfig;
/**
 * Get Astro config with jet-w.astro-blog integrations
 */
declare function getAstroConfig(options?: {
    remarkPlugins?: any[];
    rehypePlugins?: any[];
}): {
    markdown: {
        remarkPlugins: any[];
        rehypePlugins: any[];
        shikiConfig: {
            theme: string;
            langs: never[];
            wrap: boolean;
        };
    };
};

export { type BlogConfig, FooterConfig, I18nConfig, SidebarConfig, SiteConfig, SocialLink, defineBlogConfig, getAstroConfig };
