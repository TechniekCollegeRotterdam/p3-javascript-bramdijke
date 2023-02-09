// Haal de drie elementen op via het id vanuit het HTML bestand
let input = document.getElementById("inputField");
let add = document.getElementById("addToDo");
let toDo = document.getElementById("toDoContainer");
let addElement = document.createElement("p");

add.addEventListener("click", function () {   
    let output = input.value;
    addElement.innerText = output;

  
    //hier komt de code dat uitgevoerd moet worden  
    //als er op de button wordt geklikt     
  });


  // addElement = input;
  // console.log(input)