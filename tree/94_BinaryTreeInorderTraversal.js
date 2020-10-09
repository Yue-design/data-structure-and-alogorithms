/*
94 Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

preorder & postorder => from the root's point of view

Time Complexity: O(n)
Space Complexity: O(log n)
*/

// build a binary tree??
// function TreeNode(val, left, right) { // it will bind the window by default
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// };
// let node = new TreeNode();
// root = new TreeNode();

// approach 1: recursive function
var inorderTraversal = function(root) {
  const helper = (root, res) => {
    if (root) {
      if (root.left) {
        helper(root.left, res);
      }
      res.push(root.val);
      if (root.right) {
        helper(root.right, res);
      }
    }
  };
  let res = [];
  helper(root, res);
  return res;
};

// appraoch 2: stack (seldom used)
// stack: LIFO
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let node = root;
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      // console.log(stack);
      node = node.left;
    }
    node = stack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
};

console.log(inorderTraversal([1, null, 2, 3]));
console.log(inorderTraversal([]));
console.log(inorderTraversal([1]));
console.log(inorderTraversal([1, 2]));
console.log(inorderTraversal([1, null, 2]));
