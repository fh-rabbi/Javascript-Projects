let cartBtn = document.querySelector('.cartBtn');
let cartSection = document.querySelector('.cart-section');
cartBtn.addEventListener("click", ()=>{
  cartSection.classList.toggle('show');
  //document.querySelector('body').classList.toggle('scroll');
});

let order = document.querySelector('.orderNow');
order.addEventListener("click", ()=>{
  console.log(`Total price = $${10}`);
  let popupBox = document.querySelector('.popup');
  let totalPrice = document.querySelector('.total-price');
  let a = document.querySelector('.cartSection .price');
  totalPrice.innerHTML=a;
});


let add = document.querySelectorAll('.add');
Array.from(add).map(x=>{
  x.addEventListener("click", (e)=>{
    alert('Item added to cart!');
    //let parent = cartBtn.parentElement;
    //console.log(parent);
    let parent = x.parentElement;
    console.log(parent);
    let cardTitle = parent.querySelector('.card-title');
    let priceElement = cardTitle.nextElementSibling;

    let mainDiv = document.createElement('div');
    mainDiv.classList.add('cart-list','bg-light','text-dark','p-2','rounded','my-3');
    let span = document.createElement('span');
    let h1 = document.createElement('h3');
    let price = document.createElement('span');
    price.classList.add('dolar');
    price.innerHTML=priceElement.innerHTML;
    h1.classList.add('d-inline-block');
    h1.innerHTML=cardTitle.innerHTML+'';
    span.appendChild(h1);
    span.appendChild(price)
    mainDiv.appendChild(span);
    cartSection.appendChild(mainDiv);
    let orderNowBtn = document.querySelector('.orderNow');
    orderNowBtn.style.display='block';
  });
});


