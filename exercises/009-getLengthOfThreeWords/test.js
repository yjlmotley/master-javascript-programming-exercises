const rewire = require("rewire");
const getLengthOfThreeWords = rewire("./app.js").__get__("getLengthOfThreeWords");

test('Function getLengthOfThreeWords must exist', () => {
    expect(getLengthOfThreeWords).not.toBe(undefined);
});

test('Function getLengthOfThreeWords must return something', () => {
    expect(getLengthOfThreeWords('a','b','c')).not.toBe(undefined);
});

test('Function getLengthOfThreeWords must return a number', () => {
    expect(typeof getLengthOfThreeWords('a','b','c')).toBe("number");
});

test("The function must return the sum of its three parameter's length", () => {
    let output = getLengthOfThreeWords('he', 'he', 'Michael J')
    expect(output).toBe(13)
})

test("The function must return the sum of its three parameter's length. Testing with different values", () => {
    let output = getLengthOfThreeWords('s p a c e s', 'can', 'count')
    expect(output).toBe(19)
})

test("The function must return the sum of its three parameter's length. Testing with different values", () => {
    let output = getLengthOfThreeWords('some', 'other', 'words')
    expect(output).toBe(14)
})
