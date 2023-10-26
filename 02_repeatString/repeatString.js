const repeatString = function(word, number) {
  if (number<0) {
    return "ERROR"
  }
   let string="";
  for (let index = 0; index < number; index++) {
    string+=word;
  }
  return string
};

// Do not edit below this line
module.exports = repeatString;
