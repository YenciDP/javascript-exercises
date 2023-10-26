const sumAll = function(number1, number2) {
  //create variables
  let starter, //saves first number value
      finisher, //saves last number value
      temp,// save value temporaly
      count=0; //counts 

const numbers=[]; //save all count number from starter to finisher in array 

  //check if  teh input is a number and if those numbers are positive
if (number1>0 && number2>0 && typeof number1==="number" && typeof number2==="number") {

  // change order of numbers if necessary 
  if (number2<number1) {
    temp=number1;
    number1=number2
    number2=temp;
  }
      starter=number1;
     finisher= number2;
     
     for (let i = starter; i <= finisher; i++) {
    count= i;
    numbers.push(count); 
  }
  //take all numbers from array and sum them, save answer in total 
  total= numbers.reduce((a,b)=>a+b, 0)
  return total
}else return "ERROR"
 
}; 

// Do not edit below this line
module.exports = sumAll;
