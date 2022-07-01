const display = document.querySelector('#display');
const passLength = document.querySelector('#passLength');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generateBtn = document.querySelector('#generateBtn');

let upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerSet = upperSet.toLowerCase();
let numbersList = '1234567890';
let symbolsList = '+-=-_~*&#@!';

function generate_random(dataset){
  return dataset[Math.floor(Math.random()*dataset.length)];
}

function generate_password(password=''){
  let isChecked = uppercase.checked ? true : false;
  if(!isChecked){
    document.querySelector('.error').style.opacity = 1;
    setTimeout(function() {
      document.querySelector('.error').style.opacity = 0;
    }, 3000);
  }
  else{
  if(uppercase.checked){
    password += generate_random(upperSet);
  }
  if(lowercase.checked){
    password += generate_random(lowerSet);
  }
  if(numbers.checked){
    password += generate_random(numbersList);
  }
  if(symbols.checked){
    password += generate_random(symbolsList);
  }
  if(password.length < passLength.value){
    return generate_password(password);
  }
  display.value = password;
  }
}

generateBtn.addEventListener("click", ()=>{
  generate_password();
});