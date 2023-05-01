const buttons = document.querySelectorAll("#btn");
const result = document.querySelectorAll("#result");

let num1 = null;
let num2 = null;
let operator = null;
let shouldClear = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("value");

        if (shouldClear){
            clear();
        }

        if (value === "clear"){
            clear();
        } else if (value === "backspace") {
            backspace();
        } else if (value === "+" || value === "-" || value === "*" || value === "/"){
            operatorClick();
        } else if (value === "="){
            equals();
        } else{
            numberClick(value);
        }
    });
});

function clear(){
    num1 = null;
    num2 = null;
    operator = null;
    result.innerText = "0";
}

function backspace(){
    if (result.innerText.length === "1"){
        result.innerText = "0";
    }else {
        result.innerText = result.innerText.slice(0, -1);
    }
}

function operatorClick(){
    if (num1 === null ){
        num1 = parseFloat (result.innerText);
        operator = value;
        result.innerText = "0";
    } else if( num2 == null){
        num2 = parse.parseFloat (result.innerText);
        const result = calculate();
        num1 = result;
        num2 = null;
        operator = value;
        output.innerText = "0";
    }
}

function numberClick(value){
    if(result.innerText === "0"){
        result.innerText = value;
    } else {
        result.innerText = result.innerText + value;
    }
}

function equals(){
    if (num1 === null){
        return;
    }
    if (num2 === null) {
        num2 = parseFloat(result.innerText);
    }

    const result = calculate();
    output.innerText = result;
    num1 = result;
    num2 = null;
    shouldClear = true;
}

function calculate(){
    if(operator === "%"){
        return num1 % num2;
    } else if (operator === "/"){
        return num1 / num2;
    } else if (operator === "*"){
        return num1 * num2; 
    } else if (operator === "+"){
        return num1 + num2;
    } else if (operator === "-"){
        return num1 - num2;
    }
}