let container = document.querySelector(".container");
let containerOut = "";

fetch('pokemon.json')
.then((response) => response.json())
.then((pokemons) => {
    for (let pokemon of pokemons) {
        containerOut += `
        <div class="card">
            <div class="pkmn-image">
                <img class="pokemon-image" src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <div class="pkmn-name">
                <p class="pokemon">${pokemon.name}</p>
            </div>
        </div>
        `;
    }

    container.innerHTML = containerOut;
});