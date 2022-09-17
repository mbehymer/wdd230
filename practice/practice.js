// SEQUENCE

let date = new Date();

console.log("Date:", date);

let year = date.getFullYear();

console.log("Year:", year);

document.querySelector("h1").textContent += year;

let currentDate = document.lastModified;

console.log("Last modified:", currentDate);

document.querySelector("div").textContent = currentDate ;
