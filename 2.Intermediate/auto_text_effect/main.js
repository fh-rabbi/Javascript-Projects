const blink = document.querySelector('.blink');


let index = 0;
let msg = 'Web Developer';
let prog = 'Programmer';
function autoTextEffect(){
  index++;
  blink.innerHTML = msg.slice(0,index);
  //blink.innerHTML = prog.slice(0,index);
  if(index > msg.length){
    index = 0;
  }
}

setInterval(function(){
  autoTextEffect();
},300);