const form = document.querySelector('form');
const fileInpt = document.querySelector('form input');
const p = document.querySelector('p');
let textarea = document.querySelector('textarea');

// 
function fetchRequest(formData,file){
  p.innerHTML = 'scanning qr code...';
  fetch('http://api.qrserver.com/v1/read-qr-code/',{
    method : 'POST',
    body : formData
  })
  .then(res=>res.json())
  .then(result=>{
    if(result[0].symbol[0].data == null){
      p.innerHTML = 'couldn\'t scan qr code';
    }
    else{
      document.querySelector('form img').src = URL.createObjectURL(file);
      document.querySelector('form img').style.display = 'block';
      document.querySelector('.container').classList.remove('default-height');
      document.querySelector('.content').style.opacity = 1;
      form.style.pointerEvents = 'none';
      p.innerHTML = result ? 'upload qr code to scan' : 'couldn\'t scan qr code';
      if(!result) return;
      textarea.value = result[0].symbol[0].data;
    }
  });
}

// Get uploaded file:
fileInpt.addEventListener("change", (e)=>{
  let file = e.target.files[0];
  if(!file) return;
  let formData = new FormData();
  formData.append('file',file);
  fetchRequest(formData,file);
});

// Upload file by just clicking form area:
form.addEventListener("click", () => fileInpt.click());

document.querySelector('#copy').addEventListener("click", ()=>{
  let text = textarea.value;
  console.log(text);
  navigator.clipboard.writeText(text);
});

document.querySelector('#close').addEventListener("click", ()=>{
  document.querySelector('form img').style.display = 'none';
  document.querySelector('.container').classList.add('default-height');
  document.querySelector('.content').style.opacity = 0;
  form.style.pointerEvents = 'auto';
});
