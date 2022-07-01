let playBtn = document.querySelector('.fa-play');
let musics = ['music/a.mp3','music/b.mp3','music/c.mp3','music/d.mp3'];
let audio = new Audio(musics[0]);
let isPlay = false;
let songsName = ['Islamic','Awesome','Cool','Outstanding'];
document.querySelector('.songName').innerHTML = songsName[0];
// Play music logic:
function playMusic(){
  if(isPlay){
    pauseMusic();
  }
  else{
    document.querySelector('img').style.animation = 'rotateImg 6s linear infinite';
    audio.play();
    updateProgress(audio);
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
    isPlay = true;
  }
}

// Update Progressbar with the music:
function updateProgress(audioElement){
  audioElement.addEventListener("timeupdate", function(){
  var progress = document.getElementById("progress");
  var value = 0;
  if (audioElement.currentTime > 0) {
    value = Math.floor((100 / audioElement.duration) * audioElement.currentTime);
  }
  // progress.setAttribute('value',value)
  progress.style.width = value + "%";
  
  let currDu = document.querySelector('.currDu');
  let totalDu = document.querySelector('.totalDu');
  let curr_time_min = Math.floor(audioElement.currentTime/60);
  let curr_time_sec = Math.floor(audioElement.currentTime%60);
  let total_time_min = Math.floor(audioElement.duration/60);
  let total_time_sec = Math.floor(audioElement.duration%60);
  currDu.innerHTML = `${curr_time_min}:${curr_time_sec}`;
  totalDu.innerHTML = `${total_time_min}:${total_time_sec}`;
  
  if(audioElement.currentTime == audioElement.duration){
    nextMusic();
  }
  
  }, false);
}


// Progress seeking logic:
let progressDiv = document.querySelector('.progressDiv');
let progressbar = document.querySelector('.progressbar');
progressDiv.addEventListener("click", (e)=>{
  let seek = (e.offsetX / e.srcElement.clientWidth) * audio.duration;
  audio.currentTime = seek;
});

// Forword Music:
let a = 5;
function seekPlus(){
  audio.currentTime += a;
}

function seekNeg(){
  audio.currentTime -= a;
}


// Pause music logic:
function pauseMusic(){
  document.querySelector('img').style.animation = '';
  audio.pause();
  playBtn.classList.remove('fa-pause');
  playBtn.classList.add('fa-play');
  isPlay = false;
}

let count = 0;
// Previous music logic:
const prevMusic = () => {
  count--;
  if(count < 0){
    count = musics.length-1;
  }
  changeImg(count);
  document.querySelector('.songName').innerHTML = songsName[count];
  isPlay = true;
  playMusic();
  audio = new Audio(musics[count]);
  isPlay = false;
  playMusic();
};

// Next music logic:
const nextMusic = () => {
  audio.currentTime = 0;
  count++;
  if(count == musics.length){
    count = 0;
  }
  changeImg(count);
  document.querySelector('.songName').innerHTML = songsName[count];
  isPlay = true;
  playMusic();
  audio = new Audio(musics[count]);
  isPlay = false;
  playMusic();
};


// Change image src:
let imgTag = document.querySelector('img');
let images = ['images/1.jpeg','images/2.jpeg','images/3.jpeg','images/4.jpeg'];
function changeImg(count){
  let currentImg = images[count];
  currentImg = currentImg == undefined ? images[0] : currentImg;
  imgTag.src = currentImg;
}

