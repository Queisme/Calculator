// needs to show zero; intentionally or while waiting

// typing a number enters "number building" mode and will display the current number(s)

// typing an operator "+" means we're entering a new number(s). 

// Need to remember the operator to perform function for later

// typing "equals" will perform a final calculation and show the result

//calculator actions
const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a / b);

//display
const display = document.querySelector('.display');

//all buttons
const buttons = document.querySelectorAll('button');

let list = '0';
let total = 0;
let operator;

const buttonArray = [...buttons];

//add event listners to buttons and send 'em to be sorted
function startCal() {
    buttonArray.forEach(button => {
        button.addEventListener('click', () => sortEm(button.innerText))
    });
};

//sort 'em by NaN - true or false - & display numbers
function sortEm(sortBy) {
    if (!isNaN(sortBy) || (sortBy === '.')) {
        issaNumber(sortBy);
    } else {
        nottaNumber(sortBy);
    }
    display.innerText = list;
}

//not numbers sorted further
function nottaNumber(sortBy) {
    if ((sortBy) === 'Delete') {
        list = '0';
        total = '0';
    } else if ((sortBy) === 'Backspace') {
        list = list.substring(0, list.length - 1);
    } else if ((sortBy) === '=') {
        if (operator === null) {
            return;
        }
        mathUp(Number(list));
        // operator = null;
        // list = total;
        // total = 0;
    } else {
        rackEm(sortBy);
    };
};

//make strings numbers & setting up math
function rackEm(sortBy) {
    if (list === '0') {
        return;
    }
    const intList = Number(list);
    
    if (total === 0) {
        total = intList;
    } else {
        mathUp(intList);
    }
    operator = sortBy;
    list = total;
}

function mathUp(intList) {
    if (operator === '+') {
        add(intList, total);
    } else if (operator === '−') {
        subtract(intList, total);
    } else if (operator === '×') {
        multiply(intList, total);
    } else if (operator === '÷') {
        division(intList, total);
    };
    console.log(intList)
    console.log(total)
};

function issaNumber(nums) {
    if (list === '0') {
        list = nums;
    } else {
        list += nums;
    };
};

startCal();
