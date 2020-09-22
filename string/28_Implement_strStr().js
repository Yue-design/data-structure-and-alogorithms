/*
28. Implement strStr() - Two Pointers

Implement C's strStr() or Java's indexOf().
Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of the haystack.
Return 0 when needle is an empty string.

* @param {string} haystack
* @param {string} needle
* @return {number}
*/

var strStr = function(haystack, needle) {
  if (needle === "") return 0;

  for (let i = 0; i < haystack.length; i++) {
    let len = 0;
    if (haystack[i] === needle[len]) {
      while (haystack[i+len] === needle[len] && len < needle.length && i + len < haystack.length) {
        len++;
      };
      if (len === needle.length) return i;
    };
  };
  return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));

const index_Of = (haystack, needle) => {
  let n = haystack.length;
  let L = needle.length;

  if (L === 0 || haystack === needle) return 0;

  for (let i = 0; i < n - L + 1; i++) {
    if (haystack.substring(i, i+L) === needle) {
      return i;
    };
  };
  return -1;
};

console.log(index_Of("hello", "ll"));
console.log(index_Of("aaaaa", "bba"));