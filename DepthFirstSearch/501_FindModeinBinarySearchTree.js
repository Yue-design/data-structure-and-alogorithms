/*
501 Find Mode in Binary Search Tree

Given a binary search tree(BST) with duplicates, find all the mode(s).
Assuming:
Nodes in the left subtree is less than or equal to the node's key;
Nodes in the right subtree is greater than or equal to the node's key;
Both the left and right subtrees must also be the binary search trees.

* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }

* @param {TreeNode} root
* @return {number[]}
*/

var findMode = function(root) {
  const hashmap = {};
  function traverse(node) {
    if (node) {
      hashmap[node.val] = (hashmap[node.val]|| 0) + 1;
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
  };
  traverse(root);

  let maximum = 0;
  Object.keys(hashmap).forEach(key => {
    maximum = Math.max(maximum, hashmap[key]);
  });

  const result = [];
  Object.keys(hashmap).forEach(key => {
    if (hashmap[key] === maximum) {
      return result.push(key);
    }
  });
  return result;
};

console.log(findMode([1,null,2,2])); // should be 2