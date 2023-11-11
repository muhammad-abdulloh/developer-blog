const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Muhammad Abdulloh",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Full-Stack .NET and Angular Developer",
    bio: "I develop everything using node.",
    email: "komilovmuhammadabdulloh@gmail.com",
    linkedin: "muhammad-abdulloh",
    github: "muhammad-abdulloh",
    instagram: "muhammadabdulloh_komilov",
  },
  projects: [
    {
      name: `Medium Blog`,
      href: "https://medium.com/@muhammadabdullohkomilov",
    },
  ],
  // blog setting (required)
  blog: {
    title: "morethan-log",
    description: "welcome to morethan-log!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['uz-UZ', 'en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Blog", 
      "Website", 
      "Notion", 
      "Muhammadabdulloh", 
      "muhammad-abdulloh", 
      "muhammadabdulloh.uz",
      "muhammad-abdulloh.uz",
       "muhammad-abdulloh komilov",
       "muhammad abdulloh komilov",
       "dasturlash",
       "coding",
        "c sharp",
        "programming",
        "komilov",
        "dotnet",
        ".net",
        ".net core",
    ],
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
