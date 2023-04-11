export function functionAdd(el1,el2){
    el1 = parseFloat(el1);
    el2 = parseFloat(el2);
    if(isNaN(el1) || isNaN(el2)){
        return 0;
    }else{
        return el1 +el2;   
    }

}

export function functionMinus(el1,el2){
    el1 = parseFloat(el1);
    el2 = parseFloat(el2);
    if(isNaN(el1) || isNaN(el2)){
        return 0;
    }else{
        return el1 -el2;
    }

}

export function functionDivide(el1,el2){
    el1 = parseFloat(el1);
    el2 = parseFloat(el2);
    if(isNaN(el1) || isNaN(el2) || el1 == 0 || el2 == 0){
        return 0;
    }else{
        return el1 / el2;
    }
}

export function functionMultiply(el1,el2){
    el1 = parseFloat(el1);
    el2 = parseFloat(el2);
    if(isNaN(el1) || isNaN(el2)){
        return 0;
    }else{
        return el1 * el2;
    }
}