let signIn = document.querySelector('.signIn');
let signUp = document.querySelector('.signUp');
let forSignIn = document.querySelector('.forSignIn');
let forSignUp = document.querySelector('.forSignUp');

forSignUp.addEventListener("click", ()=>{
  signUp.style.zIndex = '5';
  signUp.style.opacity = '1';
  signIn.style.opacity = '0';
  signUp.classList.add('fade');
});

forSignIn.addEventListener("click", ()=>{
  signUp.style.zIndex = '4';
  signIn.style.zIndex = '5';
  signIn.style.opacity = '1';
  signUp.style.opacity = '0';
  signIn.classList.add('fade');
});

