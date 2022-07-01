let colors = ['#ef5b75','#fc3fff','#22c8f5','#5823f0','#8110c7','#29f9ed'];
let body = document.querySelector('body');
let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener("click", ()=>{
  let hex = '#';
  for(i=0;i<6;i++){
    const index = Math.floor(Math.random()*hexValues.length);
    hex+=hexValues[index];
  }
  // console.log(hex)
  body.style.background=hex;
  h3.innerHTML=hex;
});

