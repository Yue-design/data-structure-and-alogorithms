/*
700 Search in a Binary Search Tree

Given the root node of a binary search tree (BST) and a value.
You need to find the node in the BST that the node's value equals the given value.
Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

* @param {TreeNode} root
* @param {number} val
* @return {TreeNode}
*/

var searchBST = function(root, val) {
  while (root && val !== root.val) {
    // it is faster, especially in Python
    root = root.val > val ? root.left : root.right;
  }
  return root;
};

var searchBST = function(root, val) {
  while (root) {
    if (root === root.val) {
      return root;
    }
    if (root.val > val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return null;
};
var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
};
var searchBST = function(root, val) {
  let current = root;
  while (current) {
    if (current.val === val) {
      return current;
    }
    if (current.val < val) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  return null;
};
