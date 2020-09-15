/*
704 Binary Search

Given a sorted (in ascending order) integer array nums of n elements and a target value, 
write a function to search target in nums.
If target exists, then return its index, otherwise return -1. 

Constraints:
1. You may assume that all elements in nums are unique.
2. n will be in the range [1, 10000].
3. The value of each element in nums will be in the range [-9999, 9999].

Binary Search, is a search algorithm that finds the position of a target value within a sorted array. 
Binary search is faster than linear search except for small arrays.

Time Complexity: O(logN)
Space Complexity: O(1)

Master Theorem
In the analysis of algorithms, the master theorem for divide-and-conquer recurrences provides an asymptotic analysis (using Bio O notation) for the recurrence relations of types that occur in the analysis of many divide and conquer algorithms.
*/

/*
@param {number[]} nums
@param {number} target
@return {number}
*/

var search = function(nums, target) {
  // Initialise left and right pointers
  let left = 0;
  let right =  nums.length - 1;

  // While left <= right:
  while (left <= right) {
    // Compare middle element of the array nums[pivot] to the target value target
    let pivot = left + Math.floor((right - left) / 2);
    // if the middle element is the target, return pivot
    if (nums[pivot] === target) {return pivot};
    // if the target is not yet found
    // if target is smaller than nums[pivot], continue search on the left
    // else continue the search on the right
    if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    };
  };

  return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));