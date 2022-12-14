const requestURL = "https://mbehymer.github.io/wdd230/play_ludus/games.json";

async function getGames (url) {
    const response = await fetch(url);
    if(response.ok) {
        let data = await response.json();
        console.table(data);
        console.log(data);
        let games_data = data["games"];
        
        console.log(response);

        games_data.forEach(game => {
            displayCardGame(game);
        });
    }
    else {
        console.log(response);
    };

    
}


function displayCardGame(game) {
    // create all variables
    let card = document.createElement("div");
    let gameImg = document.createElement("img");
    let name = document.createElement("h2");
    let link = document.createElement("a");

    // popluate with information
    card.classList.add("card");
    gameImg.setAttribute("width", "250px");
    gameImg.setAttribute("height", "250px");
    gameImg.setAttribute("src", `./images/${game.img}`);
    gameImg.setAttribute("alt", `${game.title} Image`);
    name.textContent = game.name;
    link.setAttribute("href", game.url);

    // // add elements to card
    card.appendChild(gameImg);
    link.appendChild(name);
    card.appendChild(link);
    
    // // add card to the page
    document.querySelector("#card-view").appendChild(card);
}


getGames(requestURL);