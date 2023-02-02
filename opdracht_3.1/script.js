let budget = 100;
let message = document.getElementById("message");

function question() {
    let product = prompt("Hoeveel kost het product?");

if (budget >= product) {
    console.log("%cU heeft genoeg geld!","color: #42DB00;")
    message.innerText = "U heeft genoeg geld!";
    message.style.color = "green";
} else {
    console.log("%cHelaas, te weinig geld.", "color: #DB0701;")
    message.innerText = "U heeft te weinig geld!";
    message.style.color = "red";
}
}