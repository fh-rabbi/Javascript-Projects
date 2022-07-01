const radio_box = document.querySelectorAll('input');
const submit_btn = document.querySelector('#btn');
const question = document.querySelector('.question');
const option = document.querySelectorAll('.option');
const startQuiz = document.querySelector('#startQuiz');

// Start quiz when click on the start quiz button:
startQuiz.addEventListener("click", ()=>{
  startQuiz.style.display = 'none';
  document.querySelector('.container').style.opacity = 1;
});

// Make quiz content:
let quiz_content = [
  {
    que : 'What is the full meaning of HTML?',
    a : 'Hypertext language',
    b : 'Hypertext markup',
    c : 'Hypertext preprocessor',
    d : 'Hypertext markup language',
    currect : 'd'
  },
    {
    que : 'What is the full meaning of HTTP?',
    a : 'Hypertext protocol',
    b : 'Hypertext transfer',
    c : 'Hypertext preprocessor',
    d : 'Hypertext transfer protocol',
    currect : 'd'
  },
    {
    que : 'What is the full meaning of CSS?',
    a : 'Personal home page',
    b : 'Cascading style',
    c : 'Cascading stylesheet',
    d : 'Hypertext preprocessor',
    currect : 'c'
  }
  ];

let right = 0;

// Add listener in the submit btn:
let index = 0;
submit_btn.addEventListener("click", ()=>{
  Array.from(radio_box).forEach(radioBtn => {
    if(radioBtn.checked){
      getCurrect(true,radioBtn);
      index++;
      load_quiz(quiz_content,radioBtn);
      radioBtn.checked = false;
    }
    else{
      // console.warn('Not checked');
    }
  });
});

// Quiz logic:
function load_quiz(data,radioBtn){
  if(index >= 3){
    document.querySelector('.options').style.opacity = 0;
    document.querySelector('.question').innerHTML = 'Thanks for playing the quiz...!';
    document.querySelector('.question').classList.add('red');
    document.querySelector('#currect').style.opacity = 1;
  }
  else{
  question.innerHTML = data[index].que;
  option[0].innerHTML = data[index].a;
  option[1].innerHTML = data[index].b;
  option[2].innerHTML = data[index].c;
  option[3].innerHTML = data[index].d;
  }
}
load_quiz(quiz_content);

// Get currect:
function getCurrect(isChecked,radioBtn){
  //console.log(isChecked);
  if(isChecked){
    if(radioBtn.value == quiz_content[index].currect){
    right++;
    }
  }
  document.querySelector('#currect').innerHTML = `Total currect ${right}/3`;
}
