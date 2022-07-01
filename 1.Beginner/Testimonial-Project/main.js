/*
JavaScript Document
document,write,getElementById,querySelector
for,var,let,const,add,style,
addEventListener,classList,parentElement
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

var pBtn =document.querySelector("#p");
var nBtn =document.querySelector("#n");
var imgTag =document.querySelector("img");
var n =document.getElementById("nm");
// var name =document.querySelector("#name");

var para =document.querySelector("p");
const imgList =['img/0.jpg','img/1.jpg','img/2.jpg','img/3.jpg'];
var count =0;
nBtn.addEventListener("click",function(){
   count++;
   // alert("hi");
   if(count == 1){
   imgTag.src=imgList[1];
   n.innerHTML="SANDY";
   para.innerHTML="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock";
   
   
   }
   else if(count == 2){
   imgTag.src=imgList[2];
   n.innerHTML="AMY";
   para.innerHTML="There, to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock";
   
   
   }
    
   else if(count == 3){
   count=0;
   imgTag.src=imgList[0];
   n.innerHTML="Adams Smith";
   para.innerHTML="Lorem to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock";
   
   
   }
    
    
})


pBtn.addEventListener("click",function(){
   count--;
   if(count < 0){
      count = 2;
      imgTag.src=imgList[2];
      n.innerHTML="AMY";
      para.innerHTML="There, to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock";
   
   }
   else if(count == 1){
      imgTag.src=imgList[1];
      n.innerHTML="SANDY";
      para.innerHTML="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock";
   
   }
   else if(count == 0){
      imgTag.src=imgList[0];
      n.innerHTML="Adams Smith";
      para.innerHTML="Lorem to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock";
   
   }
   
})


// n.innerHTML="hello";












