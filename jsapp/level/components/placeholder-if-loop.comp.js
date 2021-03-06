/**
 * @fileOverview The Placeholder If Loop component.
 */

var Base = require('./base.comp');

/**
 * The Placeholder If Loop component.
 *
 * @constructor
 * @extends {app.level.component.Base}
 */
var IfLoop = module.exports = Base.extend(function() {
  this.type = Base.Type.PLACEHOLDER_IF_LOOP;

});

/**
 * Draw the component on the underlying vector library.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 */
IfLoop.prototype.draw = function(x1, y1) {
  this.x1 = x1;
  this.y1 = y1;

  // this.vector.two.makeIfLoop(x1, y1, x2, y2);
};

/**
 * Plug in a UI-Component to attach behaviors to this component.
 *
 * @param {app.level.Component} component The UI-components.
 */
IfLoop.prototype.plug = function(/* component */) {

};
