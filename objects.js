import { render } from './util';

// TODO: What is the value of foo.bar and foo.baz?
render('objects1', () => {
  const foo = {
    bar: 42,
    baz: 45,
  };
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// TODO: Create an object of objects and return it.
render('objects2', () => {
  const iceCream = {
    flavor1: 'vanilla',
    flavor2: 'chocolate',
  };
  return `iceCream.bar: ${iceCream.flavor1}, iceCream.baz: ${iceCream.flavor2}`;
});

// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
  let pizza = ['Dominos', 10, 'pepperoni'];
  return pizza[0];
});
