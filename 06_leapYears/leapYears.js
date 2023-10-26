const leapYears = function(year) {
  let reminder, century;
  century=year%100;
if (century===0 ) {
  reminder= year%400
   if (reminder===0) {
    return true
  } else return false
}else{
  reminder= year%4;
  if (reminder===0) {
    return true
  } else return false
}
};

// Do not edit below this line
module.exports = leapYears;
