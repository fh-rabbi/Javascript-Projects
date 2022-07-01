const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener("keyup", ()=>{
  if(input.value != '' && input.value.includes('http://') || input.value.includes('https://')){
    button.classList.add('valid');
  }
  else{
    button.classList.remove('valid');
  }
});

button.addEventListener("click", (e)=>{
  e.preventDefault();
  fetchFile(input.value);
});

function fetchFile(url){
  fetch(url)
  .then(res=>res.blob())
  .then(file=>{
    let tempUrl = URL.createObjectURL(file);
    let aTag = document.createElement('a');
    aTag.href = tempUrl;
    aTag.download = url.replace(/^.*[\\\/]/, '');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  });
}
