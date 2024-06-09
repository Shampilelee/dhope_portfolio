// PROJECT 2 - RANDOM NUMBER GENERATOR

const myButton = document.getElementById(`myButton`);
const myLabel = document.getElementById(`myLabel`);

const min = 1;
const max = 6;
let random_Num;

myButton.onclick = function () {
    random_Num = Math.floor(Math.random() * max) + min;
    myLabel.textContent = random_Num;
}






