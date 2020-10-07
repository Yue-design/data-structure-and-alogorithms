/*
322 Coin Change

You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

* @param {number[]} coins
* @param {number} amount
* @return {number}

Time Complexity: O(S*n)
Space Complexity: O(S)
*/

var coinChange = function(coins, amount) {
  let dp = new Array(amount+1).fill(Infinity); // to amount 
                                               // infinity vs. amount+1
  dp[0] = 0;

  // for (let coin of coins) {
  //   for (let i = coin; i < amount+1; i++) {
  //     dp[i] = Math.min(dp[i], dp[i-coin]+1);
  //   }
  // }

  for (let i = 1; i <= amount; i++) {// <= vs. amt+1
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i-coins[j]]+1); // +1 => the value refers to the count 
      }
    }
  }

  // return dp[amount] > amount ? -1 : dp[amount];
  return (dp[amount] === Infinity) ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));
console.log(coinChange([1], 1));
console.log(coinChange([1], 2));