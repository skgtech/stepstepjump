/**

 * @fileOverview The abstract component Ctor.
 */

var cip = require('cip');

/**
 * The abstract component Ctor.
 *
 * @constructor
 */
var Component = module.exports = cip.extend(function (vector) {
  /** @type {?app.level.component.Base.Type} the type */
  this.type = null;
  this.op = null;
  this.num = null;
  this.cpuCost = null;

  /** @type {app.Vector} vector The vector instance */
  this.vector = vector;

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
  IF: 'if',
};

/** @enum {string} The component operations */
Component.Operation = {
  ADD: 'add',
  SUB: 'sub'
};

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 */
Component.prototype.draw = function(/* x1, y1 */) {
  throw new Error('Not Implemented');
};


/**
 * Get the type of the component.
 *
 * @return {app.level.component.Base.Type} The type.
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
  return [
    this.x1,
    this.y1,
  ];
};

/**
 * Calculate the outcome of passing through this component.
 *
 * @param {number} value The value to calculate.
 * @return {number|boolean} The result depending on type.
 */
Component.prototype.calculate = function(value) {
  switch(this.op) {
    case Component.Operation.ADD:
      return value + this.num;
      break;
  }
};

/**
 * Get the CPU Cost of this component.
 *
 * @return {number} The result.
 */
Component.prototype.getCpuCost = function() {
  throw new Error('Not Implemented');
};

/**
 * Define the component's operation
 *
 * @param op {string} The operation type
 * @param num {number} The operation's number
 * @param cpuCost {number} The cpu Cost of the operation
 */
Component.prototype.addComponentOperation = function(op, num, cpuCost) {
  this.op = op;
  this.num = num;
  this.cpuCost = cpuCost;
};
