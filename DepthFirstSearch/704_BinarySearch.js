/*
704 Binary Search

Given a sorted(in ascending order) integer array, write a function to search the target value. If the target exists, then return its index, otherwise return -1.

* @param {number[]} nums
* @param {number} target
* @return {number}
*/

var search = function(nums, target) {
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    let pivot = Math.floor((start+end)/2);
    if (target === nums[pivot]) {
      return pivot;
    };
    if (target < nums[pivot]) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }
  return -1;
}

console.log(search([-1,0,3,5,9,12], 9)); // 4

console.log(search([-1,0,3,5,9,12], 2)); // -1