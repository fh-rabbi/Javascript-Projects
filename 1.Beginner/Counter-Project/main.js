// JavaScript Document
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
// document.write("hi");

var zero =document.querySelector("#zero");
var lc =document.querySelector("#lc");
var ac =document.querySelector("#ac");
// zero.innerHTML="hi";

var x =0;
ac.addEventListener("click",function(){
   x++;
   zero.innerHTML=x;
   zero.style.color="#F1FF00";
})

lc.addEventListener("click",function(){
   x--;
   zero.innerHTML=x;
   if(x < 0){
      zero.style.color="red";
   }
})

var rstBtn =document.querySelector("#rst").addEventListener("click",function(){
   // alert("hi");
   x=0;
   zero.innerHTML=x;
   
   
}); 















