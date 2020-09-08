/*
318 Maximum Product of Word Lengths

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. 
If no such two word exist, return 0.

Assuming:
Each word will comtain lower case letters.

* @param {string[]} wods
* @return {number}

Time Complexity: O(N**2 + L)
Space Complexity: O(N)
*/

// bitmasks + precomputation
var maxProduct = function(words) {
  let n = words.length;
  let masks = new Array(n).fill(0);
  let lens = new Array(n).fill(0);
  const bitNumber = (char) => {
      return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  
  for (let i = 0; i < n; i++) {
      let bitMask = 0;
      for (char of words[i]) {
          bitMask |= 1 << bitNumber(char);
      }
      masks[i] = bitMask;
      lens[i] = words[i].length;
  };
  
  let maxVal = 0;
  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (!(masks[i] & masks[j])) { // unique in js
              maxVal = Math.max(maxVal, lens[i]*lens[j]);
          }
      }
  };
  return maxVal;
};

// Bitmasks + Precomputation + Hashmap
// var maxProduct = function(words) {
//   let map = {};
//   let aCharCode = 'a'.charCodeAt(0);
//   for (let word of words) {
//     map[word] = 0;
//     for (let i = 0; i < word.length; i++) {
//       map[word] |= 1 << word.charCodeAt(i) - aCharCode;
//     }
//   }
//   let maxProduct = 0;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = i; j < words.length; j++) {
//       if (!(map[words[i]] & map[words[j]])) {
//         maxProduct = Math.max(words[i].length * words[j].length, maxProduct);
//       }
//     }
//   }
//   return maxProduct;
// }

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]));
console.log(maxProduct(["a","aa","aaa","aaaa"]));