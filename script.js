const addBtn = document.getElementById("add");
const clearbBtn = document.getElementById("clear");
const listBox = document.getElementById("listBox");
const listGroup = document.querySelector(".list-group");
const input = document.querySelector(".input");

function addToList(item) {
  if (input.value !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const icon = document.createElement("i");
    li.className = "list-group-item";

    icon.className = "fa-solid fa-trash-alt";
    icon.setAttribute("style", "color:red;");
    li.innerHTML = item;

    span.appendChild(icon);
    li.appendChild(span);
    listGroup.appendChild(li);
    input.value = "";
    saveData();
  } else {
    alert("Please enter an item to add to the list");
  }
}

function clearList() {
  listGroup.innerHTML = "";
  saveData();
}
function deleteOne(e) {
  if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.parentElement.remove();
    saveData();
  } else {
    return;
  }
  if (e.target.tagName === "LI") {
    e.target.parentElement.parentElement.remove();
  }
}

function saveData() {
  const data = listGroup.innerHTML;
  localStorage.setItem("list", data);
}

function loadData() {
  const data = localStorage.getItem("list");
  listGroup.innerHTML = data;
}

window.addEventListener("load", loadData);
listGroup.addEventListener("click", deleteOne);

addBtn.addEventListener("click", () => addToList(input.value));
clearbBtn.addEventListener("click", clearList);

$("#info").click(function (e) {
  e.preventDefault();
  $(".todo-container").fadeIn(1000);
  if ($(".todo-container").is(":visible")) {
    $(".testimonial").slideUp(1000);
  }
});
