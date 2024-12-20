let btn = document.getElementById("up");
window.onscroll = function(){
    if(window.scrollY >= 700){
        btn.style.display = "block";
    } else{
        btn.style.display = "none"
    }
}
btn.onclick = function(){
    window.scrollTo({
        top: 0,
        left:0 ,
        behavior : "smooth"
    });
}
const mybody = document.querySelector("body");
document.addEventListener('DOMContentLoaded', function() {

    const darkbtn = document.querySelector(".bt");
    

    
    const back = document.getElementsByClassName("blog");
    const our = document.getElementsByClassName("our");
    const mini = document.getElementsByClassName("mini");
    const tat = document.getElementsByClassName("tat");
    const page = document.getElementsByClassName("page-link");
    const bag = document.getElementsByClassName("back");
    const to = document.getElementsByClassName("to");
    const card = document.getElementsByClassName("card");
    



    darkbtn.addEventListener('click', function() {
        if (!darkbtn.classList.contains("active")){
        const randomNumber = Math.floor(Math.random() * 15) + 1;
        Array.from(back).forEach(element => {
            element.style.backgroundColor = "#343a40";
        });
       Array.from(our).forEach(element => {
        element.style.color = "whitesmoke";
       });
       Array.from(mini).forEach(element => {
        element.classList.remove("text-black-50");
        element.classList.add("text-white-50");
     });
     Array.from(tat).forEach(element => {
        element.style.color = "#f5ebe0";
     });
     Array.from(page).forEach(element => {
        element.style.backgroundColor = "white";
        element.style.color = "black";
     });
     Array.from(bag).forEach(element => {
        element.style.backgroundImage =  `url('back${randomNumber}.jpg') `;
        element.style.transition='0.6s';
     });
     Array.from(to).forEach(element => {
        element.classList.remove("bi-moon");
        element.classList.add("bi-brightness-high");
        element.style.color = "whitesmoke"
     });
     Array.from(card).forEach(element => {
        element.style.backgroundColor = "#c6ac8f";
     });
     

     darkbtn.classList.add("active")
    } else {
        Array.from(back).forEach(element => {
            element.style.backgroundColor = "";
        });
        Array.from(our).forEach(element => {
            element.style.color = "";
        });
        Array.from(mini).forEach(element => {
            element.classList.remove("text-white-50");
            element.classList.add("text-black-50");
        });
        Array.from(tat).forEach(element => {
            element.style.color = "";
        });
        Array.from(page).forEach(element => {
            element.style.backgroundColor = "";
            element.style.color = "";
        });
        Array.from(bag).forEach(element => {
            element.style.backgroundImage = "";
         });
         Array.from(to).forEach(element => {
            element.classList.remove("bi-brightness-high");
            element.classList.add("bi-moon");
            element.style.color = ""
         });
         Array.from(card).forEach(element => {
            element.style.backgroundColor = "";
         });
        darkbtn.classList.remove("active")
    }
    });
    
});















// Test Map vs Filter
let numbers = [1, 2, 3, 4, 5, 6, 7,"pop", 8, 9, 10, 11, 12];

 let addMap = numbers.map(function (el) {
   return el + el;
 })
 console.log(addMap)   // map does return an array with the results of calling a function for every array element

 console.log("************************")

 let addFilter = numbers.filter(function (el) {
   return el + el;  // here it returns only the numbers bcs the condition is true
 })
 console.log(addFilter);  // filter does return only the elements that pass the test in the callback function and removes the rest

 let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ").filter(function (ele) {
      return ele.length <= 4;
  }).join(" ");
console.log(smallWords);
let bigwords = sentence.split(" ").filter(function(el){
    return el.length > 5;
}).join(" ");
console.log(bigwords);

let ignoreNumbers = "Elz123er4o";

let clean = ignoreNumbers.split("").filter(function (el){
    return isNaN(parseInt(el));
}).join("")
console.log(clean);

let mix = "A13BS2ZX65sdf56dfg2";
let Non = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));  // it transforms the string into numbers
}).join("");
console.log(Non)
let mixedContent = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));  // it transforms the string into numbers
}).reduce(function (acc , current) {
    return acc * current;          // it multiplies the numbers one by one and then returns the result of all of them
});

console.log(mixedContent);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let ove = removeChars.filter(function (bom) {
    return bom != "@";
}).reduce(function(acc , current){
    return `${acc.toLocaleLowerCase()}${current.toLocaleLowerCase()}` // it removes the @ from the array and adds it to the new array
});
console.log(ove)
