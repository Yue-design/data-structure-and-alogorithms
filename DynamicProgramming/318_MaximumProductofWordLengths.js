/*
318 Maximum Product of Word Lengths

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. 
If no such two word exist, return 0.

Assuming:
Each word will comtain lower case letters.

* @param {string[]} wods
* @return {number}

Time Complexity: O(N)
*/

var maxProduct = function(words) {

};

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]));
console.log(maxProduct(["a","aa","aaa","aaaa"]));