const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider,index) => {
  slider.style.left = `${index*100}%`;
});

let count = 0;
// logic to slide when clicked on button:
const slideImage = () => {
  sliders.forEach((slider,index) => {
    slider.style.transform = `translateX(-${count*100}%)`;
  });
};

nextBtn.addEventListener("click", ()=>{
  count++;
  if(count == sliders.length){
  count = 0;
  console.log(count);
  slideImage();
  }
  slideImage();
});

prevBtn.addEventListener("click", ()=>{
  count--;
  if(count < 0){
    count = sliders.length-1;
  }
  slideImage();
});


setInterval(function(){
  count++;
  if(count == sliders.length){
  count = 0;
  }
  slideImage();
},2000);