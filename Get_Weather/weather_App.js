
// WEATHER APP

const weather_form = document.querySelector(".weather_Form");
const user_City_Imput = document.querySelector(".city_Input");
const data_Card = document.querySelector(".data_Card");

const api_Key = "ea3c282b04674090b0fcbeea14f371ae";

// RESPONSIBLE FOR SENDING "user_City_Imput" TO "get_Weather_Data(city)"
weather_form.addEventListener("submit", async event => {
     
    // PREVENT RE-FREACH AFTER SUBMITTING FORM
    event.preventDefault();

    const city = user_City_Imput.value;

    // IF city HAS DATA.
    if (city) {
        try {
            const weather_Data = await get_Weather_Data(city);
            display_Weather_Info(weather_Data);
            
        } catch (error) {
            console.error(error);
            display_Error(error);     
        }          
    } else {
        display_Error("Please enter a city");
    }
});


// RESPONSIBLE FOR RETRIVING WEATHER DATA FROM API.
async function get_Weather_Data(city) {
     
    const api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`;

    const response = await fetch(api_URL);

    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    };

    // THIS MUST BE WRITEN, SINCE IT HELPS THE PROGRAM TO WAIT AND RECEIVE DATA FROM API.
    return await response.json();
}


// RESPONSIBLE FOR DISPLAING GENERATED WEATHER DATA
function display_Weather_Info(data) {

    // OBJECT DISTRUCTING
    const {
        name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]
    } = data;
    // THE CODE ABOVE MUST RECEIVE DATA FROM =  [ get_Weather_Data() ]
    // THIS MUST BE WRITEN, SINCE IT HELPS THE PROGRAM TO WAIT AND RECEIVE DATA [ return await response.json(); ]
    
    // RESETTING SCREEN
    data_Card.textContent = "";
    data_Card.style.display = "flex";

    // CREATING NEW HTML ELEMENTS
    const city_Display = document.createElement("h1");
    const temp_Display = document.createElement("p");
    const humidity_Display = document.createElement("p");
    const desc_Display = document.createElement("p");
    const weather_Emoji = document.createElement("p");

    // ASSIGNING DATA FROM API TO NEW HTML ELEMENTS, ADDING STYLE CLASSLIST, 
    // AND APPENDING NEW ELEMENTS TO SCREEN AS A CHILD OF [ data_Card ] ANOTHER HTML ELEMENT.
    // -- CITY NAME --
    city_Display.textContent = city;
    city_Display.classList.add("city_Display");
    data_Card.appendChild(city_Display);

    // -- TEMPERTURE --
    /* 
    DEFAULT IS IN KELVIN °K
    °C = [ ${( temp - 273.15).toFixed(1)}°C ]
    °F = [ ${( (temp - 273.15) * (9/5) + 32 ).toFixed(1)}°F ]
    */
    temp_Display.textContent = `${( temp - 273.15).toFixed(1)}°C`;
    temp_Display.classList.add("temp_Display");
    data_Card.appendChild(temp_Display);

    // -- HUMIDITY --
    humidity_Display.textContent = `Humidity: ${humidity}%`;
    humidity_Display.classList.add("humidity_Display");
    data_Card.appendChild(humidity_Display);

    // -- DESCRIPTION OF THE WEATHER --
    desc_Display.textContent = description;
    desc_Display.classList.add("Desc_Display");
    data_Card.appendChild(desc_Display);

    // -- WEATHER EMOJI --
    weather_Emoji.textContent = get_Weather_Emoji(id);
    weather_Emoji.classList.add("Weather_Emoji");
    data_Card.appendChild(weather_Emoji)
}


// RESPONSIBLE FOR DISPLAING WEATHER EMOJI REPRESETITIVES
function get_Weather_Emoji(weatherID) {
     
    switch (true) {
        case (weatherID >= 200 && weatherID < 300):
            return "⛈";
            break;
        case (weatherID >= 300 && weatherID < 400):
            return "🌧";
            break;
        case (weatherID >= 500 && weatherID < 600):
            return "🌧";
            break;
        case (weatherID >= 600 && weatherID < 700):
            return "❄";
            break;
        case (weatherID >= 700 && weatherID < 800):
            return "🌫";
            break;
        case (weatherID === 800):
            return "☀";
            break;
        case (weatherID >= 801 && weatherID < 810):
            return "☁";
            break;
        default:
            return "❓"
            break;
    }
}


// RESPONSIBLE FOR DISPLAING ERROR MESSAGE
function display_Error(message) {
     
    const error_Display = document.createElement("p");
    error_Display.textContent = message;
    error_Display.classList.add("error_Display");

    data_Card.textContent = "";
    data_Card.style.display = "flex";
    data_Card.appendChild(error_Display);
}

































