const convertToCelsius = function(temp) {
  let converting = (temp - 32) * (5 / 9);
  if (converting % 10 !== 0) {
    return +converting.toFixed(1);
  }
  else {
    return converting;
  }
};

const convertToFahrenheit = function(temp) {
  let converting = (temp * (9 / 5)) + 32;
  if (converting % 10 !== 0) {
    return +converting.toFixed(1);
  }
  else {
    return converting;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

