/*
235 Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in BST.
We allow a node to be a descentdant of itself.

All of the nodes' values will be unique.
p and q are different and both values will be exist in the BST.

* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }

* @param {TreeNode} root
* @param {TreeNode} p
* @param {TreeNode} q
* @return {TreeNode}
*/

var lowestCommonAncestor = function(root, p, q) {
  const parentVal = root.val;
  const pVal = p.val;
  const qVal = q.val;
  if (parentVal < qVal && parentVal < pVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (parentVal > qVal && parentVal > pVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8)); // should be 6

console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 4)); // should be 2