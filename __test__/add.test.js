const {add, wrongAdd} = require('../index');

test('add 1 + 2 to be equal 3', () => {
  expect(add(1)(2)).toBe(3);
})

test('wrongAdd 1 + 2 to be equal 3', () => {
  expect(wrongAdd(1)(2)).toBe(3);
})