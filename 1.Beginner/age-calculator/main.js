// 26 May,2022
// Author:Fazle Rabbi
const showAge = document.querySelector('.showAge');
function ageCalculate(dob,x) {
  console.log(dob)
  // console.log(x)
  let years = x[2]-dob[2];
  //console.log(years)
  let days = 30-dob[0]+x[0];
  let month=0;
  //console.log(days)
  if(days == 30){
    days=0;
    month=1;
  }else if(days > 30){
    let a = days/30;
    //console.log(Math.floor(a))
    let b =Math.floor(a);
    month=b;
    let c = a-1;
    c=c*30;
    c=Math.ceil(c);
    //console.log(c)
    days=c;
  }
  if(month==0){
    showAge.innerHTML=`Your age = ${years} years ${month} months ${days} days...!`;
  }else{
    showAge.innerHTML=`Your age = ${years} years ${month} months ${days} days...!`;
  }
}

// Input dob:
let dobInput = document.querySelector('#dobInput');
let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener("click", function(){
  if(dobInput.value!=''){
  let a = dobInput.value;
  let year = a.slice(0,4);
  let month =a.slice(5,7);
  let day =a.slice(8,10);
  let dob = [day,month,year];
  // Current date generator:
  let d = new Date();
  let currentDate =d.getDate();
  let currentMonth =d.getMonth();
  let currentYear =d.getFullYear();
  //let a =['january','february','march','april','may'];
  let x = [currentDate,currentMonth,currentYear];
  ageCalculate(dob,x);
  dobInput.value='';
  }else{
    showAge.innerHTML='Please input your DOB...!';
    setTimeout(function() {
      showAge.innerHTML='';
    }, 2000);
  }
});
