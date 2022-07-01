console.log(navigator);
const display_browser = document.querySelector('.br'),
display_os = document.querySelector('.os');

let browsers = [
  {name:'Chrome',value:'Chrome'},
  {name:'Opera',value:'Opera'},
  {name:'Firefox',value:'Firefox'},
  {name:'Safari',value:'Safari'}
  ];

let os = [
  {name:'Android',value:'Android'},
  {name:'Ios',value:'Ios'},
  {name:'Win',value:'chrome'},
  {name:'Mac',value:'Mac'},
  ];

let userInfo = navigator.userAgent;


function browserChecker(){
  for(let i in browsers){
    if(userInfo.includes(browsers[i].name)){
      display_browser.innerHTML = browsers[i].value;
      break;
    }
  }
  
  for(let i in os){
    if(userInfo.includes(os[i].name)){
      display_os.innerHTML = os[i].value;
      break;
    }
  }
}

window.addEventListener("load", browserChecker);
