function add(a ,b) {
    return a + b;
}

function subtract(a ,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

let firstNum = [0,1,2,3,4,5,6,7,8,9];
let secondNum = [0,1,2,3,4,5,6,7,8,9];
let operator = ["+", "-", "*", "/"];

function operate(numOne, operation, numTwo) {
    if (operation === "+") {
        return add(numOne, numTwo);
    }
    else if (operation === "-") {
        return subtract(numOne. numTwo);
    }
    else if (operation === "*") {
        return multiply(numOne, numTwo);
    }
    else if (operation === "/") {
        return divide(numOne, numTwo);
    }
}

