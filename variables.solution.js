import { render } from './util';

// What is the value of foo?
render('variables1', () => {
  let foo = 'foo1';
  foo = 'foo2';
  foo = 'foo3';
  return foo; // foo3
});

// TODO: Fix this code.
render('variables2', () => {
  const bar = 'bar';
  return bar;
});

// TODO: Fix this code.
render('variables3', () => {
  const baz = 'baz';
  return baz;
});
