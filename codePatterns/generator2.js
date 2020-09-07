/*
Generator 

The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

The function* declaration (function keyword followed by an asterisk) defines a genrator function, which returns a Generator object. 

Instance Methods:
Generator.prototype.next()
Generator.prototype.return()
Generator.prototype.throw()

Generators in JavaScript - especially when combined with Promises - are a very powerful tool for asynchronous programming as they mitigate - if not entirely eliminate.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead.

A return statement in a generator will make the generator finish. When a generator is finished, subsequent next() calls will not execute any of that generator's code, they will just return an object of this form: {value: undefined, done: true}.

In ECMAScript 2015, iteration protocols aren't new built-ins or syntax, but protocols.
(1) iterable protocol
The iterable protocol allows JavaScript objects to define or customize their iteration behavior.
(2) iteration protocol
The iterable protocol defines a standard way to produce a sequence of values, and potentially a return value when all values have been generated.
*/

// An Infinite Iterator
function* infinite() {
  let index = 0;

  while(true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// A Counter
function* generator(i) {
  yield i;
  yield i + 10;
}

const counter = generator(10);
console.log(gen.next().value); //10
console.log(gen.next().value); //20

// Generator as an object property
const obj = {
  *generator () {
    yield 'a';
    yield 'b';
  }
}

const gen = obj.generator();

console.log(gen.next()); // { value: 'a', done: false}
console.log(gen.next()); // { value: 'b', done: false}
console.log(gen.next()); // { value: undefined, done: true}