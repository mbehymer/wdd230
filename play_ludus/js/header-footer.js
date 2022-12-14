// navBtn = document.querySelector("#nav-btn");

function toggleNavBar() {
    console.log("hello");
    document.querySelector("#nav-links").classList.toggle("show-nav");
    console.log(document.querySelector("#nav-links").classList);
}


let accountImg = document.querySelector("#account-profile").querySelector("a");

if (accountImg) {

    let loggedValue = (localStorage.getItem("loggedIn"));

    if (loggedValue !== "true") {
        loggedValue = "false";
    }

    if (loggedValue !== "true") {
        accountImg.classList.add("not-logged-in");
    }
    // localStorage.setItem("loggedIn", current);

    console.log("loggedValue", loggedValue);

}