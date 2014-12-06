/**
 * @fileOverview The line component.
 */

var Base = require('./base');

/**
 * The line component.
 *
 * @constructor
 * @extends {app.level.component.Base}
 */
var Line = module.exports = Base.extend(function() {
  this.type = Base.Type.LINE;

  /** @type {?number} Pos x2 */
  this.x2 = null;
  /** @type {?number} Pos y2 */
  this.y2 = null;
});

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} x2 The x2 position.
 * @param {number} y2 The y2 position.
 */
Line.prototype.draw = function(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;

  this.vector.two.makeLine(x1, y1, x2, y2);
};

/**
 * Get the position of the component.
 *
 * @return {Array} The type.
 */
Line.prototype.getPosition = function() {
  return [
    this.x1,
    this.y1,
    this.x2,
    this.y2,
  ];
};

