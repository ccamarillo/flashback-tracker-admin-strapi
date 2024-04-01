'use strict';

/**
 * distortion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::distortion.distortion');
