const myClock =()=>{
    let d =new Date();
    let h =d.getHours();
    let m =d.getMinutes();
    let s =d.getSeconds();
    let hours =h;
    if(h>12){
        h =h-12;
        if(h<10){
            h ='0'+h;
        }
    }
    if(s<10){
        s = '0'+s;
    }
    let time =`${h}:${m}:${s}`;
    
    let hrs =document.querySelector('.hrs');
    let mns =document.querySelector('.mns');
    let scs =document.querySelector('.scs');
    hrs.innerHTML=h;
    mns.innerHTML=m;
    scs.innerHTML=s;
    //
    if(hours>12){
    document.querySelector('.ap').innerHTML='PM';

    }else{
        document.querySelector('.ap').innerHTML='AM';
    }
};
myClock();
setInterval(myClock,1000);

let button =document.querySelector('button');
let clockBox =document.querySelector('.container');
button.addEventListener("click",openClockBox)
function openClockBox(){
    clockBox.classList.toggle('showClock')
    //alert("ok"); 
}

{
// Date:
let dateTag =document.querySelector('.dt');
let d =new Date();
let day =d.getDay(); 
let month =d.getMonth();
let year =d.getFullYear();

let dayList =['Sun','Mon','Tue','Wed','Thu','Fri'];
day = dayList[day];
let monthList =['Jan','Feb','Mar','Apr','May','Jun'];
month = monthList[month];
let today =`${day},${month},${year}`;
dateTag.innerHTML=today;
}