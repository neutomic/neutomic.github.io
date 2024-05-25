import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Neutomic',
  tagline: 'build fast, run faster.',
  favicon: 'images/white.svg',

  // Set the production url of your site here
  url: 'https://neutomic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'neutomic', // Usually your GitHub org/user name.
  projectName: 'neutomic.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/neutomic/neutomic.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/neutomic/neutomic.github.io/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
        { ref: "mask-icon", href: "icons/safari-pinned-tab.svg", color: "#e63946" },
        { ref: "apple-touch-icon", href: "icons/apple-touch-icon.png" },
        { name: "theme-color", content: "#e63946" },
    ],
    navbar: {
      title: 'Neutomic',
      logo: {
        alt: 'Neutomic Logo',
        src: 'images/transparent.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/neutomic/neutomic',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/introduction',
            },
            {
              label: 'Routing',
              to: '/docs/routing',
            },
            {
              label: 'Middleware',
              to: '/docs/middleware',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Saif Eddin Gmati. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['php', 'php-extras', 'phpdoc', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
