/*
binary tree

When using 'this' in an arrow function, the binding of 'this' will default to the parent scope.
*/

const TreeNode = (val, left, right) => {
  this.val = val === undefined ? 0 : val;
  this.right = right === undefined ? 0 : right;
  this.left = left === undefined ? 0 : left;
};