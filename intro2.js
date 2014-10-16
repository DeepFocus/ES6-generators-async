function *simpleGenerator(){
  yield "first";
  yield "second";
  yield "third";
  for (var i = 0; i < 3; i++)
    yield i;
}
var g = simpleGenerator();
console.log(g.next()); // prints { value: 'first', done: false }
console.log(g.next()); // prints "{ value: 'second', done: false }"
console.log(g.next()); // prints "{ value: 'third', done: false }"
console.log(g.next()); // prints { value: 0, done: false }
console.log(g.next()); // prints { value: 1, done: false }
console.log(g.next()); // prints { value: 2, done: false }
console.log(g.next()); // prints { value: undefined, done: true }
console.log(g.next()); // prints { value: undefined, done: true }