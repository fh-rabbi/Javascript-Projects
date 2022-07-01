const input = document.querySelector('input');
const btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
  if(input.value != ''){
    gen();
  }
  else{
    alert('Please type somethimg..!');
  }
});
function gen(){
  document.querySelector('#qrcode').innerHTML = '';
  document.querySelector('.box').style.display = 'block';
  new QRCode(document.getElementById("qrcode"), input.value);
}

