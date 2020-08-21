/*
559 Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the fastest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value.

* // Definition for a Node.
* function Node(val,children) {
*    this.val = val;
*    this.children = children;
* };


* @param {Node} root
* @return {number}
*/

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  let level = 0;
  for (let child of root.children) {
    level = Math.max(level, maxDepth(child));
  }

  return level + 1;
};

console.log(maxDepth([1,null,3,2,4,null,5,6])); // should be 3

console.log(maxDepth([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])); // should be 5