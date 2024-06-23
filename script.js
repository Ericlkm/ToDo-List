const addBtn = document.getElementById("add");
const clearbBtn = document.getElementById("clear");
const listBox = document.getElementById("listBox");
const listGroup = document.querySelector(".list-group");
const input = document.querySelector(".input");
const warning = document.querySelector(".warning");

function addToList(item) {
  if (input.value !== "") {
    warning.style.display = "none";

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
    warning.style.display = "block";
    warning.innerHTML = `
    <div class="alert alert-danger" role="alert">
    <i id="warning-icon" class="fas fa-exclamation-triangle fa-flip" style='font-size:2rem; color:yellow;'></i>
    <strong>Warning!</strong> Please enter a value 🚫.
    `;
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
    e.target.classList.toggle("done");
    saveData();
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
    $(".footer").slideUp("slow");
  }
});
