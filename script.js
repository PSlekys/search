const table = document.querySelector("tbody");

let array = [];
if (localStorage.getItem("people")) {
  array = JSON.parse(localStorage.getItem("people"));
  getPeople();
}

document.forms.add.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = event.target.elements.name.value.trim();
  const name = fullName.split(" ")[0];
  const surname = fullName.replace(`${name} `, "");

  array.push({ name: name, surname: surname });

  localStorage.setItem("people", JSON.stringify(array));
  getPeople();
});

function getPeople() {
  table.innerHTML = "";
  array.forEach((value) => {
    add(value.name, value.surname);
  });
}

function add(name, surname) {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = name;

  const td2 = document.createElement("td");
  td2.textContent = surname;

  tr.append(td1, td2);
  table.append(tr);
}
