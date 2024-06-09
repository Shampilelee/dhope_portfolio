
// DICE ROLLER PROGRAM

function roll_Dice() {
    
    const num_Of_Dice = document.getElementById('num_Of_Dice').value;
    const dice_Result = document.getElementById('dice_Result');
    const dice_Images = document.getElementById('dice_Images');
    
    // WE'LL STORE ALL OF THE DICE ROLLES(the numbers) HERE 
    const values = [];
    // THIS WILL BE FOR THE IMAGES OF THE DICE
    const images = [];

    // LET'S CREATE A FOR-LOOP TO LOOP ONCE IF THE VALUE IN num_Of_Dice = 1
    // IF THE USER IS ROLLING 3 DICE, THE FOR-LOOP SHOULD LOOP 3 TIMES, AND SO ON.
    for (let index = 0; index < num_Of_Dice; index++) {
        
        // GENERATE RANDOM WHOLE NUMBERS FROM 0 TO 6
        const roll_value = Math.floor(Math.random() * 6) * 1;
        // PUSH roll_value TO values
        values.push(roll_value);

        // GET 6 IMAGES, STORE THEM IN AN IMAGES FOULDER
        // RENAME THEM LIKE THIS: 1.png, 2.png, 3.png, 4.png, 5.png, 6.png.
        // THIS WILL GIVE US AN ARRAY OF HTML IMAGES.
        // THE VALUE FROM 'roll_value' WILL BE ATTACHED TO THE ENCODED HTML CODE BELOW.
        images.push(`<img src="images/${roll_value}.png" alt="Dice ${roll_value}">`);
    }

    // JOIN TWO OR MORE NUMBERS, WITH A COMMAR',' AND A SPACE' '.
    dice_Result.textContent = `dice: ${values.join(', ')}`;

    dice_Images.innerHTML = images.join('');
}


