const rewire = require("rewire");
const removeFromBackOfNew = rewire("./app.js").__get__("removeFromBackOfNew");

test('Function removeFromBackOfNew must exist', () => {
    expect(removeFromBackOfNew).not.toBe(undefined);
});

test('Function removeFromBackOfNew must return something', () => {    
    expect(removeFromBackOfNew([1,2])).not.toBe(undefined);
});

test('Function removeFromBackOfNew must return a list', () => {    
    expect(typeof removeFromBackOfNew([1,2])).toBe("object");
});

test('Function must return a new array containing all elements, but the last. Testing with [3,6,9,12]', () => {
    let input = [3, 6, 9, 12]
    let output = removeFromBackOfNew(input)

    expect(output).toEqual([3, 6, 9])
    expect(input).toEqual([3, 6, 9, 12])
});

test('Function must return a new array containing all elements, but the last. Testing with [1,2,3]', () => {
    let input = [1, 2, 3]
    let output = removeFromBackOfNew(input)

    expect(output).toEqual([1, 2])
    expect(input).toEqual([1,2,3])
});