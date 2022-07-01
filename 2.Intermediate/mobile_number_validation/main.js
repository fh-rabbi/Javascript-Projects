const input = document.querySelector('input');
const checkBtn = document.querySelector('#check');
const msg = document.querySelector('#msg');

input.addEventListener("keyup", ()=>{
  let number = input.value;
  console.log(number.slice(2,3));
  if(number.length == 11 && number.slice(0,2) == '01' && number.slice(2,3) > 2){
    msg.innerHTML = 'Valid';
    msg.style.opacity = 1;
  }
  else{
    // alert('ok')
    msg.innerHTML = 'Invalid';
    msg.style.opacity = 1;
  }
});
