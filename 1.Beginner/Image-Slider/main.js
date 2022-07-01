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

var imageList =['img/1.jpeg','img/2.jpeg','img/3.jpeg','img/4.jpeg','img/5.jpeg']
//var randomNumber =Math.floor(Math.random()*imageList.length);
var pBtn =document.querySelector("#p");
var nBtn =document.querySelector("#n");
var imgTag =document.querySelector("img");
// Btn.innerHTML="hi";
var count =0;
nBtn.addEventListener("click",function(){
   // alert("hi");
   // imgTag.src='img/2.jpeg'; 
   //document.write(randomNumber);
   count++;
   
    if(count==1){
      imgTag.src=imageList[1];
    }
    else if(count==2){
      imgTag.src=imageList[2];
    }
    else if(count==3){
      imgTag.src=imageList[3];
    }
    else if(count==4){
      imgTag.src=imageList[4];
    }
    else if(count > 4){
       count=0;
       imgTag.src=imageList[0];
    }
   
})


pBtn.addEventListener("click",function(){
   // alert("hi");
   // imgTag.src='img/2.jpeg'; 
   //document.write(randomNumber);
   count--;
   if(count < 0){
      count=4;
      imgTag.src=imageList[4];
   }

    else if(count==3){
      imgTag.src=imageList[3];
    }
    else if(count==2){
      imgTag.src=imageList[2];
    }
    else if(count==1){
      imgTag.src=imageList[1];
    }
    else if(count==0){
      imgTag.src=imageList[0];
    }
    
   
})





















