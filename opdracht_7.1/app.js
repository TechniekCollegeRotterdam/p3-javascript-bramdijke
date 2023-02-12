// Haal de drie elementen op via het id vanuit het HTML bestand
let input = document.getElementById("inputField");
let add = document.getElementById("addToDo");
let toDo = document.getElementById("toDoContainer");

add.addEventListener("click", function () {   
    let addElement = document.createElement("p");
    let output = input.value;
    
    addElement.innerText = output;
    toDo.appendChild(addElement);
    input.value = ""; //als er op de button wordt geklikt     
  });


  // addElement = input;
  // console.log(input)