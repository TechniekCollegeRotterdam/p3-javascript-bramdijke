function increaseButton() {
    let element = document.getElementById('increaseText');
    let value = element.innerHTML;

    ++value;

    document.getElementById('increaseText').innerHTML = value;

    if (value >= 10) {
        let value = 0;
        document.getElementById('increaseText').innerHTML = value;
    }
}