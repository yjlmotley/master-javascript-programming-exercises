# `093` getNthElementOfProperty 

## 📝 Instructions: 

1. Write a function called `getNthElementOfProperty`. Given an object, a key, and a number *n*, `getNthElementOfProperty` returns the *nth* element of an array located at the given key.

## 📎 Example:

```js
let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
```

## 💡 Hints:

+ If the array is empty, it should return `undefined`.

+ If *n* is out of range, it should return `undefined`.

+ If the property at the given key is not an array, it should return `undefined`.

+ If there is no property at the key, it should return `undefined`.
