// document.getElementById("count-el").innerText = 5;

let count = 0;
let saveText = ""
let sum = 0;

let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-text");
let sumEl = document.getElementById("sum-text");

function increment(){
 
    countEl.textContent = ++count;

}


function save(){

    
    savedEl.textContent += count + " - ";
    sum += count;
    count = 0;
    countEl.innerText = count;

    sumEl.textContent = "Toplam Zikir : " + sum; 

}