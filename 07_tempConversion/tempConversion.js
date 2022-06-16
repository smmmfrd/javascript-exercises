const ftoc = function(temp) {
  let converted = (temp - 32) * (5/9);
  converted = Math.round(converted * 10) / 10;
  return converted;
};

const ctof = function(temp) {
  let converted = (temp* (9/5)) + 32;
  converted = Math.round(converted * 10) / 10;
  return converted;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
