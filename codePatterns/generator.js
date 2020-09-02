/*
341 Flatten Nested List Iterator

Given a nested list of integers, implement an iterator to flatten it.
Each element is either an integer, or a list --whose elements may also be integers or other lists.

* // This is the interface that allows for creating nested lists.
* // You should not implement it, or speculate about its implementation

Python, JavaScript and C# support generator functions.
When you call a generator function, you get back a special object called a generator.

This generator can then be used to get each value from the function, one at a time.
The special keyword, yield, pauses the function, and "returns" the yield ed value.
End-of-function behaviour for generators is language-dependent.
Generator functions can be recursive.

Note that, not all languages that support yield also support yield from(a shorthand for looping). JavaScript supports it, naming yield*.

Time Complexity: O(1)
Space Complexity: O(D)
*/

class NestedIterator {
  _generator;
  _peeked = null;

  constructor(nestedList) {
    function* intGenerator(nestedList) {
      for (const nestedInteger of nestedList) {
        if (nestedInteger.isInteger()) {
          yield nestedInteger.getInteger();
        } else {
          yield* intGenerator(nestedInteger.getList());
        }
      } 
    }
    this._generator = intGenerator(nestedList);
  }

  hasNext() {
    if (this._peeked !== null) return true;

    const { value, done } = this._generator.next();
    if (done) return false;
    this._peeked = value;
    return true;
  }

  next() {
    if (!this.hasNext()) return undefined;

    const nextValue = this._peeked;
    this._peeked = null;
    return nextValue;
  }
}

/*
 * @constructor
 * @param {NestedInteger[]} nestedList
*/
var NestedIterator = function(nestedList) {
  const flat = (arr, nestedList) => {
    nestedList.forEach(item => {
      if (item.isInteger()) {
        arr.push(item.getInteger());
      } else {
        flat(arr, item.getList());
      }
    })
  }
  this.arr = [];
  flat(this.arr, nestedList);
};

/*
 * @this NestedIterator
 * @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.arr.length > 0;
};

/*
 * @this NestedIterator
 * @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.arr.shift();
};

// console.log(NestedIterator([[1,1],2,[1,1]]));
// console.log(NestedIterator([1,[4,[6]]]));