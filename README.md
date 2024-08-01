# vunet-docs
VuNet's Documentation Repository for Docusaurus.

To create a Docusaurus project with version control, smooth scroll, version dropdown, Algolia search, and sitemap generation using GitHub Desktop, follow these steps:

### Step 1: Creating the GitHub Repository
1. **Create a Repository on GitHub:**
   - Go to [GitHub](https://github.com/) and create a new repository.
   - Clone the repository using GitHub Desktop.

2. **Initialize Docusaurus Project:**
   - Open the terminal in your cloned repository directory.
   - Run the following commands:
     ```sh
     npx create-docusaurus@latest my-website classic
     cd my-website
     ```

3. **Push Initial Setup to GitHub:**
   - Open GitHub Desktop and commit the changes.
   - Push the initial setup to the GitHub repository.

### Step 2: Add Version Control and Smooth Scroll
1. **Add Smooth Scroll:**
   - In `docusaurus.config.js`, add smooth scroll:
     ```js
     themeConfig: {
       // other configurations
       smoothScroll: true,
     },
     ```

2. **Version Control:**
   - Add version control by creating `versions.json` and necessary config changes.
   - Create a `versions` folder and add versioned docs.

### Step 3: Adding Algolia Search
1. **Apply for Algolia DocSearch:**
   - Apply for DocSearch and get `appId`, `apiKey`, and `indexName`.

2. **Configure Algolia Search:**
   - In `docusaurus.config.js`, add the Algolia configuration:
     ```js
     themeConfig: {
       algolia: {
         appId: 'YOUR_APP_ID',
         apiKey: 'YOUR_SEARCH_API_KEY',
         indexName: 'YOUR_INDEX_NAME',
         contextualSearch: true,
         externalUrlRegex: 'external\\.com|domain\\.com',
         replaceSearchResultPathname: {
           from: '/docs/',
           to: '/',
         },
         searchParameters: {},
         searchPagePath: 'search',
         insights: false,
       },
     },
     ```

### Step 4: Adding Version Dropdown
1. **Enable Versioning:**
   - Run `npx docusaurus docs:version 1.0.0` to create the first version.
   - Add the versioning configuration in `docusaurus.config.js`:
     ```js
     themeConfig: {
       navbar: {
         items: [
           {
             type: 'docsVersionDropdown',
             position: 'right',
           },
           // other items
         ],
       },
     },
     ```

### Step 5: Generating Sitemap
1. **Add Sitemap Plugin:**
   - Install the sitemap plugin:
     ```sh
     npm install @docusaurus/plugin-sitemap
     ```
   - Add the plugin in `docusaurus.config.js`:
     ```js
     plugins: [
       [
         '@docusaurus/plugin-sitemap',
         {
           changefreq: 'weekly',
           priority: 0.5,
           trailingSlash: false,
         },
       ],
     ],
     ```

### Step 6: Configuring Hash Router
1. **Enable Hash Router:**
   - In `docusaurus.config.js`, add the following configuration:
     ```js
     future: {
       experimental_router: 'hash',
     },
     ```

### Step 7: Building and Deploying the Site
1. **Build the Site:**
   - Run `npm run build` to build the site.

2. **Deploying on GitHub Pages:**
   - In `docusaurus.config.js`, set `url` and `baseUrl` correctly.
   - Follow [Docusaurus GitHub Pages deployment guide](https://docusaurus.io/docs/deployment#deploying-to-github-pages).

3. **Push Build Folder to GitHub Pages:**
   - Switch to `gh-pages` branch using GitHub Desktop.
   - Copy the contents of the `build` folder to the root of the `gh-pages` branch.
   - Commit and push the changes to GitHub.

### Example `docusaurus.config.js`
Here is an example `docusaurus.config.js` with all configurations:

```js
// @ts-check

const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-github-username.github.io',
  baseUrl: '/your-repo-name/',
  organizationName: 'your-github-username',
  projectName: 'your-repo-name',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/your-github-username/your-repo-name',
          label: 'GitHub',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      replaceSearchResultPathname: {
        from: '/docs/',
        to: '/docs/',
      },
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  future: {
    experimental_router: 'hash',
  },
};

module.exports = config;
```

### Additional Notes:
- For deployment on GitHub Pages, ensure the `baseUrl` and `url` are set correctly in `docusaurus.config.js`.
- Use GitHub Desktop for committing and pushing changes.
- For creating versioned docs, refer to [Docusaurus versioning documentation](https://docusaurus.io/docs/versioning).
- Ensure Algolia DocSearch credentials (`appId`, `apiKey`, `indexName`) are correctly added to the `docusaurus.config.js` file.
