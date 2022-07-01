const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const wrongSound= new Audio('wrong.mp3');
const currectSound= new Audio('hurray.mp3');

// Main logic:
function equation(){
  let number1 = Math.trunc(Math.random() * 13);
  let number2 = Math.trunc(Math.random() * 13);
  num1.innerHTML = number1;
  num2.innerHTML = number2;
  let answer = number1 + number2;
  let dummyNumber1 = Math.trunc(Math.random() * 13);
  let dummyNumber2 = Math.trunc(Math.random() * 13);
  let numsArr = [answer,dummyNumber1,dummyNumber2];
  const shuffledArray = numsArr.sort((a, b) => 0.5 - Math.random());
  btn1.innerHTML = shuffledArray[0];
  btn2.innerHTML = shuffledArray[1];
  btn3.innerHTML = shuffledArray[2];
  
  btn1.addEventListener("click", function(){
    if(btn1.innerHTML == answer){
        wrongSound.pause();
        currectSound.play();
        equation();
      }
      else{
        wrongSound.play();
        currectSound.pause();
        wrongSound.play();
     }
  });
  
  btn2.addEventListener("click", function(){
    if(btn2.innerHTML == answer){
        wrongSound.pause();
        currectSound.play();
        equation();
      }
      else{
        currectSound.pause();
        wrongSound.play();
     }
  });
  
  btn3.addEventListener("click", function(){
    if(btn3.innerHTML == answer){
        wrongSound.pause();
        currectSound.play();
        equation();
      }
      else{
        currectSound.pause();
        wrongSound.play();
     }
  });
  
  
}
equation();