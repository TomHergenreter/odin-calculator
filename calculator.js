//Calculator Project - The Odin Projecy
//Tom Hergenreter 2023

const calculator = document.querySelector('#calculator');
let displayText = document.querySelector('#displayText');
displayText.innerText = 'what the fuck'
calculator.addEventListener('click', handleClick);

const memory = {
    numCache : '',
    num1 : '',
    num2 : '',
    operator : undefined,
    answer : '',
    display : ' ',
};

function handleClick(e){
    const className = e.target.classList;
    const idName = e.target.id;
    if(className.contains('number')){
        memory.numCache += e.target.innerText;
        updateDisplay('num1');
    }else if(className.contains('operator')){
        memory.operator = idName;
        memory.num1 = memory.numCache;
        memory.numCache = '';
        updateDisplay('operator');
    }else if(idName === 'equals'){
        memory.num2 = memory.numCache;
        operate();
    }; 
    console.log(memory);
}

function updateDisplay(type){
    switch (type){
        case 'num1':
            memory.display = memory.numCache;
            break;
        case 'operator':
            // memory.display =
            break;
        case 'results':
            memory.display = memory.results;
            break;
    };
    console.log(memory.display);
    displayText.innerText = memory.display;
}

function operate(){
    num1 = parseFloat(memory.num1);
    num2 = parseFloat(memory.num2);
    switch (memory.operator) {
        case 'add': 
            memory.results = num1 + num2;
            break;
        case 'subtract': 
            memory.results = num1 - num2;
            break;
        case 'multiply':
            memory.results = num1 * num2;
            break;
        case 'divide': 
            memory.results = num1 / num2;
            break;
    }
    updateDisplay('results');
}

