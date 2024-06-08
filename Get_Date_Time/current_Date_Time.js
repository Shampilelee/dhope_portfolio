
// GET DATE AND TIME

// --- DATE ---

const todays_Date = new Date();

let day_Number = todays_Date.getDate();
let day = todays_Date.getDay();
let month = todays_Date.getMonth();
let year = todays_Date.getFullYear();

// SETTING DATE
switch (true) {
    case day === 0:
        day = "Sunday";
        break;
    case day === 1:
        day = "Monday";
        break;
    case day === 2:
        day = "Tuesday";
        break;
    case day === 3:
        day = "Wednessday";
        break;
    case day === 4:
        day = "Thursday";
        break;
    case day === 5:
        day = "Friday";
        break;
    case day == 6:
        day = "Saturday";
        break;
}

// SETTING MONTH
switch (true) {
    case month === 0:
        month = "January";
        break;
    case month === 1:
        month = "February";
        break;
    case month === 2:
        month = "March";
        break;
    case month === 3:
        month = "April";
        break;
    case month === 4:
        month = "May";
        break;
    case month === 5:
        month = "June";
        break;
    case month === 6:
        month = "July";
        break;
    case month === 7:
        month = "August";
        break;
    case month === 8:
        month = "September";
        break;
    case month === 9:
        month = "October";
        break;
    case month === 10:
        month = "November";
        break;
    case month === 11:
        month = "December";
        break;
}

// SETTING FULL DATE
const today = `${day}, ${day_Number}th ${month} ${year}`;

// CREATE AND APPEND DATE
let append_Date = document.createElement("h1");
append_Date.style.fontSize = "6vw";
append_Date.style.color = "white";
append_Date.textContent = today;
document.getElementById("date_time").prepend(append_Date);





// --- TIME ---

// CREATE AM/PM SWITCHING BUTTON
let time_Mode = "military";

const bTn = document.createElement("button");
bTn.textContent = "Switch to am/pm";
// THIS IS HOW TO ASSIGN A FUNCTION TO A BUTTON
bTn.onclick = chg_Time;
document.getElementById("date_time").appendChild(bTn);

function chg_Time() {
    if (time_Mode === "military") {
        time_Mode = "am_pm";
    } else {
        time_Mode = "military";
    }
}

function updateClock() {
    const normal_Time = new Date();
    let hours = normal_Time.getHours().toString().padStart(2, '0');
    const minutes = normal_Time.getMinutes().toString().padStart(2, '0');
    const seconds = normal_Time.getSeconds().toString().padStart(2, '0');

    if (time_Mode === "military") {

        bTn.textContent = "Switch to AM/PM";

        document.getElementById("military_clock").textContent = `${hours}:${minutes}:${seconds}`;
        document.getElementById("military_clock").style.display = "block";
        document.getElementById("military_clock").style.fontFamily = "monospace";
        document.getElementById("military_clock").style.fontWeight = "bold";
        document.getElementById("military_clock").style.fontSize = "5.5vw";

        document.getElementById("normal_clock").style.display = "none";

    } else {
        
        bTn.textContent = "Switch to 00:00";

        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, '0');
        document.getElementById("normal_clock").textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
        document.getElementById("normal_clock").style.display = "block";
        document.getElementById("normal_clock").style.fontFamily = "monospace";
        document.getElementById("normal_clock").style.fontWeight = "bold";
        document.getElementById("normal_clock").style.fontSize = "5.5vw";

        document.getElementById("military_clock").style.display = "none";

    }
}

updateClock();

setInterval(updateClock, 1000);






























