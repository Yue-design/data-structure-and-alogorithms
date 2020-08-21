/*
387 First Unique Character in a String

Given a string, find the first non-repeating character in it and return its index.
if it doesn't exist, return -1.

* @param {string} s
* @return {number}
*/

// var firstUniqChar = function(s) {
//   for (let i=0; i<s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

var firstUniqChar = function(s) {
  const hashMap = new Map();
  for (let i=0; i<s.length; i++) {
    const char = s.charAt(i);
    if (!hashMap.has(char)) {
      hashMap.set(char, 1);
    } else {
      const freq = hashMap.get(char);
      hashMap.set(char, freq+1);
    }
  }

  for (let j=0; j<s.length; j++) {
    const char = s.charAt(j);
    const freq = hashMap.get(char);
    if (freq === 1) {
      return j;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));

console.log(firstUniqChar('loveleetcode'));