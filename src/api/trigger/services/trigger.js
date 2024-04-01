'use strict';

/**
 * trigger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trigger.trigger');
