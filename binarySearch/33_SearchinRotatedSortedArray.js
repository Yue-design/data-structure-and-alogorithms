/*
33 Search in Rotated Sorted Array

Given an integer array in ascending order and an target integer,
if target is found in the array return its index, otherwise return -1.

Suppose that nums is rotated at some pivot unknow to you beforehand.

* @param {number[]} nums
* @param {number} target
* @return {number}

Time Complexity: O(logN)
Space Complexity: O(1)
*/

// Approach1 one-pass binary search
// var search = function(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] >= nums[left]) {
//       // left <= right
//       if (target >= nums[left] && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (target <= nums[right] && target > nums[mid]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1;
// };

// Approach2
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      // left <= right
      if (target >= nums[left] && target < nums[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    } else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }

  // avoid discuss the equality of left index and right index
  if (nums[left] === target) {
    return left;
  } else if (nums[right] === target) {
    return right;
  } else {
    return -1;
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
