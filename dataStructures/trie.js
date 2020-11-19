/*
Trie

applications: autocomplete, spell checker, IP routing, T9 predictive text, solving word games
*/

/**
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.children = {};
  this.isEnd = false;
};

var Trie = function() {
  this.head = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let ptr = this.head;
  for (let i = 0; i < word.length; i++) {
    let cur = word[i];
    if (!(cur in ptr.children)) {
      ptr.children[cur] = new TrieNode();
    }
    ptr = ptr.children[cur];
  }

  ptr.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let ptr = this.head;
  for (let i = 0; i < word.length; i++) {
    let cur = word[i];
    if (!(cur in ptr.children)) {
      return false;
    }
    ptr = ptr.children[cur];
  }
  return ptr.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let ptr = this.head;
  for (let i = 0; i < prefix.length; i++) {
    let cur = prefix[i];
    if (!(cur in ptr.children)) {
      return false;
    }
    ptr = ptr.children[cur];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
