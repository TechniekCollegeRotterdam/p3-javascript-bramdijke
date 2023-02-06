let output = document.getElementById("valueOutput");
let input = document.getElementById("inputField");
let shop = [];

function addProduct() {
    let product = input.value;
    shop.push(product);
    document.getElementById("valueOutput").innerText = shop;
}