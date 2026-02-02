import { ComputedRef } from 'vue';
import { U as UITranslations, I as I18nConfig } from '../i18n-DYYPTq4o.js';
export { L as Locale } from '../i18n-DYYPTq4o.js';
import '../types/index.js';
import '../sidebar-DNdiCKBw.js';

/**
 * Vue Composable for i18n
 *
 * Provides i18n support for Vue components in the blog.
 */

/**
 * i18n injection keys
 */
declare const I18N_LOCALE_KEY: unique symbol;
declare const I18N_CONFIG_KEY: unique symbol;
declare const I18N_TRANSLATIONS_KEY: unique symbol;
/**
 * i18n context provided to Vue components
 */
interface I18nContext {
    locale: string;
    translations: UITranslations;
    config?: I18nConfig;
}
/**
 * Return type of useI18n composable
 */
interface UseI18nReturn {
    /** Current locale code */
    locale: ComputedRef<string>;
    /** Translation function */
    t: (key: keyof UITranslations) => string;
    /** Format date according to locale */
    formatDate: (date: Date | string, options?: Intl.DateTimeFormatOptions) => string;
    /** Format date in short format */
    formatDateShort: (date: Date | string) => string;
    /** All translations for current locale */
    translations: ComputedRef<UITranslations>;
}
/**
 * Vue composable for i18n support
 *
 * @example
 * ```vue
 * <script setup>
 * import { useI18n } from '@jet-w/astro-blog/utils/useI18n';
 *
 * const { t, formatDate, locale } = useI18n();
 * </script>
 *
 * <template>
 *   <h1>{{ t('postList') }}</h1>
 *   <span>{{ formatDate(post.pubDate) }}</span>
 * </template>
 * ```
 */
declare function useI18n(): UseI18nReturn;
/**
 * Create i18n context for providing to Vue components
 *
 * @example
 * ```astro
 * ---
 * import { createI18nContext } from '@jet-w/astro-blog/utils/useI18n';
 * const i18nContext = createI18nContext('en', i18nConfig);
 * ---
 * <Component client:load {...i18nContext} />
 * ```
 */
declare function createI18nContext(locale: string, config?: I18nConfig): I18nContext;

export { I18N_CONFIG_KEY, I18N_LOCALE_KEY, I18N_TRANSLATIONS_KEY, I18nConfig, type I18nContext, UITranslations, type UseI18nReturn, createI18nContext, useI18n };
