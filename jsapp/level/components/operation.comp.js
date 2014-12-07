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
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} w  The width.
 * @param {number} h The height.
 */
Operation.prototype.draw = function (x1, y1) {
  this.x1 = x1;
  this.y1 = y1;
  this.w = 30;
  this.h = 30;

  this.vector.makeRectangle(this.x1, this.y1, this.w, this.h);
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
