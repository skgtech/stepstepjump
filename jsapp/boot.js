/**
 * @fileOverview The master bootstrap file of the frontend application.
 */

console.log('Allo!');

Parse.initialize('nu3rE4cjKRgg09PyOxqRrmncVeSeTHXrn7uqt8Cv', '5M7YXlxGkWenHq4MHVUJGhr3PJSOXgszCZymw0Jl');

var Score = Parse.Object.extend('Score');
var score = new Score();
score.save({
    'user': 'foo',
    'score': 1200
}).then(function(object) {
  alert('yay! it worked');
});
