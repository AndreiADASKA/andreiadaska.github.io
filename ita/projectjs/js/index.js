import { getData } from "./modules/getData.js";

const form = document.querySelector(".todo-control");
const todoList = document.querySelector("#todo");
const completedList = document.querySelector("#completed");
const headerInput = document.querySelector(".header-input");
const clearLS = document.querySelector(".clear");

getData();

let data = {
   todo: [],
   completed: [],
};

if (localStorage.getItem("localData")) {
   data = JSON.parse(localStorage.getItem("localData"));
}

clearLS.addEventListener("click", function () {
   localStorage.clear();
   location.reload();
});

const renderItemsForUpdate = function () {
   if (!data.todo.length && !data.completed.length) return;

   for (let i = 0; i < data.todo.length; i++) {
      renderItem(data.todo[i]);
   }

   for (let i = 0; i < data.completed.length; i++) {
      renderItem(data.completed[i], true);
   }
};

const dataUpdateTolocaS = function () {
   localStorage.setItem("localData", JSON.stringify(data));
   console.log(localStorage.getItem);
};

const addItem = function (inputValue) {
   renderItem(inputValue);
   headerInput.value = "";
   data.todo.push(inputValue);
   // console.log(data.todo);

   dataUpdateTolocaS();
};

const itemRemove = function (e) {
   const item = e.parentNode.parentNode;
   const itemParent = item.parentNode;
   const id = itemParent.id;

   const text = item.textContent;
   itemParent.removeChild(item);

   if (id === "todo") {
      data.todo.splice(data.todo.indexOf(text), 1);
   } else {
      data.completed.splice(data.completed.indexOf(text), 1);
   }
   dataUpdateTolocaS();
};
const itemComplete = function (e) {
   const item = e.parentNode.parentNode;
   // const itemParent = item.parentNode;
   // const id = itemParent.id;
   item.classList.toggle("dobe");

   dataUpdateTolocaS();
};

const renderItem = function (text, complete = false) {
   const item = document.createElement("li");
   const btnBlock = document.createElement("div"); //див
   const btnRemove = document.createElement("button");
   const btnComplete = document.createElement("button");

   let list;
   if (complete) {
      list = completedList;
   } else {
      list = todoList;
   }

   item.classList.add("todo-item");
   btnBlock.classList.add("todo-buttons");
   btnRemove.classList.add("todo-remove");
   btnComplete.classList.add("todo-complete");

   btnRemove.innerHTML = "Удалить";
   btnComplete.innerHTML = "Сделано";

   item.innerHTML = text; //inner

   btnRemove.addEventListener("click", function (event) {
      itemRemove(event.target);
   });

   btnComplete.addEventListener("click", function (event) {
      itemComplete(event.target);
   });

   btnBlock.appendChild(btnRemove);
   btnBlock.appendChild(btnComplete);
   item.appendChild(btnBlock);

   list.insertBefore(item, list.childNodes[0]);
};
form.addEventListener("submit", function (even) {
   event.preventDefault();

   if (headerInput.value != "") {
      addItem(headerInput.value);
   }
});

renderItemsForUpdate();
