//Calculator Project - The Odin Projecy
//Tom Hergenreter 2023


const dislpay = document.querySelector('#display p');
const calculator = document.querySelector('#calculator');
calculator.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.className === 'calc-button'){
        dislpay.innerText = e.target.innerText
    };
    
});

function operate(num1, num2, operator){
switch (operator) {
    case 'add': add(num1, num2);
    break;
    case 'subtract': subtract(num1, num2);
    break;
    case 'multiply': multiply(num1, num2);
    break;
    case 'divide': divide(num1, num2);
    break;
}
}

function add(num1, num2){
    console.log(num1 + num2);
}

function subtract(num1, num2){
    console.log(num1 - num2);
}

function multiply(num1, num2){
    console.log(num1 * num2);
}

function divide(num1, num2){
    console.log(num1 / num2);
}

operate(2,2,'add')
operate(2,2,'subtract')
operate(2,2,'multiply')
operate(2,2,'divide');