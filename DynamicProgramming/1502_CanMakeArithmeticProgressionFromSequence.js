/*
1502 Can Make Arithmetic Progression From Sequence

Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two concecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

* @param {number[]} arr
* @return {boolean}
*/

var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let diff = arr[1] - arr[0];
  if (arr.length <= 1) {
    return true;
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
