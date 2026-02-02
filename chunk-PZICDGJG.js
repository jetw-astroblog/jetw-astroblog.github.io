import {
  getUITranslations
} from "./chunk-A2E2VSAQ.js";

// src/utils/useI18n.ts
import { inject, computed } from "vue";
var I18N_LOCALE_KEY = /* @__PURE__ */ Symbol("i18n-locale");
var I18N_CONFIG_KEY = /* @__PURE__ */ Symbol("i18n-config");
var I18N_TRANSLATIONS_KEY = /* @__PURE__ */ Symbol("i18n-translations");
function useI18n() {
  const injectedLocale = inject(I18N_LOCALE_KEY, "zh-CN");
  const injectedTranslations = inject(
    I18N_TRANSLATIONS_KEY,
    void 0
  );
  const injectedConfig = inject(I18N_CONFIG_KEY, void 0);
  const locale = computed(() => injectedLocale);
  const translations = computed(() => {
    if (injectedTranslations) {
      return injectedTranslations;
    }
    return getUITranslations(injectedLocale, injectedConfig);
  });
  function t(key) {
    return translations.value[key] || key;
  }
  function formatDate(date, options) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const defaultOptions = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Intl.DateTimeFormat(
      locale.value,
      options || defaultOptions
    ).format(dateObj);
  }
  function formatDateShort(date) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale.value, {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    }).format(dateObj);
  }
  return {
    locale,
    t,
    formatDate,
    formatDateShort,
    translations
  };
}
function createI18nContext(locale, config) {
  return {
    locale,
    translations: getUITranslations(locale, config),
    config
  };
}

export {
  I18N_LOCALE_KEY,
  I18N_CONFIG_KEY,
  I18N_TRANSLATIONS_KEY,
  useI18n,
  createI18nContext
};
