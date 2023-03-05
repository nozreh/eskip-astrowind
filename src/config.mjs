import defaultImage from './assets/images/default.png';

const CONFIG = {
    name: 'ESkip',

    origin: 'https://eskip.vercel.app',
    basePathname: '/',
    trailingSlash: false,

    title: 'ESkip — AI-driven Contactless Ordering and Cashless Payment for Restaurants',
    description: '🚀 Take multiple concurrent orders without increasing your staff members and accept direct payments to your bank account through cashless options with eSkip Philippines. First ever Philippine-made POS system, conceived, and proudly developed by Filipinos.',
    defaultImage: defaultImage,

    defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

    language: 'en',
    textDirection: 'ltr',

    dateFormatter: new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
    }),

    googleAnalyticsId: false, // or "G-XXXXXXXXXX",
    googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

    blog: {
        disabled: false,
        postsPerPage: 4,

        post: {
            permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
            noindex: false,
            disabled: false,
        },

        list: {
            pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
            noindex: false,
            disabled: false,
        },

        category: {
            pathname: 'category', // Category main path /category/some-category
            noindex: true,
            disabled: false,
        },

        tag: {
            pathname: 'tag', // Tag main path /tag/some-tag
            noindex: true,
            disabled: false,
        },
    },
    betaURL: '/beta',
    primaryColor: '#0956A0',
    secondaryColor: '#64BC45'
};

export const SITE = {...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;