const lvlBtns = [document.querySelector("#lvl-easy"),
document.querySelector("#lvl-medium"),
document.querySelector("#lvl-hard")]

let score = {
    "easy": 0,
    "medium": 0,
    "hard": 0,
    "time": 0
}

let answer = document.querySelector("#answer");
let isCorrect = false;
let currentLvl = "easy";
let levelValues = {
    "easy": 20,
    "medium": 8,
    "hard": 2
}

let countdown = 60;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Change the level or speed of the timer
lvlBtns.forEach((element) => {
    let level = element.innerHTML.toLowerCase();
    element.addEventListener("click", () => {
        currentLvl = level;
        resetProblems()
    });
})

function resetProblems() {
    let bar = document.querySelector("#time-bar");
    bar.style.width = "100%";
    loadNumbers();
    let ansInput = document.querySelector("#answer");
    ansInput.focus();
    ansInput.value = "";
    isCorrect = false;
    countdown = levelValues[currentLvl];
    // if (document.querySelector("#correct").classList.contains("fade-out")) {
    //         document.querySelector("#correct").classList.toggle("fade-out");
    // }
    // if (document.querySelector("#incorrect").classList.contains("fade-out")) {
    //     document.querySelector("#incorrect").classList.toggle("fade-out");
    // }
}

function loadNumbers() {
    let firstNum = document.querySelector("#first-num");
    let secondNum = document.querySelector("#second-num");

    firstNum.textContent = getRndInteger(1,12);
    secondNum.textContent = getRndInteger(1,12);

}

// What happens when you click the begin button
function beginProblems() {
    document.querySelector("#begin").style.display = "none";
    document.querySelector("#game-content").style.display = "grid";
    let bar = document.querySelector("#time-bar");
    resetProblems()
    timer = setInterval(runTimer, 10, bar, bar.getBoundingClientRect().width);
}


// The main timer code that runs at a set interval
function runTimer(bar, maxLength) {
    difficulty = levelValues[currentLvl];
    
    if (!isCorrect && countdown > 0) { // If the haven't entered the correct answer keep going
        if (countdown > 0.1) {
            widthReducer = countdown/difficulty;
            bar.style.width = `${widthReducer*100}%`;
            countdown -= .01;
        }
        else { // If the timer runs out
            displayScore();
            countdown = 0
            document.querySelector("#popup-msg").style.display = "block";
            document.querySelector("#answer").setAttribute("disabled","");
        }
    }

}

// Display the score to the popup message
function displayScore() {
    document.querySelector("#easy-problems").textContent = score["easy"];
    document.querySelector("#medium-problems").textContent = score["medium"];
    document.querySelector("#hard-problems").textContent = score["hard"];
    document.querySelector("#total-time").textContent = Math.floor(10*score["time"])/10;
}
    
// Close the score/game over popup message
document.querySelector("#close-button").addEventListener("click", () => {
    document.querySelector("#popup-msg").style.display = "none";
    
    document.querySelector("#lvl-easy").setAttribute("disabled","");
    document.querySelector("#lvl-medium").setAttribute("disabled","");
    document.querySelector("#lvl-hard").setAttribute("disabled","");

    //Reset the score values
    score = {
        "easy": 0,
        "medium": 0,
        "hard": 0,
        "time": 0
    }
})


answer.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        isCorrect = validate(e);
        
        if (isCorrect) {
            document.querySelector("#correct").classList.toggle("fade-out");
            score[currentLvl] += 1;
            score.time += levelValues[currentLvl] - countdown;
            resetProblems()
        } else {
            document.querySelector("#incorrect").classList.toggle("fade-out");
        }
    }
});

function validate(e) {
    let text = document.querySelector("#answer").value;
    
    let firstNum = parseInt(document.querySelector("#first-num").textContent);
    let secondNum = parseInt(document.querySelector("#second-num").textContent);
    let userAnswer = parseInt(text);
    return firstNum*secondNum === userAnswer;
}

function restartGame() {
    window.location.reload();
}