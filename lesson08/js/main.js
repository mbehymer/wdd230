const dat_now = new Date();

const full_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(dat_now);
const current_date_element = document.querySelector("#current-date");
current_date_element.innerHTML = dat_now;

let year = dat_now.getFullYear();
let currentDate = document.lastModified;

document.querySelector('#year').textContent = year;

document.querySelector("#last-change").textContent = currentDate ;
// console.log(full_date);


hamburgerBtn = document.querySelector("#hamburger-btn");

hamburgerBtn.addEventListener("click", ()=> {
    navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.classList.toggle("show-nav");
    });
});

const currentDay = dat_now.getDay()

if (currentDay === 2 || currentDay === 1){
    document.querySelector("#info-banner").style.display = "block";
} else {
    document.querySelector("#info-banner").style.display = "none";

}
console.log(dat_now.getDay());


if (document.querySelector("#last-visit")) {

    let current = Date.now();
    let previous = (localStorage.getItem("lastvisit"));

localStorage.setItem("lastvisit", current);

console.log("current", current);
console.log("previous", previous);
let diff = (current - previous);


if (previous !== null) {
    let lastVisited = document.querySelector("#last-visit");
    let days = Math.floor(diff/1000/60/60/24);
    let hours = Math.floor(((diff/1000/60/60/24) - days)*24);
    let minutes = Math.floor(((diff/1000/60/60) - hours)*60);
    let seconds = Math.floor(((diff/1000/60)  - minutes)*60);

    lastVisited.innerHTML = days + " days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ago."
}

}