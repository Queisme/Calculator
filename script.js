// needs to show zero; intentionally or while waiting

// typing a number enters "number building" mode and will display the current number(s)

// typing an operator "+" means we're entering a new number(s). 

// Need to remember the operator to perform function for later

// typing "equals" will perform a final calculation and show the result


const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a / b);

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('#equalBtn');
const delBtn = document.getElementById('#delBtn');
const backBtn = document.getElementById('#backBtn');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const display = document.querySelector('#display');



