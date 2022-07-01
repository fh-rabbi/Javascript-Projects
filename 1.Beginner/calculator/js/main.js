let string = '';
let buttons =document.querySelectorAll('button');
Array.from(buttons).map(x=>{
  x.addEventListener("click", (e)=>{
    if(e.target.innerHTML == '='){
      string=eval(string);
      if(string == undefined){
        string='';
        document.querySelector('input').value=string;
      }
      else{
         document.querySelector('input').value=string;
       }
    }
    else if(e.target.innerHTML == 'Ac'){
      string='';
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == undefined){
      string='Please press a key...';
      document.querySelector('input').value=string;
    }
    else{
    //console.log(e.target.innerHTML)
    let value = e.target.innerHTML;
    //console.log(value)
    string=string+value;
    document.querySelector('input').value=string;
    }
  });
});