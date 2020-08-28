/*
1464 Maximum Product of Two Elements in an Array

Given the array of integers nums, you will choose two different indices i and j of that array.
Return the maximum value of (nums[i]-1)*(nums[j]-1).

* @param {number[]} nums
* @return {number}
*/

var maxProduct = function(nums) {
  let maxNum = Math.max.apply(null, nums);
  nums.splice(nums.indexOf(maxNum), 1);
  let secondNum = Math.max.apply(null, nums);
  let maxValue = (maxNum - 1) * (secondNum - 1);
  return maxValue;
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1, 5, 4, 5]));
