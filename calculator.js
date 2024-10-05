var a0 = document.getElementById('a0');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var a5 = document.getElementById('a5');
var a6 = document.getElementById('a6');
var a7 = document.getElementById('a7');
var a8 = document.getElementById('a8');
var a9 = document.getElementById('a9');

var result = document.getElementById('result');

var add = document.getElementById('add');
var sub = document.getElementById('sub');
var mul = document.getElementById('mul');
var div = document.getElementById('div');
var mod = document.getElementById('mod');
var equal = document.getElementById('equal');

var firstValue = "";
var secondValue = "";
var operator = "";

function setupClickListener(element) {
    element.addEventListener("click", () => {
            result.textContent += element.textContent;
            if (!["add", "sub", "mul", "div", "mod"].includes(element.id)) {
                if (operator === "") {
                    firstValue += element.textContent;
                } else {
                    secondValue += element.textContent;
                }
        }
    });
}

function setupOperatorListener(element, op) {
    element.addEventListener("click", () => {
        operator = op;
        result.textContent += ` ${element.textContent} `;
    });
}

function calculate() {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    let res = 0;

    switch (operator) {
        case "add":
            res = num1 + num2;
            break;
        case "sub":
            res = num1 - num2;
            break;
        case "mul":
            res = num1 * num2;
            break;
        case "div":
            res = num1 / num2;
            break;
        case "mod":
            res = num1 % num2;
            break;
    }

    result.textContent = res;
    firstValue = res.toString();
    secondValue = "";
    operator = "";
    console.log(firstValue)
    console.log(secondValue)
    console.log(operator)
}

// Setup number buttons
[a0, a1, a2, a3, a4, a5, a6, a7, a8, a9].forEach(setupClickListener);

// Setup operator buttons
setupOperatorListener(add, "add");
setupOperatorListener(sub, "sub");
setupOperatorListener(mul, "mul");
setupOperatorListener(div, "div");
setupOperatorListener(mod, "mod");

// Setup equal button
equal.addEventListener("click", calculate);

document.getElementById('clear').addEventListener("click",()=>{
    location.reload()
})