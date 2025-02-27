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

let numList = [0,1,2,3,4,5,6,7,8,9];
let operator = ["+", "-", "*", "/"];

function operate(numOne, operation, numTwo) {
    if (operation === "+") {
        return add(numOne, numTwo);
    }
    else if (operation === "-") {
        return subtract(numOne, numTwo);
    }
    else if (operation === "*") {
        return multiply(numOne, numTwo);
    }
    else if (operation === "/") {
        if (numTwo === 0) {
            return "MathError";
        }
        return divide(numOne, numTwo);
    }
}

const btn = document.querySelectorAll("button");
const display = document.querySelector(".text");
const output = document.querySelector(".output");
btn.forEach(eachBtn => {
        eachBtn.addEventListener("click", () => {
            if (eachBtn.textContent === "C") {
                display.textContent = "";
                output.textContent = "";
            }
            else if (eachBtn.textContent === "=") {
                // if (display.textContent.length ===3) {
                //     if (operator.includes(display.textContent[1]) && numList.includes(+display.textContent[0]) && numList.includes(+display.textContent[2])){
                //         console.log("Yes");
                //         output.textContent = operate(+display.textContent[0], display.textContent[1], +display.textContent[2]);
                //     }
                // }
                const operand = operator.find(op => display.textContent.includes(op));
                if (operand) {
                    const idx = display.textContent.indexOf(operand);
                    const firstNum = display.textContent.slice(0,idx);
                    const secondNum = display.textContent.slice(idx+1);
                    output.textContent = operate(+firstNum, operand, +secondNum);
                }
            }
            else {
                if (output.textContent !== "") {
                    display.textContent = "";
                    output.textContent = "";
                }
                display.textContent += eachBtn.textContent;
            }
}
)});