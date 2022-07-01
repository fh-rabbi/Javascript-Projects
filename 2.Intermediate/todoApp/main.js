// May 26,2022
// Author: Fazle Rabbi
let form = document.querySelector('form');
let formInput = document.querySelector('#formInput');
let addItems = document.querySelector('#formSubmit');
let main = document.querySelector('main');
// Button Listener:
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(!formInput.value){
    let wrongMsg = document.querySelector('.wrongMsg');
    wrongMsg.innerHTML='Please type a todo...!';
    setTimeout(function() {
      wrongMsg.innerHTML='';
    }, 2000);  
  }
  else{
  let parent_element = document.createElement('div');
  parent_element.classList.add('tasks');
  
  let items = document.createElement('div');
  items.classList.add('taskItem');
  let h2 = document.createElement('input');
  h2.classList.add('value');
  h2.value=formInput.value;
  h2.setAttribute('readonly','readonly');
  items.appendChild(h2);
  
  let actions = document.createElement('div');
  actions.classList.add('taskAction');
   
  let edit = document.createElement('button');
  edit.classList.add('editTask');
  edit.innerHTML='Edit';
  actions.appendChild(edit);
  
  let remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML='Remove';
  actions.appendChild(remove);
  
  parent_element.appendChild(items);
  parent_element.appendChild(actions);
  main.appendChild(parent_element);
  formInput.value='';
  
  edit.addEventListener('click', (e)=>{
    if(edit.innerHTML=='Edit'){
      h2.focus();
      h2.style.color='blue';
      h2.removeAttribute('readonly');
      edit.innerHTML='Save';
     }else{
       h2.setAttribute('readonly','readonly');
       edit.innerHTML='Edit';
       h2.blur();
       h2.style.color='black';
     }
   }); // end of edit listener...
   remove.addEventListener("click", ()=>{
       //alert('Its working...')
       let a = remove.parentElement;
       let b = a.parentElement;
       console.log(b);
       main.removeChild(b);
    });
  }
});
