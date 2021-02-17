module.exports = {
    docs: [
      {
        type: 'category',
        label: 'MyOpenTour',
        items: ['doc1', 'doc2'],
      },
      {
        type: 'category',
        label: 'FAQ',
        items: ['faq'],
    },
    {
      type: 'category',
      label: 'Public offer',
      items: ['offer'],
    },
    {
      type: 'category',
      label: 'Privacy policy',
      items: ['privacy'],
    },
  ],
  ...require("./docs/v1/sidebar-schema"),
  };