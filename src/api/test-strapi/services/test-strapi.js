'use strict';

/**
 * test-strapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-strapi.test-strapi');
