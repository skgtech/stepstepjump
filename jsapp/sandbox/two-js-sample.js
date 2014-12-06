/**
 * @fileOverview Some two.js samples to get us going...
 */

var two = module.exports = {};

/**
 * GO
 *
 */
two.init = function() {
  // Make an instance of two and place it on the page.
  var elem = document.getElementById('draw-shapes');
  var params = {
    fullscreen: true,
  };
  var two = new Two(params).appendTo(elem);

  var ln1 = two.makeLine(50,100, 500, 100);
  ln1.stroke = '#333';
  ln1.linewidth = 10;

  // two has convenience methods to create shapes.
  var circle = two.makeCircle(72, 100, 50);
  var rect = two.makeRectangle(213, 100, 100, 100);

  // The object returned has many stylable properties:
  circle.fill = '#FF8000';
  circle.stroke = 'orangered'; // Accepts all valid css color
  circle.linewidth = 5;

  rect.fill = 'rgb(0, 200, 255)';
  rect.opacity = 0.75;
  rect.noStroke();


  two.update();
};
