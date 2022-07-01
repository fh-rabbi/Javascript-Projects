const textarea = document.querySelector('textarea');
const total = document.querySelector('.total');
const max = document.querySelector('.total');

textarea.addEventListener("keyup", ()=>{
  let charLength = textarea.value.length;
  console.log(max.innerHTML);
  if(charLength == max.innerHTML){
    charLength = 30;
    textarea.style.borderColor = 'yellow';
    total.innerHTML = 30;
  }
  else{
    textarea.style.borderColor = 'black';
    total.innerHTML = charLength;
  }
  
});
