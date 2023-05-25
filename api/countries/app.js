let output = document.querySelector(".box");
let out = "";

fetch(`https://restcountries.com/v3.1/all/`)
  .then((response) => response.json())
  .then((countries) => {
    for (let country of countries) {
      out += `
      <div class="card">
      <img class="image" src="${country.flags.png}">
      <h1 class="title">${country.name.common}</h1>
      </div>
      `;
    }
    output.innerHTML = out;
  });
