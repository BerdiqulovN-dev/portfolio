"use strict";

let elRight = document.querySelector(".right-to") ;
let elLeft = document.querySelector(".left-to") ;
let image1 = document.querySelector(".image1");


let width = image1.clientWidth;
let n=0;
let m=0;

elLeft.addEventListener("click", (evt)=>{
//    console.log(evt);
    ++n;
     if(n == 1){
        image1.classList.add("to-left");
     } else{
        image1.classList.add("to-left-two");
     }
})


elRight.addEventListener("click", (evt)=>{
    //    console.log(evt);
        ++m;
         if(m == 1){
            image1.classList.add("to-right");
         } else{
            image1.classList.add("to-right-two");
         }
    })
