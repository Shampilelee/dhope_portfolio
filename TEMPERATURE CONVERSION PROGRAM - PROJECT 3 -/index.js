
// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const to_Fahrenheit = document.getElementById("to_Fahrenheit");
const to_Celsius = document.getElementById("to_Celsius");
const result = document.getElementById("result");

let temp;


function convert() {
    
    if (to_Fahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        // SETTING RESULTS
        result.textContent = temp.toFixed(1) + `°F`;
    }
    else if (to_Celsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        // SETTING RESULTS
        result.textContent = temp.toFixed(1) + `°C`;
    }
    else {
        result.textContent = `Select a unit`;
    }
}






