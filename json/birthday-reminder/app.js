let title = document.querySelector(".title");
let titleout = "";
let output = document.querySelector(".peoplebox");
let out = "";
let button = document.querySelector(".clearbtn");


fetch('people.json')
.then((response) => response.json())
.then((people) => {
    let objectCount  = Object.keys(people).length;

    for (let person of people) {
        out += `
        <div class="card">
            <img src="${person.image}" alt="${person.name}">
            <div class="information">
                <h2 class="name">${person.name}</h2>
                <p class="age">${person.age}</p>
            </div>
        </div>
        `;
    }

    button.addEventListener("click", clearItems);

    function clearItems() {
      output.innerHTML = "";
      title.innerHTML = "";
    }

    title.innerText = objectCount + " Birthdays Today"
    output.innerHTML = out;
});

   // const jsonObject = JSON.parse(people);
    // const objectLength = Object.keys(jsonObject).length;

