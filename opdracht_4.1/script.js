let value1 = document.getElementById("number1");
let value2 = document.getElementById("number2");
let solution = document.getElementById("solutionProblem");
let answer; //maak alvast een variabel aan en laat deze leeg

function multiply() {
    answer =  Number(number1.value) * Number(number2.value); // en dan op deze manier
//     let answer = Number(number1.value) * Number(number2.value);
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
// je bent er bijna:
// je hebt nu overal Number() gebruikt, dat is prima, maar het was alleen nodig bij de add(). 
// ik zie nu dat je vier keer dezelfde variabel answer aanmaakt. Als je deze ook buiten de functies plaatst hoef je het maar 1 keer aan te maken.
// kijk op regel 4 en 7
