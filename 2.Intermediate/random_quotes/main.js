const button = document.querySelector('button'),
display = document.querySelector('.text');

function generateQuote(){
  button.innerHTML = 'Generating...';
  button.classList.add('active');
  fetch('http://api.quotable.io/random')
  .then(res=>res.json())
  .then(data=>{
    button.innerHTML = 'New Quote';
    display.innerHTML = data.content;
    button.classList.remove('active');
  });
}

button.addEventListener("click", generateQuote);

document.querySelector('.fa-copy').addEventListener("click", ()=>{
  let text = display.innerHTML;
  navigator.clipboard.writeText('hello');
  alert('Quote successfuly copied...!')
  console.log(navigator);
});

document.querySelector('.fa-twitter').addEventListener("click", ()=>{
  let share = `https://twitter.com/intent/tweet?url=${display.innerHTML}`;
  window.open(share,'_blank')
});
