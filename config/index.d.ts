import { SiteConfig, NavigationItem } from '../types/index.js';
export { D as DividerConfig, M as ManualConfig, f as MixedConfig, P as PathMatchConfig, e as ScanConfig, S as SidebarConfig, b as SidebarGroup, c as SidebarItem, d as defaultSidebarConfig, a as defineSidebarConfig, s as sidebarConfig } from '../sidebar-DNdiCKBw.js';
export { F as FooterConfig, m as FooterLink, I as I18nConfig, o as I18nRoutingConfig, L as Locale, n as LocaleConfig, S as SocialLink, U as UITranslations, j as builtInTranslations, c as defaultFooterConfig, g as defaultI18nConfig, d as defaultIcons, l as defaultLocales, a as defaultSocialLinks, e as defineFooterConfig, h as defineI18nConfig, b as defineSocialLinks, k as enTranslations, f as footerConfig, i as getUITranslations, s as socialLinks, z as zhCNTranslations } from '../i18n-DYYPTq4o.js';

/**
 * Default site configuration
 * Users should override this in their own config
 */
declare const siteConfig: SiteConfig;
declare const defaultSEO: {
    title: string;
    description: string;
    image: string;
    type: "website";
};
/**
 * Create site config with user overrides
 */
declare function defineSiteConfig(config: Partial<SiteConfig>): SiteConfig;
declare const defaultSiteConfig: SiteConfig;

/**
 * Default menu configuration
 */
declare const menu: NavigationItem[];
/**
 * Define custom menu items
 */
declare function defineMenu(items: NavigationItem[]): NavigationItem[];
declare const defaultMenu: NavigationItem[];

export { defaultMenu, defaultSEO, defaultSiteConfig, defineMenu, defineSiteConfig, menu, siteConfig };
