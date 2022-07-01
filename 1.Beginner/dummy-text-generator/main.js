// Mon, Jun 13, 2022
// Author: Fazle Rabbi
let text_box = document.querySelector('#text-box');
let amount = document.querySelector('#number');
let btn = document.querySelector('#btn');
let data = [
  'Dolores necessitatibus exercitationem totam rerum ex. Sequi ab ut et odio alias. Non minus rerum sequi est et et inventore.',
  'Eum sequi sit tenetur et. Unde aut doloribus aliquid vitae suscipit facere omnis. Odit nam consectetur voluptatem est.',
  'Necessitatibus et rem aut expedita. Quidem aspernatur eius ad vel et ducimus et. Velit eligendi aperiam quasi est cum. Odit molestias possimus autem et dolor quae. Dolore doloribus labore quidem reiciendis iure et qui.',
  'Voluptatem doloribus totam qui quisquam non. Et delectus qui sint consequuntur. Earum voluptates similique veniam officia voluptatem incidunt dignissimos.',
  'Dolorem ducimus dolor eos ex ex provident in. Possimus reprehenderit ullam aut quae. Dolores aut voluptate maiores et non ut magnam amet.',
  'Ipsam architecto provident voluptas minima sit ut dolor illum. Quidem culpa deleniti nesciunt neque nisi facilis fugit. Aspernatur totam eos et itaque expedita omnis. Nulla quidem rem rerum corrupti sint laudantium est.',
  'Aut sed aspernatur omnis ut voluptatem. Provident voluptas tempore soluta quia. Culpa illum reprehenderit iure ut ut. Nostrum non debitis quaerat eius.',
  'Iure aperiam rerum repellendus esse reiciendis quidem quod. Ipsa qui assumenda possimus id quod reprehenderit dolore. Doloremque reprehenderit magni sit accusamus. Consequatur possimus assumenda asperiores voluptatem unde cumque.',
  'Consequatur corrupti expedita dolores doloremque est est sequi aut. Aut qui ad provident corrupti.',
  'Est nesciunt et delectus sed est voluptatem ut. Ab temporibus est fuga quisquam est. Eveniet corrupti nisi aut sunt architecto vero perspiciatis. Tempora voluptas quas quo eum impedit.',
  ];
// console.log(data);
function loadData(){
  if(amount.value == ''){
    alert('Please enter amount !');
  }
  else{
    let index = amount.value;
    for(let para in data){
      if(para == index){
        break;
      }
      else{
        var a = para == 0 ? data[para] : a+'\n \n'+data[para];
        // console.log(a);
        text_box.value = a;
      }
    }
  }
}
btn.addEventListener("click", loadData);
