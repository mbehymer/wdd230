const curr_date = new Date();

const full_curr_date = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(curr_date);
const form_date = document.querySelector("#date");

// let year = curr_date.getFullYear();

form_date.value = curr_date;
// console.log(full_date);

const radioBtns = document.querySelectorAll("[type=radio]");
radioBtns.forEach((btn) => {
    console.log(btn);
    btn.onclick = function() {
        console.log(btn.id);
        selectedBtns = document.querySelectorAll(".selected-radio");
        selectedBtns.forEach(selBtn => {
            if (selBtn.id != `${btn.id}-description`) {
                document.querySelector(`#${selBtn.id}`).classList.toggle("selected-radio")
            }
        })
        document.querySelector(`#${btn.id}-description`).classList.toggle("selected-radio");
    }
});
// console.log(radioBtns);
