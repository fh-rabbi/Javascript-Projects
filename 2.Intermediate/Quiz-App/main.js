const quizContainer = document.querySelector('.quiz-container');
const startQuizz = document.querySelector('.start');
startQuizz.addEventListener("click", ()=>{
  quizContainer.style.display='block'; 
});

const nextButton = document.querySelector('.next');
let count =0;
nextButton.addEventListener('click', ()=>{
  count++;
  const data = [
    'Which is the apple!',
    'Which is the orange!',
    'Which is the banana!',
    'Which is the grapes!',
    ];
  let quizTitle = document.querySelector('.quiz-title');
  if(count == 1){
    quizTitle.innerHTML=data[0];
  }
  else if(count == 2){
    quizTitle.innerHTML=data[1];
  }
  else if(count == 3){
    quizTitle.innerHTML=data[2];
  }
  else if(count == 4){
    quizTitle.innerHTML=data[3];
  }
  else{
    quizTitle.innerHTML='Okey...';
  }
  
});