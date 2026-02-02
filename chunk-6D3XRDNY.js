import {
  defaultI18nConfig
} from "./chunk-A2E2VSAQ.js";

// src/integration.ts
import { fileURLToPath } from "url";
import path from "path";
var VIRTUAL_I18N_MODULE_ID = "virtual:astro-blog-i18n";
var RESOLVED_VIRTUAL_I18N_MODULE_ID = "\0" + VIRTUAL_I18N_MODULE_ID;
var defaultOptions = {
  routes: {
    posts: true,
    tags: true,
    categories: true,
    archives: true,
    slides: true,
    search: true,
    rss: true
  }
};
function getLocalePrefix(locale, i18nConfig) {
  if (locale === i18nConfig.defaultLocale && !i18nConfig.routing.prefixDefaultLocale) {
    return "";
  }
  return `/${locale}`;
}
function astroBlogIntegration(options = {}) {
  const mergedOptions = {
    ...defaultOptions,
    routes: { ...defaultOptions.routes, ...options.routes }
  };
  const i18nConfig = options.i18n || defaultI18nConfig;
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const pagesDir = path.resolve(currentDir, "../src/pages");
  const vitePluginI18nConfig = () => ({
    name: "astro-blog-i18n-config",
    resolveId(id) {
      if (id === VIRTUAL_I18N_MODULE_ID) {
        return RESOLVED_VIRTUAL_I18N_MODULE_ID;
      }
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_I18N_MODULE_ID) {
        return `export const i18nConfig = ${JSON.stringify(i18nConfig)};`;
      }
    }
  });
  return {
    name: "@jet-w/astro-blog",
    hooks: {
      "astro:config:setup": ({ injectRoute, logger, updateConfig }) => {
        logger.info("Injecting @jet-w/astro-blog routes...");
        updateConfig({
          vite: {
            plugins: [vitePluginI18nConfig()]
          }
        });
        const routes = mergedOptions.routes;
        const locales = i18nConfig.locales;
        const injectLocalizedRoute = (pattern, entrypoint) => {
          for (const locale of locales) {
            const prefix = getLocalePrefix(locale.code, i18nConfig);
            const localizedPattern = prefix ? `${prefix}${pattern}` : pattern;
            injectRoute({
              pattern: localizedPattern,
              entrypoint
            });
          }
        };
        if (routes.posts) {
          injectLocalizedRoute("/posts", `${pagesDir}/posts/index.astro`);
          injectLocalizedRoute(
            "/posts/page/[page]",
            `${pagesDir}/posts/page/[page].astro`
          );
          injectLocalizedRoute(
            "/posts/[...slug]",
            `${pagesDir}/posts/[...slug].astro`
          );
        }
        if (routes.tags) {
          injectLocalizedRoute("/tags", `${pagesDir}/tags/index.astro`);
          injectLocalizedRoute("/tags/[tag]", `${pagesDir}/tags/[tag].astro`);
          injectLocalizedRoute(
            "/tags/[tag]/page/[page]",
            `${pagesDir}/tags/[tag]/page/[page].astro`
          );
        }
        if (routes.categories) {
          injectLocalizedRoute(
            "/categories",
            `${pagesDir}/categories/index.astro`
          );
          injectLocalizedRoute(
            "/categories/[category]",
            `${pagesDir}/categories/[category].astro`
          );
          injectLocalizedRoute(
            "/categories/[category]/page/[page]",
            `${pagesDir}/categories/[category]/page/[page].astro`
          );
        }
        if (routes.archives) {
          injectLocalizedRoute("/archives", `${pagesDir}/archives/index.astro`);
          injectLocalizedRoute(
            "/archives/[year]/[month]",
            `${pagesDir}/archives/[year]/[month].astro`
          );
          injectLocalizedRoute(
            "/archives/[year]/[month]/page/[page]",
            `${pagesDir}/archives/[year]/[month]/page/[page].astro`
          );
        }
        if (routes.slides) {
          injectLocalizedRoute("/slides", `${pagesDir}/slides/index.astro`);
          injectLocalizedRoute(
            "/slides/[...slug]",
            `${pagesDir}/slides/[...slug].astro`
          );
        }
        if (routes.search) {
          injectLocalizedRoute("/search", `${pagesDir}/search.astro`);
          injectLocalizedRoute(
            "/search-index.json",
            `${pagesDir}/search-index.json.ts`
          );
        }
        if (routes.rss) {
          injectLocalizedRoute("/rss.xml", `${pagesDir}/rss.xml.ts`);
        }
        injectLocalizedRoute("/[...slug]", `${pagesDir}/[...slug].astro`);
        const localeCount = locales.length;
        logger.info(
          `Routes injected successfully for ${localeCount} locale(s): ${locales.map((l) => l.code).join(", ")}`
        );
      }
    }
  };
}
var integration_default = astroBlogIntegration;

export {
  astroBlogIntegration,
  integration_default
};
