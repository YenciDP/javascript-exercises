const add = function(num1, num2) {
  let sum= num1 + num2;
  return sum
};

const subtract = function(num1, num2) {
	let result= num1-num2;
  return result
};

const sum = function(numbers) {
	let total= numbers.reduce((a,b)=>a+b, 0)
  return total
};

const multiply = function(numbers) {
let total= numbers.reduce((a,b)=>a * b, 1)
  return total
};

const power = function(number1, number2) {
	let result= Math.pow(number1, number2);
  return result
};

const factorial = function(number) {
 let starter=1,
      finisher=number,
      count=0; //counts 

const numbers=[]; //save all count number from starter to finisher in array 
    
     for (let i = starter; i <= finisher; i++) {
    count= i;
    numbers.push(count); 
  }
  //take all numbers from array and sum them, save answer in total 
  total= numbers.reduce((a,b)=>a * b, 1)
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
