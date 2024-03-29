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
        <td class="admin-rowitem">${registration.id}</td>
        <td class="admin-rowitem">${registration.fname}</td>
        <td class="admin-rowitem">${registration.lname}</td>
        <td class="admin-rowitem">${registration.residence}</td>
        <td class="admin-rowitem">${registration.email}</td>
        <td class="admin-rowitem">${registration.phone}</td>
        <td class="admin-rowitem"><button data-id="${registration.id}" id="delete-${registration.id}" data-action="delete" class="delete-btn">Delete</button></td>
        </tr>
`;
    }
    //Places the card in HTML
    registContainer.innerHTML = out;
  });

registContainer.addEventListener("click", (e) => {
  //Makes sure the page doesn't reload when pressing a button
  e.preventDefault();
  if (e.target.dataset.action === "delete") {
    document.querySelector(`#delete-${e.target.dataset.id}`).remove();

    fetch(`${registURL}/${e.target.dataset.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
});
