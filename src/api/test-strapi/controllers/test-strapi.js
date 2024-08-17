'use strict';

/**
 * test-strapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-strapi.test-strapi');
