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
            if (eachBtn.textContent === "AC") {
                display.textContent = "";
                output.textContent = "";
            }
            else if (eachBtn.textContent === "Del") {
                display.textContent = display.textContent.replace(display.textContent.at(-1), '');
            }
            else if (eachBtn.textContent === ".") {
                if (display.textContent.includes(".")) {
                    display.textContent += "";
                }
                else {
                    display.textContent += eachBtn.textContent;
                }
            }
            else if (eachBtn.textContent === "=") {
                const operand = operator.find(op => display.textContent.includes(op));
                if (operand) {
                    const idx = display.textContent.indexOf(operand);
                    const firstNum = display.textContent.slice(0,idx);
                    const secondNum = display.textContent.slice(idx+1);
                    if (!secondNum) {
                        output.textContent = "ERROR";
                    }
                    else {
                        output.textContent = operate(+firstNum, operand, +secondNum)
                    };
                }
                else {
                    output.textContent = display.textContent;
                }
            }
            else if (operator.includes(eachBtn.textContent)) {
                const operand = operator.find(op => display.textContent.includes(op));
                if (operand && output.textContent === "") {
                    const idx = display.textContent.indexOf(operand);
                    const firstNum = display.textContent.slice(0,idx);
                    const secondNum = display.textContent.slice(idx+1);
                    display.textContent = operate(+firstNum, operand, +secondNum) + eachBtn.textContent;
                }
                else if (output.textContent !== "") {
                    display.textContent = output.textContent + eachBtn.textContent;
                    output.textContent = "";
                }
                else {
                    display.textContent += eachBtn.textContent;
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

window.onkeydown = function(event) {
    if (event.keyCode === 46) {
        display.textContent = "";
        output.textContent = "";
    }
    else if (event.keyCode === 8) {
        display.textContent = display.textContent.replace(display.textContent.at(-1), '');
    }
    else if (event.keyCode === 190) {
        if (display.textContent.includes(".")) {
            display.textContent += "";
        }
        else {
            display.textContent += ".";
        }
    }
    else if (event.keyCode === 187 || event.keyCode === 13) {
        const operand = operator.find(op => display.textContent.includes(op));
        if (operand) {
            const idx = display.textContent.indexOf(operand);
            const firstNum = display.textContent.slice(0,idx);
            const secondNum = display.textContent.slice(idx+1);
            if (!secondNum) {
                output.textContent = "ERROR";
            }
            else {
                output.textContent = operate(+firstNum, operand, +secondNum)
            };
        }
        else {
            output.textContent = display.textContent;
        }
    }
    else if (event.keyCode === 107 || event.keyCode === 109 || event.keyCode === 106 || event.keyCode === 111 || event.keyCode === 191 || event.keyCode === 189) {
        const operand = operator.find(op => display.textContent.includes(op));
        if (operand && output.textContent === "") {
            const idx = display.textContent.indexOf(operand);
            const firstNum = display.textContent.slice(0,idx);
            const secondNum = display.textContent.slice(idx+1);
            display.textContent = operate(+firstNum, operand, +secondNum) + event.key;
        }
        else if (output.textContent !== "") {
            display.textContent = output.textContent + event.key;
            output.textContent = "";
        }
        else {
            display.textContent += event.key;
        }
    }
    else if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
        if (output.textContent !== "") {
            display.textContent = "";
            output.textContent = "";
        }
        display.textContent += event.key;
    }
}

