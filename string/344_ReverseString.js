/*
344 Reverse String

Write a function that reverses a string.

* @param {character[]} s
* @return {void} Do not return anything, modify s in-place instead.

An in-place algorithm transforms input using no auxiliary data structure.
*/

var reverseWords = function(s) {
  return s
    .trim()
    .split(/\s+/)
    .reverse()
    .join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));

var reverseStr = function(s) {
  return s.reverse();
};

console.log(reverseStr(["h", "e", "l", "l", "o"]));
console.log(reverseStr(["H", "a", "n", "n", "a", "h"]));

var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

var reverseVowels = function(s) {
/* 
there is something wrong with the solution
@param {string} s
@return {string}
*/
  let vowels = new Set("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
  let low = 0;
  let high = s.length - 1;
  let arr = s.split("");
  while (low < high) {
    if (!vowels.has(s[low])) {
      low++;
      continue;
    }
    if (!vowels.has(s[high])) {
      high--;
      continue;
    }
    let temp = arr[low];
    arr[low] = s[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
