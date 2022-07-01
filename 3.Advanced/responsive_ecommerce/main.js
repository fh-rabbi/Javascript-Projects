let cartContainer = document.querySelector('.cart-container'),
cartBtn = document.querySelector('.nav button'),
closeBtn = document.querySelector('#close');

cartBtn.addEventListener("click", ()=>{
  cartContainer.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", ()=>{
  cartContainer.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Increase Number Logic:
function increaseNumber(btn){
 let amount = btn.previousElementSibling.value;
 amount = Number(amount);
 if(amount < 5){
   amount = amount+1;
   btn.previousElementSibling.value = amount;
 }
 else{
   alert('The max value is 5')
 }
}


// Decrease Number Logic:
function decreaseNumber(btn){
 let amount = btn.nextElementSibling.value;
 amount = Number(amount);
 if(amount > 1){
   amount = amount-1;
   btn.nextElementSibling.value = amount;
 }
 else{
   alert('The min value is 1')
 }
// alert(btn.nextElementSibling.value) 
}


// Item price calculation:
function calculatePrice(el){
  let price = el.parentElement.parentElement.querySelector('.price h1').innerHTML;
  let amount = el.parentElement.parentElement.querySelector('#amount').value;
  price = parseInt(price.slice(1));
  amount = parseInt(amount);
  let totalPrice = price*amount;
  addToCart(totalPrice);
  document.querySelectorAll('#cartBtn')[0].style.animation = 'blink .7s ease-in';
  document.querySelectorAll('#cartBtn')[1].style.animation = 'blink .7s ease-in';
  document.querySelector('.popup').classList.add('showPopup');
  changePointerEvents('none');
  cartBtn.style.pointerEvents = 'none';
}

// Change Pointer Events:
function changePointerEvents(status){
  let cartButtons = document.querySelectorAll('#cartBtn');
  cartButtons.forEach(cartBtn=>{
    cartBtn.style.pointerEvents = `${status}`;
  });
}

// Close cart message:
document.querySelector('#closePopup').addEventListener("click", ()=>{
  document.querySelector('.popup').classList.remove('showPopup');
  changePointerEvents('auto');
  cartBtn.style.pointerEvents = 'auto';
  document.querySelectorAll('#cartBtn')[0].style.animation = '';
  document.querySelectorAll('#cartBtn')[1].style.animation = '';
});

// Add to cart logic:
function addToCart(totalPrice){
  let productAmount = document.querySelector('#pAmount');
  let currentAmount = parseInt(productAmount.innerHTML);
  productAmount.innerHTML = (currentAmount + totalPrice);
  
  let shipCharge = document.querySelector('#shipCharge'),
  finalAmount = document.querySelector('#finalAmount');
  productAmount = parseInt(productAmount.innerHTML);
  shipCharge = parseInt(shipCharge.innerHTML);
  finalAmount.innerHTML = (productAmount+shipCharge);
}

// Discount logic:
let gotDiscount = false;
function discount(){
  if(gotDiscount){
    return alert('You are already gotted the discount...!');
  }
  let finalAmount = document.querySelector('#finalAmount');
  let couponBox = document.querySelector('#coupon');
  if(couponBox.value == 'love' && finalAmount.innerHTML > 0 && !gotDiscount){
    let currentPrice = parseInt(finalAmount.innerHTML);
    let discount = 30;
    let newPrice = (currentPrice - discount);
    finalAmount.innerHTML = newPrice;
    gotDiscount = true;
  }
  else{
    let couponMsg = document.querySelector('#couponMsg');
    couponMsg.innerHTML = 'Code is not valid!';
    couponMsg.style.color = 'red';
    setTimeout(function() {
      couponMsg.innerHTML = 'code is love';
      couponMsg.style.color = 'black';
    }, 1000);
  }
}
