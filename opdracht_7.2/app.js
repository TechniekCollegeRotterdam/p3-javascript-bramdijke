let input = document.getElementById("inputField");
let add = document.getElementById("addToDo");
let toDo = document.getElementById("toDoContainer");

add.addEventListener("click", function () {
    let addElement = document.createElement("p");
    let output = input.value;

    addElement.innerText = output;
    toDo.appendChild(addElement);
    input.value = "";

    addElement.addEventListener("click", function(e) {
      e.target.style.textDecoration = "line-through";
    })

    addElement.addEventListener("dblclick", function(e) {
      e.target.remove();
    })
  });