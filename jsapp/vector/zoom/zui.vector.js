/**
 * @fileOverview Zoom control
 * @see http://jonobr1.github.io/two.js/examples/zui.html
 */
var _ = require('underscore');

var Surface = require('./surface.vector');

var ZUI = module.exports = function(two) {

  this.limits = {
    scale: ZUI.Limit.clone(),
    x: ZUI.Limit.clone(),
    y: ZUI.Limit.clone()
  };

  this.viewport = two.renderer.domElement;
  this.viewportOffset = {
    matrix: new Two.Matrix()
  };

  this.surfaceMatrix = new Two.Matrix();

  this.surfaces = [];
  this.reset();
  this.updateSurface();

  this.add(new Surface(two.scene));

};

ZUI.Surface = Surface;

ZUI.Clamp = function(v, min, max) {
  return Math.min(Math.max(v, min), max);
};

ZUI.Limit = {
  min: -Infinity,
  max: Infinity,
  clone: function() {
    return _.clone(this);
  }
};

ZUI.TranslateMatrix = function(m, x, y) {
  m.elements[2] += x;
  m.elements[5] += y;
  return m;
};

ZUI.PositionToScale = function(pos) {
  return Math.exp(pos);
};

ZUI.ScaleToPosition = function(scale) {
  return Math.log(scale);
};


ZUI.prototype.add = function(surface) {
  this.surfaces.push(surface);
  var limits = surface.limits();
  this.addLimits(limits.min, limits.max);
  return this;
};

ZUI.prototype.addLimits = function(min, max, type) {
  type = type || 'scale';

  if (!_.isUndefined(min)) {
    if (this.limits[type].min) {
      this.limits[type].min = Math.max(min, this.limits[type].min);
    } else {
      this.limits[type].min = min;
    }
  }

  if (_.isUndefined(max)) {
    return this;
  }

  if (this.limits[type].max) {
    this.limits[type].max = Math.min(max, this.limits[type].max);
  } else {
    this.limits[type].max = max;
  }

  return this;

};

/**
 * Conversion Functions
 */

ZUI.prototype.clientToSurface = function(x, y) {
  this.updateOffset();
  var m = this.surfaceMatrix.inverse();
  var n = this.viewportOffset.matrix.inverse().multiply(x, y, 1);
  return m.multiply.apply(m, _.toArray(n));
};

ZUI.prototype.surfaceToClient = function(v) {
  this.updateOffset();
  var vo = this.viewportOffset.matrix.clone();
  var sm = this.surfaceMatrix.multiply.apply(this.surfaceMatrix, _.toArray(v));
  return vo.multiply.apply(vo, _.toArray(sm));
};

/**
 *
 */

ZUI.prototype.zoomBy = function(byF, clientX, clientY) {
  var s = ZUI.PositionToScale(this.zoom + byF);
  this.zoomSet(s, clientX, clientY);
  return this;
};

ZUI.prototype.zoomSet = function(zoom, clientX, clientY) {

  var newScale = this.fitToLimits(zoom);
  this.zoom = ZUI.ScaleToPosition(newScale);

  if (newScale === this.scale) {
    return this;
  }

  var sf = this.clientToSurface(clientX, clientY);
  var scaleBy = newScale / this.scale;

  this.surfaceMatrix.scale(scaleBy);
  this.scale = newScale;

  var c = this.surfaceToClient(sf);
  var dx = clientX - c.x;
  var dy = clientY - c.y;
  this.translateSurface(dx, dy);

  this.updateSurface();

  return this;

};

ZUI.prototype.translateSurface = function(x, y) {
  ZUI.TranslateMatrix(this.surfaceMatrix, x, y);
  return this;
};

ZUI.prototype.updateOffset = function() {

  var rect = this.viewport.getBoundingClientRect();

  function extend (obj) {
    if (!_.isObject(obj)) {
      return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        obj[prop] = source[prop];
      }
    }
    return obj;
  }

  extend(this.viewportOffset, rect);

  this.viewportOffset.left -= document.body.scrollLeft;
  this.viewportOffset.top -= document.body.scrollTop;

  this.viewportOffset.matrix
    .identity()
    .translate(this.viewportOffset.left, this.viewportOffset.top);

  return this;

};

ZUI.prototype.updateSurface = function() {

  var e = this.surfaceMatrix.elements;
  _.each(this.surfaces, function(s) {
    s.apply(e[2], e[5], e[0]);
  });

  return this;

};

ZUI.prototype.reset = function() {
  this.zoom = 0;
  this.scale = 1.0;
  this.surfaceMatrix.identity();
  return this;
};

ZUI.prototype.fitToLimits = function(s) {
  return ZUI.Clamp(s, this.limits.scale.min, this.limits.scale.max);
};

