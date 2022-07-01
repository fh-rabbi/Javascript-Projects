// Author : Fazle Rabbi
const newCard = document.querySelector('#newCard');
const delCard = document.querySelector('#delCard');
const saveBtn = document.querySelector('#save');
const closeBtn = document.querySelector('#close');
const cardCreator = document.querySelector('.card-creator');

newCard.addEventListener("click", ()=>{
  cardCreator.classList.add('showCardCreator');
});

closeBtn.addEventListener("click", ()=>{
  cardCreator.classList.remove('showCardCreator');
});

saveBtn.addEventListener("click", ()=>{
  createFlashCard(questionBox.value+'?',answerBox.value);
});

const questionBox = document.querySelector('#que');
const answerBox = document.querySelector('#ans');
let isEmpty = questionBox.value != '' && answerBox.value != '' ? false : true;

// main logic:
function createFlashCard(questions='',answers=''){
  isEmpty = false;
  if(!isEmpty && questions != ''){
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
      <h2 class="q">${questions}</h2>
      <span>${answers}</span>
    `;
    document.querySelector('.main').appendChild(cardDiv);
    questionBox.value = '';
    answerBox.value = '';
    saveCard();
    delCard.addEventListener("click", ()=>{
      cardDiv.remove();
      saveCard();
    });
    isEmpty = false;
    
    let h2 = cardDiv.querySelector('h2');
    let span = cardDiv.querySelector('span');
    h2.addEventListener("click", ()=>{
      span.classList.toggle('showSpan');
    });
  }
  else{
    alert('Please write something...!');
  }
}

// logic for save card in localStorage:
function saveCard(){
  const allCards = document.querySelectorAll('.card');
  let queArr = [];
  let ansArr = [];
  allCards.forEach(card => {
    const h2 = card.querySelector('h2');
    let que = h2.innerHTML;
    const span = card.querySelector('span');
    let ans = span.innerHTML;
    queArr.push(que);
    ansArr.push(ans);
  });
  localStorage.setItem('questions',JSON.stringify(queArr));
  localStorage.setItem('answers',JSON.stringify(ansArr));
  console.log(localStorage);
}

// logic to show cards when the page are reload:
{
  const questions = JSON.parse(localStorage.getItem('questions'));
  const answers = JSON.parse(localStorage.getItem('answers'));
  if(questions.length != '' && answers.length != ''){
    console.log(questions,answers);
    isEmpty = true;
    questions.forEach((q,index)=>{
      createFlashCard(q,answers[index]);
    });
  }
  else{
    console.log('Have not exits ');
  }
}