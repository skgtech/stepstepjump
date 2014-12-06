/**
 * @fileOverview This is the Score model it saves the models.
 */

/**
 * This is the Score model it saves the models.
 * @constructor
 */
var ScoreModel = module.exports = function() {
  this.Score = Parse.Object.extend('Score');
};

/**
 * Save the score for a user.
 *
 * @param {string} name The name of the use to save.
 * @param {number} score The score of the user to save.
 * @return {Parse.Promise}
 */
ScoreModel.prototype.save = function(name, score) {
  var scoreInstance = new this.Score();
  return scoreInstance.save({
    'user': name,
    'score': score
  });
};
