const container = document.querySelector('.container');
const selectBtn = document.querySelector('.select-btn');
const search = document.querySelector('#search');

// Make list of countries
let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

// Make clicked list as selected list:
function selected(el){
  let text = el.innerHTML;
  document.querySelector('#selectBtn').innerHTML = text;
  container.classList.remove('active')
  search.value = '';
  document.querySelector('.countries').innerHTML = '';
}

function makeList(){
  countries.forEach(country => {
    let li = `<li onclick="selected(this)">${country}</li>`;
    document.querySelector('.countries').insertAdjacentHTML('beforeend',li);
  });
}

// Search functionality:
search.addEventListener("keyup", () => {
  let searchValue = search.value.toLowerCase();
  let arr = [];
  arr = countries.filter(country=>{
    return country.toLowerCase().startsWith(searchValue);
  }).map(data=>{
    return `<li onclick="selected(this)">${data}</li>`
  }).join('');
  document.querySelector('.countries').innerHTML = arr;
});

selectBtn.addEventListener("click", ()=>{
  container.classList.toggle('active');
  makeList();
});
