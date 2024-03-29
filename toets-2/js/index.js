//Variables used throughout the script
const registContainer = document.querySelector("#registContainer");
const registURL = `http://localhost:3000/registrations`;
const registForm = document.querySelector("#form");
let allRegistrations = [];

//Fetch to import files from server and transfers it to a card
fetch(`${registURL}`)
  .then((response) => response.json())
  .then((registrations) => {
    let out = "";
    for (let registration of registrations) {
      allRegistrations = registrations;
      out +=
        //Card design HTML
        `<tr class="admin-row">
        <td class="admin-rowitem"><button data-id="${registration.id}" id="delete-${registration.id}" data-action="delete" class="delete-btn">Delete</button></td>
        <td class="admin-rowitem">${registration.id}</td>
        <td class="admin-rowitem">${registration.fname}</td>
        <td class="admin-rowitem">${registration.lname}</td>
        <td class="admin-rowitem">${registration.residence}</td>
        <td class="admin-rowitem">${registration.email}</td>
        <td class="admin-rowitem">${registration.phone}</td>
        </tr>
`;
    }
    //Places the card in HTML
    registContainer.innerHTML = out;
  });

// Form to add a new item on the page using submit
registForm.addEventListener("submit", () => {
  const fnameInput = registForm.querySelector("#fname").value;
  const lnameInput = registForm.querySelector("#lname").value;
  const residenceInput = registForm.querySelector("#residence").value;
  const emailInput = registForm.querySelector("#email").value;
  const phoneInput = registForm.querySelector("#phone").value;

  //This is used to put files into the JSON file
  fetch(`${registURL}`, {
    method: "POST",
    body: JSON.stringify({
      fname: fnameInput,
      lname: lnameInput,
      residence: residenceInput,
      email: emailInput,
      phone: phoneInput,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
});

//Alert Message when the form is submitted succesfully
function alertMessage() {
  alert("Bedankt! Uw aanmelding is gelukt.");
}
