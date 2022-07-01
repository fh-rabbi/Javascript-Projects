// const turn = new Audio();
// const music = new Audio();
// const gameOver = new Audio();

// Change turn:
let turn = 'X';
function change_turn(){
  return turn == 'X' ? '0' : 'X';
}

// Check Win:
function check_win(){
  let boxtexts = document.querySelectorAll('.boxtext');
  let wins = [
    [0,1,2,0,10,0],
    [3,4,5,0,30,0],
    [6,7,8,0,50,0],
    [0,3,6,-30,30,90],
    [1,4,7,0,30,90],
    [2,5,8,30,30,90],
    [0,4,8,0,30,50],
    [2,4,6,0,30,-50]
    ];
  wins.forEach(e => {
    if(boxtexts[e[0]].innerHTML == boxtexts[e[1]].innerHTML && boxtexts[e[2]].innerHTML == boxtexts[e[1]].innerHTML && boxtexts[e[0]].innerHTML != ''){
      let winer = document.querySelector('.winer');
      winer.innerHTML = 'Hurray, ' +boxtexts[e[0]].innerHTML + ' Won !';
      document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vh) rotate(${e[5]}deg)`;
      document.querySelector('.line').style.width = '90vw';
    }
  });
}

// Game logic:
const box = document.querySelectorAll('.box');
Array.from(box).forEach(element => {
  element.addEventListener("click", ()=>{
    let boxtext = element.querySelector('.boxtext');
    if(boxtext.innerHTML == ''){
      boxtext.innerHTML = turn;
      turn = change_turn();
      check_win();
      document.querySelector('.badge').innerHTML = turn;
    }
  });
});

// Reset game:
const reset = document.querySelector('.reset');
reset.addEventListener("click", ()=>{
  document.querySelector('.line').style.opacity = 0;
  document.querySelector('.winer').style.display = 'none';
  const boxtexts = document.querySelectorAll('.boxtext')
  Array.from(boxtexts).forEach(box=>{
    box.innerHTML = '';
    turn = 'X';
    document.querySelector('.badge').innerHTML = turn;
  });
});

// Game over:
function game_over(){
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(box=>{
    box.addEventListener("click", ()=>{
      alert('please reset game')
    });
  });
}
