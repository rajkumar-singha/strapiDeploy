'use strict';

/**
 * test-strapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-strapi.test-strapi');
