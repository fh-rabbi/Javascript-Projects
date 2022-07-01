const input = document.querySelector('#input');
const todoBox = document.querySelector('.todo-box');
const addBtn = document.querySelector('#add');

// Add new todo when clicked on add item btn:
addBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  addTodo(input.value);
});

// Logic to save in localStorage:
function saveTodo(){
  let todoData = [];
  let allTodos = document.querySelectorAll('p');
  allTodos.forEach(item=>{
    todoData.push(item.innerHTML);
  });
  localStorage.setItem('todos',JSON.stringify(todoData));
}

// add todo item logic:
function addTodo(data){
  if(data != ''){
  const todoItem = document.createElement('div');
  //todoItem.classList.add('todo-item');
  todoItem.innerHTML = `
  <div class="todo-item">
       <p>${data}</p>
       <div class="tools">
       <button type="button" id="edit">Edit</button>
       <button type="button" id="del">Delete</button>
       </div>
  </div>
  `;
  input.value = '';
  todoItem.querySelector('p').addEventListener("click", ()=>{
    todoItem.querySelector('p').classList.toggle('textStrike');
  });
  todoBox.appendChild(todoItem);
  todoItem.querySelector('#del').addEventListener("click", ()=>{
    todoItem.remove();
    saveTodo();
  });
  saveTodo();
  }
  else{
    document.querySelector('.error').innerHTML = 'Please write an todo...!';
    setTimeout(function() {
      document.querySelector('.error').innerHTML = '';
    }, 2000);
  }
}

// Load todo when page reload:
(function(){
  let data = localStorage.getItem('todos');
  data = JSON.parse(data);
  data.forEach(todo=>{
    addTodo(todo);
  });
})();
