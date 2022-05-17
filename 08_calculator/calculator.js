const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let result = 0;
  arr.map(num => result += num);
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let n of arr) {
    result *= n;
  }
  return result;
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(n) {
	let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
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
