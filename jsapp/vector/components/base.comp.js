/**

 * @fileOverview The abstract component Ctor.
 */

var cip = require('cip');

/**
 * The abstract component Ctor.
 *
 * @constructor
 */
var Component = module.exports = cip.extend(function () {
  /** @type {?app.vector.component.Base.Type} the type */
  this.type = null;

  /** @type {?number} Pos x */
  this.x1 = null;
  /** @type {?number} Pos y */
  this.y1 = null;
});

/** @enum {string} The component types */
Component.Type = {
  LINE: 'line',
  PLACEHOLDER_IF: 'placeholderIf',
  PLACEHOLDER_IF_LOOP: 'placeholderIfLoop',
  PLACEHOLDER_OPERATION: 'placeholderOperation',
  OPERATION: 'operation',
  IF_LOOP: 'ifLoop',
};

/**
 * Get the type of the component.
 *
 * @return {app.vector.component.Base.Type} The type.
 */
Component.prototype.getType = function() {
  return this.type;
};

/**
 * Get the position of the component.
 *
 * @return {Array} The type.
 */
Component.prototype.getPosition = function() {
  throw new Error('Not Implemented');
};

/**
 * Calculate the outcome of passign through this component.
 *
 * @param {number} value The value to calculate.
 * @return {number|boolean} The result depending on type.
 */
Component.prototype.calculate = function(/* arg */) {
  throw new Error('Not Implemented');
};

/**
 * Get the CPU Cost of this component.
 *
 * @return {number} The result.
 */
Component.prototype.getCpuCost = function() {
  throw new Error('Not Implemented');
};
