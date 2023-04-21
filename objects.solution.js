import { render } from './util';

// What is the value of foo.bar and foo.baz?
render('objects1', () => {
  const foo = {
    bar: 42,
  };
  // foo.bar is 42 and foo.baz is undefined
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// TODO: Create an object of objects and return it.
render('objects2', () => {
  const foo = {
    bar: {
      baz: 42,
    },
  };
  return foo;
});

// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
  const foo = [{ bar: 1 }, { baz: 2 }];
  return foo[0];
});
