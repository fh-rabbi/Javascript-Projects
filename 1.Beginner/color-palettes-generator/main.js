let col1 = document.querySelector('.col1');
let col2 = document.querySelector('.col2');
let col3 = document.querySelector('.col3');
let col4 = document.querySelector('.col4');

let btn = document.querySelector('.btn');
btn.addEventListener("click", generate_color);

function generate_color(){
  let colors_char = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
  let color1 = '#';
  let color2 = '#';
  let color3 = '#';
  let color4 = '#';
  for(i = 0;i < 6;i++){
    let index = Math.round(Math.random()*15);
    color1 += colors_char[index];
  }
  for(i = 0;i < 6;i++){
    let index = Math.round(Math.random()*15);
    color2 += colors_char[index];
  }
  for(i = 0;i < 6;i++){
    let index = Math.round(Math.random()*15);
    color3 += colors_char[index];
  }
  for(i = 0;i < 6;i++){
    let index = Math.round(Math.random()*15);
    color4 += colors_char[index];
  }
  
  col1.style.background = color1;
  document.querySelector('.col1 h3').innerHTML = color1;
  col2.style.background = color2;
  document.querySelector('.col2 h3').innerHTML = color2;
  col3.style.background = color3;
  document.querySelector('.col3 h3').innerHTML = color3;
  col4.style.background = color4;
  document.querySelector('.col4 h3').innerHTML = color4;
}