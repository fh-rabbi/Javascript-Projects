let data = [
  {
    title : 'lorem 1',
    text : 'some random text 1'
  },
  {
    title : 'lorem 2',
    text : 'some random text 2'
  },
  {
    title : 'lorem 3',
    text : 'some random text 3'
  },
  
  ];

const getData =()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(json=>{
    //console.log(json)
    json.map(x=>{
      //console.log(y.body)
      let container = document.querySelector('.container');
      let cardElement = document.querySelector('.card');
      //y.map(x=>{
      console.log(x)
      let card = document.createElement('div');
      card.classList.add('card')
      card.innerHTML = `
        <h2 class="card-title">${x.title}</h2>
        <p class="card-text">${x.body}</p>
        `
        container.appendChild(card)
     
      //})
    })
  })
};
getData()



