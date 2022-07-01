let btn = document.querySelectorAll('.keys button');
let input = document.querySelector('#input');
let string ='';
console.log(btn);
Array.from(btn).map((button)=>{
  button.addEventListener("click", (e)=>{
    
    if(e.target.innerHTML=='='){
    string=eval(string);
      if(string == undefined){
       string='';
       alert('Invalid input!');
      }else{
       input.value=string;
       // string='';
      // alert('hi');
       }
    }
    else{
    let v = e.target.innerHTML;
    // alert(value)
    string=string+v;
    input.value=string;
    }
  });
});

let clear = document.querySelector('.clear');
clear.addEventListener("click", ()=>{
  string='';
  input.value=string;
});



