import { c as SidebarItem, b as SidebarGroup, S as SidebarConfig } from '../sidebar-DNdiCKBw.js';

/**
 * 侧边栏工具函数
 * 处理配置解析和树形结构生成
 */
interface PostEntry {
    id: string;
    data: {
        title?: string;
        icon?: string;
        pubDate?: Date;
        tags?: string[];
        draft?: boolean;
    };
}

interface TreeNode {
    name: string;
    slug?: string;
    title?: string;
    displayName?: string;
    icon?: string;
    badge?: string;
    badgeType?: 'info' | 'success' | 'warning' | 'error';
    children: TreeNode[];
    isFolder: boolean;
    isReadme?: boolean;
    link?: string;
    collapsed?: boolean;
}
interface ProcessedGroup {
    type: 'tree' | 'items' | 'divider';
    title: string;
    icon?: string;
    collapsed?: boolean;
    tree?: TreeNode[];
    items?: SidebarItem[];
}
/**
 * 从文章集合构建树形结构
 */
declare function buildTreeFromPosts(posts: PostEntry[], scanPath?: string, options?: {
    maxDepth?: number;
    exclude?: string[];
    include?: string[];
    sortBy?: 'name' | 'date' | 'title' | 'custom';
    sortOrder?: 'asc' | 'desc';
}): TreeNode[];
/**
 * 路径 glob 模式匹配
 * 支持:
 * - /posts/tech/** 匹配 /posts/tech 及其所有子路径
 * - /posts/tech/* 匹配 /posts/tech 的直接子路径
 * - /posts/tech 精确匹配
 */
declare function matchPathPattern(currentPath: string, pattern: string): boolean;
/**
 * 检查侧边栏组是否应该在当前路径显示
 */
declare function shouldShowGroup(group: {
    showForPaths?: string[];
    hideForPaths?: string[];
}, currentPath: string): boolean;
/**
 * 根据当前路径过滤侧边栏组
 */
declare function filterGroupsByPath(groups: SidebarGroup[], currentPath: string): SidebarGroup[];
/**
 * 将手动配置的项目转换为树节点
 */
declare function manualItemsToTree(items: SidebarItem[]): TreeNode[];
/**
 * 处理侧边栏配置，生成可渲染的数据结构
 */
declare function processSidebarConfig(config: SidebarConfig, posts: PostEntry[]): Promise<ProcessedGroup[]>;
/**
 * 获取最新文章
 */
declare function getRecentPosts(posts: PostEntry[], count?: number): PostEntry[];
/**
 * 获取热门标签
 */
declare function getPopularTags(posts: PostEntry[], count?: number): Array<{
    name: string;
    count: number;
    slug: string;
}>;
/**
 * 获取归档数据
 */
declare function getArchives(posts: PostEntry[], count?: number): Array<{
    year: number;
    month: number;
    count: number;
}>;

export { type ProcessedGroup, type TreeNode, buildTreeFromPosts, filterGroupsByPath, getArchives, getPopularTags, getRecentPosts, manualItemsToTree, matchPathPattern, processSidebarConfig, shouldShowGroup };
