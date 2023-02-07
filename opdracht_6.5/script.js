// let value = 10;

// for (let i = 1; i < 11; i++) {
//     document.getElementById("solution").innerText += i + " x " + value + " = " + i*value + "\n" 
// }

tableOf(6)

function tableOf(n) {
    let value = n;

    for (let i = 1; i < 11; i++) {
        document.getElementById("solution").innerText += i + " x " + value + " = " + i*value + "\n" 
    }
}