//first
const inputName = document.querySelector("#nGSubmitName");
const inputGmail = document.querySelector("#nGSubmitGmail");
const startButton = document.querySelector("#startButton");
const nextButtons = document.querySelector('.next');

const firstDiv = document.querySelector('#first');
const secondDiv = document.querySelector('#second');
const thirdDiv = document.querySelector("#third");
const fourthDiv = document.querySelector("#fourth");
const fifthDiv = document.querySelector("#fifth");
const sixthDiv = document.querySelector("#sixth");

let name1;
let gmail1;

secondDiv.style.display = "none";
thirdDiv.style.display = "none";
fourthDiv.style.display = "none";
fifthDiv.style.display = "none";
sixthDiv.style.display = "none";

startButton.addEventListener('click',()=>{
    name1 = inputName.value;
    gmail1 = inputGmail.value;

    firstDiv.style.display = "none";

    let math = Math.floor(Math.random() * 100);
    if(math<=20){
        secondDiv.style.display = "";
    }
    else if(math<=40){
        thirdDiv.style.display = "";
    }
    else if(math<=60){
        fourthDiv.style.display = "";
    }
    else if(math<=80){
        fifthDiv.style.display = "";
    }
    else if(math<=100){
        sixthDiv.style.display = "";
    }
})

nextButtons.forEach((button)=>{
    button.addEventListener(){
        
    }
})