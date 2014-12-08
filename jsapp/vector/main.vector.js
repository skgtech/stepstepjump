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
 *
 * @param {boolean} zoomable True if the zoom ui must be enabled.
 */
var Vector = module.exports = function(zoomable) {
  // Make an instance of two and place it on the page.
  var elem = document.getElementById('draw-shapes');
  var params = {
    fullscreen: true,
    autostart: true,
  };
  /** @type {Two} Local instance of Two. */
  this.two = new Two(params).appendTo(elem);

  if (zoomable) {
    this.zui = new ZUI(this.two);
    this.zui.addLimits(0.06, 8);
    var $stage = $('body');
    $stage.bind('mousewheel', function(e) {
      e.stopPropagation();
      e.preventDefault();

      var dy = e.deltaY / 10;

      this.zui.zoomBy(dy, e.clientX, e.clientY);

    }.bind(this));
  }

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
Vector.prototype.makeRectangle = function(x1, y1, w, h) {
  var rec = this.two.makeRectangle(x1, y1, w, h);
  return rec;
};

/**
 * Wraps two.update;
 */
Vector.prototype.update = function () {
  this.two.update();
};

/**
 * Returns the height of the canvas.
 * @return {number} The height of the canvas.
 */
Vector.prototype.getCanvasHeight = function () {
  return this.two.height;
};

/**
 * Returns the width of the canvas.
 *
 * @return {number} The width of the canvas.
 */
Vector.prototype.getCanvasWidth = function () {
  return this.two.width;
};

/**
 * Draws a rectangle
 *
 *@param {number} x The left-most x coordinate of the rectangle.
 *@param {number} y The center y coordinate of the rectangle.
 *@param {number} width The width of the rectangle.
 *@param {number} height The height of the rectangle.
 *@return {Two.Polygon} The rectangle.
 */
Vector.prototype.makeRectangle = function (x, y, width, height) {
  var centerX = x + width / 2,
      centerY = y;
  return this.two.makeRectangle(centerX, centerY, width, height);
};

/**
 * Binds and event.
 *
 * @param {string} eventName The name of the event.
 * @param {function} callback The callback to call when the appropriate events are fired.
 * @param {context} the context in which to execute the callback.
 */
Vector.prototype.bind = function (eventName, callback, context) {
  this.two.bind(eventName, callback, context);
};
