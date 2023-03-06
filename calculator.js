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
        clickNumber(e, idName, activeButton);
    }else if(className.contains('operator')){
        clickOperator(className, idName, activeButton);  
    }else if(idName === 'equals'){
        clickEquals();
    }else if(idName === 'clear-entry'){
        clickClearEntry();
    }
    else if(idName === 'clear'){
            clickClear();
    }else if(idName === 'on-button'){
        updateDisplay('on');
    } 
}

function clickNumber(clickEvent, idName, activeButton) {
    if (idName === 'decimal' && memory.numCache.indexOf('.') >= 0){
        return;
    }else{
        memory.numCache += clickEvent.target.innerText;
    };
    if(activeButton.length >= 1){
        activeButton.forEach(button => button.classList.remove('active-button'));
     }
    updateDisplay('num');  
}

function clickOperator(className, idName, activeButton){
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
    if(activeButton.length >= 1){
        activeButton.forEach(button => button.classList.remove('active-button'));
     }
    className.add('active-button');
}

function clickEquals() {
    if(memory.answer){
        memory.num1 = memory.answer;
        memory.num2 = memory.numCache;
    }else{
        memory.num2 = memory.numCache;
    }
    operate();
}

function clickClear(){
    memory.numCache = '';
    updateDisplay('clear')
}

function clickClearEntry(){
    memory.numCache = '';
    memory.num1 = '';
    memory.num2 = '';
    memory.operator = undefined;
    memory.answer = undefined;
    updateDisplay('clear');
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
            if(num2 === 0){
                updateDisplay('error')
                return;
            };
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
            memory.display = Math.round(memory.answer * 100) / 100;
            memory.answer;
            memory.numCache = '';
            memory.num1 = '';
            memory.num2 = '';
            break;
        case 'clear':
            memory.display = '';
            break;
        case 'error':
            memory.display = '....haha'
            memory.numCache = '';
            memory.num1 = '';
            memory.num2 = '';
            memory.operator = '';
    };
    displayText.innerText = memory.display;
}


document.addEventListener('keydown', (event) => {
    var key = event.key;
    if (key === '/') event.preventDefault();
    console.log(key);
    if(/[0-9]/.test(key)){
        let numberButton = document.getElementById(`${key}`);
        numberButton.click();
    }else if(/\=|\+|\-|\*|\//.test(key)){
        let operatorName;
        switch (key){
            case '+':
                operatorName = 'add';
                break;
            case '-':
                operatorName = 'subtract';
                break;
            case '*':
                operatorName = 'multiply';
                break;
            case '/':
                operatorName = 'divide';
                break;
            case '=':
                operatorName = 'equals';
                break;
        }
            let operatorButton = document.getElementById(`${operatorName}`)
            operatorButton.click();
    };
  }, false);

