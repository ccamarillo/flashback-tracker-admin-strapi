'use strict';

/**
 * flashback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flashback.flashback');
