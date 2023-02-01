let value = 0;
let element = document.getElementById('increaseText');

function increaseButton() {
    if (value >= 9) {
        value = 0;
        element.innerText = value;
    }

    else {
        value += 1;
        element.innerText = value;
    }
}