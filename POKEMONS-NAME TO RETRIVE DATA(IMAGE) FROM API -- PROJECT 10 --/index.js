// YOU CHANGE THESE POKEMONS AND MORE
/*
     typhlosion, Bulbasaur AND MANY MORE 
*/
async function fetch_Data() {

     try {

          const usr_Input_PokName = document.getElementById("pokemon_Name").value.toLowerCase();

          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${usr_Input_PokName}`);
          
          if (!response.ok) {
               throw new Error("Could not fetch resouce");
          }

          const data = await response.json();
          const pokemon_Sprite = data.sprites.front_default;

          const img_Element = document.getElementById("pokemon_Sprite");
          img_Element.src = pokemon_Sprite;
          img_Element.style.display = "block";

          console.log("ghjk");

     } catch (error) {
          console.error(error);
     }
     
}

fetch_Data();









































