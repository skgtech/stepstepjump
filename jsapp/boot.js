/**
 * @fileOverview The master bootstrap file of the frontend application.
 */
var parseService = require('./services/parse.service');
parseService.init();


var two = require('./sandbox/two-js-sample');
two.init();
