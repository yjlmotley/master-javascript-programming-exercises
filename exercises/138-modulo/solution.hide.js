function modulo(num1, num2) {
  // your code here
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  }
  
  let i = 0;
  if(num1 > 0) {
      while (i < num1) {
          if(i+num2 > num1) break;
          i += num2
      }
      
      return num1 - i;
  } else {
      while (i > num1) {
          if(i-num2 < num1) break;
          i -= num2
      }
      
      return num1 - i;
  }
}

let output = modulo(25, 4);
console.log(output); // --> 1
