const buttons = document.querySelectorAll('button');
let tab1 = document.querySelector('#tab1');
let tab2 = document.querySelector('#tab2');
let tab3 = document.querySelector('#tab3');

buttons.forEach(button => {
  button.addEventListener("click", ()=>{
    let btnText = button.innerHTML.toLowerCase();
    switch (btnText) {
      case 'tab1':
        if(tab2.classList.value.includes('active') || tab3.classList.value.includes('active')){
          tab2.classList.remove('active');
          tab3.classList.remove('active');
        }
        tab1.classList.toggle('active');
        break;
      
      case 'tab2':
        if(tab1.classList.value.includes('active') || tab3.classList.value.includes('active')){
          tab1.classList.remove('active');
          tab3.classList.remove('active');
        }
        tab2.classList.toggle('active');
        break;
      
      default:
        if(tab1.classList.value.includes('active') || tab2.classList.value.includes('active')){
          tab1.classList.remove('active');
          tab2.classList.remove('active');
        }
        tab3.classList.toggle('active');
        break;
        
    }
  });
});
