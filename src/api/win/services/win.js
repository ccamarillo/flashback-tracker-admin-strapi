'use strict';

/**
 * win service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::win.win');
