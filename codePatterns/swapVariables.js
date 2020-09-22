/*
Swap Variables

1. Commonly Used with Addtional Memory - Recommended
2. Integers Only without Additional Memory
*/

// a. destructuring assignment
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

// b. temporary variable
let c = 1;
let d = 2;
let temp;
console.log(temp); // undefined

temp = c; 
c = d;
c = temp;

console.log(temp); // 1
console.log(c, d);

// c. addition and difference
let int1 = 3;
let int2 = 4;

console.log('Number Overflow:', Number.MAX_SAFE_INTEGER);

int1 = int1 + int2;
int2 = int1 - int2;
int1 = int1 - int2;

console.log(int1, int2);

// d. Bitwise XOR operator
let n = 10;
console.log(n ^ n, n ^ 0);

let bit1 = 5; 
let bit2 = 6;

bit1 = bit1 ^ bit2;
bit2 = bit1 ^ bit2;
bit1 = bit1 ^ bit2;

console.log(bit1, bit2);