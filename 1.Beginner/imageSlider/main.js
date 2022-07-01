let box = document.querySelector('.container');
let imgTag = document.querySelectorAll('img');
let img =['img/a.jpeg','img/b.jpeg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSGvWvrm7UVTNkNRU8vCNaAe28r5Cmldsu8_4VDxG3VKwXvVg60JjUoei&s=10'];
let count = 0;
setInterval(function() {
  count++;
  if(count == 1){
    imgTag[0].src = img[1];
  }
  else if(count == 2){
    imgTag[0].src = img[2];
  }
  else{
    imgTag[0].src = img[0];
    count=0;
  }
}, 1200);



