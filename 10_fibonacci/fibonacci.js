const fibonacci = function(n) {
  let number=parseInt(n);
  if (number <0) {
    return "OOPS"
  }else{
  let a = 1;
  let b = 1;
  for (let i = 3; i <= number; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
};

// Do not edit below this line
module.exports = fibonacci;
