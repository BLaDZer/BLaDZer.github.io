self.__BUILD_MANIFEST = function(s, e, t, c, a, d, i, o, n, b, r, u, h, p, f, g, k, l, j, I, m, x, w, B, Y, G, S, _, v, y, A, M, T, F, N, C, D, P, L, U) {
    return {
        __rewrites: {
            beforeFiles: [{
                source: "/embed/:docId*",
                destination: "/public/:docId*"
            }, {
                source: "/templates/([\\w-]*-|):id(\\w+)",
                destination: "/templates/:id"
            }, {
                source: "/folders/:channelSlug*",
                destination: P
            }, {
                source: "/(docs|example|public)/:slug",
                has: [{
                    type: "header",
                    key: "user-agent",
                    value: "(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|Google-Certificates-Bridge|Iframely|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot)(.*)"
                }],
                destination: "/docs-robot/:slug"
            }, {
                source: "/:path*.map",
                destination: L
            }],
            afterFiles: [],
            fallback: []
        },
        "/": [t, c, o, n, b, r, u, I, Y, s, a, e, h, p, m, G, v, "static/chunks/124-c270cda07fcf989c.js", d, f, g, i, k, x, w, S, y, "static/chunks/pages/index-b9ba96e5d753d83d.js"],
        "/404": ["static/chunks/pages/404-04ab3a7cd19b7e61.js"],
        "/_error": ["static/chunks/pages/_error-5fe61d708d135e7c.js"],
        "/_offline": ["static/chunks/pages/_offline-c5cbcd7cdbbd416d.js"],
        "/admin/prompt-studio/[prompt]": [s, "static/chunks/pages/admin/prompt-studio/[prompt]-2a66584da95715e8.js"],
        "/auth/done": ["static/chunks/pages/auth/done-4828eb4e99585a3e.js"],
        "/auth/error": ["static/chunks/pages/auth/error-04ee74a4d22f203a.js"],
        "/checkout/success": ["static/chunks/pages/checkout/success-3fe616f20fabb996.js"],
        "/demo/[docId]": [t, c, o, n, b, r, u, I, Y, s, a, e, h, p, A, m, B, G, M, d, f, g, i, k, x, w, T, S, _, F, "static/chunks/pages/demo/[docId]-7ba543e352d7ac28.js"],
        "/docs/screenshot": [t, c, o, n, b, r, u, "static/chunks/fb69e836-5acf9c70e8a0d72f.js", s, a, h, p, "static/chunks/5743-eddfc874e08ea4fe.js", d, f, g, i, "static/chunks/9068-0cdce7eb736bac03.js", "static/chunks/pages/docs/screenshot-60a8292c2c965ffd.js"],
        "/docs/[docId]": [t, c, o, n, b, r, u, I, Y, s, a, e, h, p, A, m, B, G, M, d, f, g, i, k, x, w, T, S, _, F, "static/chunks/pages/docs/[docId]-d8f7150821a0a0d3.js"],
        "/docs-robot/[docId]": [t, c, o, n, b, r, u, s, a, h, p, "static/chunks/3955-998598d591baf241.js", d, f, g, "static/chunks/pages/docs-robot/[docId]-2821e330c15f3011.js"],
        "/example/[docId]": [t, c, o, n, b, r, u, I, Y, s, a, e, h, p, A, m, B, G, M, d, f, g, i, k, x, w, T, S, _, F, "static/chunks/pages/example/[docId]-19a51945025fcf78.js"],
        "/forgot": [l, e, "static/chunks/9716-a3cba6e0698e711d.js", j, "static/chunks/pages/forgot-993af8e5aac502a3.js"],
        "/generate": ["static/chunks/pages/generate-c9612f30a36f2c61.js"],
        "/inspiration": [t, c, o, n, b, r, u, s, a, e, h, p, v, N, d, f, g, i, k, y, C, "static/chunks/pages/inspiration-7f867a4bfee29f17.js"],
        "/invitations/docs/[docId]": [l, s, e, "static/chunks/1434-869ef71c914adffa.js", i, j, "static/chunks/pages/invitations/docs/[docId]-922bdf5669e8f4d2.js"],
        "/invitations/workspaces/[workspaceId]": [l, e, "static/chunks/9206-7f4f2023edd19375.js", j, "static/chunks/pages/invitations/workspaces/[workspaceId]-ccd86488d4ac05bd.js"],
        "/new": [t, c, o, n, b, r, u, s, a, h, p, d, f, "static/chunks/pages/new-0392458ae6057f6f.js"],
        "/public/[docId]": [t, c, o, n, b, r, u, I, Y, s, a, e, h, p, A, m, B, G, M, d, f, g, i, k, x, w, T, S, _, F, "static/chunks/pages/public/[docId]-b6cab75408df76e4.js"],
        "/published/[docId]": [t, c, o, n, b, r, u, s, a, h, p, d, f, g, U, "static/chunks/pages/published/[docId]-a3b52b2a8d866c87.js"],
        "/published_mobile/[docId]": [t, c, o, n, b, r, u, s, a, h, p, d, f, g, U, "static/chunks/pages/published_mobile/[docId]-4feb062781e8e802.js"],
        "/reset": [l, e, "static/chunks/3507-af846857b8fa48c1.js", j, "static/chunks/pages/reset-ddefea9e1bbffa1a.js"],
        "/sandbox/[pageName]": [t, c, o, n, b, r, u, I, s, a, h, p, m, "static/chunks/7174-38c98d51d9fbfdd8.js", d, f, g, x, w, "static/chunks/pages/sandbox/[pageName]-c4a707a673d1c048.js"],
        "/setup": [l, e, "static/chunks/2017-7e3e0f5c2dd909bc.js", j, "static/chunks/pages/setup-b10936656fe39922.js"],
        "/signin": [l, e, "static/chunks/7670-c237b65fb015f910.js", j, "static/chunks/pages/signin-3661a32e8874808b.js"],
        "/signup": [l, e, "static/chunks/9521-eac7c53d253918be.js", j, "static/chunks/pages/signup-f4bb5b7d0a29e522.js"],
        "/sites/[siteId]": [s, i, "static/chunks/pages/sites/[siteId]-277a18d0f9f547f9.js"],
        "/sites/[siteId]/domains": [t, c, o, n, b, r, u, s, a, e, h, p, B, d, f, g, i, _, D, "static/chunks/pages/sites/[siteId]/domains-14758e62c651c5eb.js"],
        "/sites/[siteId]/pages/[docId]": [t, c, o, n, b, r, u, I, Y, s, a, e, h, p, A, m, B, G, M, d, f, g, i, k, x, w, T, S, _, F, D, "static/chunks/pages/sites/[siteId]/pages/[docId]-418ba605ae3c35be.js"],
        "/sites/[siteId]/settings": [t, c, o, n, b, r, u, s, a, e, h, p, B, d, f, g, i, D, "static/chunks/pages/sites/[siteId]/settings-742417bb593cd46a.js"],
        "/slack": [s, i, "static/chunks/pages/slack-4ae121d90f8e8313.js"],
        "/templates": [t, c, o, n, b, r, u, s, a, e, h, p, v, N, d, f, g, i, k, y, C, "static/chunks/pages/templates-2d62d725eaf3fc5a.js"],
        "/templates/categories/[categorySlug]": [t, c, o, n, b, r, u, s, a, e, h, p, v, N, d, f, g, i, k, y, C, "static/chunks/pages/templates/categories/[categorySlug]-64d8d5ba405db179.js"],
        "/templates/[id]": [t, c, o, n, b, r, u, s, a, e, h, p, v, N, d, f, g, i, k, y, C, "static/chunks/pages/templates/[id]-24c282bb41f0121a.js"],
        "/theme-generate": ["static/chunks/pages/theme-generate-63cdafa1b2a1af62.js"],
        "/tldraw": [t, c, a, d, "static/css/3a638670584f9430.css", "static/chunks/pages/tldraw-c66eb03f9181f70a.js"],
        "/user-deleted": [s, i, "static/chunks/pages/user-deleted-1a7be2c0330a5fcc.js"],
        "/welcome": [s, i, "static/chunks/pages/welcome-0acc5ebbeab7745a.js"],
        "/[orgId]/join": [l, s, e, "static/chunks/3755-8f25010a692fda13.js", i, j, "static/chunks/pages/[orgId]/join-e436febc4c6e4fc0.js"],
        sortedPages: [P, L, "/_app", "/_error", "/_offline", "/admin/prompt-studio/[prompt]", "/auth/done", "/auth/error", "/checkout/success", "/demo/[docId]", "/docs/screenshot", "/docs/[docId]", "/docs-robot/[docId]", "/example/[docId]", "/forgot", "/generate", "/inspiration", "/invitations/docs/[docId]", "/invitations/workspaces/[workspaceId]", "/new", "/public/[docId]", "/published/[docId]", "/published_mobile/[docId]", "/reset", "/sandbox/[pageName]", "/setup", "/signin", "/signup", "/sites/[siteId]", "/sites/[siteId]/domains", "/sites/[siteId]/pages/[docId]", "/sites/[siteId]/settings", "/slack", "/templates", "/templates/categories/[categorySlug]", "/templates/[id]", "/theme-generate", "/tldraw", "/user-deleted", "/welcome", "/[orgId]/join"]
    }
}("static/chunks/9497-934af601a14de562.js", "static/chunks/8519-cca2648623736b91.js", "static/chunks/b13ba9de-f3996610a13ef2fa.js", "static/chunks/9b583bcd-a956f8581a67b546.js", "static/chunks/6283-fccb6374df79d7fb.js", "static/chunks/3282-3737fa0c00ef4327.js", "static/chunks/9095-35c79d778f41e0c0.js", "static/chunks/69bd6bf3-29f0b7cb8f105621.js", "static/chunks/3d35b88c-94380eb20cb8081c.js", "static/chunks/998ccc15-8343075f993fae79.js", "static/chunks/91bbf309-b834bec362a19596.js", "static/chunks/a29ae703-644cc4068d44b516.js", "static/css/a8859db864af7fa7.css", "static/chunks/1251-d2062653fae1eb30.js", "static/chunks/8722-db906780555d2ae4.js", "static/chunks/9663-6d0999b0596f4b4e.js", "static/chunks/4530-36170e6eef794a4a.js", "static/chunks/9814d858-6888b4d279a90af0.js", "static/chunks/2797-49faccc8206b5b5e.js", "static/chunks/64bbefcc-33492d4f6fe6291d.js", "static/chunks/8022-d5ee27fd84f88aa8.js", "static/chunks/2638-b8e0cc4039ad01a5.js", "static/chunks/193-4528082eccb468ab.js", "static/chunks/9177-56bea322af3483d2.js", "static/chunks/e13d4e3c-1a621d31351d2409.js", "static/chunks/6038-1b0a7ed638d273f1.js", "static/chunks/867-2a507837be45a62f.js", "static/chunks/3145-3349594f68eb2a49.js", "static/chunks/1785-e46748e435c2014a.js", "static/chunks/109-a7342724b67db1a6.js", "static/chunks/2274-6359b8d00b55b888.js", "static/chunks/1776-3821d1c874a16e25.js", "static/chunks/5017-676b5fff4a6fa192.js", "static/chunks/6407-1fda472788c45e87.js", "static/chunks/7946-5c508f7765cbc325.js", "static/chunks/345-915675a2eea94745.js", "static/chunks/8972-78a8fbcf4e1ff07f.js", "/", "/404", "static/chunks/2759-9ecabc864a79a2ed.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();