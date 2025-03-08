const rewire = require('rewire');
const file = rewire('./app.js');
const findPairForSum = file.__get__('findPairForSum');

test('Function findPairForSum must exist', function () {
  expect(findPairForSum).toBeTruthy();
});

test('Function findPairForSum must return something', function () {
  expect(findPairForSum([1, 2, 3], 3)).toBeTruthy();
});

test('Function findPairForSum must return an array', function () {
  expect(Array.isArray(findPairForSum([3, 34, 4], 7))).toBeTruthy();
});

test('The function must return a pair of numbers that add up to the goal number', function () {
  expect(findPairForSum([3, 34, 4], 7)).toEqual([ 3, 4 ]);
});

test('The function must return a pair of numbers that add up to the goal number. Testing with different values', () => {
  expect(findPairForSum([2, 4, 6, 10], 8)).toEqual([2, 6])
});

test('The function must return a pair of numbers that add up to the goal number. Testing with different values', () => {
  expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 9)).toEqual([ 3, 6 ])
});


// test('The function must return a pair of numbers that add up to the goal number. Trying with different values (1/2)', () => {
//   expect(findPairForSum([2, 4, 6, 10], 8) === [2, 6] || findPairForSum([2, 4, 6, 10], 8) === [6, 2]).toBeTruthy();
// });

// test('The function must return a pair of numbers that add up to the goal number. Trying with different values (2/2)', () => {
//   expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 9)).toBe([3, 6]) || expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 9)).toBe([6, 3]) || expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 9)).toBe([5, 4]) || expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 9)).toBe([5, 4])
// });
