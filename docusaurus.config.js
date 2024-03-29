module.exports = {
  title: 'motu-api',
  tagline: 'Documentation',
  url: 'http://developer.motu.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'myopentour', // Usually your GitHub org/user name.
  projectName: 'motu-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'MyOpenTour Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/en/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api',
          label: 'API',
          position: 'left',
        },
        {
          to: '/v1/schema',
          label: 'GraphQL',
          position: 'left',
        },
        {
          to: 'sdk',
          label: 'SDK',
          position: 'left',
        },
        {
          href: 'https://stats.uptimerobot.com/w7wE4fLrnW',
          label: 'Status',
          position: 'right'
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/myopentour',
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
              label: 'English',
              to: '/en/introduction',
            },
            {
              label: 'Russian',
              to: '/ru/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://motuworld.slack.com',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/motu.world',
            },
            {
              label: 'VK',
              href: 'https://vk.com/motu.world',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/myopentour',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MyOpenTour.`,
    },
    moesif: {
      applicationId: 'eyJhcHAiOiIzNjU6MzMyIiwidmVyIjoiMi4wIiwib3JnIjoiNjkwOjI0NiIsImlhdCI6MTYxNzIzNTIwMH0.50hp7y1hYyw7ZfB5L1nbrDTh93eWThgNCK1Zwa729I8',
      // Add other Moesif options here.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/myopentour/motu-docs/edit/master/motu-docs/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/myopentour/motu-docs/edit/master/motu-docs/blog/',
        },
        api: {
          routeBasePath: '/api',
          // sidebarPath: require.resolve('./api/sidebar-schema.js'),
        },
        gtag: {
          trackingID: 'UA-128220048-1',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ],
  ],
  plugins: [
    [
      "@edno/docusaurus2-graphql-doc-generator",
      {
        schema: "https://beta.motu.world/graphql",
        rootPath: "./docs", // docs will be generated under './docs/v1' (rootPath/baseURL)
        baseURL: "v1",
        homepage: "./docs/schema.md",
      },
    ],
    'docusaurus-plugin-moesif',
  ],
};
