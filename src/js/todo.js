const TODOKEY = "todo";

const todo = document.querySelector("#toDo");
const todoList = document.querySelector("#toDo #todoList");
const todoForm = document.querySelector("#toDo #todoForm");
const todayTodo = document.querySelector("#toDo #todayTodo");

let storage = []; //todo 저장

function save() {
  localStorage.setItem(TODOKEY, JSON.stringify(storage));
}

function handleDelete(event) {
  const del = event.target.parentElement;
  storage = storage.filter((e) => e.id !== parseInt(del.id));
  save();
  del.remove();
}

function showTodoList(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", handleDelete);
  li.appendChild(span);
  li.appendChild(btn);
  li.addEventListener("click", (event) => {
    event.target.classList.toggle("clicked");
  });
  todoList.appendChild(li);
}

function handleToDo(event) {
  event.preventDefault();
  const newTodo = {
    text: todayTodo.value,
    id: Date.now(),
  };
  todayTodo.value = "";
  storage.push(newTodo);
  showTodoList(newTodo);
  save();
}
//main

todoForm.addEventListener("submit", handleToDo);
const item = localStorage.getItem(TODOKEY);
if (item) {
  const parsedTodo = JSON.parse(item);
  storage = parsedTodo;
  parsedTodo.forEach(showTodoList);
}

if (localStorage.getItem("username")) {
  todo.className = "";
}
