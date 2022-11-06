const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

let prophets;

fetch(requestURL)
.then((response) => response.json())
.then((data) => {
    console.table(data);
    prophets = data["prophets"];
    
    prophets.forEach(prophet => {
        displayProphets(prophet);
    });

})
.catch((err) => {
    console.error(err);
})


    function displayProphets(prophet) {
        // create all variables
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");
        let profile = document.createElement("img");

        // popluate with information
        card.classList.add("card");
        name.textContent = prophet.name + " " + prophet.lastname;
        birthdate.textContent ="Date of Birth " + prophet.birthdate;
        birthplace.textContent = "Place of Birth " + prophet.birthplace;
        profile.setAttribute("src", prophet.imageurl);

        // add elements to card
        card.appendChild(name);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(profile);

        // add card to the page
        document.querySelector(".cards").appendChild(card);
    }
