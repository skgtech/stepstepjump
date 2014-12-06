/**
 * @fileOverview Level 01 controller.
 */

var Vector = require('../vector/main.vector');

/**
 * Level 01 controller.
 *
 * @constructor
 */
var Level01 = module.exports = function () {
  this.vector = new Vector();
};

/**
 * Initialize Level 01.
 *
 */
Level01.prototype.init = function() {
  this.vector.makeLine(50,200, 500, 200);

  this.vector.update();
};
