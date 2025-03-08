const rewire = require ("rewire");
const isLessThan = rewire('./app.js').__get__('isLessThan');

test('The function isLessThan must exist',()=>{
    expect(isLessThan).toBeTruthy();
})
test('The function isLessThan should return something',()=>{
    expect(isLessThan(5, 6)).not.toBe(undefined);
})

test ('The function returns true if num1 is greater than num2', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");
    expect(isLessThan(9, 3)).toBe(true);
})
test ('The function returns true if num1 is greater than num2', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");
    expect(isLessThan(3, 2)).toBe(true);
})

test('The function returns false if num1 is less than num2', ()=>{
    expect(isLessThan(6, 12)).toBe(false);
})

test('The function returns false if num1 is less than num2', ()=>{
    expect(isLessThan(66, 84)).toBe(false);
})
