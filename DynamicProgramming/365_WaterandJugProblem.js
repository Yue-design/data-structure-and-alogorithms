/*
365 Water and Jug Problem

You need to determine whether it is possible to measure exactly z litres using two jugs with capacities x and y litres.

* @param {number} x
* @param {number} y
* @param {number} z
* @return {boolean}

helper function: greatest common divisor
*/

var canMeasureWater = function(x, y, z) {
  if ( x + y < z) return false;
  const gcd = ( x, y) => {
    if ( y === 0 ) return x;
    return gcd(y, x%y); 
  }
  if ( x == z || y == z || x + y == z) return true;
  return z % gcd(x, y) === 0;
};

console.log(canMeasureWater(3, 5, 4));
console.log(canMeasureWater(2, 6, 5));

var canMeasureWater1 = function(x, y, z) {
  if (z == 0) return true;
  if (x == 0) return z == y;
  if (y == 0) return z == x;
  if (x == y) return z == 0 || z == x || z == 2 * x;
  if (z == x || z == y) return true;
  if (x + y == z) return true;
  if (x + y < z) return false;

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a%b);
  }

  const s = Math.min(x, y);
  const b = Math.max(x, y);
  const g = gcd(b, s);
  return z % g == 0;
};

console.log(canMeasureWater1(3, 5, 4));
console.log(canMeasureWater1(2, 6, 5));