module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Documentation (EN)',
      items: [
        {
          type: 'category',
          label: 'Overview',
          items: ['en/introduction', 'en/versioning',
                  'en/process-flow', 'en/authentication',
            'en/provider-information', 'en/registration',
          'en/booking', 'en/payment', 'en/activities', 'en/coupons', 'en/loyalty', 'en/questionary'],
        },
        {
          type: 'category',
          label: 'Appendices',
          items: ['en/offer', 'en/privacy', 'en/terms-definitions', 'en/authors-stakeholders'],
        },
        {
          type: 'doc',
          id: 'en/faq',
        }
      ]
    },
    {
      type: 'category',
      label: 'Documentation (RU)',
      items: [
        {
          type: 'category',
          label: 'Обзор',
          items: ['ru/introduction', ],
        },
      ]
    }
      
  ],
  ...require("./docs/v1/sidebar-schema"),
  };