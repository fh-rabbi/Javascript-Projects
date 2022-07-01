let msg = document.querySelector('.msg');
let wrong = document.querySelector('.wrong');
let text = document.querySelector('#text');
let form = document.querySelector('form');
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(text.value != ''){
    msg.innerHTML= text.value;
    text.value='';
  }else{
    // alert('hi')
    wrong.innerHTML='Please Enter A Value To Pass';
    setTimeout(function() {
      wrong.innerHTML='';
    }, 2000);
  }
});