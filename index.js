import {
  defaultIcons,
  defaultSocialLinks,
  defineSocialLinks,
  socialLinks
} from "./chunk-PG43JO4O.js";
import "./chunk-FXPGR372.js";
import {
  filterPostsByLocale,
  formatDate,
  formatDateShort,
  getAlternateLinks,
  getContentPathPrefix,
  getLocaleByCode,
  getLocaleConfig,
  getLocaleFromPath,
  getLocalePrefix,
  getLocalizedPath,
  getTextDirection,
  isMultiLanguageEnabled,
  isRTL,
  removeLocalePrefix,
  t
} from "./chunk-CEZBWSMU.js";
import {
  defaultFooterConfig,
  defaultMenu,
  defaultSEO,
  defaultSidebarConfig,
  defaultSiteConfig,
  defineFooterConfig,
  defineMenu,
  defineSidebarConfig,
  defineSiteConfig,
  footerConfig,
  menu,
  sidebarConfig,
  siteConfig
} from "./chunk-DAH2XP4W.js";
import {
  I18N_CONFIG_KEY,
  I18N_LOCALE_KEY,
  I18N_TRANSLATIONS_KEY,
  createI18nContext,
  useI18n
} from "./chunk-PZICDGJG.js";
import {
  astroBlogIntegration,
  integration_default
} from "./chunk-6D3XRDNY.js";
import {
  builtInTranslations,
  defaultI18nConfig,
  defaultLocales,
  defineI18nConfig,
  enTranslations,
  getUITranslations,
  zhCNTranslations
} from "./chunk-A2E2VSAQ.js";

// src/index.ts
function defineBlogConfig(config) {
  return config;
}
function getAstroConfig(options) {
  return {
    markdown: {
      remarkPlugins: options?.remarkPlugins || [],
      rehypePlugins: options?.rehypePlugins || [],
      shikiConfig: {
        theme: "github-dark",
        langs: [],
        wrap: true
      }
    }
  };
}
export {
  I18N_CONFIG_KEY,
  I18N_LOCALE_KEY,
  I18N_TRANSLATIONS_KEY,
  integration_default as astroBlog,
  astroBlogIntegration,
  builtInTranslations,
  createI18nContext,
  defaultFooterConfig,
  defaultI18nConfig,
  defaultIcons,
  defaultLocales,
  defaultMenu,
  defaultSEO,
  defaultSidebarConfig,
  defaultSiteConfig,
  defaultSocialLinks,
  defineBlogConfig,
  defineFooterConfig,
  defineI18nConfig,
  defineMenu,
  defineSidebarConfig,
  defineSiteConfig,
  defineSocialLinks,
  enTranslations,
  filterPostsByLocale,
  footerConfig,
  formatDate,
  formatDateShort,
  getAlternateLinks,
  getAstroConfig,
  getContentPathPrefix,
  getLocaleByCode,
  getLocaleConfig,
  getLocaleFromPath,
  getLocalePrefix,
  getLocalizedPath,
  getTextDirection,
  getUITranslations,
  isMultiLanguageEnabled,
  isRTL,
  menu,
  removeLocalePrefix,
  sidebarConfig,
  siteConfig,
  socialLinks,
  t,
  useI18n,
  zhCNTranslations
};
