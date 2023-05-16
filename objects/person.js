const person = {
  name: "Bram",
  age: 20,
  birth: "30-04-2003",
  gender: "Male",
  alive: true,
  hobbies: ["Gaming", "Programming", "Drinking", "Chilling"],
  changeName: function (name) {
    return (this.name = name);
  },
  aliveStatus: function () {
    return (person.alive = false);
  },
  addHobby: function(hobby) {
    return this.hobbies.push(hobby) ;
  },
};
person.addHobby("Designing")

let output = document.querySelector(".output");
output.innerHTML = `
<p>${person.name}</p>
<p>${person.age}</p>
<p>${person.birth}</p>
<p>${person.gender}</p>
<p>${person.alive}</p>
<p>${person.hobbies.join(", ")}</p>
<p>${person.changeName("Ronald")}</p>
<p>${person.aliveStatus()}</p>
<p>${person.hobbies[4]}</p>`;
