const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const phy = document.querySelector('#phy');
const che = document.querySelector('#che');
const math = document.querySelector('#math');
const bio = document.querySelector('#bio');
const submitBtn = document.querySelector('#btn');
const result = document.querySelector('.result');

function calculate(){
  let phyNum = Number(phy.value); 
  let cheNum = Number(che.value); 
  let mathNum =Number(math.value); 
  let bioNum = Number(bio.value);
  let total = phyNum+cheNum+mathNum+bioNum;
  let grade = '';
  if(phy.value >= 70 && phy.value < 80 && che.value >= 70 && che.value < 80 && math.value >= 70 && math.value < 80 && bio.value >= 70 && bio.value < 80){
    grade = 'A-';
  }
  showResult(total,grade);
}

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  calculate();
});


function showResult(total,grade){
  if(phy.value == '' || che.value == '' || math.value == '' || bio.value == ''){
      alert('Input box can\'t be empty!')
      result.style.opacity = 0;
  }
  else{
      document.querySelector('.result h3').innerHTML = `Your total marks are ${total} and your grade is ${grade} and you are passed !`;
      result.style.opacity = 1;
      Array.from(inputs).forEach(item=> item.value ='');
  }
}