const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function calculate_time(){
  let current_date = new Date();
  let my_date = '01 Dec 2022 06:00:00 AM';
  let target_date = new Date(my_date);
  let diff = (target_date - current_date)/1000;
  let remaining_days = parseInt((diff/3600/24));
  // console.log(remaining_days);
  let remaining_hour = Math.floor(diff/3600)%24;
  let remaining_minutes = Math.ceil(diff/60)%60;
  let remaining_seconds = Math.floor(diff%60);
  day.innerHTML = remaining_days;
  hour.innerHTML = remaining_hour;
  minute.innerHTML = remaining_minutes;
  second.innerHTML = remaining_seconds;
  // document.querySelector('h1').innerHTML = remaining_hour;
}

calculate_time();
setInterval(function(){
  calculate_time();
},1000);
