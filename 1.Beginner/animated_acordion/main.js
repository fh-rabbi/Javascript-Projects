const items = document.querySelectorAll('.item');

items.forEach(item=>{
  item.addEventListener("click", ()=>{
    let hiddenBox = item.querySelector('.content');
    hiddenBox.classList.toggle('active');
    let openIcon = item.querySelector('.header .fa-plus');
    let closeIcon = item.querySelector('.header .fa-xmark');
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
    
  });
});
