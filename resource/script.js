//first
const inputName = document.querySelector("#nGSubmitName");
const inputGmail = document.querySelector("#nGSubmitGmail");
const startButton = document.querySelector("#startButton");
const nextButtons = document.querySelectorAll(".next");
 
const firstDiv = document.querySelector('#first');
const secondDiv = document.querySelector('#second');
const thirdDiv = document.querySelector("#third");
const fourthDiv = document.querySelector("#fourth");
const fifthDiv = document.querySelector("#fifth");
const sixthDiv = document.querySelector("#sixth");

let name1;
let gmail1;
let scores = 0;

let numbers;

let ans1;
let ans2;
let ans3;
let ans4;
let ans5;

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";
fourth.style.display = "none";
fifth.style.display = "none";
score.style.display = "none";

function clean(str) {
    return str.replace(/[\s.]/g,'').toLowerCase;
}


startButton.addEventListener('click',()=>{
    name1 = inputName.value;
    gmail1 = inputGmail.value;

    if((name1 == "") || (gmail1 == "")){
        alert("Fill in all the details");
    }
    else if (/\d/.test(name1)){
        alert("Name CANNOT contain numbers");
    }
    else if (!gmail1.endsWith("@gmail.com")){
        alert("Enter a valid email");
    }
    else {
        details.style.display = "none";

        first.style.display = "";
    }
})


nextButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(maths<=20){
            secondDiv.style.display = "none";
            
            let math = Math.floor(Math.random() * 100);
            maths = math;
            if(math<=40){
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
        }
        else if(maths<=40){
            thirdDiv.style.display = "none";

            let math = Math.floor(Math.random() * 100);
            maths = math;
            if(math<=20){
                secondDiv.style.display = "";
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
        }
        else if(maths<=60){
            fourthDiv.style.display = "none";

            let math = Math.floor(Math.random() * 100);
            maths = math;
            if(math<=20){
                secondDiv.style.display = "";
            }
            else if(math<=40){
                thirdDiv.style.display = "";
            }
            else if(math<=80){
                fifthDiv.style.display = "";
            }
            else if(math<=100){
                sixthDiv.style.display = "";
            }
        }
        else if(maths<=80){
            fifthDiv.style.display = "none";

            let math = Math.floor(Math.random() * 100);
            maths = math;
            if(math<=20){
                secondDiv.style.display = "";
            }
            else if(math<=40){
                thirdDiv.style.display = "";
            }
            else if(math<=60){
                fourthDiv.style.display = "";
            }
            else if(math<=100){
                sixthDiv.style.display = "";
            }
        }
        else if(maths<=100){
            fifthDiv.style.display = "none";

            let math = Math.floor(Math.random() * 100);
            maths = math;
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
        }
    })
})

//rem
//click enter for next or button
//accept real name
//accept real gmail
//make footer
