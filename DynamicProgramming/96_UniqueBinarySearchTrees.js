/*
96 Unique Binary Search Trees

Given n, how many structurally uniqe BST's (binary search trees) that store values 1...n?
constraints: 1 <= n <= 19

* @param {number} n
* @return {number}

Time Complexity: O(N**2)
Space Complexity: O(N)

Mathematical Deduction: Catalan Number
*/

var numTrees = function(n) {
  let G = new Array(n+1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; i < i + 1; j++) {
      G[i] += G[j-1] * G[i-j];
    }
  }
  return G[n];
};

console.log(numTrees(3));