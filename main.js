// Basic Math Operators 

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
} 

function divide(a, b) {
  return a / b;
}

// Operate() Function

let operate = function(operator, a, b) {
  if (operator == '+') return add(a, b);
  else if (operator == '-') return subtract(a, b);
  else if (operator == '*') return multiply(a, b);
  else if (operator == '/') return divide(a, b);
}

console.log(operate('+', 5, 5));

const displayText = document.querySelector('.display');

// Number Buttons //
const number_buttons = document.querySelectorAll('.number');
console.log(number_buttons);