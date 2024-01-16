let h2 = document.querySelector("h2");
console.log(h2);

let h1 =document.querySelector("h1");
console.log(h1);

let add = document.querySelectorAll("button")[0];
let submit = document.querySelectorAll("button")[1];

let p = document.querySelector("p");
console.log(h2,h1,add,submit,p);
let count =0;

add.addEventListener("click",()=>{
    count =count +1;
    
})