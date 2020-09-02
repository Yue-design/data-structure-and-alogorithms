/*
121 Best Time to Buy and Sell Stock

Design an algorithm to find the maximum profit: 
(1) You have an array for which the ith element is the price of a given stock on day i.
(2) Note that you cannot sell a stock before you buy one.

* @param {number[]} prices
* @return {number}

Time Complexity: O(n)
Space Complexity: O(1)

Array.prototyle.fill()
*/

var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(prices[i]-minPrice, maxProfit);
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));