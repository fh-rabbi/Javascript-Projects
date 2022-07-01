// 18 April,2022
// Fazle Rabbi
/*
JavaScript Document
document,write,getElementById,querySelector
for,var,let,const,add,style,
eventListener,classList,parentElement
children,nextElementSiblong
previousElementSibling
querySelectorAll,getElementsByTagName
createElement,createTextNode,appendChild
removeChild,insertBefore,function
innerHTML,Math,sqrt,pow,random,floor,ceil
max,date new Date(),object,array,
date.get FullYear,Month,Hours,Minutes
Day,constractor,pop,push,shift,unshift
splice,slice,sort,typeof,break,continue,while,do
if,else if,else,switch,case,default,
Number,parseInt,parseFloat,toString()
toFixed,toPrecision,length,charAt,
toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,
*/


const data =[
   {
      text1 : "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
      author1 :"smith", 
   },
   {
      text2 : "Lorem ipsum dolor sit amet..God save me from my friends. I can protect myself from my enemies.",
      author2 :"david", 
   },
   {
      text3 : "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author3 :"rabbi", 
   },
   {
      text4 : "B critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author4 :"sakib", 
   },
   {
      text5 : "C critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author5 :"alamin", 
   },
   {
      text6 : "D critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author6 :"pahchan", 
   },
   {
      text7 : "E critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author7 :"pallab", 
   },
   
   
   
];
var [d1,d2,d3,d4,d5,d6,d7] = data
// object destructure
var {text1,author1} = d1
var {text2,author2} = d2 
var {text3,author3} = d3 
var {text4,author4} = d4
var {text5,author5} = d5
var {text6,author6} = d6
var {text7,author7} = d7


var x =[text1,text2,text3,text4,text5,text6,text7];
var y =[author1,author2,author3,author4,author5,author6,author7];
// document.write(x[0]);

const quoteText =[
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel rhoncus sem. Integer imperdiet mi eu ipsum volutpat, ut efficitur urna placerat. Etiam feugiat, felis ac eleifend posuere, dui mi auctor ex, eget sodales enim orci vitae quam. Nullam at risus turpis.",
    "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
    "God save me from my friends. I can protect myself from my enemies.",
    "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
];

// document.write(text1);


var btn = document.querySelector("button").addEventListener("click",generateQuote)
function generateQuote(){
   var length =quoteText.length-1;
   var randomNumber =Math.floor(Math.random()*quoteText.length);
   
   var para =document.querySelector("p");
   // para.innerHTML=quoteText[randomNumber];
   para.innerHTML=x[randomNumber];
   
   var authorName =document.querySelector("span");
   authorName.innerHTML=y[randomNumber];
   
   
   /*if(randomNumber == 1){
      var authorName =document.querySelector("span");
      authorName.innerHTML="Adams Smith";
   }*/
   
   
}








