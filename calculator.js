//Calculator Project - The Odin Projecy
//Tom Hergenreter 2023

const calculator = document.querySelector('#calculator');
let displayText = document.querySelector('#displayText');
displayText.innerText = 'calc'
calculator.addEventListener('click', handleClick);

const memory = {
    numCache : '',
    num1 : '',
    num2 : '',
    operator : undefined,
    answer : undefined,
    display : ' ',
};

function handleClick(e){
    const className = e.target.classList;
    const idName = e.target.id;
    if(className.contains('number')){
        memory.numCache += e.target.innerText;
        updateDisplay('num');
    }else if(className.contains('operator')){
        if(memory.num2) operate();
        if(!memory.answer && memory.operator) operate();
        memory.operator = idName;
        if(memory.answer){
            memory.num1 = memory.answer;
            memory.num2 = memory.numCache;
            operate();
        }else if(memory.num1){
            memory.num2 = memory.numCache;
            operate();
        }else{
            memory.num1 = memory.numCache;
            memory.numCache = '';
        };
        // memory.numCache = '';    
    }else if(idName === 'equals'){
        memory.num2 = memory.numCache;
        memory.numCache = '';
        operate();
    }; 
    console.table(memory);
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
        case 'multiply':
            memory.answer = num1 * num2;
            break;
        case 'divide': 
            memory.answer = num1 / num2;
            break;
    }
    updateDisplay('answer');
}

function updateDisplay(type){
    switch (type){
        case 'num':
            memory.display = memory.numCache;
            break;
        case 'answer':
            memory.display = memory.answer;
            memory.numCache = '';
            memory.num1 = '';
            memory.num2 = '';
            break;
    };
    displayText.innerText = memory.display;
}

