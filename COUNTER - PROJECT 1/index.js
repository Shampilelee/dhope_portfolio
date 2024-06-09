
const decrease_Btn = document.getElementById(`decrease_Btn`);
const reset_Btn = document.getElementById(`reset_Btn`);
const increase_Btn = document.getElementById(`increase_Btn`);
const count_Lable = document.getElementById(`count_Lable`);

let count = 0;

increase_Btn.onclick = function (){
    count++;
    count_Lable.textContent = count;
}
decrease_Btn.onclick = function (){
    count--;
    count_Lable.textContent = count;
}
reset_Btn.onclick = function (){
    count = 0;
    count_Lable.textContent = count;
}



Math.sqrt(variable_Name)


