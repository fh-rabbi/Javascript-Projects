let songs = ['songs/1.mp3','songs/2.mp3','songs/3.mp3'];
let audioElement = new Audio(songs[0]);
let playBtn =document.querySelector('.play');
playBtn.addEventListener("click", function () {
  if(audioElement.paused || audioElement.currentTime <= 0){
    //alert('paused');
    audioElement.play()
    playBtn.classList.remove('fa-play')
    playBtn.classList.add('fa-pause')
}
  else if(audioElement.play){
    audioElement.pause()
    playBtn.classList.remove('fa-pause')
    playBtn.classList.add('fa-play')
  }
  audioElement.addEventListener('timeupdate',function () {
    //console.log('time/..')
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    document.querySelector('input').value = progress;
  })
})

let progressBar = document.querySelector('input');
progressBar.addEventListener('change', ()=>{
  audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
  //alert('hi')
})

// Next button:
document.querySelector('.next').addEventListener('click', function () {
  // alert('hi')
  let count =0;
  songs.forEach(x=>{
    count++;
    //console.log(x)
    if(count == 1){
      audioElement = new Audio(songs[1]);
    }
    else{
      audioElement = new Audio(songs[2]);
    }
  })
  
})

