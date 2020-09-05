/*
365 Water and Jug Problem

You need to determine whether it is possible to measure exactly z litres using two jugs with capacities x and y litres.

* @param {number} x
* @param {number} y
* @param {number} z
* @return {boolean}
*/

var canMeasureWater = function(x, y, z) {
  if (z == 0) return true;
  if (x == 0) return z == y;
  if (y == 0) return z == x;
  if (x == y) return z == 0 || z == x || z == 2 * x;
  if (z == x || z == y) return true;
  if (x + y == z) return true;
  if (x + y < z) return false;

  const s = Math.min(x, y);
  const b = Math.max(x, y);
  const g = gcd(b, s);
  return z % g == 0;
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a%b);
}

console.log(canMeasureWater(3, 5, 4));
console.log(canMeasureWater(2, 6, 5));