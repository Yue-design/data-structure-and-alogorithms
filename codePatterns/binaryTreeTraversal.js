/*
94 Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

preorder & postorder => from the root's point of view
*/

// build a binary tree??
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// };
// let node = new TreeNode();
// root = new TreeNode();

var inorderTraversal = function(root) {
  const helper = (node, res) => {
    if (node !== null) {
      if (node.left !== null ) {
        helper(node.left, res);
      };
      res.push(node.val);
      if (node.right !== null) {
        helper(node.right, res);
      };
    };
  };
  let result = [];
  helper(root, result);
  return result;
};

console.log(inorderTraversal([1,null,2,3]));
console.log(inorderTraversal([]));
console.log(inorderTraversal([1]));
console.log(inorderTraversal([1,2]));
console.log(inorderTraversal([1,null,2]));