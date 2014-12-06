var ScoreModel = module.exports = function() {
  this.Score = Parse.Object.extend('Score');
};

ScoreModel.prototype.save = function(score) {
  score.save();
};
