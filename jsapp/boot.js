/**
 * @fileOverview The master bootstrap file of the frontend application.
 */
var parseService = require('./services/parse.service');
parseService.init();

var Level01 = require('./controllers/level-01.ctrl');

var level01 = new Level01();
level01.init();

/* @todo: save to Parse.com */
/* $('modal').modal('show'); */
