/**
 * @fileOverview The master bootstrap file of the frontend application.
 */
var ScoreModel = require('./models/score.model.js');
console.log('Allo!');

var score = new ScoreModel.Score();
//score.save({
//    'user': 'foo',
//    'score': 1200
//}).then(function() {
//  console.log('yay! it worked');
//});
