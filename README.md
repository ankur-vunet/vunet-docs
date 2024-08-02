# vunet-docs
VuNet's Documentation Repository for Docusaurus

To create a Docusaurus project with version control, smooth scroll, version dropdown, Algolia search, and sitemap generation using GitHub Desktop, follow these steps:

### Step 1: Creating the GitHub Repository
1. **Create a Repository on GitHub:**
   - Go to [GitHub](https://github.com/) and create a new repository.
   - Clone the repository using GitHub Desktop.

2. **Initialize Docusaurus Project:**
   - Open the terminal in your cloned repository directory.
   - Run the following commands:
     ```sh
     npx create-docusaurus@latest vunet-docs classic
     cd vunet-docs
     ```
     Choose Javascript while creating docusaurus website.

     Test the project by running following command, which will run this in localhost
     ```sh
     npm run start
     ```

     On first run, it may have error: 'docusaurus' is not recognized as an internal or external command, operable program or batch file. If you see this error, install dependencies with:

     ```sh
     npm install -g @docusaurus/core @docusaurus/preset-classic
     ```
     After this, you can re-run the ``npm run start`` and can see the website in action on localhost.


3. **Push Initial Setup to GitHub:**
   - Open GitHub Desktop and commit the changes.
   - Push the initial setup to the GitHub repository.
   - Alternatively, you can do it with vs-code also, directly.

### Step 2: Add Version Control and Smooth Scroll
1. **Update basic configs**
   - In `docusaurus.config.js`, update title, tagline, favicon, url, base url, org name, projject name etc.

2. **Add Scroll to Hash:**
    - Add following js file in `.\src\components\`
      ```js
      import React, { useEffect } from 'react';
      import { useLocation } from 'react-router-dom';

      const ScrollToHash = () => {
        const { hash } = useLocation();

        useEffect(() => {
          if (hash) {
            const id = hash.replace('#', '');

            const scrollToElement = () => {
              const element = document.getElementById(id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                // If the element is not found, try again in a short while
                setTimeout(scrollToElement, 100);
              }
            };

            scrollToElement();
          }
        }, [hash]);

        return null;
      };

      export default ScrollToHash;
      ```
    - And update ``.\sr\theme\Layout.js`` as following:
      ```js
      import React from 'react';
      import Layout from '@theme-original/Layout';
      import ScrollToHash from '../components/ScrollToHash';

      function CustomLayout(props) {
        return (
          <>
            <ScrollToHash />
            <Layout {...props} />
          </>
        );
      }

      export default CustomLayout;
      ```

3. **Version Control:**
   1. Release a version 1.0 of your project:
      ```
      npm run docusaurus docs:version 1.0
      ```
      The docs folder is copied into versioned_docs/version-1.0 and versions.json is created.

      Your docs now have 2 versions:

      - 1.0 at http://localhost:3000/docs/ for the version 1.0 docs
      - current at http://localhost:3000/docs/next/ for the upcoming, unreleased docs
    2. Add a Version Dropdown
      To navigate seamlessly across versions, add a version dropdown. Modify the docusaurus.config.js file:
          ```js title="docusaurus.config.js"
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

### Step 3: Generating Sitemap
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

### Step 4: Configuring Hash Router
1. **Enable Hash Router:**
   - In `docusaurus.config.js`, add the following configuration:
     ```js
     future: {
       experimental_router: 'hash',
     },
     ```

### Step 5: Building and Deploying the Site
1. **Build the Site:**
   - Run `npm run build` to build the site.

2. **Deploying on GitHub Pages:**
   - run following deploy command:
      ```
      cmd /C 'set "GIT_USER=ankur-vunet" && npm run deploy'
      ```
      This will copy the build folder into gh-pages branch. And from same website can be accessed.
   - Since Hash router does not allow sitemap to be generated. You may need to comment hash router in config and rebuild and generate sitemap.xml. And then manually copy this sitemap into gh-pages branch.

### Final `docusaurus.config.js` until here:
Here is the final `docusaurus.config.js` with all configurations, we configured until now:

```js
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VuNet-Docs',
  tagline: 'Welcome to VuNet Documentation!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ankur-vunet.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
          includeCurrentVersion: false, // Exclude 'Current' version from the dropdown
        },
        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VuNet-Docs',
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
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ankur-vunet/vunet-docs',
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
    }),
    future: {
      experimental_router: 'hash',
    },
};

export default config;
```

### Step 6: Adding Algolia Search
1. Deploy the build on netlify.

2. **Algolia Setup**
    - Login to Algolia website
    - Create new application from top Application dropdown.
    - Go to Settings > APplications and Rename the application, if required. Note this application ID.
    - Go to Settings > API Keys.
        - Note down API Keys - Search API Key and Write API Key
        - Write API Key will be used while adding records from deployed website to index.
        - Search API Key will be used on search backend to match search item with index entries and return results.

3. **Creating .env file and config.json file**
These both files shall be created outside docusaurus folder. Sincethese expose write permissions to Algolia.
    - **Creating .env file**
        - Add following info in the .env file
          ```
          APPLICATION_ID=FDOMH2LR75
          API_KEY=d3e0ec9791911783859967d341a122a4
          ```
          Note that this API Key will be write API key.
    - **Creating cofig.json**
        - Add following in config.json file.
        - Make sure to edit: index_name, start_urls, and sitemap_urls.
        ```
        {
          "index_name": "vudocs_algolia",
          "start_urls": [
            "https://ankur-vunet-docs.netlify.app/"
          ],
          "sitemap_urls": [
            "https://ankur-vunet-docs.netlify.app/sitemap.xml"
          ],
          "sitemap_alternate_links": true,
          "stop_urls": [],
          "selectors": {
            "lvl0": {
              "selector": "(//ul[contains(@class,'menu__list')]//a[contains(@class, 'menu__link menu__link--sublist menu__link--active')]/text() | //nav[contains(@class, 'navbar')]//a[contains(@class, 'navbar__link--active')]/text())[last()]",
              "type": "xpath",
              "global": true,
              "default_value": "Documentation"
            },
            "lvl1": "header h1",
            "lvl2": "article h2",
            "lvl3": "article h3",
            "lvl4": "article h4",
            "lvl5": "article h5, article td:first-child",
            "lvl6": "article h6",
            "text": "article p, article li, article td:last-child"
          },
          "strip_chars": " .,;:#",
          "custom_settings": {
            "separatorsToIndex": "_",
            "attributesForFaceting": [
              "language",
              "version",
              "type",
              "docusaurus_tag"
            ],
            "attributesToRetrieve": [
              "hierarchy",
              "content",
              "anchor",
              "url",
              "url_without_anchor",
              "type"
            ]
          },
          "conversation_id": [
            "833762294"
          ],
          "nb_hits": 9510
        }
        ```

4. **Running the Algolia Crawler**
    - Details here: https://docsearch.algolia.com/docs/legacy/run-your-own/#run-the-crawl-from-the-docker-image
    - Open Docker Desktop and keep it running.
    - Open Git Bash and Navigate to the directory where cofig.json and .env are stored:
        ```
        cd "C:\Users\Dell\Documents\VuNet\25_Docusaurus\vunet-docs"
        ```
    - Run following command in gitbash in this directory:
        ```
        winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
        ```
    - THis shall update records on algolia index. Number of records will be shown on git bash cli and same shall be on algolia index.

5. **Configure Algolia Search:**
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
           to: '/docs',
         },
         searchParameters: {},
         searchPagePath: 'search',
         insights: false,
       },
     },
     ```
     And add in navbar:
     ```
     navbar: {
        title: 'VuNet-Docs',
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
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/ankur-vunet/vunet-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
     ```

6. **Deploying Search**
    - Rerun the docusaurus website, test the search in localhost, and then create the build and then dploy and test.



### Example `docusaurus.config.js` with Algolia Search
Here is an example `docusaurus.config.js` with all configurations:

```js
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VuNet-Docs',
  tagline: 'Welcome to VuNet Documentation!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ankur-vunet.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
          includeCurrentVersion: false, // Exclude 'Current' version from the dropdown
        },
        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VuNet-Docs',
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
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ankur-vunet/vunet-docs',
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
    }),

  future: {
    experimental_router: 'hash', // Use the hash router
  },
};

export default config;
```

### Additional Notes:
- For deployment on GitHub Pages, ensure the `baseUrl` and `url` are set correctly in `docusaurus.config.js`.
- Use GitHub Desktop for committing and pushing changes.
- For creating versioned docs, refer to [Docusaurus versioning documentation](https://docusaurus.io/docs/versioning).
- Ensure Algolia DocSearch credentials (`appId`, `apiKey`, `indexName`) are correctly added to the `docusaurus.config.js` file.
