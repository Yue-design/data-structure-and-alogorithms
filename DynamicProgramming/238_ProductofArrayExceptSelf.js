/*
238 Product of Array Except Self

Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Constraints:
1) fits in a 32 bit integer
2) without division

* @param {number[]} nums
* @return {number[]}

The output array does not count as extra space.
*/

var productExceptSelf = function(nums) {
  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let i = nums.length - 2; i > -1; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  } 
  return left.map((val, index) => val * right[index]);
};

console.log(productExceptSelf([1, 2, 3, 4]));