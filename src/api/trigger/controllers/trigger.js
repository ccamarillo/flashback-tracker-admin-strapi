'use strict';

/**
 * trigger controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::trigger.trigger');
