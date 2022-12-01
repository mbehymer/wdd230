let date = new Date();
let year = date.getFullYear();
let currentDate = document.lastModified;

document.querySelector('#year').textContent = year;

document.querySelector("#last-change").textContent = currentDate ;
