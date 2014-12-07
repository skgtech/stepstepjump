/**
 * @fileOverview The base level designer.
 */
var cip = require('cip');

var Line = require('./components/line.comp');
var If = require('./components/if.comp');

/**
 * The base level designer.
 *
 * @param {app.Vector} vector The vector instance.
 * @constructor
 */
var Level = module.exports = cip.extend(function (vector) {
  /** @type {app.Vector} vector The vector instance */
  this.vector = vector;

  /** @type {Array} The internal level design */
  this.struct = [];
});

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} x2 The x2 position.
 * @param {number} y2 The y2 position.
 * @return {self} Chainable.
 */
Level.prototype.makeLine = function(x1, x2, y1, y2) {
  var line = new Line(this.vector);
  line.draw(x1, x2, y1, y2);

  this.struct.push(line);

  return this;
};

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} x2 The x2 position.
 * @param {number} y2 The y2 position.
 * @param {number} x3 The x3 position.
 * @param {number} y3 The y3 position.
 * @return {self} Chainable.
 */
Level.prototype.makeIf = function(x1, y1, x2, y2, x3, y3) {
  var triangle = new If(this.vector);
  triangle.draw(x1, y1, x2, y2, x3, y3);

  this.struct.push(line);

  return this;
};

/**
 * Draw the Placeholder IF.
 *
 * @param {Object} params The required parameters.
 *   @param {number} x1 The x1 position.
 *   @param {number} y1 The y1 position.
 *   @param {app.Level} routeZero The route on zero outcome.
 *   @param {app.Level} routeOne The route on one outcome.
 * @return {self} Chainable
 */
// Level.prototype.makePlaceholderIf = function(params) {
//   var placeholderIf = new PlaceholderIf(this.vector);

//   placeholderIf.draw(params.x1, params.y1);

//   this.struct.push(placeholderIf);
//   this.struct.push([params.routeZero, params.routeOne]);

//   return this;
// };


/**
 * Draw the Placeholder IF.
 *
 * @param {Object} params The required parameters.
 *   @param {number} x1 The x1 position.
 *   @param {number} y1 The y1 position.
 *   @param {app.Level} routeZero The route on zero outcome.
 *   @param {app.Level} routeLoop The route on one outcome.
 * @return {self} Chainable
 */
// Level.prototype.makePlaceholderIfLoop = function(params) {
//   var placeholderIf = new PlaceholderIfLoop(this.vector);

//   placeholderIf.draw(params.x1, params.y1);

//   this.struct.push(placeholderIf);
//   this.struct.push([params.routeZero, params.routeOne]);

//   return this;
// };

// line(x1, y1, x2, y2)
// placeholderIf({x, y, routeZero, routeOne})
// placeholderIfLoop({x, y, routeZero, routeLoop})
// placeholderOperation(x, y)
// operation(x, y)
// if-loop({x, y, routeZero, routeLoop})
// addComponentOperation(operation, num, cpuCost)
// addComponentConditional(condition, num, cpuCost)
