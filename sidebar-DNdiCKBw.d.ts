/**
 * 侧边栏配置系统
 *
 * 支持三种配置类型：
 * 1. scan - 扫描指定文件夹，自动生成树形结构
 * 2. manual - 手动配置显示特定内容
 * 3. mixed - 混合使用以上两种方式
 */
interface PathMatchConfig {
    pattern: string;
    exact?: boolean;
}
interface SidebarItem {
    title: string;
    slug?: string;
    link?: string;
    icon?: string;
    badge?: string;
    badgeType?: 'info' | 'success' | 'warning' | 'error';
    children?: SidebarItem[];
    collapsed?: boolean;
}
interface ScanConfig {
    type: 'scan';
    title: string;
    icon?: string;
    scanPath: string;
    collapsed?: boolean;
    maxDepth?: number;
    exclude?: string[];
    include?: string[];
    sortBy?: 'name' | 'date' | 'title' | 'custom';
    sortOrder?: 'asc' | 'desc';
    showForPaths?: string[];
    hideForPaths?: string[];
}
interface ManualConfig {
    type: 'manual';
    title: string;
    icon?: string;
    collapsed?: boolean;
    items: SidebarItem[];
    showForPaths?: string[];
    hideForPaths?: string[];
}
interface MixedConfig {
    type: 'mixed';
    title: string;
    icon?: string;
    collapsed?: boolean;
    sections: (ScanConfig | ManualConfig)[];
    showForPaths?: string[];
    hideForPaths?: string[];
}
interface DividerConfig {
    type: 'divider';
    title?: string;
    showForPaths?: string[];
    hideForPaths?: string[];
}
type SidebarGroup = ScanConfig | ManualConfig | MixedConfig | DividerConfig;
interface SidebarConfig {
    enabled: boolean;
    width?: string;
    position?: 'left' | 'right';
    showSearch?: boolean;
    showRecentPosts?: boolean;
    recentPostsCount?: number;
    showPopularTags?: boolean;
    popularTagsCount?: number;
    showArchives?: boolean;
    archivesCount?: number;
    showFriendLinks?: boolean;
    friendLinks?: Array<{
        title: string;
        url: string;
        icon?: string;
        description?: string;
    }>;
    groups: SidebarGroup[];
}
/**
 * 默认侧边栏配置
 */
declare const sidebarConfig: SidebarConfig;
/**
 * Define sidebar configuration
 */
declare function defineSidebarConfig(config: Partial<SidebarConfig>): SidebarConfig;
declare const defaultSidebarConfig: SidebarConfig;

export { type DividerConfig as D, type ManualConfig as M, type PathMatchConfig as P, type SidebarConfig as S, defineSidebarConfig as a, type SidebarGroup as b, type SidebarItem as c, defaultSidebarConfig as d, type ScanConfig as e, type MixedConfig as f, sidebarConfig as s };
