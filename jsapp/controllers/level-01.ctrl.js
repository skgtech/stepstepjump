/**
 * @fileOverview Level 01 controller.
 */

var Vector = require('../vector/main.vector');
var Level = require('../level/level.base');
var Toolbox = require('../toolbox/toolbox.base');
var $ = require('../../bower_components/jquery/dist/jquery');
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

  this.vector = new Vector(true);

  this.toolboxVector = new Vector();
  this.ball = new Ball();

//  var levelPart1 = new Level(this.vector);
//  var levelPartLoop1 = new Level(this.vector);

//  levelPartLoop1.makePlaceholderOperation(600, 400);
//  levelPartLoop1.makePlaceholderOperation(650, 420);

  var level = new Level(this.vector);
  var toolbox = new Toolbox(this.toolboxVector);

  $(window).bind('click', function(e) {
      var comp = level.getComponentAt(e.clientX, e.clientY);
      if(comp && toolbox.isReadyToDock) {
        console.log('Placeholder:');
        console.log(comp);
        console.log('Component:');
        console.log(toolbox.compToDock);
        toolbox.isReadyToDock = false;
      }
    });

  toolbox.draw();

  level.makeLine(50, 60, 100, 60);
  level.makeOperation(100, 60, 50, 50).addOperation('add', 2, 20);
  level.makeLine(150, 60, 200, 60);

//  level.makePlaceholderIfLoop({
//    x1: 500,
//    y1: 200,
//    routeZero: levelPart1,
//    routeLoop: levelPartLoop1,
//  });

  this.vector.update();

  this.ball.run(level);
};
