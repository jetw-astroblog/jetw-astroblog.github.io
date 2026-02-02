// src/utils/sidebar.ts
function buildTreeFromPosts(posts, scanPath = "", options = {}) {
  const { maxDepth, exclude = [], include = [], sortBy = "name", sortOrder = "asc" } = options;
  const filteredPosts = posts.filter((post) => {
    const postPath = post.id.toLowerCase();
    const targetPath = scanPath.toLowerCase();
    if (targetPath && !postPath.startsWith(targetPath + "/") && postPath !== targetPath) {
      return false;
    }
    const pathParts = post.id.split("/");
    for (const part of pathParts) {
      if (exclude.some((pattern) => matchPattern(part, pattern))) {
        return false;
      }
    }
    if (include.length > 0) {
      const matchesInclude = pathParts.some(
        (part) => include.some((pattern) => matchPattern(part, pattern))
      );
      if (!matchesInclude) {
        return false;
      }
    }
    return true;
  });
  const folderTitles = {};
  const folderIcons = {};
  filteredPosts.forEach((post) => {
    const pathParts = post.id.split("/");
    const fileName = pathParts[pathParts.length - 1].toLowerCase();
    if (fileName === "readme" || fileName === "readme.md") {
      const folderPath = pathParts.slice(0, -1).join("/");
      if (folderPath) {
        if (post.data.title) {
          folderTitles[folderPath] = post.data.title;
        }
        if (post.data.icon) {
          folderIcons[folderPath] = post.data.icon;
        }
      }
    }
  });
  const tree = [];
  filteredPosts.forEach((post) => {
    let relativePath = post.id;
    if (scanPath) {
      const scanPathLower = scanPath.toLowerCase();
      const postIdLower = post.id.toLowerCase();
      if (postIdLower.startsWith(scanPathLower + "/")) {
        relativePath = post.id.slice(scanPath.length + 1);
      } else if (postIdLower === scanPathLower) {
        relativePath = post.id.split("/").pop() || post.id;
      }
    }
    const pathParts = relativePath.split("/");
    if (maxDepth !== void 0 && pathParts.length > maxDepth) {
      return;
    }
    let currentLevel = tree;
    let currentPath = scanPath;
    pathParts.forEach((part, index) => {
      const isLast = index === pathParts.length - 1;
      const existing = currentLevel.find((n) => n.name.toLowerCase() === part.toLowerCase());
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      const isReadme = isLast && (part.toLowerCase() === "readme" || part.toLowerCase() === "readme.md");
      if (existing) {
        if (isLast) {
          existing.slug = post.id;
          existing.title = post.data.title;
          existing.icon = post.data.icon;
          existing.isReadme = isReadme;
        } else {
          const folderPath = scanPath ? `${scanPath}/${pathParts.slice(0, index + 1).join("/")}` : pathParts.slice(0, index + 1).join("/");
          if (folderTitles[folderPath]) {
            existing.displayName = folderTitles[folderPath];
          }
          if (folderIcons[folderPath]) {
            existing.icon = folderIcons[folderPath];
          }
        }
        currentLevel = existing.children;
      } else {
        const folderPath = scanPath ? `${scanPath}/${pathParts.slice(0, index + 1).join("/")}` : pathParts.slice(0, index + 1).join("/");
        const newNode = {
          name: part,
          slug: isLast ? post.id : void 0,
          title: isLast ? post.data.title : void 0,
          displayName: isLast ? post.data.title : folderTitles[folderPath],
          icon: isLast ? post.data.icon : folderIcons[folderPath],
          children: [],
          isFolder: !isLast,
          isReadme
        };
        currentLevel.push(newNode);
        currentLevel = newNode.children;
      }
    });
  });
  return sortTree(tree, sortBy, sortOrder);
}
function sortTree(nodes, sortBy = "name", sortOrder = "asc") {
  const filtered = nodes.filter((node) => !node.isReadme);
  const sorted = filtered.sort((a, b) => {
    if (a.isFolder && !b.isFolder) return -1;
    if (!a.isFolder && b.isFolder) return 1;
    let comparison = 0;
    switch (sortBy) {
      case "title":
        comparison = (a.displayName || a.title || a.name).localeCompare(
          b.displayName || b.title || b.name,
          "zh-CN"
        );
        break;
      case "name":
      default:
        comparison = a.name.localeCompare(b.name, "zh-CN", { numeric: true });
        break;
    }
    return sortOrder === "desc" ? -comparison : comparison;
  });
  return sorted.map((node) => ({
    ...node,
    children: sortTree(node.children, sortBy, sortOrder)
  }));
}
function matchPattern(str, pattern) {
  if (pattern === "*") return true;
  if (pattern.includes("*")) {
    const regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$", "i");
    return regex.test(str);
  }
  return str.toLowerCase() === pattern.toLowerCase();
}
function matchPathPattern(currentPath, pattern) {
  const normalizedPath = currentPath.replace(/\/$/, "").toLowerCase();
  const normalizedPattern = pattern.replace(/\/$/, "").toLowerCase();
  if (normalizedPattern.endsWith("/**")) {
    const basePath = normalizedPattern.slice(0, -3);
    return normalizedPath === basePath || normalizedPath.startsWith(basePath + "/");
  }
  if (normalizedPattern.endsWith("/*")) {
    const basePath = normalizedPattern.slice(0, -2);
    if (normalizedPath === basePath) return true;
    if (normalizedPath.startsWith(basePath + "/")) {
      const remaining = normalizedPath.slice(basePath.length + 1);
      return !remaining.includes("/");
    }
    return false;
  }
  return normalizedPath === normalizedPattern;
}
function shouldShowGroup(group, currentPath) {
  if (!group.showForPaths && !group.hideForPaths) {
    return true;
  }
  if (group.hideForPaths && group.hideForPaths.length > 0) {
    for (const pattern of group.hideForPaths) {
      if (matchPathPattern(currentPath, pattern)) {
        return false;
      }
    }
  }
  if (group.showForPaths && group.showForPaths.length > 0) {
    for (const pattern of group.showForPaths) {
      if (matchPathPattern(currentPath, pattern)) {
        return true;
      }
    }
    return false;
  }
  return true;
}
function filterGroupsByPath(groups, currentPath) {
  return groups.filter((group) => shouldShowGroup(group, currentPath));
}
function manualItemsToTree(items) {
  return items.map((item) => ({
    name: item.title,
    slug: item.slug,
    title: item.title,
    displayName: item.title,
    icon: item.icon,
    badge: item.badge,
    badgeType: item.badgeType,
    link: item.link,
    children: item.children ? manualItemsToTree(item.children) : [],
    isFolder: !!(item.children && item.children.length > 0),
    collapsed: item.collapsed
  }));
}
async function processSidebarConfig(config, posts) {
  const processedGroups = [];
  for (const group of config.groups) {
    const processed = await processGroup(group, posts);
    if (processed) {
      processedGroups.push(processed);
    }
  }
  return processedGroups;
}
async function processGroup(group, posts) {
  switch (group.type) {
    case "scan": {
      const scanConfig = group;
      const tree = buildTreeFromPosts(posts, scanConfig.scanPath, {
        maxDepth: scanConfig.maxDepth,
        exclude: scanConfig.exclude,
        include: scanConfig.include,
        sortBy: scanConfig.sortBy,
        sortOrder: scanConfig.sortOrder
      });
      return {
        type: "tree",
        title: scanConfig.title,
        icon: scanConfig.icon,
        collapsed: scanConfig.collapsed,
        tree
      };
    }
    case "manual": {
      const manualConfig = group;
      const tree = manualItemsToTree(manualConfig.items);
      return {
        type: "tree",
        title: manualConfig.title,
        icon: manualConfig.icon,
        collapsed: manualConfig.collapsed,
        tree
      };
    }
    case "mixed": {
      const mixedConfig = group;
      const combinedTree = [];
      for (const section of mixedConfig.sections) {
        const processed = await processGroup(section, posts);
        if (processed && processed.tree) {
          combinedTree.push({
            name: section.title,
            displayName: section.title,
            icon: section.icon,
            children: processed.tree,
            isFolder: true,
            collapsed: section.collapsed
          });
        }
      }
      return {
        type: "tree",
        title: mixedConfig.title,
        icon: mixedConfig.icon,
        collapsed: mixedConfig.collapsed,
        tree: combinedTree
      };
    }
    case "divider": {
      return {
        type: "divider",
        title: group.title || ""
      };
    }
    default:
      return null;
  }
}
function getRecentPosts(posts, count = 5) {
  return posts.filter((p) => p.data.pubDate).sort((a, b) => (b.data.pubDate?.getTime() ?? 0) - (a.data.pubDate?.getTime() ?? 0)).slice(0, count);
}
function getPopularTags(posts, count = 8) {
  const tagCounts = {};
  posts.forEach((post) => {
    (post.data.tags || []).forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, count).map(([name, count2]) => ({
    name,
    count: count2,
    slug: name.toLowerCase().replace(/\s+/g, "-")
  }));
}
function getArchives(posts, count = 6) {
  const archiveMap = {};
  posts.forEach((post) => {
    if (post.data.pubDate) {
      const date = new Date(post.data.pubDate);
      const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      archiveMap[key] = (archiveMap[key] || 0) + 1;
    }
  });
  return Object.entries(archiveMap).sort((a, b) => b[0].localeCompare(a[0])).slice(0, count).map(([key, count2]) => {
    const [year, month] = key.split("-").map(Number);
    return { year, month, count: count2 };
  });
}
export {
  buildTreeFromPosts,
  filterGroupsByPath,
  getArchives,
  getPopularTags,
  getRecentPosts,
  manualItemsToTree,
  matchPathPattern,
  processSidebarConfig,
  shouldShowGroup
};
