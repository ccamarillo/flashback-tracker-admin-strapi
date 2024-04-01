'use strict';

/**
 * trigger router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trigger.trigger');
