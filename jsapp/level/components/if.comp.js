/**
 * @fileOverview The If component.
 */

var Base = require('./base.comp');

/**
 * The if component.
 *
 * @constructor
 * @extends {app.level.component.Base}
 */
var If = module.exports = Base.extend(function() {
  this.type = Base.Type.IF;

  /** @type {?number} Pos x2 */
  this.x2 = null;
  /** @type {?number} Pos y2 */
  this.y2 = null;
  /** @type {?number} Pos x3 */
  this.x3 = null;
  /** @type {?number} Pos y3 */
  this.y3 = null;
});

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} x2 The x2 position.
 * @param {number} y2 The y2 position.
 * @param {number} x3 The x3 position.
 * @param {number} y3 The y3 position.
 */
If.prototype.draw = function(x1, y1, x2, y2, x3, y3) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;

  this.vector.makePolygon(x1, y1, x2, y2, x3, y3);
};

/**
 * Get the position of the component. Left most middle height point.
 *
 * @return {Array} The type.
 */
If.prototype.getPosition = function() {
  return [
    this.x1,
    this.y1,
  ];
};

