/*
111 Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down the nearest leaf node.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

* @param {TreeNode} root
* @return {number}
*/

var minDepth = function(root) {
  if (!root) {
    return null;
  }
  let left = root.left;
  let right = root.right;
  if (left === null) {
    return minDepth(right) + 1;
  }
  if (right === null) {
    return minDepth(left) + 1;
  }
  return Math.min(minDepth(left), minDepth(right)) + 1;
};

console.log(minDepth([3, 9, 20, null, null, 15, 7]));