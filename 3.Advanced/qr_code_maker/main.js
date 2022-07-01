const input = document.querySelector('input');
const button = document.querySelector('button');
const img = document.querySelector('img');

button.addEventListener("click", e => {
  e.preventDefault();
  let qr_text = input.value;
  if(qr_text != ''){
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_text}`;
    
    if(navigator.onLine != true){
      document.querySelector('.popup').classList.add('show-popup');
      setTimeout(function() {
        document.querySelector('.popup').classList.remove('show-popup');
      }, 2000);
      return;
    }
    console.log(navigator);
    document.querySelector('.qr-box').classList.add('active');
    document.querySelector('main').style.height = '440px';
    input.value = '';
  }else{
    alert('Please type something...!');
  }
});
