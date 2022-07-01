let dino = document.querySelector('.dino');
let obstacle = document.querySelector('.obstacle');
let show_score = document.querySelector('.score');
let upBtn = document.querySelector('#up');
let downBtn = document.querySelector('#down');
let leftBtn = document.querySelector('#left');
let rightBtn = document.querySelector('#right');

// Set background music:
let audio = new Audio('music.mp3');
setTimeout(function() {
  audio.play();
}, 100);
// Set game over sound:
let audiogo = new Audio('gameover.mp3');

upBtn.addEventListener("click", ()=>{
  // alert('ok')
  dino.classList.add('dino-anim');
  setTimeout(function() {
    dino.classList.remove('dino-anim');
  }, 1000);
});

rightBtn.addEventListener("click", ()=>{
  let dinoX = parseInt(getComputedStyle(dino).left);
  // console.info('right'+dinoX);
  dino.style.left = `${dinoX+20}px`;
});

leftBtn.addEventListener("click", ()=>{
  let dinoX = parseInt(getComputedStyle(dino).left);
  // console.info('left'+dinoX);
  dino.style.left = `${dinoX-20}px`;
});

let score = 0;
let cross = true;

setInterval(function(){
  let dx = parseInt(getComputedStyle(dino).left);
  let dy = parseInt(getComputedStyle(dino).top);
  
  let ox = parseInt(getComputedStyle(obstacle).left);
  let oy = parseInt(getComputedStyle(obstacle).top);
  
  let offsetX = Math.abs(dx-ox);
  let offsetY = Math.abs(dy-oy);
  // console.log(offsetY);
  if(offsetX < 60  && offsetY < 20){
    obstacle.classList.remove('obstacleAnim');
    document.querySelector('.gameOver').innerHTML = 'Game Over!';
    document.querySelector('.gameOver').style.color = 'red';
    audiogo.play();
    setTimeout(() => {
        audio.pause();
        audiogo.pause();
    }, 1000);
  }
  else if (offsetX < 40 && cross) {
  score += 1;
  updateScore(score);
  cross = false;
  setTimeout(() => {
      cross = true;
  }, 1000);
  // Update speed:
  setTimeout(function() {
    let aniDur = parseInt(getComputedStyle(obstacle).animationDuration);
    let newAniDur = aniDur-0.1;
    if(newAniDur > 1.9){
      obstacle.style.animationDuration = newAniDur + 's';
    }
    else{
      obstacle.style.animationDuration = '1.9s';
    }
    console.log(newAniDur);
  }, 500);
 }
},100);

function updateScore(score) {
    show_score.innerHTML = "Your Score: " + score;
}
