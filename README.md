# code-next-js-refresh

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-js-refresh)

A lesson for the [Code Next](https://codenext.withgoogle.com/) React club.

In this lesson, engineers will

- learn basics about JavaScript
- recognize different function declaration styles
- understand object mutability

## Variables

Variables store values. They are declared with `let` or `const`.

```js
let foo = 'foo';
const bar = 'bar';
```

Use `let` if you will _reassign_ a variable.

```js
// GOOD: used let when variable reassigned
let foo = 'foo1';
foo = 'foo2';

// BAD: used let when variable not reassigned
let baz = 'baz';
```

Use `const` if you don't need to _reassign_ a variable.

```js
// GOOD: used const when variable not reassigned
const bar = 'bar';

// BAD: used const when variable reassigned, this will throw an error
const bam = 'bam1';
bam = 'bam2';
```

Declaring a variable **without** using `const` or `let` will put it in the global scope. You should avoid doing this.

```js
// BAD: any context can reassign this!
foo = 'foo';
```

### YOUR TURN

Open `variables.js` and practice.

## Primitives

The primitive types are: `String`, `Boolean`, `null`, `undefined`, `Number`, `Symbol`, and `BigInt`.

```js
const arrayOfCharacters = 'hello world!'; // String
const trueOrFalse = true; // Boolean
const explicitAbsenceOfAValue = null; // null
const variableDeclaredButNotAssignedYet = undefined; // undefined
const countThings = 5; // Number
const symbol = Symbol('hello'); // Symbol
const largeNumber = BigInt(9007199254740991); // BigInt
```

### YOUR TURN

Open `primitives.js` and practice.

## Objects

Objects map keys to values.

```js
const o = {
  hello: 'world',
  lol: 'lol'
};

console.log(o.hello) // world
console.log(o['hello']) // world
console.log(o.goodbye) // undefined
```

Values can be objects.

```js
const o = {
  whats: {
    my: {
      secret: '👌👖',
    }
  }
};

console.log(o.whats.my.secret); // 👌👖
```

Objects are mutable.

```js
const o = {
  foo: 'foo1',
};

console.log(o); // { foo: 'foo1' }

o.foo = 'foo2';
o.bar = 'bar1';

console.log(o); // { foo: 'foo2', bar: 'bar1' }
```

Arrays are objects whose values are keyed by their index.

```js
const arr = [1, 'two', { three: 'three' }];

console.log(arr[0]); // 1
console.log(arr[1]); // two
console.log(arr[2]); // { three: 'three' }
console.log(typeof arr) // object
```

### YOUR TURN

Open `objects.js` and practice.

## Functions

Functions are callable _objects_ that store procedures. In this course, prefer to use the ES6 arrow syntax with an explicit return.

```js
const double = (x) => {
  return 2 * x;
};
console.log(double(4)); // 8
```

However, you will see functions declared in other ways.

```js
// OK: ES6 arrow syntax with implicit return (no curly braces or return statement)
const getFavLib = () => 'react';
console.log(getFavLib()); // react

// OK: ES5 classic syntax
function greet(name) {
  console.log(`Hey, ${name}.`);
}
greet('Jared') // Hey, Jared.

// BAD: ES6 arrow syntax incorrect implicit return with curly braces
const getFavLang = () => {
  'TypeScript'; // need an explicit return here, or remove curly braces
};
console.log(getFavLang()) // undefined
```

Functions can return objects.

```js
// OK: Explicit return
const foo = () => {
  return { hello: 'world' };
};

// OK: Implicit returns need to use an extra set of parentheses.
const bar = () => ({
  hello: 'world',
});
```

Since functions are objects, they can be passed as arguments to other functions. This is useful for composing behavior, instead of having one giant function doing everything.

```js
const getLie = () => {
  return 'this is boring';
}

const getTruth = () => {
  return 'this is cool';
}

const scream = (getMessage) => {
  console.log(getMessage().toUpperCase());
};

// IMPORTANT: I didn't invoke getLie and getTruth!!!
scream(getLie); // THIS IS BORING
scream(getTruth); // THIS IS COOL

// If you invoke a function and pass it to something expecting a function, you will get an error, because it is whatever the function evaluates to!
scream(getLie()); // Uncaught TypeError: getMessage is not a function
```

Functions can return functions.

```js
const sum = (a) => (b) => a + b;
const addOne = sum(1);
const addFive = sum(5);

console.log(addOne(1)); // 2
console.log(addFive(1)); // 6
```

Functions can be anonymous.

```js
const objects = [
  { foo: 'foo' },
  { foo: 'bar' },
  { baz: 'baz' },
  { foo: 'bar', baz: 'baz' },
];
// objects.find takes an anonymous function
const fooBarObject = objects.find((obj) => obj.foo === 'bar');
console.log(fooBarObject); // { foo: 'bar' }
```

### YOUR TURN

Open `functions.js` and practice.
