const reverseString = function(word) {
  let string=word;
  let array= string.split("");
  array.reverse();

  let reversedString=array.join("");
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
