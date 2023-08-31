function add(a, b) { 
    return a + b; 
   } 
   function subtract(a, b) { 
    return a - b; 
   } 
   function multiply(a, b) { 
    return a * b; 
   } 
   function divide(a, b) { 
    return a / b; 
   }  
   module.exports = { 
    add, 
    subtract, 
    multiply, 
    divide, 
   }; 
   
const arithmetic = require('./arithmetic'); 
const result1 = arithmetic.add(9, 3); 
console.log(result1); // Output: 12 
const result2 = arithmetic.subtract(10, 8); 
console.log(result2); // Output: 2 
const result3 = arithmetic.multiply(2, 4); 
console.log(result3); // Output: 8 
const result4 = arithmetic.divide(10,5); 
console.log(result4); // Output: 2 