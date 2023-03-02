//Calculator Project - The Odin Projecy
//Tom Hergenreter 2023

const calculator = document.querySelector('#calculator');
let displayText = document.querySelector('#displayText');
displayText.innerText = ''
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
    let activeButton = calculator.querySelectorAll('.active-button');
    if(className.contains('number')){
        console.log(memory.numCache.indexOf('.'), memory.numCache);
        if (idName === 'decimal' && memory.numCache.indexOf('.') >= 0){
            return;
        }else{
            memory.numCache += e.target.innerText;
        };
        if(activeButton.length >= 1){
            activeButton.forEach(button => button.classList.remove('active-button'));
         }
        updateDisplay('num');
    }else if(className.contains('operator')){
        if(memory.answer){
            memory.num1 = memory.answer;
            if(memory.numCache){
                memory.num2 = memory.numCache
                operate();
            }
        }else if(memory.num1){
            memory.num2 = memory.numCache;
            operate();
        }else{
            memory.num1 = memory.numCache;
            memory.numCache = '';
        };
        memory.operator = idName;
        className.add('active-button');   
    }else if(idName === 'equals'){
        if(memory.answer){
            memory.num1 = memory.answer;
            memory.num2 = memory.numCache;
        }else{
            memory.num2 = memory.numCache;
        }
        operate();
    }else if(idName === 'clear-entry'){
        memory.numCache = '';
        updateDisplay('clear')
    }
    else if(idName === 'clear'){
            memory.numCache = '';
            memory.num1 = '';
            memory.num2 = '';
            memory.operator = undefined;
            memory.answer = undefined;
            updateDisplay('clear');
    }else if(idName === 'on-button'){
        updateDisplay('on');
    } 
    // console.table(memory);
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
        case 'on':
            memory.display = 'Hello!';
            break;
        case 'num':
            memory.display = memory.numCache;
            break;
        case 'answer':
            memory.display = memory.answer;
            memory.numCache = '';
            memory.num1 = '';
            memory.num2 = '';
            break;
        case 'clear':
            memory.display = '';
            break;
    };
    displayText.innerText = memory.display;
}

