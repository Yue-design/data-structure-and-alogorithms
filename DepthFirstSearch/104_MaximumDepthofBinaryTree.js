/*
104 Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.
A leaf is a node with no children.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right) 

* @param {TreeNode} root
* @return {number}
*/

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // should be 3
