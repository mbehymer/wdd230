
function checkedLoggedIn() {

    let loggedVal = (localStorage.getItem("loggedIn"));
    
    let mainMsg = document.querySelector("h1");
    let logInBtn = document.querySelector("#log-in-btn");
    let signOutBtn = document.querySelector("#sign-out-btn");
    let emailContainer = document.querySelector("#email-container");
    let passwordContainer = document.querySelector("#password-container");
    
    if (loggedVal === "true") {
        mainMsg.innerHTML = "Sign Out"
        logInBtn.style.display = "none";
        emailContainer.style.display = "none";
        passwordContainer.style.display = "none";
        signOutBtn.style.display = "inline-block";

    } else {
        mainMsg.innerHTML = "Login"
        logInBtn.style.display = "inline-block";
        emailContainer.style.display = "flex";
        passwordContainer.style.display = "flex";
        signOutBtn.style.display = "none";

    }

}

function login() {
    
    let accImg = document.querySelector("#account-profile").querySelector("a");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    if (email.value.length > 1 && password.value.length > 1) {

        localStorage.setItem("loggedIn", true);
        
        let loggedValue = (localStorage.getItem("loggedIn"));
        
        console.log("loggedValue", loggedValue);
        

        if (loggedValue === "true") {
            accImg.classList.remove("not-logged-in");
        }

        checkedLoggedIn();


    }
}

function signOut() {
    
    let accImg = document.querySelector("#account-profile").querySelector("a");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    // if (accImg) {

    localStorage.setItem("loggedIn", false);
    let loggedValue = (localStorage.getItem("loggedIn"));
    
    console.log("loggedValue", loggedValue);

    

    if (loggedValue !== "true") {
        accImg.classList.add("not-logged-in");
    }

    checkedLoggedIn()


    // }
}

checkedLoggedIn()