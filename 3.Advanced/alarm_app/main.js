const displayTime = document.querySelector('.time');
const selectElement = document.querySelectorAll('select');
const setAlarmBtn = document.querySelector('#set-alarm');
const content = document.querySelector('.content');

let alarmTone = new Audio('ringtone.mp3'),
alarmTime,isAlarmSet = false;

function clock(){
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ampm = 'AM';
  if(h >= 12){
    h = h - 12;
    ampm = 'PM';
  }
  
  h = h == 0 ? 0 : h;
  h = h < 10 ? '0'+h : h;
  m = m < 10 ? '0'+m : m;
  s = s < 10 ? '0'+s : s;
  
  let time = `${h}:${m}:${s} ${ampm}`;
  displayTime.innerHTML = time;
  if(alarmTime == `${h}:${m} ${ampm}`){
    alarmTone.play();
    alarmTone.loop = true;
  }
}
clock();
setInterval(clock,1000);

{
    // for hours:
    for(let i = 12;i > 0;i--){
      i = i < 10 ? '0'+i : i;
      let option = `<option value="${i}">${i}</option>`;
      selectElement[0].firstElementChild.insertAdjacentHTML('afterend',option);
    }
    
    // for minutes:
    for(let i = 59;i > 0;i--){
      i = i < 10 ? '0'+i : i;
      let option = `<option value="${i}">${i}</option>`;
      selectElement[1].firstElementChild.insertAdjacentHTML('afterend',option);
    }

    // for seconds:
    for(let i = 2;i > 0;i--){
      ampm = i == 1 ? 'AM' : 'PM';
      let option = `<option value="${ampm}">${ampm}</option>`;
      selectElement[2].firstElementChild.insertAdjacentHTML('afterend',option);
    }
}


function setAlarm(){
  if(isAlarmSet){
    alarmTime = '';
    alarmTone.pause();
    setAlarmBtn.innerHTML = 'Set Alarm';
    content.classList.remove('disable');
    return isAlarmSet = false;
  }
  let time = `${selectElement[0].value}:${selectElement[1].value} ${selectElement[2].value}`;
  if(time.includes('Hour') || time.includes('Minute') || time.includes('AM/PM')){
    return alert('Please set alarm time...!')
  }
  alarmTime = time;
  isAlarmSet = true;
  setAlarmBtn.innerHTML = 'Clear Alarm';
  content.classList.add('disable');
}
setAlarmBtn.addEventListener("click", setAlarm);
