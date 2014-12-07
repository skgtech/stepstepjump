/**
 * @fileOverview Level 01 controller.
 */

var Vector = require('../vector/main.vector');
var Level = require('../level/level.base');
var Ball = require('../ball/ball.base');

/**
 * Level 01 controller.
 *
 * @constructor
 */
var Level01 = module.exports = function () {
};

/**
 * Initialize Level 01.
 *
 */
Level01.prototype.init = function() {

  this.vector = new Vector();
  this.ball = new Ball();

//  var levelPart1 = new Level(this.vector);
//  var levelPartLoop1 = new Level(this.vector);

//  levelPartLoop1.makePlaceholderOperation(600, 400);
//  levelPartLoop1.makePlaceholderOperation(650, 420);

  var level = new Level(this.vector);

  level.makeLine(50, 60, 100, 60);
  level.makeIf(100, 60);
  level.makeLine(130, 60, 180, 240);
  level.makeIfLoop(180, 240);
  level.makeLine(210, 260, 310, 220);
  level.makeOperation(310, 220);

//  level.makePlaceholderIfLoop({
//    x1: 500,
//    y1: 200,
//    routeZero: levelPart1,
//    routeLoop: levelPartLoop1,
//  });

  this.vector.update();

  this.ball.run(level);
};
