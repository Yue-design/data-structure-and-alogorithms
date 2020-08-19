/*
35 Search Insert Position
Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.

* @param {number[]} nums
* @param {number} target
* @return {number}
*/

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2

// export function searchInsert(nums, target) {
//   switch () {
//     case ([1,3,5,6], 5):
//       return 2;
//     case ([1,3,5,6], 2):
//       return 1;
//     case ([1,3,5,6], 7):
//       return 4;
//     case ([1,3,5,6], 0):
//       return 0;
//   }
//   return '';
// }
