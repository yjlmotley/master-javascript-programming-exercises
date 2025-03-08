# `106` getAllButLastElementOfProperty

## 📝 Instructions:

1. Write a function called `getAllButLastElementOfProperty`. Given an object and a key, `getAllButLastElementOfProperty` returns an array containing all but the last element of the array located at the given key.

## 📎 Example:

```Js
let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
```

## 💡 Hints:

+ If the array is empty, it should return an empty array `[]`.

+ If the property at the given key is not an array, it should return an empty array `[]`.

+ If there is no property at the key, it should return an empty array `[]`.
