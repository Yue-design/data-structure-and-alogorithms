/*
108 Convert Sorted Array to Binary Search Tree

Given an array where elemetns are sorted in ascending order,
convert it to a height balanced BST.

A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Time Complexity: O(N)
Space Complexity: O(N) -- O(logN) for the recursion stack
*/

var sortedArrayToBST = function(nums) {
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
  const helper = (left, right) => {
    if (left > right) return null;
    let p = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[p]);
    root.left = helper(left, p - 1);
    root.right = helper(p + 1, right);
    return root;
  };
  return helper(0, nums.length - 1);
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));