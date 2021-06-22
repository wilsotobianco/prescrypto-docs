const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Prescrypto Docs',
  tagline: 'Everything about our API, Integrations and Pharmacy docs',
  url: 'https://prescrypto.github.io',
  baseUrl: '/prescrypto-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Prescrypto', // Usually your GitHub org/user name.
  projectName: 'prescrypto-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Prescrypto Docs',
      logo: {
        alt: 'Prescrypto Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: 'https://blog.prescrypto.com/', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Prescrypto/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.prescrypto.com/contact',
          label: 'Developer Contact',
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
              label: 'Facebook',
              href: 'https://www.facebook.com/prescrypto/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pre_rx',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.prescrypto.com/',
            },
            {
              label: 'Prescrypto Page',
              href: 'https://www.prescrypto.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Prescrypto Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
