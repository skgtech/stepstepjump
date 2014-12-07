/**
 * @fileOverview The master bootstrap file of the frontend application.
 */
var parseService = require('./services/parse.service');
parseService.init();

var Level01 = require('./controllers/level-01.ctrl');


var level01 = new Level01();
level01.init();

var $ = require('../bower_components/jquery/dist/jquery.js');
$('#modalSaveToParse').modal('show');

var scoreModel = require('./models/score.model.js');
var scoreModelInstance = new scoreModel();

// get name and score

scoreModelInstance.save( /* name, score */);
