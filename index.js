const staffList = [
  "Akram",
  "Ali",
  "Alex",
  "Ana",
  "Ariana",
  "Bijay",
  "Bikash",
  "Binita",
  "Carol",
  "Curica",
  "Domi",
  "Eliseu",
  "Elivelton",
  "Eva",
  "Geovana",
  "Gisa",
  "Juliana",
  "King",
  "Jamaica",
  "Letícia",
  "Lucrecia",
  "Mimi",
  "Nadia",
  "Nilton",
  "Paulo",
  "Pawan",
  "Regis",
  "Ricardo",
  "Rose",
  "Subarna",
  "Sudip",
  "Susmita",
  "Yago",
];

const Ol = document.querySelector("ol");

staffList.forEach((staffMember) => {
  //adiciona os membros a uma lista
  const li = document.createElement("li");
  li.classList.add("staff-member");

  //adiciona uma checkbox ao staffmember
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("checked");
    saveClassList(li);
  });

  const label = document.createElement("label");
  //parte para organizar os appends
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(staffMember));
  li.appendChild(label);
  Ol.appendChild(li);
});

function saveClassList(item) {
  const classList = [...item.classList];
  localStorage.setItem(item.textContent, JSON.stringify(classList));
}

function restoreClassList() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    const savedClassList = JSON.parse(localStorage.getItem(li.textContent));
    if (savedClassList) {
      savedClassList.forEach((cls) => {
        li.classList.add(cls);
      });
    }
  });
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

restoreClassList();
