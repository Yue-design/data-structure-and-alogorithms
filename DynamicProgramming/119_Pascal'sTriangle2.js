/*
119 Pascal's Triangle 2

Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.
Optimize your algorithm to use only O(k) extra space.
*/

var getRow = function(rowIndex) {
  let i = 0;
  let ans = [1];
  while (i < rowIndex) {
    for (let j = ans.length - 1; j > 0; j--) {
      ans[j] = ans[j - 1] + ans[j];
    }
    ans.push(1);
    i++;
  }
  return ans;
};

// var getRow = function(rowIndex) {
//   let triangle = [];
//   for (let i = 0; i < rowIndex+1; i++) {
//       let row = new Array(i+1).fill(0);
//       row[0] = 1;
//       row[i] = 1;
      
//       for (let j = 1; j < row.length - 1; j++) {
//           row[j] = triangle[i-1][j-1] + triangle[i-1][j];
//       }
//       triangle.push(row);
//   }
//   return triangle[rowIndex];
// };

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));

var generate = function(numRows) {
  let result = [[1]];
  if (numRows === 0) return [];
  for (let i = 1; i < numRows; i++) {
    result.push([1]);
    for (let j = 1; j < i; j++) {
      result[i].push(Number(result[i - 1][j]) + result[i - 1][j - 1]);
    }
    result[i].push([1]);
  }
  return result;
};
// var generate = function(numRows) {
//     let triangle = [];

//     for (let i = 0; i < numRows; i++) {
//         let row = new Array(i+1).fill(0);
//         row[0] = 1;
//         row[i] = 1;

//         for (let j = 1; j < row.length - 1; j++) {
//             row[j] = triangle[i-1][j-1] + triangle[i-1][j];
//         }
//         triangle.push(row);
//     }
//     return triangle;
// };

console.log(generate(3));
