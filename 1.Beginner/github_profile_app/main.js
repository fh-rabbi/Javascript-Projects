const fName = document.querySelector('#fName');
const username = document.querySelector('#username')
const input = document.querySelector('#input');
const search = document.querySelector('#search');

search.addEventListener("click", ()=>{
  if(input.value !== '' || undefined){
    findProfile(input.value);
  }
});

function findProfile(userName){
  fetch(`https://api.github.com/users/${userName}`)
  .then(res=>res.json())
  .then(data=>{
    document.querySelector('.avatar').src = data.avatar_url;
    fName.innerHTML = data.name;
    username.innerHTML = data.login;
    console.log(data);
    fName.style.opacity = 1;
    username.style.opacity = 1;
  });
}
