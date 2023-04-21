import { render } from './util';

// TODO: What is the value of foo.bar and foo.baz?
render('objects1', () => {
  const foo = {
    bar: 42,
  };
  return `foo.bar: ${foo.bar}, foo.baz: ${foo.baz}`;
});

// TODO: Create an object of objects and return it.
render('objects2', () => {

});

// TODO: Create an array of objects and return the element at index 0.
render('objects3', () => {
  
});
