let textInput = document.querySelector('#text');
//let list = document.querySelector('.list');
document.querySelector('form').addEventListener("submit", (e)=>{
  e.preventDefault();
  /*
  <h2 class="list-item">Notes</h2>
  <span class="del">Del</span>
  */
  
  const list = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.classList.add('list-item')
  localStorage.setItem('a','hello');
  let value = localStorage.getItem('a');
  h2.innerHTML=value;
  const span = document.createElement('span');
  span.classList.add('del')
  span.innerHTML='DEL';
  list.appendChild(h2)
  list.appendChild(span)
  list.classList.add('list')
  let listItemBox = document.querySelector('.list-item-box');
  listItemBox.appendChild(list)
})
let listItem = document.querySelector('.list-item')
let del = document.querySelector('.del');
listItem.innerHTML=localStorage.getItem('a');
del.innerHTML= '';

const clearItems = document.querySelector('.clear-items');
clearItems.addEventListener('click', ()=>{
  localStorage.clear('a');
})

