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

//er zijn een aantal punten. Variabelen kun je het beste buiten de functie aanmaken. Je hebt ze straks namelijk ook nog op andere plekken nodig.
// maak je een variabel aan IN een functie dan kan het alleen daar gebruikt worden.
// op regel 7 doe je bijna hetzelfde als regel 2. Daar sla je namelijk je element op in de variabel element
//dan doe je op regel 7: element.innerText = value
//dit geldt ook voor regel 11

// laaste, regel 5 is goed, maar het is beter door te zeggen: value += 1 --> dat betekend value = value + 1. Dan wordt daadwerkelijk de variabel value
// herschreven, nu niet. dus de nieuwe "value" is de oude "value" + 1
