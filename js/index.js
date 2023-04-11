import {functionAdd,functionMinus,functionDivide,functionMultiply} from './actions.js'

//define numbers
const numbers = document.querySelectorAll('.number');

//define actions
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const add = document.querySelector('.add');
const equal = document.querySelector('.equal');
const sqrt = document.querySelector('.sqrt');
const pow = document.querySelector('.pow');
const clear = document.querySelector('.clear');
const changeSymbol = document.querySelector('.symbol');
const comma = document.querySelector('.comma');
const actions = document.querySelectorAll('.action');

//define display
const displayUp = document.querySelector('.display-up');
const displayDown = document.querySelector('.display-down');

//main variables
let displayDownTemp = "";
let displayUpTemp = "";
let action = "";

numbers.forEach(box =>{
    box.addEventListener('click',(event)=>{
        let boxValue = event.target.getAttribute('value');
        displayDownTemp+=boxValue;
        if(displayDownTemp.charAt(0) == "0" && displayDownTemp.length>1){
            displayDownTemp = displayDownTemp.slice(1);
        }
        changeDisplayDown();
    })
})

actions.forEach(element => {
    element.addEventListener('click',(event)=>{
        let actionValue = event.target.getAttribute('value');
        if(checkAction(action)){
            action = "";
        }else{
        action = actionValue;
        displayUpTemp = displayDownTemp;
        displayDownTemp = "0";
        displayDown.textContent = "0";
        displayUp.textContent = displayUpTemp + actionValue;  
        }
    })
});

equal.addEventListener('click',()=>{
    checkAction(action);
    action = "";
})

clear.addEventListener('click',functionClear);

comma.addEventListener('click',()=>{
    if(!displayDownTemp.includes('.')){
        displayDownTemp+="." ;
        changeDisplayDown();
    }
})

changeSymbol.addEventListener('click',()=>{
    if(displayDownTemp.includes('-')){
        displayDownTemp = displayDownTemp.slice(1);
    }else{
        displayDownTemp = "-" + displayDownTemp;
    }
    changeDisplayDown();
})

pow.addEventListener('click',()=>{
    let powValue = Math.pow(parseFloat(displayDownTemp),2)
    if(isNaN(powValue)){
        displayDownTemp = "0";
    }else{
        displayDownTemp = String(powValue);
    }
    changeDisplayDown();
    displayUp.textContent = "0";
    displayUpTemp = "";
})

sqrt.addEventListener('click',()=>{
    let sqrtValue = Math.sqrt(parseFloat(displayDownTemp));
    if(isNaN(sqrtValue)){
        displayDownTemp = "0";
    }else{
        displayDownTemp = String(sqrtValue);
    }
    changeDisplayDown();
    displayUp.textContent = "0";
    displayUpTemp = "";
})

function checkAction(action){
    if(action == "+"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionAdd(displayUpTemp,displayDownTemp)) ;
        changeDisplayDown();
        displayUpTemp = "";
        return true;
    }
    else if(action == "-"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionMinus(displayUpTemp,displayDownTemp));
        changeDisplayDown();
        displayUpTemp = "";
        return true;
    }
    else if(action == "/"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionDivide(displayUpTemp,displayDownTemp));
        changeDisplayDown();
        displayUpTemp = "";
        return true;
    }
    else if(action == "x"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionMultiply(displayUpTemp,displayDownTemp)) ;
        changeDisplayDown();
        displayUpTemp = "";
        return true;
    }
}

function functionClear(){
    displayDownTemp = "";
    displayUpTemp = "";
    action = "";
    displayDown.textContent = "0";
    displayUp.textContent = "0";
    displayDown.setAttribute('style','font-size:40px');
}

function changeDisplayDown(){
    if(displayDownTemp.length >=17){
        displayDown.setAttribute('style','font-size:17px');
    }else{
        displayDown.setAttribute('style','font-size:40px');
    }
    return displayDown.textContent = displayDownTemp;
}




