const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const division = ((a, b) => a / b);

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let string = '';
const arr = Array.from(buttons);
arr.forEach(button =>
    button.addEventListener('click', (e) => {
        if (e.target.textContent == '=') {
            string = eval(string);
            display.value = string;
        }

        else if (e.target.textContent == 'Delete') {
            string = '';
            display.value = string;
        }

        else if (e.target.textContent == 'Backspace') {
            string = string.substring(0, string.length -1);
            display.value = string;
        }
            
        else if (e.target.textContent == '÷') {
            
        }
        
        else if (e.target.textContent == 'x') {

        }
        else if (e.target.textContent == '-') {
            
        }
        
        else if (e.target.textContent == '+') {

        }
        
        else {
            string += e.target.textContent;
            display.value = string;
        }

        
    })

);






