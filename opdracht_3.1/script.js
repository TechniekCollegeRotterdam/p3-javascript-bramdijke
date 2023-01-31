let budget = 100;

function question() {
    let product = prompt("Hoeveel kost het product?");

if (budget >= product) {
    console.log("%cU heeft genoeg geld!","color: #42DB00;")
} else {
    console.log("%cHelaas, te weinig geld.", "color: #DB0701;")
}
}