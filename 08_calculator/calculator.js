const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
	let mult = array[0];

  for (let i = 1; i < array.length; i++) {
    mult *= array[i];
  }

  return mult;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if(a === 0 || a === 1){
    return 1;
  }

  let fact = a;
  for (let i = a - 1; i >= 1; i--) {
    fact *= i;
  }
  return fact;
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
