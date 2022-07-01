const arrows = document.querySelectorAll('.fa-arrow-down');

arrows.forEach(arrow=>{
  arrow.addEventListener("click", ()=>{
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextForm = parent.nextElementSibling;
    if(input.type == 'text' && nameValidation(input)){
      nextSlide(parent,nextForm);
    }
    else if(input.type == 'email' && emailValidation(input)){
      nextSlide(parent,nextForm);
    }
    else if(input.type == 'password' && passwordValidation(input)){
      nextSlide(parent,nextForm);
    }
    else{
      parent.style.animation = 'shake 0.5s ease';
    }
    // get rid of animation:
    parent.addEventListener("animationend", ()=>{
      parent.style.animation = '';
    });
  });
});

function nameValidation(name){
  if(name.value.length < 6){
    error('orange');
  }
  else{
    error('seagreen');
    return true;
  }
}

function emailValidation(email){
  if(email.value.length >= 14 && email.value.includes('@')){
    error('seagreen');
    return true;
  }
  else{
    error('orange');
  }
}

function passwordValidation(password){
  if(password.value.length < 8){
    error('orange');
  }
  else{
    error('seagreen');
    return true;
  }
}

function error(color){
  document.body.style.background = color;
}

function nextSlide(parent,nextForm){
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}
