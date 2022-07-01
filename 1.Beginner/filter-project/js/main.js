/*JavaScript document,write,getElementById,querySelector,for,var,let,const,add,style,addEventListener,classList,parentElementchildren,nextElementSibling,previousElementSibling,querySelectorAll,getElementsByTagName,createElement,createTextNode,appendChild,removeChild,insertBefore,function,innerHTML,Math,sqrt,pow,random,floor,ceilmax,date new Date(),object,array,date.get FullYear,Month,Hours,MinutesDay,constractor,pop,push,shift,unshiftsplice,slice,sort,break,continue,while,doif,else if,else,switch,case,default,Number,parseInt,parseFloat,toString()toFixed,toPrecision,length,charAt,toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,fetch,axios,method,ajax,Xml http requestevent:onload(),onerror()property: response,responseText,responseType,responseUrl,status,statusTextfunction: open(),send(),setRequestHeader()methods:get,post,put,patch,deleteAPI: https://jsonplaceholder.typicode.com/posts,localStorage,setItem(),getItem,sessionStorage*/
// Navigation Menu
const menuButton =document.querySelector("#menu");
const menuContent =document.querySelector(".menu");
menuButton.addEventListener("click",openMenu)
var count =0;
function openMenu(){
   // alert("hey");
   count++;
   if(count==1){
   menuContent.classList.add("open")
   }
   else{
      count =0;
      menuContent.classList.remove("open")
   }
}

// Explore button
/*var exploreButton =document.querySelector("#explore");
exploreButton.addEventListener("click",function(){
   alert("hi");
})*/
function explore(){
   alert("hi");
}



// Filter item
const allButton =document.querySelector("#all");
const cakesButton =document.querySelector("#cakes");
const cupCakesButton =document.querySelector("#cupcakes");
const sweetsButton =document.querySelector("#sweets");
const dougnutsButton =document.querySelector("#doughnuts");

// Hide item function
function hideCakes(){
   var cakes =document.querySelectorAll(".cake");
   cakes.forEach((allCake)=>{
   allCake.classList.add("hide")
  })
}

function hideCupCakes(){
   var cupCakes =document.querySelectorAll(".cupcake");
   cupCakes.forEach((cupCake)=>{
   cupCake.classList.add("hide")
  })
}

function hideSweets(){
   var sweets =document.querySelectorAll(".sweet");
   sweets.forEach((allSweets)=>{
   allSweets.classList.add("hide")
  })
}

function hideDougnuts(){
   var dougnuts =document.querySelectorAll(".dougnut");
   dougnuts.forEach((allDounut)=>{
   allDounut.classList.add("hide")
  })
}

// Show Item Function

function showAll(){
   // alert("hi");
   showCakes()
   showCupCakes()
   showSweets()
   showDougnuts()
}

function showCakes(){
   var cakes =document.querySelectorAll(".cake");
   cakes.forEach((allCake)=>{
   allCake.classList.remove("hide")
  })
}

function showCupCakes(){
   var cupCakes =document.querySelectorAll(".cupcake");
   cupCakes.forEach((cupCake)=>{
   cupCake.classList.remove("hide")
  })
}

function showSweets(){
   var sweets =document.querySelectorAll(".sweet");
   sweets.forEach((allSweets)=>{
   allSweets.classList.remove("hide")
  })
}

function showDougnuts(){
   var dougnuts =document.querySelectorAll(".dougnut");
   dougnuts.forEach((allDounut)=>{
   allDounut.classList.remove("hide")
  })
}

// add listener in button
allButton.addEventListener("click",function(){
    showAll()  
})

cakesButton.addEventListener("click",function(){
    // alert("hello");
    showCakes()
    hideCupCakes()
    hideSweets()
    hideDougnuts()   
})

cupCakesButton.addEventListener("click",function(){
    showCupCakes()
    hideCakes()
    hideSweets()
    hideDougnuts()    
})

sweetsButton.addEventListener("click",function(){
    showSweets()
    hideCakes()
    hideCupCakes()
    hideDougnuts()   
})

dougnutsButton.addEventListener("click",function(){
    showDougnuts()
    hideCakes()
    hideCupCakes()
    hideSweets()  
})


// Search item


    const searchBox = document.querySelector('#searchBtn')
    const storeItems = document.querySelectorAll('.store-item')

    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value;
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.innerHTML.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
                //alert(item);
            }
        })
        // alert("hi");
    })

















