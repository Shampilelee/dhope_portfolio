/*
    CALCULATOR
*/

const screen = document.getElementById("display");

function append_to_Screen(operator) {
    screen.value += operator;
}

function clear_Screen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        console.warn(error);
    }
}






