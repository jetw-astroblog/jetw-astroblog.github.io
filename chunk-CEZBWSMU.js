import {
  defaultFooterConfig,
  defaultMenu,
  defaultSiteConfig,
  sidebarConfig
} from "./chunk-DAH2XP4W.js";
import {
  defaultI18nConfig,
  getUITranslations
} from "./chunk-A2E2VSAQ.js";

// src/utils/i18n.ts
function getLocaleFromPath(pathname, config = defaultI18nConfig) {
  const segments = pathname.replace(/^\//, "").split("/");
  const firstSegment = segments[0];
  const matchedLocale = config.locales.find(
    (locale) => locale.code === firstSegment
  );
  if (matchedLocale) {
    return matchedLocale.code;
  }
  return config.defaultLocale;
}
function getLocaleByCode(code, config = defaultI18nConfig) {
  return config.locales.find((locale) => locale.code === code);
}
function removeLocalePrefix(pathname, config = defaultI18nConfig) {
  const locale = getLocaleFromPath(pathname, config);
  if (locale === config.defaultLocale && !config.routing.prefixDefaultLocale) {
    return pathname;
  }
  const prefix = `/${locale}`;
  if (pathname.startsWith(prefix)) {
    const rest = pathname.slice(prefix.length);
    return rest || "/";
  }
  return pathname;
}
function getLocalizedPath(pathname, targetLocale, config = defaultI18nConfig) {
  const basePath = removeLocalePrefix(pathname, config);
  if (targetLocale === config.defaultLocale && !config.routing.prefixDefaultLocale) {
    return basePath;
  }
  if (basePath === "/") {
    return `/${targetLocale}`;
  }
  return `/${targetLocale}${basePath}`;
}
function getAlternateLinks(pathname, baseUrl, config = defaultI18nConfig) {
  const links = [];
  for (const locale of config.locales) {
    const localizedPath = getLocalizedPath(pathname, locale.code, config);
    links.push({
      locale: locale.code,
      url: `${baseUrl.replace(/\/$/, "")}${localizedPath}`,
      hreflang: locale.htmlLang
    });
  }
  const defaultPath = getLocalizedPath(
    pathname,
    config.defaultLocale,
    config
  );
  links.push({
    locale: "x-default",
    url: `${baseUrl.replace(/\/$/, "")}${defaultPath}`,
    hreflang: "x-default"
  });
  return links;
}
function deepMerge(base, override) {
  const result = { ...base };
  for (const key in override) {
    if (Object.prototype.hasOwnProperty.call(override, key)) {
      const overrideValue = override[key];
      const baseValue = base[key];
      if (typeof overrideValue === "object" && overrideValue !== null && !Array.isArray(overrideValue) && typeof baseValue === "object" && baseValue !== null && !Array.isArray(baseValue)) {
        result[key] = deepMerge(baseValue, overrideValue);
      } else if (overrideValue !== void 0) {
        result[key] = overrideValue;
      }
    }
  }
  return result;
}
function getLocaleConfig(locale, config = defaultI18nConfig) {
  const localeData = getLocaleByCode(locale, config);
  const localeOverrides = config.localeConfigs[locale] || {};
  const localeInfo = localeData || {
    code: locale,
    name: locale,
    htmlLang: locale,
    dateLocale: locale,
    direction: "ltr"
  };
  const site = deepMerge(defaultSiteConfig, localeOverrides.site || {});
  const menu = localeOverrides.menu || defaultMenu;
  const footer = deepMerge(defaultFooterConfig, localeOverrides.footer || {});
  const sidebar = localeOverrides.sidebar ? {
    ...sidebarConfig,
    ...localeOverrides.sidebar,
    // Use locale-specific groups if provided, otherwise keep default
    groups: localeOverrides.sidebar.groups || sidebarConfig.groups
  } : sidebarConfig;
  const ui = getUITranslations(locale, config);
  return {
    locale: localeInfo,
    site,
    menu,
    footer,
    sidebar,
    ui
  };
}
function t(key, locale, config) {
  const translations = getUITranslations(locale, config);
  return translations[key] || key;
}
function formatDate(date, locale, options) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Intl.DateTimeFormat(locale, options || defaultOptions).format(
    dateObj
  );
}
function formatDateShort(date, locale) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).format(dateObj);
}
function isRTL(locale, config = defaultI18nConfig) {
  const localeData = getLocaleByCode(locale, config);
  return localeData?.direction === "rtl";
}
function getTextDirection(locale, config = defaultI18nConfig) {
  return isRTL(locale, config) ? "rtl" : "ltr";
}
function isMultiLanguageEnabled(config = defaultI18nConfig) {
  return config.locales.length > 1;
}
function getLocalePrefix(locale, config = defaultI18nConfig, base) {
  const normalizedBase = base ? base.replace(/\/$/, "") : "";
  let localePrefix = "";
  if (locale !== config.defaultLocale || config.routing.prefixDefaultLocale) {
    localePrefix = `/${locale}`;
  }
  if (!normalizedBase || normalizedBase === "") {
    return localePrefix;
  }
  return `${normalizedBase}${localePrefix}`;
}
function getContentPathPrefix(locale, config = defaultI18nConfig) {
  const localeConfig = config.localeConfigs[locale];
  return localeConfig?.contentPathPrefix;
}
function filterPostsByLocale(posts, locale, config = defaultI18nConfig) {
  const contentPathPrefix = getContentPathPrefix(locale, config);
  if (!contentPathPrefix) {
    return posts;
  }
  return posts.filter((post) => {
    const postPath = post.id.toLowerCase();
    const prefix = contentPathPrefix.toLowerCase();
    return postPath.startsWith(prefix + "/") || postPath === prefix;
  });
}
function withBase(path, base) {
  const baseUrl = (base || "/").replace(/\/$/, "");
  if (!baseUrl || baseUrl === "") {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") {
    return `${baseUrl}/`;
  }
  return `${baseUrl}${normalizedPath}`;
}
function removeBase(path, base) {
  const baseUrl = (base || "/").replace(/\/$/, "");
  if (!baseUrl || baseUrl === "") {
    return path;
  }
  if (path.startsWith(baseUrl)) {
    const rest = path.slice(baseUrl.length);
    return rest || "/";
  }
  return path;
}

export {
  getLocaleFromPath,
  getLocaleByCode,
  removeLocalePrefix,
  getLocalizedPath,
  getAlternateLinks,
  getLocaleConfig,
  t,
  formatDate,
  formatDateShort,
  isRTL,
  getTextDirection,
  isMultiLanguageEnabled,
  getLocalePrefix,
  getContentPathPrefix,
  filterPostsByLocale,
  withBase,
  removeBase
};
