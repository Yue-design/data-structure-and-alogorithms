/*
897 Increasing Order Search Tree

Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right children.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

* @param {TreeNode} root
* @return {TreeNode}
*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// var increasingBST = function(root) {
//   const newRoot = new TreeNode();
//   let prevNode = newRoot;

//   const inorderTraverse = (node) => {
//     if (node === null) {
//       return;
//     }
//     inorderTraverse(node.left);
//     node.left = null;
//     prevNode.right = node;
//     prevNode = node;
//     inorderTraverse(node.right);
//   };
//   inorderTraverse(root);

//   return newRoot.right;
// };

var increasingBST = function(root) {
  let dummy = new TreeNode(); 
  let node = dummy;

  const traverse = function(root) {
      if(!root) return; 
      traverse(root.left); 
      node.right = root; 
      node = node.right; 
      node.left = null;
      traverse(root.right);    
  }; 

  traverse(root);
  return dummy.right;
};

console.log(increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]));