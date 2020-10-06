/*
29 Divide Two Integers

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

Assume we are dealing with an enviorment that could only store integers within the 32-bit signed integer range: [-2**31, 2**31-1].
For this problem, assume that your function returns 2**31-1 when the division result overflows.
*/

// var divide = function(dividend, divisor) {
//   const ceil = 2**31;
//   const answer = Math.trunc(dividend/divisor);
//   if (answer < 0) {
//     return answer <= -ceil ? - ceil : answer;
//   }
//   return answer >= ceil ? ceil - 1: answer;
// };

// console.log(divide(10, 3));
// console.log(divide(7, -3));
// console.log(divide(0, 1));
// console.log(divide(1, 1));

var divide = function(dividend, divisor) {
  if (dividend <= -2147483648 && divisor == -1) return 2**31;
  let sign = Math.sign(dividend) == Math.sign(divisor) ? 1 : -1;
  [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)];
  if (divisor === 1 || divisor === -1) return sign*dividend;
  let result = 0;
  while (divisor <= dividend) {
    let double = divisor;
    let count = 1;
    while (double <= (dividend>>1)) {
      double<<=1;
      count<<=1;
    }
    result += count;
    dividend -= double;
  }
  return sign*result;
};

console.log(divide(10, 3));
console.log(divide(7, -3));
console.log(divide(0, 1));
console.log(divide(1, 1));