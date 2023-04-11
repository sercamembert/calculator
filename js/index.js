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

let displayDownTemp = "";
let displayUpTemp = "";
let action = "";

numbers.forEach(box =>{
    box.addEventListener('click',(event)=>{
        let boxValue = event.target.getAttribute('value');
        displayDownTemp+=boxValue;
        if(displayDownTemp.length >=17){
            displayDown.setAttribute('style','font-size:17px');
        }
        if(displayDownTemp.charAt(0) == "0" && displayDownTemp.length>1){
            displayDownTemp = displayDownTemp.slice(1);
        }
        displayDown.textContent = displayDownTemp;   
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
        displayDown.textContent = displayDownTemp;
    }
})

changeSymbol.addEventListener('click',()=>{
    if(displayDownTemp.includes('-')){
        displayDownTemp = displayDownTemp.slice(1);
    }else{
        displayDownTemp = "-" + displayDownTemp;
    }
    displayDown.textContent = displayDownTemp;
})

pow.addEventListener('click',()=>{
    displayDownTemp = String(Math.pow(parseFloat(displayDownTemp),2));
    displayDown.textContent = displayDownTemp;
    displayUp.textContent = "0";
    displayUpTemp = "";
})

sqrt.addEventListener('click',()=>{
    if(parseFloat(displayDownTemp)<0){
        displayDownTemp = "0";
    }else{
        displayDownTemp = String(Math.sqrt(parseFloat(displayDownTemp)));
    }
    displayDown.textContent = displayDownTemp;
    displayUp.textContent = "0";
    displayUpTemp = "";
})

function checkAction(action){
    if(action == "+"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionAdd(displayUpTemp,displayDownTemp)) ;
        displayDown.textContent = displayDownTemp;
        displayUpTemp = "";
        return true;
    }
    else if(action == "-"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionMinus(displayUpTemp,displayDownTemp));
        displayDown.textContent = displayDownTemp;
        displayUpTemp = "";
        return true;
    }
    else if(action == "/"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionDivide(displayUpTemp,displayDownTemp));
        displayDown.textContent = displayDownTemp;
        displayUpTemp = "";
        return true;
    }
    else if(action == "x"){
        action = "";
        displayUp.textContent = "0";
        displayDownTemp = String(functionMultiply(displayUpTemp,displayDownTemp)) ;
        displayDown.textContent = displayDownTemp;
        displayUpTemp = "";
        return true;
    }
}

// function functionAdd(el1,el2){
//     el1 = parseFloat(el1);
//     el2 = parseFloat(el2);
//     if(isNaN(el1) || isNaN(el2)){
//         return 0;
//     }else{
//         return el1 +el2;   
//     }

// }

// function functionMinus(el1,el2){
//     el1 = parseFloat(el1);
//     el2 = parseFloat(el2);
//     if(isNaN(el1) || isNaN(el2)){
//         return 0;
//     }else{
//         return el1 -el2;
//     }

// }

// function functionDivide(el1,el2){
//     el1 = parseFloat(el1);
//     el2 = parseFloat(el2);
//     if(isNaN(el1) || isNaN(el2) || el1 == 0 || el2 == 0){
//         return 0;
//     }else{
//         return el1 / el2;
//     }
// }

// function functionMultiply(el1,el2){
//     el1 = parseFloat(el1);
//     el2 = parseFloat(el2);
//     if(isNaN(el1) || isNaN(el2)){
//         return 0;
//     }else{
//         return el1 * el2;
//     }
// }

function functionClear(){
    displayDownTemp = "";
    displayUpTemp = "";
    action = "";
    displayDown.textContent = "0";
    displayUp.textContent = "0";
}




