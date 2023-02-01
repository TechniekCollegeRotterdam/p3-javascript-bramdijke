let value1 = document.getElementById("number1");
let value2 = document.getElementById("number2");
let solution = document.getElementById("solutionProblem");

function multiply() {
    let answer = Number(number1.value) * Number(number2.value);
    solution.innerText = "Het antwoord is " + answer;
}

function devide() {
    let answer = Number(number1.value) / Number(number2.value);
    solution.innerText = "Het antwoord is " + answer;
}

function add() {
    let answer = Number(number1.value) + Number(number2.value);
    solution.innerText = "Het antwoord is " + answer;
}

function minus() {
    let answer = Number(number1.value) - Number(number2.value);
    solution.innerText = "Het antwoord is " + answer;
}