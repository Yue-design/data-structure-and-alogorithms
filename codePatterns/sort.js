/*
sort()

The sort() method is different from Python
*/

const num = [1, 30, 4, 21, 10000];
num.sort(); // [ 1, 10000, 21, 30, 4 ]
console.log(num);

num.sort((a, b) => b - a);
console.log(num); // [ 10000, 30, 21, 4, 1 ]