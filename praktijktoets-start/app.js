//All the variables (constants) to retreive the necessary information from the HTML file
const formBox = document.querySelector(".sign-up-container");
const checkBox = document.querySelector(".sign-in-container");
const signButton = document.querySelector("#signUp");
const dataTitle = document.querySelector(".title");
const dataParagraph = document.querySelector(".paragraph");
const formName = document.querySelector("#fullName");
const formMail = document.querySelector("#email");
const formPhone = document.querySelector("#phoneNumber");
const dataBox = document.querySelector(".overlay-right");

//Function to make formBox disappear and checkBox appear
function changeBox() {
    formBox.style.display = "none";
    checkBox.style.display = "flex";
}

//Function to show the value of the input fields on screen
function addData() {
    //Variables (constants) that create an element in the HTML
    const textName = document.createElement('h1');
    const textMail = document.createElement('p');
    const textPhone = document.createElement('p');

    //This is used to clear the right box
    dataTitle.remove();
    dataParagraph.remove();

    //This is used to create a sentence to show on the screen for each category
    textName.innerText = 'Welkom ' + formName.value;
    textMail.innerText = 'U heeft een bevestiging ontvangen op: ' + formMail.value;
    textPhone.innerText = 'Ter verificatie sturen wij een bericht naar' + formPhone.value;

    //This is used to place the sentences of each category on screen.
    dataBox.appendChild(textName);
    dataBox.appendChild(textMail);
    dataBox.appendChild(textPhone);
}

//These two EventListeners are used to activate to functions written above
signButton.addEventListener('click', changeBox);
signButton.addEventListener('click', addData);