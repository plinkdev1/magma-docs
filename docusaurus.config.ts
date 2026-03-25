import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MAGMA Protocol',
  tagline: 'Yield-Bearing Narrative Capital Markets',
  favicon: 'img/favicon.png',

  url: 'https://docs.magmaprotocol.xyz',
  baseUrl: '/',

  organizationName: 'plinkdev1',
  projectName: 'magma-docs',

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
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MAGMA',
      logo: {
        alt: 'MAGMA Protocol',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://magmaprotocol.xyz',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://magmaprotocol.xyz/whitepaper',
          label: 'Whitepaper',
          position: 'right',
        },
        {
          href: 'https://magmaprotocol.xyz/app',
          label: 'Launch App →',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Protocol',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Conviction Score', to: '/conviction-score' },
            { label: 'Echo Pool', to: '/echo-pool' },
            { label: 'Oracle Architecture', to: '/oracle-architecture' },
          ],
        },
        {
          title: 'Token',
          items: [
            { label: 'Token Economics', to: '/token-economics' },
            { label: 'Roadmap', to: '/roadmap' },
            { label: 'Legal & Compliance', to: '/legal' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'X (Twitter)', href: 'https://x.com/magmaprotocol' },
            { label: 'Discord', href: 'https://discord.gg/magma' },
            { label: 'Telegram', href: 'https://t.me/magmaprotocol' },
            { label: 'GitHub', href: 'https://github.com/plinkdev1' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} ExiDante Corp · MAGMA Protocol Corp (Cayman SPC) · $MAGMA is a utility token. Not investment advice.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['typescript', 'rust', 'bash'],
    },
    algolia: undefined,
  } satisfies Preset.ThemeConfig,
};

export default config;
