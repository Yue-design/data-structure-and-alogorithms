/*
322 Coin Change

You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

* @param {number[]} coins
* @param {number} amount
* @return {number}

Dynamic Programming: Top Down vs Buttom Up
F(S) - minimum number of coins needed to make change for amount S using coins denominations [c0...Cn-1]

Time Complexity: O(S*n)
Space Complexity: O(S)
*/

var coinChange = function(coins, amount) {
  let res = new Array(amount+1).fill(Infinity);
  res[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i < amount+1; i++) {
      res[i] = Math.min(res[i], res[i-coin]+1);
    }
  }

  return (res[amount] === Infinity) ? -1 : res[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));