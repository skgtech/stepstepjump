/**
 * @fileOverview The line component.
 */

var Base = require('./base');

/**
 * The line component.
 *
 * @constructor
 * @extends {app.vector.component.Base}
 */
var Line = module.exports = Base.extend(function() {
  this.type = Base.Type.LINE;

  /** @type {?number} Pos x2 */
  this.x2 = null;
  /** @type {?number} Pos y2 */
  this.y2 = null;
});

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
