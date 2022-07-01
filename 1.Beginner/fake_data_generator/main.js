let generate_btn = document.querySelector('#generate');
let avatar = document.querySelector('#avatar');
let id = document.querySelector('.id');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let city = document.querySelector('.city');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let gender = document.querySelector('.gender');
let dob = document.querySelector('.dob');
generate_btn.addEventListener("click", get_data);

function get_data(){
  fetch('https://random-data-api.com/api/users/random_user?size=100')
  .then(res=>res.json())
  .then(data=> prepare_data(data))
  .catch(err=>console.log(err));
}

function prepare_data(data){
  console.log(data);
  let index = Math.round(Math.random()*data.length-1);
  let generated_data = data[index];
  load_data(generated_data);
  console.log(generated_data);
}

function load_data(data){
  id.innerHTML = data.id;
  fname.innerHTML = data.first_name;
  lname.innerHTML = data.last_name;
  email.innerHTML = data.email;
  phone.innerHTML = data.phone_number;
  city.innerHTML = data.address.city;
  username.innerHTML = data.username;
  password.innerHTML = data.password;
  gender.innerHTML = data.gender;
  dob.innerHTML = data.date_of_birth;
  let src = data.avatar;
  // console.log(src);
  avatar.setAttribute('src',src);
}
