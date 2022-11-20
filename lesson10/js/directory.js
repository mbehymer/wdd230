const requestURL = "https://mbehymer.github.io/wdd230/lesson09/business.JSON";

async function getBusinesses (url) {
    const response = await fetch(url);
    if(response.ok) {
        let data = await response.json();
        console.table(data);
        console.log(data);
        let businesses_data = data["businesses"];
        
        console.log(response);

        businesses_data.forEach(business => {
            displayCardBusinesses(business);
            loadTableBusinesses(business);
        });
    }
    else {
        console.log(response);
    };

    
}


function displayCardBusinesses(business) {
    // create all variables
    let card = document.createElement("div");
    let logo = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let website = document.createElement("p");
    let phrase = document.createElement("p");

    // popluate with information
    card.classList.add("card");
    logo.setAttribute("width", "125px");
    logo.setAttribute("height", "125px");
    logo.setAttribute("src", business.logourl);
    logo.setAttribute("alt", "Logo Image");
    name.textContent = business.name;
    address.innerHTML = `Address: ${business.address}`
    phoneNumber.innerHTML = `Phone: ${business.phone}`
    website.innerHTML = `Website: <a href="${business.website}">${business.website}</a>`
    phrase.innerHTML = `${business.phrase}`
    // address.setAttribute("id", "bus-address");

    // // add elements to card
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(phrase);
    
    // card.appendChild(birthdate);
    // card.appendChild(birthplace);

    // // add card to the page
    document.querySelector("#card-view").appendChild(card);
}

function loadTableBusinesses(business) {
    // create all variables
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let address = document.createElement("td");
    let phoneNumber = document.createElement("td");
    let website = document.createElement("td");
    let phrase = document.createElement("td");

    // popluate with information
    name.textContent = business.name;
    address.innerHTML = business.address;
    phoneNumber.innerHTML = business.phone;
    website.innerHTML = `<a href="${business.website}">${business.website}</a>`;
    phrase.innerHTML = business.phrase;

    // add elements to row
    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(phoneNumber);
    row.appendChild(website);
    row.appendChild(phrase);

    // add row to the table
    document.querySelector("tbody").appendChild(row);
}

getBusinesses(requestURL);

function showGrid() {
    document.querySelector("#card-view").style.display = "grid";
    document.querySelector("#table-view").style.display = "none";
}

function showList() {
    document.querySelector("#card-view").style.display = "none";
    document.querySelector("#table-view").style.display = "table";
}