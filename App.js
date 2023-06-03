const title = document.querySelector("#title");
const description = document.querySelector("#description");
const item_container = document.querySelector(".item_container");
let UpdateId = -1;
let array = JSON.parse(localStorage.getItem("item")) || [];

window.onload = (event) => {
  DisplayElement();
};
function AddElement() {
  if (title.value == "" && title.value == "") return;
  if (UpdateId != -1) {
    array[UpdateId].title = title.value;
    array[UpdateId].description = description.value;
    console.log(array);
    DisplayElement();
    description.value = "";
    title.value = "";
    let strArr = JSON.stringify(array);
    localStorage.setItem("item", strArr);
    UpdateId = -1;
    return;
  }

  let dataTitle = title.value;
  let dataDescription = description.value;
  console.log(title.value, " ", description.value, " ", array);
  array.push({ title: dataTitle, description: dataDescription });
  description.value = "";
  title.value = "";
  let strArr = JSON.stringify(array);
  localStorage.setItem("item", strArr);
  DisplayElement();
}
function DisplayElement() {
  item_container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    item_container.innerHTML += `<div class="item" id="${i}-elem">
    <div class="title_container">Title : ${array[i].title}</div>
    <div class="description_container">Description : ${array[i].description}</div>
    <div class="edit_and_delete"><button onclick="Edit(${i})">Edit</button><button onclick="Delete(${i})">Delete</button></div>
</div>`;
    console.log(array[i].title);
  }
}
function Delete(id) {
  array.splice(id, 1);
  console.log(array);
  let strArr = JSON.stringify(array);
  localStorage.setItem("item", strArr);
  const element = document.getElementById(`${id}-elem`);
  element.remove();
}
function Edit(id) {
  UpdateId = id;
  title.value = array[id].title;
  description.value = array[id].description;
}
