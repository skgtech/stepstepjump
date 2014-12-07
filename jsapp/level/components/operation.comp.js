/**
 * @fileOverview The Operation component.
 */

var Base = require('./base.comp');

/**
 * The Operation component.
 *
 * @constructor
 * @extends {app.level.component.Base}
 */
var Operation = module.exports = Base.extend(function () {
  this.type = Base.Type.OPERATION;

  /** @type {?number} Width */
  this.w = null;
  /** @type {?number} Height */
  this.h = null;
});

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x The x position.
 * @param {number} y The y position.
 * @param {number} w  The width.
 * @param {number} h The height.
 */
Operation.prototype.draw = function (x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.vector.makeRectangle(x, y, w, h);
};

/**
 * Calculate the outcome of passing through this component.
 *
 * @param {number} value The value to calculate.
 * @return {number|boolean} The result depending on type.
 */
Operation.prototype.calculate = function (/* value */) {

};

/**
 * Plug in a UI-Component to attach behaviors to this component.
 *
 * @param {app.level.Component} component The UI-components.
 */
Operation.prototype.plug = function (/* component */) {

};
