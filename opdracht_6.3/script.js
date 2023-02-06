let numbers = [];
let numbers2 = [];

for (let i = 0; i < 101; i++) {
    numbers.push(i);
}

for (let i = 100; i > -1; i--) {
    numbers2.push(i);
}

document.getElementById("numbers").innerText = numbers;
document.getElementById("numbers2").innerText = numbers2;