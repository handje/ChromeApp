const todo=document.querySelector("#toDo");
const todoList=document.querySelector("#toDo #todoList");
const todoForm=document.querySelector("#toDo #todoForm");
const todayTodo=document.querySelector("#toDo #todayTodo");


function handleToDo(event){
    event.preventDefault();
    showTodoList(todayTodo.value);
}

function showTodoList(todo){
    const todolist=document.createElement("li");
    todolist.innerText=todo;
    todoList.appendChild(todolist);
}

//main
if(localStorage.getItem("username")){
    todo.classList.remove(HIDDEN);
    todoForm.addEventListener("submit",handleToDo);
}