let date = new Date();
let year = date.getFullYear();
let currentDate = document.lastModified;

document.querySelector('#year').textContent = year;

document.querySelector("#last-change").textContent = currentDate ;


function toggleWeekInfo(week) {
    element = document.querySelector(`#${week}-content`);
    console.log(element.style.display);

    if (element.style.display === "" || element.style.display === "none") {

        hideAllWeeklyInfo();
        element.style.display = "block";
        buttonId = week + "-btn";
        highlightButton(buttonId);

    } else {
        hideAllWeeklyInfo();
    }
}

function hideAllWeeklyInfo() {

    resetButtonColor();

    allWeeks = document.querySelectorAll(".week-info");
    allWeeks.forEach(element => {
        element.style.display = "none";
    });
}

function highlightButton(buttonId) {
    button = document.querySelector(`#${buttonId}`);
    button.style.color = "white";
    button.style.backgroundColor = "steelblue";
}

function resetButtonColor() {
    allButtons = document.querySelectorAll(".button");
    allButtons.forEach(element => {
        element.style.backgroundColor = "#f6f6f6";
        element.style.color = "#333333";
    })
}