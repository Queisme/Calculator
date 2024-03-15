// needs to show zero; intentionally or while waiting

// typing a number enters "number building" mode and will display the current number(s)

// typing an operator "+" means we're entering a new number(s). 

// Need to remember the operator to perform function for later

// typing "equals" will perform a final calculation and show the result


const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a / b);

const previous = document.querySelector('.previous');
const current = document.querySelector('.current');

let currentNum = '';
let list = '0';
let previousNum = '';

startUp();

console.log(document.querySelector('.current'))

function startUp(e) {
    document.querySelectorAll('.number')
    document.querySelectorAll('.operator')
    document.querySelector('.other')
        .addEventListener('click', isNumber);
};
    current.innerText = list;


function buttonClick(value) {
    if (isNaN(value)) {
        notNumber(value);
    } else {
        isNumber(value)
    };
    current.innerText = list;
};

function notNumber(value) {
    switch (e) {
        case 'Delete':
            list = '0';
            currentNum = '0';
            previousNum.display.hidden
            break;
        case 'Backspace':
            if (list.length === 1) {
                list = '0';
            } else {
                list = list.substring(0, list.length - 1);
            }
            break;
        case '&equals;':
            if (currentNum || previousNum === null) {
                return list;
            }
            totalUp(Number(list));
            previousNum = null;
            list = currentNum;
            currentNum = 0;
            break;
        case '&plus;':
        case '&minus;':
        case '&times;':
        case '&divide;':
            totalUp();
            break;
    };
};

function totalUp(list) {
    if (value === '&plus;') {
        add(previousNum,list);
    } else if (value === '&minus;') {
        subtract(previousNum,list);
    } else if (value === '&times;') {
        multiply(previousNum,list);
    } else if (value === '&divide;') {
        division(previousNum,list);
    };
    
};


function isNumber(nums) {
    list += nums;
    current.innerText = list;
};
