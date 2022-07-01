const input_text = document.querySelector('#text');
const show_vowel = document.querySelector('.counter');

input_text.addEventListener("keyup", ()=>{
  let value = input_text.value;
  value = value.split('');
  let vowel_list = ['a','e','i','o','u'];
  let count = 0;
  for(x of value){
    if(vowel_list.includes(x)){
      count ++;
    }
  }
  show_vowel.innerHTML = count;
  // console.log(value);
});
