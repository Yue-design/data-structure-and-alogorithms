/*
883 Projection Area of 3D Shapes

A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane.

Here, we are viewing the "shadow" when looking at cubes from the top, the front, and the side.
Return the total area of all three projection.

* @param {number[][]} grid
* @return {number}
*/

var projectionArea = function(grid) {
  let area = 0;
  let first = 0;
  let second = 0;
  let third = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] > second) {
        second = grid[i][j];
      }
      if (grid[j][i] > third) {
        third = grid[j][i];
      }
      if (grid[i][j] > 0) {
        first++;
      }
    }
    area += first + second + third;
    first = 0;
    second = 0;
    third = 0;
  }
  return area;
};

console.log(projectionArea([[2]]));
console.log(
  projectionArea([
    [1, 2],
    [3, 4]
  ])
);
