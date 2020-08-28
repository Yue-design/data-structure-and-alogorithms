/*
628 Maximum Product of Three Numbers

Given an integer array, find three numbes whose product is maximum and output the maximum product.

* @param {number[]} nums
* @return {number}
*/

var maximumProduct = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  let max = nums.length - 1;
  return Math.max(
    nums[0] * nums[1] * nums[max],
    nums[max] * nums[max - 1] * nums[max - 2]
  );
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
