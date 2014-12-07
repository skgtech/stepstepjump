/**
 * @fileOverview The Ball base module.
 */
var cip = require('cip');

var Component = require('../Level/components/base.comp');

var Ball = module.exports = cip.extend(function () {
  this.value = 0;
});

/**
 * Master run method for ball.
 *
 * @param {app.Level} level Instance of Level.
 */
Ball.prototype.run = function(level) {
  level.struct.forEach(function(component, index) {
    if (Array.isArray(component)) {
      return;
    }

    var res, next, route;

    switch(component.getType()) {
    case Component.Type.IF:

    case Component.Type.IF_LOOP:

    case Component.Type.PLACEHOLDER_IF:

    case Component.Type.PLACEHOLDER_IF_LOOP:
      res = component.calculate(this.value);
      next = index + 1;
      route = res ? 1 : 0;
      this.run(level.struct[next][route]);
      break;

    case Component.Type.OPERATION:
      res = component.calculate(this.value);
      console.log(res);
      break;
    }
  }, this);
};
