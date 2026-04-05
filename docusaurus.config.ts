import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "pndhkm";
const projectName = "pndhkm.github.io";

const config: Config = {
  title: 'Undang Knowledge Base',
  tagline: 'Instant digital invitations',
  favicon: 'img/ava.png',

  future: {
    v4: true,
  },

  url: `https://${organizationName}.github.io`,
  baseUrl: `/`,
  organizationName,
  projectName,

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs from the root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],


  themeConfig: {
    backToTopButton: true,
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Undang XYZ Logo',
        src: 'img/logo.png',
        height: 48,
      },
      items: [], // Removed 'Dokumentasi' link as it's now the homepage
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Undang XYZ.`,
    },

    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    'docusaurus-plugin-image-zoom',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],

};

export default config;