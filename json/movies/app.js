fetch('movies.json')
.then((response) => response.json())
.then((movies) => {

let text = ""; 

for (let x of movies) {
    text += 
    `<div>
    <h1>${x.name}</h1>
    <p>${x.year}</p>
    <p>${x.rating}</p>
    <img src="${x.img}"width=100%">
    </div>`
}

document.getElementById("info").innerHTML = text;

});