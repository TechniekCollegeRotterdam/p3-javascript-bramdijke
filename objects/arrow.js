let marvels = ["Spiderman", "Iron Man", "Endgame", "Infinity War"];

const addMarvel = () => {
    marvels.push("Hawk-eye");
}

addMarvel();

for (let marvel of marvels) {
    console.log(marvel);
}

