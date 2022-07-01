let form = document.querySelector('form');
let dob = document.querySelector('.dob');
let submit_btn = document.querySelector('.btn');
let showDob = document.querySelector('.showDob');
let alert_msg = document.querySelector('.alert');
form.addEventListener("submit", calculateAge);

function calculateAge(e){
  e.preventDefault();
  if(dob.value != ''){
    // alert('Its okey...')
    console.log(dob.value);
    let dob_info = dob.value;
    dob_info = dob_info.split('');
    // let months_list = [];
    let year = dob_info.slice(0,4).join('');
    let month = dob_info.slice(5,7).join('');
    let day = dob_info.slice(8,10).join('');
    console.log(year,month,day);
    let current_age = 2022-year;
    document.querySelector('.box').style.opacity = 1;
    showDob.innerHTML = `You are ${current_age} years old!`;
    dob.value = '';
    console.log(dob.value);
  }
  else{
    alert_msg.style.opacity = 1;
    alert_msg.innerHTML = 'Please input your dob!';
    setTimeout(function() {
      alert_msg.style.opacity = 0;
      alert_msg.innerHTML = '';
    }, 2000);
  }
}
