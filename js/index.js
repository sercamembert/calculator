//define numbers
const number0 = document.querySelector('.nr0');
const number1 = document.querySelector('.nr1');
const number2 = document.querySelector('.nr2');
const number3 = document.querySelector('.nr3');
const number4 = document.querySelector('.nr4');
const number5 = document.querySelector('.nr5');
const number6 = document.querySelector('.nr6');
const number7 = document.querySelector('.nr7');
const number8 = document.querySelector('.nr8');
const number9 = document.querySelector('.nr9');
const numbers = document.querySelectorAll('.number')

//define actions
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const minus = document.querySelector('.minus')
const add = document.querySelector('.add')
const equal = document.querySelector('.equal')
const sqrt = document.querySelector('.sqrt');
const pow = document.querySelector('.pow');
const clear = document.querySelector('.clear');
const changeSymbol = document.querySelector('.symbol');
const comma = document.querySelector('.comma');
const actions = document.querySelectorAll('.action')

//define display
const displayUp = document.querySelector('.display-up');
const displayDown = document.querySelector('.display-down');

let displayDownTemp = ""
let displayUpTemp = ""
let action = "";

numbers.forEach(box =>{
    box.addEventListener('click',(event)=>{
        boxValue = event.target.getAttribute('value');
        displayDownTemp+=boxValue;
        if(displayDownTemp.length >=17){
            displayDown.setAttribute('style','font-size:17px')
        }
        if(displayDownTemp.charAt(0) == "0"){
            displayDownTemp = displayDownTemp.slice(1)
        }
        displayDown.textContent = displayDownTemp;   
    })
})

actions.forEach(element => {
    element.addEventListener('click',(event)=>{
        actionValue = event.target.getAttribute('value');
        if(checkAction(action)){
            action = ""
        }else{
        action = actionValue
        displayUpTemp = displayDownTemp;
        displayDownTemp = "0";
        displayDown.textContent = "0";
        displayUp.textContent = displayUpTemp + actionValue     
        }
    })
});

equal.addEventListener('click',()=>{
    checkAction(action)
    action = ""
})

clear.addEventListener('click',functionClear);

comma.addEventListener('click',()=>{
    if(!displayDownTemp.includes('.')){
        displayDownTemp+="." 
        displayDown.textContent = displayDownTemp;
    }
})

changeSymbol.addEventListener('click',()=>{
    console.log(displayDownTemp)
    if(displayDownTemp.includes('-')){
        displayDownTemp = displayDownTemp.slice(1);
    }else{
        displayDownTemp = "-" + displayDownTemp;
    }
    displayDown.textContent = displayDownTemp;
})

pow.addEventListener('click',()=>{
    displayDownTemp = String(Math.pow(parseFloat(displayDownTemp),2))
    displayDown.textContent = displayDownTemp
})

sqrt.addEventListener('click',()=>{
    if(parseFloat(displayDownTemp)<0){
        displayDownTemp = "0"
    }else{
        displayDownTemp = String(Math.sqrt(parseFloat(displayDownTemp)))
    }
    displayDown.textContent = displayDownTemp
})

function checkAction(action){
    if(action == "+"){
        action = ""
        displayUp.textContent = "0"
        displayDownTemp = String(functionAdd(displayUpTemp,displayDownTemp)) 
        displayDown.textContent = displayDownTemp
        displayUpTemp = ""
        return true;
    }
    else if(action == "-"){
        action = ""
        displayUp.textContent = "0"
        displayDownTemp = String(functionMinus(displayUpTemp,displayDownTemp)) 
        displayDown.textContent = displayDownTemp
        displayUpTemp = ""
        return true;
    }
    else if(action == "/"){
        action = ""
        displayUp.textContent = "0"
        displayDownTemp = String(functionDivide(displayUpTemp,displayDownTemp)) 
        displayDown.textContent = displayDownTemp
        displayUpTemp = ""
        return true;
    }
    else if(action == "x"){
        action = ""
        displayUp.textContent = "0"
        displayDownTemp = String(functionMultiply(displayUpTemp,displayDownTemp)) 
        displayDown.textContent = displayDownTemp
        displayUpTemp = ""
        return true;
    }
}

function functionAdd(el1,el2){
    el1 = parseFloat(el1)
    el2 = parseFloat(el2)
    if(isNaN(el1) || isNaN(el2)){
        return 0;
    }else{
        return el1 +el2;   
    }

}

function functionMinus(el1,el2){
    el1 = parseFloat(el1)
    el2 = parseFloat(el2)
    if(isNaN(el1) || isNaN(el2)){
        return 0;
    }else{
        return el1 -el2;
    }

}

function functionDivide(el1,el2){
    el1 = parseFloat(el1)
    el2 = parseFloat(el2)
    if(isNaN(el1) || isNaN(el2) || el1 == 0 || el2 == 0){
        return 0;
    }else{
        return el1 / el2;
    }
}

function functionMultiply(el1,el2){
    el1 = parseFloat(el1)
    el2 = parseFloat(el2)
    if(isNaN(el1) || isNaN(el2)){
        return 0;
    }else{
        return el1 * el2;
    }
}

function functionClear(){
    displayDownTemp = ""
    displayUpTemp = ""
    action = "";
    displayDown.textContent = "0"
    displayUp.textContent = "0"
}




