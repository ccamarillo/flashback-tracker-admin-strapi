'use strict';

/**
 * assumption service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::assumption.assumption');
