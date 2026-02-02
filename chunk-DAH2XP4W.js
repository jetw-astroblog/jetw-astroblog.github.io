// src/config/site.ts
var siteConfig = {
  title: "My Astro Blog",
  description: "",
  author: "Author",
  email: "",
  avatar: "/images/avatar.svg",
  social: {
    github: "",
    twitter: "",
    linkedin: "",
    email: ""
  },
  menu: [
    {
      name: "\u9996\u9875",
      href: "/",
      icon: "home"
    },
    {
      name: "\u535A\u5BA2",
      href: "/posts",
      icon: "posts"
    },
    {
      name: "\u5173\u4E8E",
      href: "/about",
      icon: "about"
    }
  ]
};
var defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  image: "/images/og-image.jpg",
  type: "website"
};
function defineSiteConfig(config) {
  return {
    ...siteConfig,
    ...config,
    social: {
      ...siteConfig.social,
      ...config.social
    },
    menu: config.menu || siteConfig.menu
  };
}
var defaultSiteConfig = siteConfig;

// src/config/menu.ts
var menu = [
  {
    name: "\u9996\u9875",
    href: "/",
    icon: "home"
  },
  {
    name: "\u535A\u5BA2",
    href: "/posts",
    icon: "posts"
  },
  {
    name: "\u5173\u4E8E",
    href: "/about",
    icon: "about"
  }
];
function defineMenu(items) {
  return items;
}
var defaultMenu = menu;

// src/config/sidebar.ts
var sidebarConfig = {
  enabled: true,
  width: "280px",
  position: "right",
  showSearch: true,
  showRecentPosts: true,
  recentPostsCount: 5,
  showPopularTags: true,
  popularTagsCount: 8,
  showArchives: true,
  archivesCount: 6,
  showFriendLinks: true,
  friendLinks: [
    { title: "Astro \u5B98\u7F51", url: "https://astro.build" },
    { title: "Tailwind CSS", url: "https://tailwindcss.com" },
    { title: "Vue.js", url: "https://vuejs.org" }
  ],
  groups: [
    {
      type: "scan",
      title: "\u6587\u6863\u76EE\u5F55",
      icon: "folder",
      scanPath: "",
      collapsed: false
    }
  ]
};
function defineSidebarConfig(config) {
  return {
    ...sidebarConfig,
    ...config,
    groups: config.groups || sidebarConfig.groups
  };
}
var defaultSidebarConfig = sidebarConfig;

// src/config/footer.ts
var footerConfig = {
  quickLinksTitle: "\u5FEB\u901F\u94FE\u63A5",
  quickLinks: [
    { name: "\u9996\u9875", href: "/" },
    { name: "\u6587\u7AE0", href: "/posts" },
    { name: "\u6807\u7B7E", href: "/tags" },
    { name: "\u5206\u7C7B", href: "/categories" },
    { name: "\u5F52\u6863", href: "/archives" },
    { name: "\u5173\u4E8E", href: "/about" }
  ],
  contactTitle: "\u8054\u7CFB\u65B9\u5F0F",
  socialLinks: [],
  showRss: true,
  rssUrl: "/rss.xml",
  copyright: "\xA9 {year} {author}. All rights reserved.",
  poweredBy: {
    text: "Astro",
    url: "https://astro.build"
  }
};
function defineFooterConfig(config) {
  return {
    ...footerConfig,
    ...config
  };
}
var defaultFooterConfig = footerConfig;

export {
  siteConfig,
  defaultSEO,
  defineSiteConfig,
  defaultSiteConfig,
  menu,
  defineMenu,
  defaultMenu,
  sidebarConfig,
  defineSidebarConfig,
  defaultSidebarConfig,
  footerConfig,
  defineFooterConfig,
  defaultFooterConfig
};
