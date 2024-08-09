//calculator actions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;

//display
const display = document.querySelector('.numberInput');

//all buttons
const buttons = document.querySelectorAll('button');
const buttonArray = [...buttons];

let symbol;
let next = 0;
let operator = null;
let active = 0;
let newStr = '';
let runningTotal = 0;

powerUp();
//adding event listeners to all buttons
function powerUp() {
  buttonArray.forEach((button) => {
    button.addEventListener('click', () => sortEm(button.innerText));
  });
  display.innerText = active;
}

//sorting buttons by what is a number and what isn't
function sortEm(sortBy) {
  if (!isNaN(sortBy) || sortBy === '.') {
    active += sortBy;
    issaNumber(active);
  } else {
    symbol = sortBy;
    nottaNumber(symbol);
  }
  display.innerTest = active;
}

//number string turned into a number
function issaNumber(active) {
  if (active === '0') {
    return 0;
  } else {
    active = Number(active);
    mathUp(active);
  }
  display.innerText = active;
}

//sorting symbols from operators
function nottaNumber(symbol) {
  if (symbol === 'Delete') {
    active = 0;
    next = 0;
    operator = null;
    runningTotal = 0;
    display.innerText = active;
  } else if (symbol === '=') {
    if (operator === null) {
      return;
    } else {
      display.innerText = runningTotal;
    }
  } else if (symbol === 'Backspace') {
    newStr = Math.floor(active / 10);
    display.innerText = newStr;
    active = Number(newStr);
  } else {
    operator = symbol;
    active = Number(active);
    next = active;
    active = 0;
    display.innerText = next;
    mathUp();
  }
}

//mathing
function mathUp(active) {
  console.log(next);
  console.log(active);
  console.log(operator);
  console.log(runningTotal);
  if (operator === '+') {
    runningTotal = add(next, active);
  } else if (operator === '−') {
    runningTotal = subtract(next, active);
  } else if (operator === '×') {
    runningTotal = multiply(next, active);
  } else if (operator === '÷') {
    runningTotal = division(next, active);
  }
}

// let num1 = '';
// let num2 = '';
// let operator = ['+, -, *, /'];

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const subtract = (num1, num2) => {
//   return num1 - num2;
// };
// const multiply = (num1, num2) => {
//   return num1 * num2;
// };
// const divide = (num1, num2) => {
//   return num1 / num2;
// };
