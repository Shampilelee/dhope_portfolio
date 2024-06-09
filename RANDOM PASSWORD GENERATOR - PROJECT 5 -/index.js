
// RANDOM PASSWORD GENERATOR

const btn = document.getElementById("pwd_Btn");
const pwd = document.getElementById("pwd");

function generate_Password(...values) {

    const lower_Case_Chars = "qwertyuiopasdfghjklzxcvbnm";
    const upper_Case_Chars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const number_Chars = "0123456789";
    const symbol_Chars = "!@#$%^&*()_+-=?><`~";

    let allowed_Chars = "";
    let password = "";

    // IF ANY OF THE CHARATERS ABOVE ARE ALLOWED,
    // APPEND THEM TO THE 'allowed_Chars', LESS APPEND AN EMPTY STRING.
    allowed_Chars += include_LowerCase ? lower_Case_Chars : "";
    allowed_Chars += include_UpperCase ? upper_Case_Chars : "";
    allowed_Chars += include_Numbers ? number_Chars : "";
    allowed_Chars += include_Symbols ? symbol_Chars : "";

    if (password_Length <= 0) {
        return `(password length must be at least 1)`;
    }
    // CHECKING IF ANY OF THE CHARATERS ARE SELECTED
    if (allowed_Chars.length === 0) {
        return `(At least one set of character needs to be selected.)`;
    }

    // THE NUMBER OF TIMES WILL LOOP WILL BE DETERMINE BY: 'password_Length'.
    for (let index = 0; index < password_Length; index++) {
        
        /*
            The 'allowed_Chars.length', Is The Sum Of The Length, Of Every Allowed Character, All Together,
            (The Length Of All The Allow Characters, ADDED TO TOGETHER) = 'allowed_Chars.length'
            This Determines The Range Of Numbers The 'random_Index' Will Have, Per Loop.
        */
        const random_Index = Math.floor(Math.random() * allowed_Chars.length);
        
        /*
            The Value Generated From 'random_Index' In Every Loop,
            Will Be Passed On To 'allowed_Chars' To Get The Value Of The Corresponding String To That Index,
            So In This Case, The Value From 'random_Index' Is Been Used As Index, 
            To Search For Data From 'allowed_Chars'.
            AND THEN APPEND TO: 'password'.
        */
        password += allowed_Chars[random_Index];
    }

    return password;
}


// SETTING OPTIONS
const password_Length = 12;
const include_LowerCase = true;
const include_UpperCase = true;
const include_Numbers = true;
const include_Symbols = true;

// CALLING FUNCTION
let generated_Password;
setInterval(() => {
    generated_Password = generate_Password(
        password_Length, 
        include_LowerCase, 
        include_UpperCase, 
        include_Numbers, 
        include_Symbols
    );
}, 100);

btn.addEventListener("click", () => {
    pwd.textContent = generated_Password;
})



















