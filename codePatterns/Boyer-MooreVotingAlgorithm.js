/*
169 Majority Element

Given an array of size n, find the majority element.

The majority element is the element that appears more than [n/2] times.

Boyer-Moore Voting Algorithm
*/

var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    };
    if (num === candidate) {
      count++;
    } else {
      count--;
    };
  };

  return candidate;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));