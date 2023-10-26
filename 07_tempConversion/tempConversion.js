const convertToCelsius = function(temp) {
  let fahrenheit=temp
  let celsius=(5/9)*(fahrenheit-32)
  let celsiusF=Math.round(celsius*10)/10
  return celsiusF
};

const convertToFahrenheit = function(temp) {
  let celsius =temp,
  fahrenheit= celsius*(9/5)+32,
  fahrenheitC=Math.round(fahrenheit*10)/10;
return fahrenheitC
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
