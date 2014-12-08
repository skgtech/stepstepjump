/**
 * @fileOverview The base level designer.
 */
var cip = require('cip');

var Line = require('./components/line.comp');
var If = require('./components/if.comp');
var IfLoop = require('./components/ifLoop.comp');
var Operation = require('./components/operation.comp');

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
 * Draw the line on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} x2 The x2 position.
 * @param {number} y2 The y2 position.
 * @return {app.level.component.Line} The Line Component
 */
Level.prototype.makeLine = function(x1, x2, y1, y2) {
  var line = new Line(this.vector);
  line.draw(x1, x2, y1, y2);

  this.struct.push(line);

  return line;
};

/**
 * Draw the if on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @return {app.level.component.If} The If Component
 */
Level.prototype.makeIf = function(x1, y1) {
  var triangle = new If(this.vector);
  triangle.draw(x1, y1);

  this.struct.push(triangle);

  return triangle;
};

/**
 * Draw the if loop on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @return {app.level.component.IfLoop} The IfLoop Component
 */
Level.prototype.makeIfLoop = function(x1, y1) {
  var ifLoop = new IfLoop(this.vector);
  ifLoop.draw(x1, y1);

  this.struct.push(ifLoop);

  return ifLoop;
};

/**
 * Draw an Operation on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} w The width.
 * @param {number} h The height.
 * @return {app.level.component.Operation The Operation Component
 */
Level.prototype.makeOperation = function(x1, y1) {
  var op = new Operation(this.vector);
  op.draw(x1, y1);

  this.struct.push(op);

  return op;
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

/**
 * Returns the component under a point.
 *
 * @param {number} x The x coordinate of the point.
 * @param {number} y The y coordinate of the point.
 * @return {?app.components.Base} The component under the given point.
 */
Level.prototype.getComponentAt = function (x, y) {
  var result;
  this.struct.some(function(e) {
    var boundingRect = e.getShape().getBoundingClientRect();
    var leftMostX = boundingRect.left,
        rightMostX = boundingRect.left + boundingRect.width,
        upperMostY = boundingRect.top,
        lowerMostY = boundingRect.top + boundingRect.height;
    var isPointInRect = x >= leftMostX && x <= rightMostX &&
      y >= upperMostY &&   y <= lowerMostY;
    return isPointInRect && (result = e);
  });
  return result;
};

// line(x1, y1, x2, y2)
// placeholderIf({x, y, routeZero, routeOne})
// placeholderIfLoop({x, y, routeZero, routeLoop})
// placeholderOperation(x, y)
// operation(x, y)
// if-loop({x, y, routeZero, routeLoop})
// addComponentOperation(operation, num, cpuCost)
// addComponentConditional(condition, num, cpuCost)
