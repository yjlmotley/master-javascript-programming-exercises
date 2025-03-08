const rewire = require ("rewire");
const isOdd = rewire("./app.js").__get__("isOdd");

test('Function isOdd must exist', () => {
    expect(isOdd).not.toBe(undefined);
});

test('Function isOdd must return something', () => {
    expect(isOdd(20)).not.toBe(undefined);
});

test('Function isOdd must return boolean', () => {
    expect(typeof(isOdd(20))).toBe("boolean");
});

test ('The function should return false when the given number is even. Testing with 10', () => {
    expect(isOdd(10)).toBe(false);
})
test ('The function should return false when the given number is even. Testing with 26', () => {
    expect(isOdd(26)).toBe(false);
})
test ('The function should return true when the given number is odd. Testing with 9', () => {
    expect(isOdd(9)).toBe(true);
})
test ('The function should return true when the given number is odd. Testing with 75', () => {
    expect(isOdd(75)).toBe(true);
})
