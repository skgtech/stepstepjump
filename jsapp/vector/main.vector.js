/**
 * @fileOverview The base abstraction for vector graphics.
 */
var ZUI = require('./zoom/zui.vector');
var $ = require('../../bower_components/jquery/dist/jquery');

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
  $stage.bind('mousewheel', function(event) {

    var e = event.originalEvent;
    e.stopPropagation();
    e.preventDefault();

    var dy = e.wheelDeltaY / 1000;

    this.zui.zoomBy(dy, e.clientX, e.clientY);

  }.bind(this));
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
  ln.linewidth = 10;
  return ln;
};

/**
 * Wraps two.update;
 */
Vector.prototype.update = function () {
  this.two.update();
};
