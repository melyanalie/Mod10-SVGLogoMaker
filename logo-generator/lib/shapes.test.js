const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
  const shape = new Circle('red');
  expect(shape.render()).toContain('fill="red"');
});

test('Triangle renders correctly', () => {
  const shape = new Triangle('blue');
  expect(shape.render()).toContain('fill="blue"');
});

test('Square renders correctly', () => {
  const shape = new Square('green');
  expect(shape.render()).toContain('fill="green"');
});
