/*
67 Add Binary

Given two binary strings, return their sum (also in a binary string).
Input is non-empty

binary bitwise operators
& bitwise AND
| bitwise OR
^ bitwise XOR

bitwise shift operators
<< bitwise left shift operator
>> bitwise right shift operator
>>> bitwise unsigned right shift operator

BitInt
In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format.
*/

var addBinary = function(a, b) {
  // Convert a and b into integers x and y
  // x represents for an answer, y stands for the carry
  let x = BigInt("0b" + a);
  let y = BigInt("0b" + b);
  // while carry is nonzero
  while (y) {
    // current answer without carry is XOR of x and y
    let answer = x ^ y;
    // current carry is left-shifted AND of x and y 
    let carry = (x & y) << BigInt("0b1");
    // prepare the next loop
    [x, y] = [answer, carry];
  };
  // return x in the binary form
  return x.toString(2);
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));