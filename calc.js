const bottomDisplay = document.getElementById("displayBottom");
const topDisplay = document.getElementById("displayTop");

function displayNum() {
    let displayValue = "";
    let currentOperator = "";
    const numPad = document.querySelectorAll(".num");
    console.log(numPad);
    numPad.forEach(
        function(num) {
            num.addEventListener('click', () => {
                topDisplay.textContent += num.textContent;
            })
        }
    )
    const operator = document.querySelectorAll(".operator");
    operator.forEach(
        function(operator) {
            operator.addEventListener('click', () => {
                displayValue = topDisplay.textContent;
                topDisplay.textContent += ` ${operator.textContent} `
                currentOperator = operator.textContent;
                console.log(displayValue);
                console.log(currentOperator);
            })
        }
    )

    const equal = document.querySelector("#equal");
    equal.addEventListener('click', () => {
        displayValue = topDisplay.textContent;
        let numSplit = displayValue.split(' + ') || displayValue.split(' - ') || displayValue.split(' × ') || displayValue.split(' ÷ ');
        console.log(numSplit);
        let num1 = numSplit[0];
        let formatNum1 = parseFloat(num1);
        console.log(typeof formatNum1);
        let num2 = numSplit[1];
        let formatNum2 =  parseFloat(num2);
        console.log(typeof formatNum2);
        bottomDisplay.textContent = operate(formatNum1, formatNum2, currentOperator)
    })
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    };
}
displayNum();