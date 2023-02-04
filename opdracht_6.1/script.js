let products = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];
let count = products.length;

document.getElementById('productCount').innerText = "Er zitten " + count + " producten in uw winkelmand";   
document.getElementById('productList').innerText = "Uw producten zijn: " + products;   
document.getElementById('productItem').innerText = products[3] + ", staat op de vierde plek in uw winkelmand"; 
products.splice(1, 1, "Bier");  
document.getElementById('productError').innerText = products;

function addProduct() {
    products.push("Kaas");
    document.getElementById("productItems").innerText = products;
}

if (products.length > 1) {
    document.getElementById("productMessage").innerText = products;
} else {
    document.getElementById("productMessage").innerText = "U heeft niet genoeg producten om te tonen";
}

if (products[4] == "Drop") {
    document.getElementById("productCheck").innerText = products;
} else {
    document.getElementById("productCheck").innerText = "U heeft geen drop";
}

document.getElementById("productSpaces").innerText = products.join(', ' );

document.getElementById("productSpliceBefore").innerText = products;
document.getElementById("productSpliceAfter").innerText = products.splice(2);

products.sort();
document.getElementById("productSort").innerText = products;


