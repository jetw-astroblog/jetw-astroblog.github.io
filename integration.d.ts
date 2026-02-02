import { AstroIntegration } from 'astro';
import { I as I18nConfig } from './i18n-DYYPTq4o.js';
import './types/index.js';
import './sidebar-DNdiCKBw.js';

/**
 * @jet-w/astro-blog Integration
 *
 * This integration injects the blog pages into your Astro project
 * with multi-language support.
 */

interface AstroBlogIntegrationOptions {
    /**
     * Enable/disable specific page routes
     */
    routes?: {
        posts?: boolean;
        tags?: boolean;
        categories?: boolean;
        archives?: boolean;
        slides?: boolean;
        search?: boolean;
        rss?: boolean;
    };
    /**
     * i18n configuration for multi-language support
     */
    i18n?: I18nConfig;
}
declare function astroBlogIntegration(options?: AstroBlogIntegrationOptions): AstroIntegration;

export { type AstroBlogIntegrationOptions, I18nConfig, astroBlogIntegration, astroBlogIntegration as default };
