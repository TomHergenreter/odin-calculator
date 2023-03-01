//Calculator Project - The Odin Projecy
//Tom Hergenreter 2023

const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display p');
calculator.addEventListener('click', handleClick);
display.innerText = '43770';

const memory = {
    numCache : '',
    num1 : '',
    num2 : '',
    operator : undefined,
    answer : '',
    display : '',
};

function handleClick(e){
    const className = e.target.classList;
    const idName = e.target.id;
    if(className.contains('number')){
        memory.numCache += e.target.innerText;
        updateDisplay();
    }else if(className.contains('operator')){
        memory.operator = idName;
        memory.num1 = memory.numCache;
        memory.numCache = '';
        updateDisplay();
    }else if(idName === 'equals'){
        memory.num2 = memory.numCache;
        operate();
    }; 
    display.innerText = memory.display;
    console.log(memory);
}

function updateDisplay(){

}

function operate(){
    num1 = parseFloat(memory.num1);
    num2 = parseFloat(memory.num2);
    switch (memory.operator) {
        case 'add': 
            memory.answer = num1 + num2;
            break;
        case 'subtract': 
            memory.answer = num1 - num2;
            break;
        case 'multiply': multiply();
            memory.answer = num1 * num2;
            break;
        case 'divide': 
            memory.answer = num1 / num2;
            break;
    }
}

function add(){
    console.log(memory.num1 + memory.num2)
    memory.answer = memory.num1 + memory.num2;
    return memory.num1 + memory.num2;
}

function subtract(){
    return memory.num1 - memory.num2;
}

function multiply(){
    return memory.num1 * memory.num2;
}

function divide(num1, num2){
    return memory.num1 / memory.num2;
}
