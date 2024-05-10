const Players = {}

//function searchInfoFromPlayer(players){
//    console.log(players);
//    console.log(`Hi! My name is ${pokemon.name}!`);
//    console.log("these are my stats:");
//    for (let currentStat of pokemon.stats){
//        let statName = currentStat.stat.name;
//        console.log(`My ${statName} is ${currentStat.base_stat}`);
//    }
//}

function searchPlayer(id){
    for (let i = 0; i < data.json; ++i){
        if (data.json[i].players.id() === players.id()) {
            return data.json [i];
        }
    }
    return null;
}

async function getPlayers(){
    console.log('running get Players');
    // let players = null;
    // fetch (data.json)
    let response = await fetch ("data.json");
    console.log(response)
    let data = response.json();
    try{
        data = await response.json();
    }
    catch(error){
        console.log("Uh Oh. There was an error. Maybe the Kinkaid golfer was not found?");
        console.log(error);
    }
    return data;
//    console.log(data);
//    unpackInfoFromPokemon(pokemonData); NEED TO DEFINE THIS, LOOK AT THE POKEMON THING
}


function searchForPlayer() {

    //part a:
    //get whaterver the user wrote
    //save that to a variable
    let input = document.querySelector(`#search-input`);
    console.log(input.value);
    let searchTerm = input.value;
    //get the players 
    let players = getPlayers()

    //search for the ID from part a in the players
    
}


function makeSearchForPlayerWork() {
    let searchButton = document.querySelector(`#search-button`);
    searchButton.addEventListener(`click`, searchForPlayer);
}


function runProgram(){    
    console.log('running Program');
    makeSearchForPlayerWork();


}
document.addEventListener('DOMContentLoaded', runProgram);
