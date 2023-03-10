import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
    links: [{
            text: 'Home',
            href: '/',
        },
        {
            text: 'What is eskip?',
            href: '#what-is-eskip',
        },
        {
            text: 'Features',
            href: '#features',
        },
        {
            text: 'Pages',
            links: [{
                    text: 'Meet the Team',
                    href: '#meet-the-team',
                },
                {
                    text: 'Pricing',
                    href: '#',
                },
                {
                    text: 'About us',
                    href: '#',
                },
                {
                    text: 'Contact',
                    href: '#',
                },
                {
                    text: 'Terms',
                    href: getPermalink('/terms'),
                },
                {
                    text: 'Privacy policy',
                    href: getPermalink('/privacy'),
                },
            ],
        },
        {
            text: 'FAQs',
            href: '#faqs',
        },
        {
            text: 'Blog',
            href: getBlogPermalink(),
        },
    ],
    actions: [
        { type: 'button', text: 'Learn More', href: 'https://eskip.vercelapp.com/beta' }
    ],
};

export const footerData = {
    links: [{
            title: 'Product',
            links: [
                { text: 'Features', href: '#' },
                { text: 'Security', href: '#' },
                { text: 'Team', href: '#' },
                { text: 'Enterprise', href: '#' },
                { text: 'Customer stories', href: '#' },
                { text: 'Join Beta Program', href: '#' },
            ],
        },
        {
            title: 'Platform',
            links: [
                { text: 'Partners', href: '#' },
            ],
        },
        {
            title: 'Support',
            links: [
                { text: 'Docs', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { text: 'About', href: '#' },
                { text: 'Blog', href: '#' },
                { text: 'Careers', href: '#' },
            ],
        },
    ],
    secondaryLinks: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
        { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
        { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
        { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/eskip' },
    ],
    footNote: `
    Made with 🫶🏼 by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://herzongarlan.com/"> Herz</a> · All rights reserved.
  `,
};