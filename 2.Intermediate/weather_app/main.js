let form = document.querySelector('form');
let input = document.querySelector('#input');
let searchBtn = document.querySelector('.btn');
let celc = document.querySelector('.celc');

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(input.value);
  if(input.value == ''){
    alert('Please type city name!');
  }
  else{
    celc.innerHTML = 'Loading...';
    get_weather(input.value);
  }
});

async function get_weather(city){
  const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  load_data(data);
}

function load_data(data){
  let temp = data.main.temp;
  celc.innerHTML = temp+'°C';
  let status = document.querySelector('.status');
  status.innerHTML = data.weather[0].main;
  console.log(data);
}
