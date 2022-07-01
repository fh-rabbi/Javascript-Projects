const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function generateTimer(){
  let final = new Date('2023-06-24T08:00:00Z');
  let now = new Date();
  let diff = final - now;
  let remainingDays = diff/(1000*60*60*24);
  let remainingHours = diff%(1000*60*60*24)/(1000*60*60);
  let remainingMinutes = diff%(1000*60*60)/(1000*60);
  let remainingSeconds = diff%(1000*60)/(1000);
  days.innerHTML = Math.floor(remainingDays)+'d:';
  hours.innerHTML = Math.floor(remainingHours)+'h:';
  minutes.innerHTML = Math.floor(remainingMinutes)+'m:';
  seconds.innerHTML = Math.floor(remainingSeconds)+'s';
}
setInterval(function(){
  generateTimer();
},1000);



// let demo = new Date();
// demo = demo.toLocaleString();
// console.log(demo);