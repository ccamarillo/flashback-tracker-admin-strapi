module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'],
    }
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public'
];
 
