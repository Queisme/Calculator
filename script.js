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
        operator;
    } else if ((sortBy) === 'Backspace') {
        if (list.length === 1) {
            list = '0';
        } else {
            list = list.substring(0, list.length - 1);
        }
    } else if ((sortBy) === '=') {
        if (operator === null) {
            return;
        }
        mathUp(Number(list));
        operator = null;
        // list = total;
        total = 0;
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
    list = '0';
};

//mathing
function mathUp(intList) {
    if (operator === '+') {
       add(total, intList);
    } else if (operator === '−') {
       subtract(total, intList);
    } else if (operator === '×') {
       multiply(total, intList);
    } else if (operator === '÷') {
       division(total, intList);
    };
    console.log(total);
    console.log(intList);
    console.log(add(total, intList))
};


//1 ah ah ah, 2 ah ah ah, 3 ah ah ah
function issaNumber(count) {
    if (list === '0') {
        list = count;
    } else {
        list += count;
    };
};

//add event listners to buttons and send 'em to be sorted
function startCal() {
    buttonArray.forEach(button => {
        button.addEventListener('click', () => sortEm(button.innerText))
    });
};

startCal();
