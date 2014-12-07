/**
 * @fileOverview The base toolbox designer.
 */
var Level = require('../level/level.base');
var $ = require('../../bower_components/jquery/dist/jquery');


/**
 * The Toolbox constructor.
 * @constructor
 */
var Toolbox = module.exports = function (vector) {
  /** @type {app.Vector} vector The vector instance */
  this.vector = vector;
  /** @type {number} width The width of the toolbox */
  this.width = 100;
  /** @type {number} height The height of the toolbox */
  this.height = vector.getCanvasHeight();
  /** @type {number} x The left-most x coordinate */
  this.x = vector.getCanvasWidth() - this.width;
  /** @type {number} y The center y coordinate */
  this.y = this.height / 2;
};

/**
 * Draw the toolbox on the underlying vector library.
 */
Toolbox.prototype.draw = function() {

  var level = new Level(this.vector);

  this.vector.makeRectangle(this.x, this.y, this.width, this.height);

  var upperMostY = this.y - this.height / 2,
      drawY = upperMostY + 50,
      drawX = this.x + 30;

  level.makeIf(drawX, drawY);
  drawY += 90;

  level.makeIfLoop(drawX, drawY);
  drawY += 90;

  level.makeOperation(drawX, drawY);
  drawY += 90;

  level.makeIfLoop(drawX, drawY);
  drawY += 90;

  level.makeIf(drawX, drawY);
  drawY += 90;

  level.makeIfLoop(drawX, drawY);
  drawY += 90;

  level.makeOperation(drawX, drawY);
  drawY += 90;

  var that = this;
  $(window).bind('click', function(e) {
    console.log(that.containsPoint(e.clientX, e.clientY));
  });
};

/**
 * Checks if a point is inside the toolbox.
 *
 * @param {number} x The x coordonate.
 * @param {number} y The y coordinate.
 * @param {boolean} True if the coordinates are inside the toolbox.
 */
Toolbox.prototype.containsPoint = function(x, y) {
  var leftMostX = this.x,
      rightMostX = this.x + this.width,
      upperMostY = this.y - this.height / 2,
      lowerMostY = this.y + this.height / 2;
  return x >= leftMostX && x <= rightMostX &&
    y >= upperMostY &&   y <= lowerMostY;
};
