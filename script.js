//calculator actions
const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a / b);

//display
const display = document.querySelector('.display');

//all buttons
const buttons = document.querySelectorAll('button');
const buttonArray = [...buttons];

let next;
let symbol;
let operator;
let newStr = '';
let intActive = 0;
let runningTotal;

powerUp();
//adding event listeners to all buttons
function powerUp() {
    buttonArray.forEach(button => {
        button.addEventListener('click', () => sortEm(button.innerText))
    })
    display.innerText = intActive;
};

//sorting buttons by what is a number and what isn't
function sortEm(sortBy) {
    if (!isNaN(sortBy) || (sortBy === '.')) {
        intActive += sortBy;
        issaNumber(intActive);
    } else {
        symbol = sortBy;
        nottaNumber(symbol);
    }
};

//number string turned into a number
function issaNumber(intActive) {
    if (intActive === '0') {
        return 0;
    } else {
        intActive = Number(intActive);
        mathUp(intActive);
    }
    display.innerText = intActive;
};

//sorting symbols from operators
function nottaNumber(symbol) {
    if ((symbol) === 'Delete') {
        intActive = 0;
        next = 0;
        operator = undefined;
        display.innerText = intActive;
    } else if ((symbol) === '=') {
        if (operator === undefined) {
            return;
        } else {
            display.innerText = runningTotal;
        }
    } else if ((symbol === 'Backspace')) {
        newStr = Math.floor(intActive / 10);
        display.innerText = newStr;
        intActive = Number(newStr);
    } else {
        operator = symbol;
        next = Number(intActive);
        display.innerText = next;
        intActive = 0;
    }
};

//mathing
function mathUp(intActive) {
    if (operator === '+') {
        runningTotal = add(next, intActive);
    } else if (operator === '−') {
        runningTotal = subtract(next, intActive);
    } else if (operator === '×') {
        runningTotal = multiply(next, intActive);
    } else if (operator === '÷') {
        runningTotal = division(next, intActive);
    };
    display.innerText = runningTotal;
};
