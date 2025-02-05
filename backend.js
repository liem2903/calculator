function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x + y;
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

function splitOperation(text) {
    text = text.trim();

    let question;
    if (text.includes("+")) {
        question = text.split("+");
        question.splice(2, 0, "+");
    } else if (text.includes("-")) {
        question = text.split("-");
        question.splice(2, 0, "-");
    } else if (text.includes("/")) {
        question = text.split("/");
        question.splice(2, 0, "/");
    } else if (text.includes("x")) {
        question = text.split("x");
        question.splice(2, 0, "x");
    }

    question[0] = question[0].trim().split(" ").join("");
    question[1] = question[1].trim().split(" ").join("");
    question[2] = question[2].trim().split(" ").join("");
    
    return question;
}

let questions;
let result;

let numButtons = document.querySelectorAll("#numberButton");
let equalButton = document.querySelector("#equalButton");
let questionScreen = document.querySelector("#displayTextTop");
let answerScreen = document.querySelector("#displayTextBottom");

numButtons.forEach((value) => {
    value.addEventListener("click", () => {
        answerScreen.textContent = "";
        questionScreen.textContent = questionScreen.textContent + value.textContent;
    })
})

equalButton.addEventListener("click", () => {
    questions = splitOperation(questionScreen.textContent);
    questionScreen.textContent = "";
    let x = parseInt(questions[0]);
    let y = parseInt(questions[1]);
    let operation = questions[2];

    answerScreen.textContent = operate(operation, x, y);
})
