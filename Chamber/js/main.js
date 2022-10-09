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
    })
})