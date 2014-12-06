/**
 * @fileOverview Zoom control, surface declaration.
 * @see http://jonobr1.github.io/two.js/examples/zui.html
 */

var _ = require('underscore');

var Surface = module.exports = function(object) {
  this.object = object;
};

Surface.prototype.limits = function(min, max) {

  var minExists = !_.isUndefined(min);
  var maxExists = !_.isUndefined(max);

  if (!maxExists && !minExists) {
    return { min: this.min, max: this.max };
  }

  this.min = minExists ? min : this.min;
  this.max = maxExists ? max : this.max;

  return this;

};

Surface.prototype.apply = function(px, py, s) {
  this.object.translation.set(px, py);
  this.object.scale = s;
  return this;
};
