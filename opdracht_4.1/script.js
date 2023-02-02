let value1 = document.getElementById("number1");
let value2 = document.getElementById("number2");
let solution = document.getElementById("solutionProblem");
let answer; 

function multiply() {
    answer = Number(number1.value) * Number(number2.value);
    if (number1.value > 0 && number2.value > 0) {
        solution.innerText = "Het antwoord is " + answer;
    }

    else {
        solution.innerText = "Het is te laag";
    }
}

function devide() {
    answer = Number(number1.value) / Number(number2.value);
    if (number1.value > 0 && number2.value > 0) {
        solution.innerText = "Het antwoord is " + answer;
    }

    else {
        solution.innerText = "Het is te laag";
    }
}

function add() {
    answer = Number(number1.value) + Number(number2.value);
    if (number1.value > 0 && number2.value > 0) {
        solution.innerText = "Het antwoord is " + answer;
    }

    else {
        solution.innerText = "Het is te laag";
    }
}

function minus() {
    answer = Number(value1.value) - Number(value2.value);
    if (number1.value > 0 && number2.value > 0) {
        solution.innerText = "Het antwoord is " + answer;
    }

    else {
        solution.innerText = "Het is te laag";
    }
}
