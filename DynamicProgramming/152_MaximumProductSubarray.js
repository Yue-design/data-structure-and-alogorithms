/*
152 Maximum Product Subarray

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

* @param {number[]} nums
* @return {number}

Time Complexity: O(N)
Space Complexity: O(1)
*/

var maxProduct = function(nums) {
  let curMin = nums[0];
  let curMax = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let nextMin = Math.min(nums[i], nums[i] * curMin, nums[i] * curMax);
    let nextMax = Math.max(nums[i], nums[i] * curMin, nums[i] * curMax);

    curMin = nextMin;
    curMax = nextMax;
    res = Math.max(res, curMax);
  }
  return res;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));