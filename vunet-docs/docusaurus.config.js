// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VuNet-Docs',
  tagline: 'Welcome to VuNet Documentation!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ankur-vunet.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vunet-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ankur-vunet', // Usually your GitHub org/user name.
  projectName: 'vunet-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /*
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
          versions: {
            current: {
              label: 'WIP 🚧', // This will replace 'Next' with 'Canary'
            },
          },
          includeCurrentVersion: true, // Exclude 'Current' version from the dropdown
        },
        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true, // Enables cache busting by hashing the index filename
        indexDocs: true, // Indexes documentation pages
        indexPages: true, // Indexes non-doc pages like home or custom pages
        docsRouteBasePath: '/', // Adjust this if your docs are not at the root
        highlightSearchTermsOnTargetPage: true,
        language: ['en'], // Set language to support multiple languages if needed
        searchResultLimits: 10, // Number of results to show in the search suggestions
        searchResultContextMaxLength: 50, // Maximum length of the excerpt
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/vunet-social-card.png',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'VuNet-Docs',
        logo: {
          alt: 'My Site Logo',
          //src: 'img/logo.svg',
          src: 'img/Vunet Logo Blue - Copy.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'User Guide',
          },
          { to: '/blog', label: 'Release Notes', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ankur-vunet/vunet-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://vunetsystems.com/',
            label: 'vunetsystems.com',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/intro',
              },
              {
                label: 'Release Notes',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/vunet-systems/',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/vunetsystems',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://github.com/ankur-vunet/vunet-docs',
                label: 'GitHub',
              },
              {
                href: 'https://vunetsystems.com/',
                label: 'vunetsystems.com',
              },
            ],
          },
        ],
        copyright: `© VuNet ${new Date().getFullYear()}. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      /*
      algolia: {
        appId: '33MDRL0XOX',
        apiKey: '6cde8d80bb5dbbcba000f036195ae56c',
        indexName: 'vudocs_algolia',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/docs/',
        },
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
      },
      */
    }),
/*
  future: {
    experimental_router: 'hash', // Use the hash router
  },*/
};

export default config;
