function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x/y;
}

function multiply(x, y) {
    return x * y;
}

function operate(operator, x, y) {      
    if (operator == "x") {
        return multiply(x, y);
    } else if (operator == "/") {
        return divide(x, y);
    } else if (operator == "-") {
        return subtract(x, y);
    } else if (operator == "+") {
        return add(x, y);
    }
}

function splitOperation(text, operationIndex) {
    text = text.trim();
    let question = []
    question[0] = text.trim().split(" ").join("").slice(0, operationIndex);
    question[1] = text.trim().split(" ").join("").slice(operationIndex + 1);
    
    return question;
}

let questions;
let result;
let x;
let y;
let operation; 
let operationIndex;

let numButtons = document.querySelectorAll("#numberButton");
let equalButton = document.querySelector("#equalButton");
let operationButton = document.querySelectorAll("#operationButton");
let questionScreen = document.querySelector("#displayTextTop");
let answerScreen = document.querySelector("#displayTextBottom");

numButtons.forEach((value) => {
    value.addEventListener("click", () => {
        answerScreen.textContent = "";
        questionScreen.textContent = questionScreen.textContent + value.textContent;
    })
})

operationButton.forEach((value) => {
    value.addEventListener("click", (event) => {        
        let addedOperator = event.target.textContent;

        if (questionScreen.textContent.trim().split(" ").join("") == "") {
            questionScreen.textContent = questionScreen.textContent.trim() + addedOperator;
        } else if (! isNaN(Number(questionScreen.textContent.trim().split(" ").join("")))) {
            operation = addedOperator.trim().split(" ").join(""); 
            operationIndex = questionScreen.textContent.trim().split(" ").join("").length;

            console.log(operationIndex);
            questionScreen.textContent = questionScreen.textContent + operation;
        } else {
            questions = splitOperation(questionScreen.textContent + addedOperator, operationIndex);

            if ((isNaN(Number(questions[1])) && (! isNaN(parseInt(questions[1]))))) {
                x = parseInt(questions[0]);
                y = parseInt(questions[1]);
    
                result = operate(operation, x, y);
    
                operation = addedOperator.trim().split(" ").join("");
                questionScreen.textContent = result + operation;
            } else {
                questionScreen.textContent = questionScreen.textContent + addedOperator.trim().split(" ").join("");
            }
        }
    })
})

equalButton.addEventListener("click", () => {
    questions = splitOperation(questionScreen.textContent, operationIndex);

    questionScreen.textContent = "";
    x = parseInt(questions[0]);
    y = parseInt(questions[1]);

    answerScreen.textContent = operate(operation, x, y);
})
