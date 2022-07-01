const input = document.querySelector('input');
const searchBtn = document.querySelector('#btn');
const contentBox = document.querySelector('.content-box');

// Paragraph data:
let paragraph = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur velit orci, commodo ullamcorper ante sit amet, aliquet interdum nisi. Phasellus ornare odio sit amet elit luctus aliquet. Cras elementum nisl nulla, sed luctus tortor accumsan sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam imperdiet nisi porta velit semper, a vehicula magna lacinia. Etiam vel eleifend',
  'Praesent condimentum dapibus libero non fringilla. Etiam efficitur enim nec metus pretium blandit. Morbi lacinia est nunc, non auctor augue vulputate at. Praesent quis tellus metus. Etiam elementum diam sit amet enim aliquam condimentum. Donec hendrerit, odio eget faucibus dictum, nunc nulla commodo nibh, vel fringilla tortor enim non sem. Pellentesque euismod lorem id volutpat imperdiet. Donec suscipit magna a venenatis vestibu', 
  'Cras ut velit elementum, aliquam quam vel, ultrices mauris. Morbi sit amet faucibus quam. Phasellus volutpat porttitor nibh eget maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras rutrum tortor ligula, eget lobortis lacus consectetur at. Nulla fringilla rutrum risus, vitae dictum massa aliquam sed. Mauris massa nisi, malesuada eu risus nec, iaculis consectetur erat. Mauris eget e',
  'Nunc eget sapien felis. Sed id lacus id justo suscipit interdum. Nulla rhoncus eleifend facilisis. Morbi quis dolor mi. Mauris ultricies non mauris sed laoreet. Praesent et consequat ante. Etiam malesuada euismod neque',
  'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas pharetra lorem aliquet, semper dui a, dignissim nulla. Maecenas gravida nisi velit, non consectetur felis commodo at. Curabitur metus erat, volutpat posuere volutpat sed, hendrerit a nisl. Pellentesque sed maximus turpis. Aenean vel auctor ipsum, eget bibendum quam. In volutpat, nisl vel egestas mattis, orci quam convallis orci, quis'        
  ];

// main logic:
searchBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  let amount = input.value;
  if(amount != '' && amount <= 5 && amount > 0){
    paragraph = paragraph.reverse();
    let data = paragraph.slice(0,amount);
    let dataArr = data.map(d=>{
      return `<p id="para">${d}</p>`;
    });
    data = dataArr.join("");
    contentBox.innerHTML = data;
    contentBox.style.opacity = 1;
  }
  else{
    alert('Please type amount...!')
  }
});
