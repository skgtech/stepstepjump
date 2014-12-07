/**
 * @fileOverview The base abstraction for vector graphics.
 */
var ZUI = require('./zoom/zui.vector');
var $ = require('../../bower_components/jquery/dist/jquery');
require('jquery-mousewheel')($);

/**
 * The base abstraction for vector graphics.
 *
 * @constructor
 */
var Vector = module.exports = function() {
  // Make an instance of two and place it on the page.
  var elem = document.getElementById('draw-shapes');
  var params = {
    fullscreen: true,
    autostart: true,
  };
  /** @type {Two} Local instance of Two. */
  this.two = new Two(params).appendTo(elem);


  this.zui = new ZUI(this.two);
  this.zui.addLimits(0.06, 8);
  var $stage = $('body');
  $stage.bind('mousewheel', function(e) {
    e.stopPropagation();
    e.preventDefault();

    var dy = e.deltaY / 10;

    this.zui.zoomBy(dy, e.clientX, e.clientY);

  }.bind(this));

  console.log('width:', this.two.width);
  console.log('height:', this.two.height);
};

/**
 * Will make a line.
 *
 * @param {number} x1 The x1 parameter.
 * @param {number} y1 The y1 parameter.
 * @param {number} x2 The x2 parameter.
 * @param {number} y2 The y2 parameter.
 * @return {Two.polygon} The polygon object.
 */
Vector.prototype.makeLine = function(x1, y1, x2, y2) {
  var ln = this.two.makeLine(x1, y1, x2, y2);
  ln.stroke = '#333';
  ln.linewidth = 6;
  return ln;
};

/**
 * Will make a triangle.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} x2 The x2 position.
 * @param {number} y2 The y2 position.
 * @param {number} x3 The x3 position.
 * @param {number} y3 The y3 position.
 * @return {Two.polygon} The polygon object.
 */
Vector.prototype.makePolygon = function(x1, y1, x2, y2, x3, y3) {
  var tr = this.two.makePolygon(x1, y1, x2, y2, x3, y3, false);
  return tr;
};

/**
 * Will make a rectangle.
 *
 * @param {number} x1 The x1 position.
 * @param {number} y1 The y1 position.
 * @param {number} w The width.
 * @param {number} h The height.
 * @return {Two.polygon} The polygon object.
 */
Vector.prototype.makeRectangle = function(x, y, w, h) {
  var rec = this.two.makeRectangle(x, y, w, h);
  return rec;
};

/**
 * Wraps two.update;
 */
Vector.prototype.update = function () {
  this.two.update();
};
