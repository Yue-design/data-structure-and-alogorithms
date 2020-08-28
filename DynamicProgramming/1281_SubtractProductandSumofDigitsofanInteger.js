/*
1281 Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sub of its digits.

* @param {number} n
* @return {number}
*/

var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;
  let surplus = 0;

  while (n !== 0) {
    surplus = n % 10;
    n = (n - surplus) / 10;
    product *= surplus;
    sum += surplus;
  }

  return product - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
