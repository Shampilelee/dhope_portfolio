
const choices = ["rock", "paper", "scissors"];

const player_Display = document.getElementById("player_Display");
const computer_Display = document.getElementById("computer_Display");
const result_Display = document.getElementById("result_Display");

const computer_Score_Display = document.getElementById("computer_Score_Display");
const player_Score_Display = document.getElementById("player_Score_Display");
let player_Score = 0;
let computer_Score = 0;


function play_Game(player_Choice) {
    
    // random index from 0 to 2
    const computer_Choice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (player_Choice === computer_Choice) {
        result = "IT'S A TIE!";
    } else {
        switch (player_Choice) {
            case "rock":
                result = computer_Choice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = computer_Choice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = computer_Choice === "paper" ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    player_Display.textContent = `PLAYER: ${player_Choice}`;
    computer_Display.textContent = `COMPUTER: ${computer_Choice}`;
    result_Display.textContent = result;
    
    // RESET THE CLASSLIST TO AVOILD COLOR DISPLACEMENT
    result_Display.classList.remove("green_Text", "red_Text");

    // CHANGE COLOR HERE  
    switch (result) {
        case "YOU WIN!":
            result_Display.classList.add("green_Text");
            player_Score++;
            player_Score_Display.textContent = player_Score;
            break;
        case "YOU LOSE!":
            result_Display.classList.add("red_Text");
            computer_Score++;
            computer_Score_Display.textContent = computer_Score;
            break;
    }
}



